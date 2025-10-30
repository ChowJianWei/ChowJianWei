# Actuarial Summit Live Tracker

Actuarial Summit Live Tracker is a responsive web app that displays the summit itinerary as a live Gantt-style timeline. An accompanying admin console lets organizers update the real-time status of each session.

## Features

- 🗓️ Timeline view that visualizes each event with start/end times and live status indicators.
- 🔁 Automatic refresh every 30 seconds so attendees always see the latest updates.
- 🛠️ Admin page to switch events between **Upcoming**, **Ongoing**, and **Completed** states.
- 📊 Optional "current time" marker overlayed on the schedule.
- 📱 Fully responsive layout built with Tailwind CSS.

## Tech Stack

- **Backend:** Flask
- **Frontend:** HTML, Tailwind CSS, Vanilla JavaScript
- **Data Storage:** JSON file (`events.json`)

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/ChowJianWei/actuarial-summit-live-tracker.git
cd actuarial-summit-live-tracker
```

### 2. Create a virtual environment (optional but recommended)

```bash
python3 -m venv .venv
source .venv/bin/activate
```

On Windows (PowerShell):

```powershell
python -m venv .venv
.venv\\Scripts\\Activate.ps1
```

### 3. Install dependencies

```bash
pip install -r requirements.txt
```

### 4. Run the development server

```bash
flask --app app run --debug
```

The application will be available at [http://127.0.0.1:5000](http://127.0.0.1:5000).

## Usage

- **Public timeline:** Visit `/` to view the live tracker. The page automatically refreshes every 30 seconds.
- **Admin console:** Visit `/admin` to manually update each event's status. Changes are saved immediately and reflected on the timeline during the next refresh cycle.

## Updating Events

Event data is stored in `events.json`. Each event uses the following schema:

```json
{
  "id": 3,
  "event_name": "Panel Discussion: Sustainability by Design",
  "start_time": "11:35",
  "end_time": "12:10",
  "status": "Upcoming"
}
```

Statuses must be one of:

- `Upcoming`
- `Ongoing`
- `Completed`

You can add, remove, or edit events directly in `events.json`. The admin console provides quick status changes without editing the file manually.

## Development Notes

- Tailwind CSS is included through the official CDN build for simplicity.
- The timeline automatically scales to cover the earliest start and latest end time in the schedule.
- A vertical marker indicates the current time when it falls within the event range.

## License

This project is provided for demonstration purposes. Feel free to adapt it for your own event tracking needs.
