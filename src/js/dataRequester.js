export function getEventsObject() {
  let xhr = new XMLHttpRequest();

  xhr.open('GET', 'data/events.json', false);
  xhr.send();

  let data;

  if (xhr.status === 200) {
    data = xhr.responseText; // responseText -- текст ответа.
  } else {
    alert( xhr.status + ': ' + xhr.statusText ); // пример вывода: 404: Not Found
  }

  return JSON.parse(data);
}
