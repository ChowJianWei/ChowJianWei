import json
import threading
from pathlib import Path
from typing import List, Dict

from flask import Flask, jsonify, render_template, request, abort

DATA_FILE = Path(__file__).parent / "events.json"
VALID_STATUSES = {"Upcoming", "Ongoing", "Completed"}

app = Flask(__name__)
_lock = threading.Lock()


def _read_events() -> List[Dict]:
    if not DATA_FILE.exists():
        return []
    with DATA_FILE.open("r", encoding="utf-8") as f:
        return json.load(f)


def _write_events(events: List[Dict]) -> None:
    with DATA_FILE.open("w", encoding="utf-8") as f:
        json.dump(events, f, indent=2)


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/admin")
def admin():
    return render_template("admin.html")


@app.route("/api/events", methods=["GET"])
def get_events():
    events = _read_events()
    events.sort(key=lambda e: e.get("start_time", ""))
    return jsonify(events)


@app.route("/api/events/<int:event_id>/status", methods=["POST"])
def update_event_status(event_id: int):
    payload = request.get_json(silent=True) or {}
    status = payload.get("status")
    if status not in VALID_STATUSES:
        abort(400, description="Invalid status value")

    with _lock:
        events = _read_events()
        for event in events:
            if event.get("id") == event_id:
                event["status"] = status
                _write_events(events)
                return jsonify(event)

    abort(404, description="Event not found")


if __name__ == "__main__":
    app.run(debug=True)
