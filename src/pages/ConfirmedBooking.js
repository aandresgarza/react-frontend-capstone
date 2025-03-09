import { Link } from "react-router-dom";

function ConfirmedBooking() {
  return (
    <section className="reservation">
      <h1>Reservation confirmed</h1>
      <p>You have just booked your table at Little Lemon.</p>
      <Link className="btn-primary" to="/">Back at home</Link>
    </section>
  );
}

export default ConfirmedBooking;