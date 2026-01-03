import json
import os
from datetime import datetime
from flask import Flask, jsonify, render_template, request, abort

app = Flask(__name__)

DATA_FILE = os.path.join(os.path.dirname(__file__), 'data', 'events.json')
VALID_STATUSES = {"Upcoming", "Ongoing", "Completed"}

def load_events():
    with open(DATA_FILE, 'r', encoding='utf-8') as f:
        return json.load(f)

def save_events(events):
    with open(DATA_FILE, 'w', encoding='utf-8') as f:
        json.dump(events, f, indent=2)

def get_event_by_id(events, event_id):
    for event in events:
        if event['id'] == event_id:
            return event
    return None

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/admin')
def admin():
    return render_template('admin.html', statuses=sorted(VALID_STATUSES))

@app.route('/api/events', methods=['GET'])
def api_events():
    events = load_events()
    return jsonify(events)

@app.route('/api/events/<event_id>', methods=['PATCH'])
def update_event(event_id):
    if not request.is_json:
        abort(400, description='Request must be JSON')

    payload = request.get_json()
    status = payload.get('status')
    if status not in VALID_STATUSES:
        abort(400, description='Invalid status value')

    events = load_events()
    event = get_event_by_id(events, event_id)
    if event is None:
        abort(404, description='Event not found')

    event['status'] = status
    event['updated_at'] = datetime.utcnow().isoformat() + 'Z'
    save_events(events)
    return jsonify(event)


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
