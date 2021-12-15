export default function clickOutside(element, events, callback) {
  const html = document.documentElement;
  function handleOutside(event) {
    if (!element.contains(event.target)) {
      events.forEach((userEvent) => {
        html.removeEventListener(userEvent, handleOutside);
      });
      callback();
    }
  }
  events.forEach((userEvent) => {
    setTimeout(() => {
      html.addEventListener(userEvent, handleOutside);
    });
  });
}
