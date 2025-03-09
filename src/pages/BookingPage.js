import { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import BookingForm from "../components/BookingForm";
import { fetchAPI, submitAPI } from '../utils/api';

const initializeTimes = () => {
    const today = new Date();
    return fetchAPI(today);
  };
  const updateTimes = (state, action) => {
    if (action.type === "UPDATE_TIMES") {
      const selectedDate = new Date(action.payload);
      return fetchAPI(selectedDate);
    }
    return state;
  };

function BookingPage() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
  const navigate = useNavigate();

  const submitForm = (formData) => {
    if (submitAPI(formData)) {
      navigate("/confirmation");
    } else {
      console.log('Try again')
    }
  };

  return (
    <section className="reservation">
      <h1>Reservation</h1>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />
    </section>
  );
}

export default BookingPage;
