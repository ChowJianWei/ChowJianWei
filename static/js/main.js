const timelineContainer = document.getElementById('timeline-container');
const currentTimeLine = document.getElementById('current-time-line');
const lastUpdatedText = document.getElementById('last-updated');
const timelineStart = document.getElementById('timeline-start');
const timelineEnd = document.getElementById('timeline-end');

const STATUS_COLORS = {
  Upcoming: '#94a3b8', // Gray
  Ongoing: '#38bdf8', // Blue
  Completed: '#34d399' // Green
};

const REFRESH_INTERVAL_MS = 30_000;

function parseTimeToMinutes(timeStr) {
  const [hours, minutes] = timeStr.split(':').map(Number);
  return hours * 60 + minutes;
}

function formatLastUpdated(date) {
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
}

function clearTimelineRows() {
  const rows = timelineContainer.querySelectorAll('.timeline-row');
  rows.forEach((row) => row.remove());
}

function renderTimeline(events) {
  if (!Array.isArray(events) || events.length === 0) {
    clearTimelineRows();
    timelineStart.textContent = 'Start';
    timelineEnd.textContent = 'End';
    currentTimeLine.classList.add('hidden');
    return;
  }

  const sortedEvents = [...events].sort(
    (a, b) => parseTimeToMinutes(a.start_time) - parseTimeToMinutes(b.start_time)
  );

  const minStart = Math.min(...sortedEvents.map((event) => parseTimeToMinutes(event.start_time)));
  const maxEnd = Math.max(...sortedEvents.map((event) => parseTimeToMinutes(event.end_time)));
  const totalDuration = Math.max(maxEnd - minStart, 1);

  timelineStart.textContent = sortedEvents[0].start_time;
  timelineEnd.textContent = sortedEvents[sortedEvents.length - 1].end_time;

  clearTimelineRows();

  sortedEvents.forEach((event, index) => {
    const startMinutes = parseTimeToMinutes(event.start_time);
    const endMinutes = parseTimeToMinutes(event.end_time);
    const duration = Math.max(endMinutes - startMinutes, 1);

    const offsetPercent = ((startMinutes - minStart) / totalDuration) * 100;
    const widthPercent = (duration / totalDuration) * 100;

    const row = document.createElement('div');
    row.className = 'timeline-row';

    const bar = document.createElement('div');
    bar.className = 'timeline-bar text-xs sm:text-sm md:text-base';
    bar.style.left = `${offsetPercent}%`;
    bar.style.width = `${widthPercent}%`;
    bar.style.backgroundColor = STATUS_COLORS[event.status] || STATUS_COLORS.Upcoming;
    bar.setAttribute('role', 'img');
    bar.setAttribute('aria-label', `${event.event_name} ${event.start_time} to ${event.end_time} is ${event.status}`);

    const content = document.createElement('div');
    content.className = 'flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-3 w-full';

    const title = document.createElement('p');
    title.className = 'font-semibold';
    title.textContent = event.event_name;

    const timing = document.createElement('p');
    timing.className = 'text-xs sm:text-sm font-medium';
    timing.textContent = `${event.start_time} - ${event.end_time}`;

    const status = document.createElement('span');
    status.className = 'text-[0.7rem] sm:text-xs uppercase tracking-wide';
    status.textContent = event.status;

    content.appendChild(title);
    content.appendChild(timing);
    content.appendChild(status);

    bar.appendChild(content);
    row.appendChild(bar);
    timelineContainer.appendChild(row);

    if (index === events.length - 1) {
      row.classList.add('mb-0');
    }
  });

  updateCurrentTimeIndicator(minStart, maxEnd);
}

function updateCurrentTimeIndicator(minStart, maxEnd) {
  const now = new Date();
  const nowMinutes = now.getHours() * 60 + now.getMinutes();

  if (nowMinutes < minStart || nowMinutes > maxEnd) {
    currentTimeLine.classList.add('hidden');
    return;
  }

  const range = Math.max(maxEnd - minStart, 1);
  const positionPercent = ((nowMinutes - minStart) / range) * 100;
  currentTimeLine.style.left = `${positionPercent}%`;
  currentTimeLine.classList.remove('hidden');
}

async function loadEvents() {
  try {
    const response = await fetch('/api/events');
    if (!response.ok) {
      throw new Error(`Failed to load events (${response.status})`);
    }
    const events = await response.json();
    renderTimeline(events);
    lastUpdatedText.textContent = `Last updated: ${formatLastUpdated(new Date())}`;
  } catch (error) {
    console.error(error);
    lastUpdatedText.textContent = 'Unable to load events. Retrying...';
  }
}

loadEvents();
setInterval(loadEvents, REFRESH_INTERVAL_MS);
