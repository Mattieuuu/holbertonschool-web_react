import NotificationItem from './NotificationItem';
import { render, screen, fireEvent } from '@testing-library/react';

describe('NotificationItem component', () => {
  test("Vérification que markAsRead est appelé lors d'un clic sur une notification", () => {
    const markAsReadSpy = jest.fn();
    render(<NotificationItem type="urgent" value="New resume available" markAsRead={markAsReadSpy}/>);

    const notificationText = screen.getByText(/New resume available/i);
    fireEvent.click(notificationText);
    expect(markAsReadSpy).toHaveBeenCalledTimes(1);
  });
});
