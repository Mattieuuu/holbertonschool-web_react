import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  markNotificationAsRead,
  showDrawer,
  hideDrawer,
} from '../../features/notifications/notificationsSlice';
import NotificationItem from '../NotificationItem/NotificationItem';

const Notifications = () => {
  const dispatch = useDispatch();

  const { notifications, displayDrawer } = useSelector(
    (state) => state.notifications
  );

  const handleDisplayDrawer = () => {
    dispatch(showDrawer());
  };

  const handleHideDrawer = () => {
    dispatch(hideDrawer());
  };

  const handleMarkAsRead = (id) => {
    dispatch(markNotificationAsRead(id));
  };

  return (
    <div className="notifications">
      <button type="button" onClick={handleDisplayDrawer}>
        Your notifications
      </button>

      {displayDrawer && (
        <div className="Notifications">
          <button type="button" onClick={handleHideDrawer}>
            Close
          </button>

          <h2>Notifications</h2>

          <ul>
            {notifications.map((notification) => (
              <NotificationItem
                key={notification.id}
                {...notification}
                markAsRead={handleMarkAsRead}
              />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Notifications;
