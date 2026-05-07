import $ from 'jquery';
import debounce from 'lodash/debounce';

let count = 0;

function updateCounter() {
  count += 1;
  $('#count').text(count);
}

$(function () {
  $('body').append('<p>Holberton Dashboard</p>');
  $('body').append('<p>Dashboard data for the students</p>');
  $('body').append('<button id="update_count">Click here to update the count</button>');
  $('body').append('<p>Clicks: <span id="count">0</span></p>');
  $('body').append('<p>Copyright - Holberton School</p>');

  $('#update_count').on('click', debounce(updateCounter, 300));
});