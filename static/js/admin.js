const API_URL = "/api/events";
const adminContainer = document.getElementById("admin-events");
const template = document.getElementById("admin-event-template");

async function fetchEvents() {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error("Unable to load events");
  }
  return response.json();
}

async function updateStatus(eventId, status) {
  const response = await fetch(`${API_URL}/${eventId}/status`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ status }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(error || "Failed to update status");
  }

  return response.json();
}

function renderEvents(events) {
  adminContainer.innerHTML = "";

  if (!events.length) {
    const message = document.createElement("p");
    message.className = "text-sm text-slate-400";
    message.textContent = "No events available to manage.";
    adminContainer.appendChild(message);
    return;
  }

  events.forEach((event) => {
    const node = template.content.firstElementChild.cloneNode(true);
    const title = node.querySelector("h3");
    const subtitle = node.querySelector("p");
    const select = node.querySelector("select");
    const button = node.querySelector("button");

    title.textContent = event.event_name;
    subtitle.textContent = `${event.start_time} – ${event.end_time}`;
    select.value = event.status;

    let feedbackTimeout;
    const showFeedback = (text, type = "success") => {
      clearTimeout(feedbackTimeout);
      button.textContent = text;
      button.classList.remove(
        "bg-sky-600",
        "hover:bg-sky-500",
        "bg-emerald-600",
        "hover:bg-emerald-500",
        "bg-rose-600",
        "hover:bg-rose-500"
      );
      if (type === "success") {
        button.classList.add("bg-emerald-600", "hover:bg-emerald-500");
      } else if (type === "error") {
        button.classList.add("bg-rose-600", "hover:bg-rose-500");
      }
      feedbackTimeout = setTimeout(() => {
        button.textContent = "Update";
        button.classList.remove(
          "bg-emerald-600",
          "hover:bg-emerald-500",
          "bg-rose-600",
          "hover:bg-rose-500"
        );
        button.classList.add("bg-sky-600", "hover:bg-sky-500");
      }, 2000);
    };

    button.addEventListener("click", async () => {
      const status = select.value;
      button.disabled = true;
      button.classList.add("opacity-70", "cursor-not-allowed");
      try {
        await updateStatus(event.id, status);
        showFeedback("Saved", "success");
      } catch (error) {
        console.error(error);
        showFeedback("Retry", "error");
      } finally {
        button.disabled = false;
        button.classList.remove("opacity-70", "cursor-not-allowed");
      }
    });

    adminContainer.appendChild(node);
  });
}

async function init() {
  try {
    const events = await fetchEvents();
    renderEvents(events);
  } catch (error) {
    adminContainer.innerHTML = "";
    const message = document.createElement("p");
    message.className = "text-sm text-rose-400";
    message.textContent = "Unable to load events. Please refresh the page.";
    adminContainer.appendChild(message);
    console.error(error);
  }
}

init();
