const timeElement = document.querySelector('[data-testid="test-user-time"]');

function renderTimeInMs() {
  const now = Date.now();
  timeElement.textContent = String(now);
  timeElement.dateTime = String(now);
}

renderTimeInMs();
window.setInterval(renderTimeInMs, 1000);
