import $ from 'jquery';
import debounce from 'lodash/debounce';
import './body.css';

$(document).ready(function () {
  const $main = $('<main></main>');
  $main.append('<button id="start-btn">Click here to get started</button>');
  $main.append('<span id="count"></span>');
  $('body').append($main);

  let count = 0;
  function updateCounter() {
    count++;
    $('#count').text(`${count} clicks on the button`);
  }

  $('#start-btn').on('click', debounce(updateCounter, 500));
});
