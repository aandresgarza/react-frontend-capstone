import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

jest.mock('./pages/Home', () => () => <div>Home Page</div>);
jest.mock('./pages/BookingPage', () => () => <div>Booking Page</div>);
jest.mock('./pages/OrderOnline', () => () => <div>Order Online Page</div>);
jest.mock('./pages/Login', () => () => <div>Login Page</div>);
jest.mock('./pages/ConfirmedBooking', () => () => <div>Confirmed Booking Page</div>);
jest.mock('./components/Header', () => () => <header>Header</header>);
jest.mock('./components/Footer', () => () => <footer>Footer</footer>);

describe('App Component', () => {
  test('should render Header and Footer on all pages', () => {
    render(
      <Router>
        <App />
      </Router>
    );

    expect(screen.getByText('Header')).toBeInTheDocument();
    expect(screen.getByText('Footer')).toBeInTheDocument();
  });

  test('should render Home page on the "/" route', () => {
    render(
      <Router>
        <App />
      </Router>
    );

    expect(screen.getByText('Home Page')).toBeInTheDocument();
  });

  test('should render BookingPage when navigating to "/reservations"', () => {
    window.history.pushState({}, 'Booking Page', '/reservations');

    render(
      <Router>
        <App />
      </Router>
    );

    expect(screen.getByText('Booking Page')).toBeInTheDocument();
  });

  test('should render OrderOnline page when navigating to "/order-online"', () => {
    window.history.pushState({}, 'Order Online Page', '/order-online');

    render(
      <Router>
        <App />
      </Router>
    );

    expect(screen.getByText('Order Online Page')).toBeInTheDocument();
  });

  test('should render Login page when navigating to "/login"', () => {
    window.history.pushState({}, 'Login Page', '/login');

    render(
      <Router>
        <App />
      </Router>
    );

    expect(screen.getByText('Login Page')).toBeInTheDocument();
  });

  test('should render ConfirmedBooking page when navigating to "/confirmation"', () => {
    window.history.pushState({}, 'Confirmed Booking Page', '/confirmation');

    render(
      <Router>
        <App />
      </Router>
    );

    expect(screen.getByText('Confirmed Booking Page')).toBeInTheDocument();
  });
});
