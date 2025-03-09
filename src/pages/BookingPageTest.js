import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import BookingPage from './BookingPage';
import { fetchAPI, submitAPI } from '../utils/api';
import { useNavigate } from 'react-router-dom';

jest.mock('../utils/api');
jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

describe('BookingPage Component', () => {
  const mockNavigate = jest.fn();

  beforeEach(() => {
    useNavigate.mockReturnValue(mockNavigate);
  });

  test('should render the BookingPage and BookingForm', () => {
    fetchAPI.mockResolvedValue(['17:00', '18:00', '19:00']);

    render(<BookingPage />);

    expect(screen.getByText('Reservation')).toBeInTheDocument();
    expect(screen.getByRole('form')).toBeInTheDocument();
  });

  test('should call fetchAPI to get available times on load', async () => {
    fetchAPI.mockResolvedValue(['17:00', '18:00', '19:00']);
    render(<BookingPage />);
    await waitFor(() => expect(fetchAPI).toHaveBeenCalledTimes(1));
    expect(screen.getByText('17:00')).toBeInTheDocument();
    expect(screen.getByText('18:00')).toBeInTheDocument();
    expect(screen.getByText('19:00')).toBeInTheDocument();
  });

  test('should update available times when date is selected', async () => {
    fetchAPI.mockResolvedValue(['17:00', '18:00', '19:00']);
    render(<BookingPage />);

    fireEvent.change(screen.getByLabelText('Select Date'), { target: { value: '2023-05-25' } });

    await waitFor(() => expect(fetchAPI).toHaveBeenCalledWith(new Date('2023-05-25')));
  });

  test('should navigate to confirmation page on successful form submission', async () => {
    submitAPI.mockReturnValue(true);
    fetchAPI.mockResolvedValue(['17:00', '18:00', '19:00']);

    render(<BookingPage />);
    fireEvent.submit(screen.getByRole('form'));
    expect(mockNavigate).toHaveBeenCalledWith("/confirmation");
  });

  test('should log error message if form submission fails', async () => {
    submitAPI.mockReturnValue(false); 
    fetchAPI.mockResolvedValue(['17:00', '18:00', '19:00']);
    render(<BookingPage />);


    fireEvent.submit(screen.getByRole('form'));

    await waitFor(() => {
      expect(console.log).toHaveBeenCalledWith('Try again');
    });
  });
});
