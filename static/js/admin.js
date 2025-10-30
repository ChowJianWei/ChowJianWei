const eventsContainer = document.getElementById('admin-events');
const refreshButton = document.getElementById('refresh');

const STATUS_COLORS = {
  Upcoming: 'bg-slate-400/50 text-slate-900',
  Ongoing: 'bg-sky-400 text-slate-900',
  Completed: 'bg-emerald-400 text-slate-900'
};

async function fetchEvents() {
  const response = await fetch('/api/events');
  if (!response.ok) {
    throw new Error('Unable to fetch events');
  }
  return response.json();
}

function buildStatusSelect(event) {
  const wrapper = document.createElement('label');
  wrapper.className = 'flex flex-col gap-1 text-sm';

  const label = document.createElement('span');
  label.className = 'text-xs uppercase tracking-wide text-slate-400';
  label.textContent = 'Status';

  const select = document.createElement('select');
  select.className = 'bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400 text-sm';
  select.dataset.eventId = event.id;

  STATUS_OPTIONS.forEach((status) => {
    const option = document.createElement('option');
    option.value = status;
    option.textContent = status;
    if (status === event.status) {
      option.selected = true;
    }
    select.appendChild(option);
  });

  select.addEventListener('change', async () => {
    select.disabled = true;
    try {
      await updateStatus(event.id, select.value);
      renderEvents(await fetchEvents());
    } catch (error) {
      console.error(error);
      alert('Failed to update status. Please try again.');
      select.value = event.status;
    } finally {
      select.disabled = false;
    }
  });

  wrapper.appendChild(label);
  wrapper.appendChild(select);
  return wrapper;
}

function renderEvents(events) {
  eventsContainer.innerHTML = '';

  events.forEach((event) => {
    const card = document.createElement('div');
    card.className = 'rounded-xl border border-slate-700 bg-slate-800/60 p-4 md:p-5 flex flex-col gap-4';

    const header = document.createElement('div');
    header.className = 'flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2';

    const title = document.createElement('h3');
    title.className = 'text-lg font-semibold';
    title.textContent = event.event_name;

    const time = document.createElement('span');
    time.className = 'text-sm text-slate-400';
    time.textContent = `${event.start_time} - ${event.end_time}`;

    header.appendChild(title);
    header.appendChild(time);

    const statusChip = document.createElement('span');
    statusChip.className = `self-start px-3 py-1 text-xs font-semibold uppercase tracking-wide rounded-full ${STATUS_COLORS[event.status] || STATUS_COLORS.Upcoming}`;
    statusChip.textContent = event.status;

    const statusControl = buildStatusSelect(event);

    card.appendChild(header);
    card.appendChild(statusChip);
    card.appendChild(statusControl);
    eventsContainer.appendChild(card);
  });
}

async function updateStatus(eventId, status) {
  const response = await fetch(`/api/events/${eventId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ status })
  });

  if (!response.ok) {
    throw new Error('Unable to update status');
  }

  return response.json();
}

async function loadAdminView() {
  try {
    const events = await fetchEvents();
    renderEvents(events);
  } catch (error) {
    console.error(error);
    eventsContainer.innerHTML = '<p class="text-sm text-red-400">Failed to load events. Please refresh.</p>';
  }
}

refreshButton.addEventListener('click', loadAdminView);

loadAdminView();
