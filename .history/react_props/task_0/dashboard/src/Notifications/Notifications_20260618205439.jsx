import CloseButton from '../assets/close-button.png';
import { getLatestNotification } from '../utils/utils';
import './Notifications.css';

function Notifications({ displayDrawer, handleDisplayDrawer, handleHideDrawer }) {
  return (
    <>
      <div className="menuItem" onClick={handleDisplayDrawer}>
        <p>Your notifications</p>
      </div>
      {displayDrawer && (
        <div className="notification-items">
          <p>Here is the list of notifications</p>
          <button
            aria-label="Close"
            style={{
              width: '1.75rem',
              height: '1rem',
              marginTop: '0.25rem',
              marginLeft: 'auto',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
            }}
            onClick={handleHideDrawer}
            type="button"
          >
            <img src={CloseButton} alt="close button" />
          </button>
          <ul>
            <li data-priority="default">New course available</li>
            <li data-priority="urgent">New resume available</li>
            <li data-priority="urgent" dangerouslySetInnerHTML={{ __html: getLatestNotification() }} />
          </ul>
        </div>
      )}
    </>
  );
}

export default Notifications;
