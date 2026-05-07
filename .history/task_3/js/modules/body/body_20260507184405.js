import $ from 'jquery';
import debounce from 'lodash/debounce';
import './body.css';

let count = 0;

function updateCounter() {
  count += 1;
  $('#count').text(count);
}

export default function renderBody() {
  if ($('.dashboard-body').length) {
    return;
  }

  $('body').append(
    '<main class="dashboard-body"><p>Dashboard data for the students</p><button id="update_count">Click here to update the count</button><p>Clicks: <span id="count">0</span></p></main>',
  );

  $('#update_count').on('click', debounce(updateCounter, 300));
}

renderBody();