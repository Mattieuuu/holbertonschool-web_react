import { Component } from 'react';
import CloseButton from '../assets/close-button.png';
import NotificationItem from './NotificationItem';

class Notifications extends Component {
  handleClick = () => console.log('Close button has been clicked');

  // Méthode markAsRead
  markAsRead = (id) => {
    console.log(`Notification ${id} has been marked as read`);
  }

  shouldComponentUpdate(nextProps) {
    return this.props.notifications.length !== nextProps.notifications.length;
  }

  render() {
    const shouldAnimate = this.props.notifications.length > 0 && !this.props.displayDrawer;
    const titleStyles = {
      width: '100%',
      textAlign: 'end',
      animation: shouldAnimate ? 'bounce 1s infinite' : 'none'
    };
    const notificationComponentStyles = {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'flex-end'
    };
    const notificationTitleStyles = {
      width: '100%',
      textAlign: 'end'
    };
    const notificationItemsStyles = {
      border: '#e1003c dotted 2.5px',
      display: 'flex',
      flexWrap: 'wrap',
      width: '60%',
      marginBottom: '1rem'
    };
    const imageStyles = {
      width: '70%'
    };
    const ulStyles = {
      width: '100%'
    };

    return (
      <div className='Notification-Component' style={notificationComponentStyles}>
        <style>{`@keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }`}</style>
        <div style={notificationTitleStyles}>
          <p style={titleStyles}>Your notifications</p>
        </div>
        {
          this.props.displayDrawer && <div style={notificationItemsStyles}>
            <p>Here is the list of notifications</p>
            <button aria-label='Close' style={{
              width: '1.75rem',
              height: '1rem',
              marginTop: '0.25rem',
              marginLeft: 'auto',
              background: 'none',
              border: 'none',
              cursor: 'pointer'
            }}
            onClick={this.handleClick}>
              <img src={CloseButton} style={imageStyles} />
            </button>
            <ul style={ulStyles}>
              {this.props.notifications.length===0 ? 'No new notification for now' :
                this.props.notifications.map((notification) => (
                <NotificationItem
                  key={notification.id}
                  type={notification.type}
                  value={notification.value}
                  html={notification.html}
                  markAsRead={this.markAsRead}
                  id={notification.id} />
              ))}
            </ul>
          </div>
        }
      </div>
    )
  }
}

Notifications.defaultProps = {
  notifications: [],
  displayDrawer: true,
};

export default Notifications;
