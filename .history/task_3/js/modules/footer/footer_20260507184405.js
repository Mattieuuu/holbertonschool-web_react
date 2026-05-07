import $ from 'jquery';
import './footer.css';

export default function renderFooter() {
  if ($('.dashboard-footer').length) {
    return;
  }

  $('body').append('<footer class="dashboard-footer">Copyright - Holberton School</footer>');
}

renderFooter();