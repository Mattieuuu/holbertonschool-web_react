import { PureComponent } from 'react';

class NotificationItem extends PureComponent {
  render() {
    const notificationClassName = this.props.type === 'default'
      ? 'text-[color:var(--default-notification-item)]'
      : 'text-[color:var(--urgent-notification-item)]';

    return(
      this.props.html ?
        <li className={notificationClassName}
          data-notification-type={this.props.type}
          dangerouslySetInnerHTML={{ __html: this.props.html }}
          onClick={() => this.props.markAsRead(this.props.id)} />:
        <li className={notificationClassName}
          data-notification-type={this.props.type}
          onClick={() => this.props.markAsRead(this.props.id)}>{ this.props.value }</li>
    );
  }
}

export default NotificationItem;
