
import $ from 'jquery';
import debounce from 'lodash/debounce';
import '../css/main.css';

$('body').prepend('<div id="logo"></div>');

$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button id="start-btn">Click here to get started</button>');
$('body').append('<span id="count"></span>');
$('body').append('<p>Copyright - Holberton School</p>');

let count = 0;
function updateCounter() {
  count++;
  $('#count').text(`${count} clicks on the button`);
}

$('#start-btn').on('click', debounce(updateCounter, 500));
