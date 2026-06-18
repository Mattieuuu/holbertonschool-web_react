import Notifications from './Notifications';
import { render, screen, fireEvent } from '@testing-library/react';

describe('Notifications component', () => {
  test("Vérification de la présence du message 'Here is the list of notifications'", () => {
    render(<Notifications displayDrawer={true} />);
    const notifTitle = screen.getByText(/Here is the list of notifications/i);
    expect(notifTitle).toBeInTheDocument();
  });

  test('Vérification de la présence du bouton close', () => {
    render(<Notifications displayDrawer={true} />);
    const closeButton = screen.getByRole('button');
    expect(closeButton).toBeInTheDocument();
  });

  test('Vérification de la présence des 3 li', () => {
    render(<Notifications displayDrawer={true} />);
    const liElements = screen.getAllByRole('listitem');
    expect(liElements).toHaveLength(3);
  });

  test('Vérification de la présence du menu item Your notifications', () => {
    render(<Notifications displayDrawer={false} />);
    const menuItem = screen.getByText(/Your notifications/i);
    expect(menuItem).toBeInTheDocument();
  });

  test("Vérification de l'eventHandler 'click' sur le menu item", () => {
    const handleDisplayDrawer = jest.fn();
    render(<Notifications displayDrawer={false} handleDisplayDrawer={handleDisplayDrawer} />);
    const menuItem = screen.getByText(/Your notifications/i);
    fireEvent.click(menuItem);
    expect(handleDisplayDrawer).toHaveBeenCalled();
  });

  test("Vérification de l'eventHandler 'click' sur le bouton close", () => {
    const handleHideDrawer = jest.fn();
    render(<Notifications displayDrawer={true} handleHideDrawer={handleHideDrawer} />);
    const closeButton = screen.getByRole('button', { name: /close/i });
    fireEvent.click(closeButton);
    expect(handleHideDrawer).toHaveBeenCalled();
  });
});
