import $ from 'jquery';
import './header.css';

export default function renderHeader() {
  if ($('.dashboard-header').length) {
    return;
  }

  $('body').prepend('<header class="dashboard-header"><h1>Holberton Dashboard</h1></header>');
}

renderHeader();