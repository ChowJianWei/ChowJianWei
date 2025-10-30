# Actuarial Summit Live Tracker

A responsive Flask web application that visualises the Actuarial Summit itinerary as a live Gantt-style timeline and provides an admin dashboard for updating each session's status in real time.

## Features

- 📊 Interactive timeline that scales events proportionally between their start and end times.
- ⏱️ Live status refresh every 30 seconds with an optional current-time indicator.
- 🎨 Status-aware colours: gray for upcoming sessions, blue for ongoing, and green for completed.
- 🛠️ Admin dashboard with dropdown controls for manually updating event statuses.
- 💾 JSON-backed data store for quick persistence.
- 📱 Responsive layouts for desktop and mobile via Tailwind CSS.

## Prerequisites

- Python 3.9+
- pip

## Setup

1. **Create and activate a virtual environment (recommended):**

   ```bash
   python -m venv .venv
   source .venv/bin/activate  # On Windows use: .venv\\Scripts\\activate
   ```

2. **Install dependencies:**

   ```bash
   pip install -r requirements.txt
   ```

3. **Run the development server:**

   ```bash
   flask --app app run --debug
   ```

4. **Open the application:**

   - Public timeline: <http://localhost:5000/>
   - Admin dashboard: <http://localhost:5000/admin>

## Managing Event Data

Event information is stored in `data/events.json`. Each entry follows the structure:

```json
{
  "id": "unique-event-id",
  "event_name": "Panel Discussion: Sustainability by Design",
  "start_time": "11:35",
  "end_time": "12:10",
  "status": "Ongoing"
}
```

Statuses can be `Upcoming`, `Ongoing`, or `Completed`. Edits through the admin dashboard automatically persist to this file.

## Tailwind Usage

Tailwind CSS is loaded via CDN for simplicity. If you prefer a compiled build, you can swap the CDN reference in the templates with your own build pipeline.

## Development Notes

- API endpoints live under `/api/events` and accept JSON payloads.
- The public page fetches updates every 30 seconds and re-renders the timeline without requiring a page reload.
- The admin page provides manual control for session statuses and refreshes instantly after each update.

## License

This project is provided as-is for demonstration purposes.
