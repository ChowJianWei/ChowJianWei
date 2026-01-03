const API_URL = "/api/events";
const REFRESH_INTERVAL = 30_000;

const statusColors = {
  Upcoming: "bg-slate-600/70 border border-slate-500",
  Ongoing: "bg-sky-500/90 border border-sky-300",
  Completed: "bg-emerald-500/80 border border-emerald-300",
};

const timelineGrid = document.getElementById("timeline-grid");
const eventTemplate = document.getElementById("event-template");

async function fetchEvents() {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error("Failed to fetch events");
  }
  return response.json();
}

function parseTimeToMinutes(time) {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
}

function minutesToTimeLabel(minutes) {
  const hrs = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${String(hrs).padStart(2, "0")}:${String(mins).padStart(2, "0")}`;
}

function createAxis(minStart, maxEnd) {
  const axis = document.createElement("div");
  axis.className =
    "absolute left-0 right-0 top-0 flex h-14 items-end justify-between px-6 text-xs text-slate-400";

  const step = 30; // minutes
  for (let t = minStart; t <= maxEnd; t += step) {
    const tick = document.createElement("div");
    tick.className = "flex flex-col items-center";

    const line = document.createElement("span");
    line.className = "mb-1 block h-6 w-px bg-slate-700";

    const label = document.createElement("span");
    label.textContent = minutesToTimeLabel(t);

    tick.append(line, label);
    axis.appendChild(tick);
  }

  return axis;
}

function addCurrentTimeLine(minStart, maxEnd) {
  const now = new Date();
  const minutes = now.getHours() * 60 + now.getMinutes();
  if (minutes < minStart || minutes > maxEnd) {
    return null;
  }

  const range = maxEnd - minStart || 1;
  const offset = ((minutes - minStart) / range) * 100;

  const line = document.createElement("div");
  line.className =
    "absolute top-14 bottom-4 w-0.5 bg-rose-500 shadow-[0_0_12px_rgba(244,63,94,0.45)]";
  line.style.left = `${offset}%`;
  line.style.transform = "translateX(-50%)";

  const badge = document.createElement("div");
  badge.className =
    "absolute -top-9 -left-14 w-24 rounded-full bg-rose-500/80 px-3 py-1 text-center text-xs font-semibold text-white";
  badge.textContent = `Now ${minutesToTimeLabel(minutes)}`;
  line.appendChild(badge);

  return line;
}

function renderEvents(events) {
  timelineGrid.innerHTML = "";

  if (!events.length) {
    const emptyState = document.createElement("p");
    emptyState.className = "p-6 text-center text-sm text-slate-400";
    emptyState.textContent = "No events available. Check back later.";
    timelineGrid.appendChild(emptyState);
    return;
  }

  const minStart = Math.min(...events.map((event) => parseTimeToMinutes(event.start_time)));
  const maxEnd = Math.max(...events.map((event) => parseTimeToMinutes(event.end_time)));
  const range = maxEnd - minStart || 1;

  const rowHeight = 90;
  const axisHeight = 70;
  const paddingBottom = 30;
  timelineGrid.style.height = `${axisHeight + events.length * rowHeight + paddingBottom}px`;

  const axis = createAxis(minStart, maxEnd);
  timelineGrid.appendChild(axis);

  const currentTimeLine = addCurrentTimeLine(minStart, maxEnd);
  if (currentTimeLine) {
    timelineGrid.appendChild(currentTimeLine);
  }

  events.forEach((event, index) => {
    const instance = eventTemplate.content.firstElementChild.cloneNode(true);
    const startMinutes = parseTimeToMinutes(event.start_time);
    const endMinutes = parseTimeToMinutes(event.end_time);

    const left = ((startMinutes - minStart) / range) * 100;
    const width = ((endMinutes - startMinutes) / range) * 100;

    instance.style.top = `${axisHeight + index * rowHeight + 10}px`;
    instance.style.left = `${left}%`;
    instance.style.width = `${Math.max(width, 8)}%`;

    const colorClasses = statusColors[event.status] || statusColors.Upcoming;
    instance.className = `${instance.className} ${colorClasses}`;

    instance.innerHTML = `
      <div class="flex flex-col gap-1">
        <span class="text-xs uppercase tracking-wide text-slate-100/80">${event.start_time} – ${event.end_time}</span>
        <span class="text-base font-semibold">${event.event_name}</span>
        <span class="text-xs font-semibold uppercase tracking-wide text-slate-100/70">${event.status}</span>
      </div>
    `;

    timelineGrid.appendChild(instance);
  });
}

async function refreshTimeline() {
  try {
    const events = await fetchEvents();
    renderEvents(events);
  } catch (error) {
    timelineGrid.innerHTML = "";
    const errorMessage = document.createElement("p");
    errorMessage.className = "p-6 text-center text-sm text-rose-400";
    errorMessage.textContent = "Unable to load events. Please try again shortly.";
    timelineGrid.appendChild(errorMessage);
    console.error(error);
  }
}

refreshTimeline();
setInterval(refreshTimeline, REFRESH_INTERVAL);
