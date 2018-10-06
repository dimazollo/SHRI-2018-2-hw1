import { getEventsObject } from './dataRequester';
import { generateTile } from './templates';
import * as $ from 'jquery'

(function () {

  const events = getEventsObject().events;

  const tileContainer = document.querySelector('#events');
  events.forEach(event => {
    generateTile(tileContainer, event)
  });

  // Open menu from hamburger icon
  $('.header__menu-toggle').on('click', function () {
    $('.header__header-menu').slideToggle(300, function () {
      if ($(this).css('display') === 'none') {
        $(this).removeAttr('style');
      }
    })
  });

  // Hide dropdown menu from hamburger on resize to prevent bugs
  $(window).resize(function () {
    var element = $('.header__header-menu');
    if (element.attr('style')) {
      // remove JQuery generated styles
      element.removeAttr('style');
    }
  });

})();
