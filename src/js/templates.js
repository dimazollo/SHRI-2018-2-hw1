/*
  event = {
    type: [info, critical],
    title: "string",
    source: "string",
    time: "string",
    description: "string",
    icon: [stats, key, robot-cleaner, router, thermal, ac, music, fridge, battery, cam, kettle],
    data: [],
    size: [l, m, s]
  }
*/

export function generateTile(container, event) {
  const iconColor = event.type === 'critical' ? 'white' : 'black';

  let sizeStyle;
  switch (event.size) {
    case 'l':
      sizeStyle = 'm-size_large';
      break;
    case 'm':
      sizeStyle = 'm-size_medium';
      break;
    case 's':
      sizeStyle = 'm-size_small';
      break;
  }
  const newHtmlElement = document.createElement('div');
  newHtmlElement.classList.add('events-grid__event');
  newHtmlElement.classList.add(sizeStyle);
  if (event.type === 'critical') newHtmlElement.classList.add('critical');

  const tileHasContent = event.data || event.description;

  let template =
    `<div class="event__close-btn">
          <img src="assets/icons/cross-black.svg" alt="&#215;">
        </div>
        <div class="event__open-btn">
          <img src="assets/icons/goto-black.svg" alt=">">
        </div>
    
        <div class="event__header" style="${!tileHasContent ? 'padding-bottom: 20px' : ''}">
          <div class="header__name">
            <div class="icon">
              <img src="assets/icons/${event.icon}-${iconColor}.svg">
            </div>
            <div class="text">${event.title}</div>
          </div>
          <div class="header__status">
            <div class="source">${event.source}</div>
            <div class="datetime">${event.time}</div>
          </div>
        </div>`;

  if (tileHasContent) {
    template += `<div class="event__content">`;

    if (event.description) {
      template += `<div class="content__description">${event.description}</div>`;
    }

    if (event.icon === 'thermal') {
      template +=
        `<div class="content__status">
          <div class="param">
            <span class="param__name">Температура:</span>
            <span class="param__value">${event.data.temperature} C</span>
          </div>
          <div class="param">
            <span class="param__name">Влажность:</span>
            <span class="param__value">${event.data.humidity}%</span>
          </div>
        </div>`
    } else if (event.icon === 'stats') {
      template +=
        `<div class="content__image">
           <img src="assets/Richdata.svg">
         </div>`
    } else if (event.data && event.data.image) {
      template +=
        `<div class="content__image">
           <img src="assets/robot-cleaner.png" 
                srcset="assets/robot-cleaner@3x.png 3x,
                        assets/robot-cleaner@2x.png 2x,
                        assets/robot-cleaner.png 1x">
       </div>`
    } else if (event.icon === 'music') {
      template +=
        `<div class="content__player player">
            <div class="first-line">
              <div class="player__albumcover"><img src="${event.data.albumcover}"></div>
              <div class="first-line__right-block">
                <div class="player__track">${event.data.artist + ' - ' + event.data.track.name}</div>
                <div class="bottom-part">
                  <input type="range" class="player__time-range">
                  <div class="player__length">${event.data.track.length}</div>
                </div>
              </div>
            </div>
            <div class="second-line">
              <div class="player__buttons">
                <img src="assets/icons/Prev.svg">
                <img src="assets/icons/Next.svg">
              </div>
              <input type="range" class="player__volume-range">
              <div class="player__volume">${event.data.volume}%</div>
            </div>
        </div>`
    } else if (event.data && event.data.buttons) {
      template += '<div class="content__dialog-btns">';
      for (let i = 0; i < event.data.buttons.length; i++) {
        if (i !== 0) {
          template += `<button class="dialog-btn secondary">${event.data.buttons[i]}</button>`
        } else {
          template += `<button class="dialog-btn primary">${event.data.buttons[i]}</button>`
        }
      }
    }

    template += `</div>`;
  }

  newHtmlElement.innerHTML = template;
  container.insertBefore(newHtmlElement, null);
}
