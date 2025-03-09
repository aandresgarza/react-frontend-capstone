import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import BookingPage from './pages/BookingPage';
import OrderOnline from './pages/OrderOnline';
import Login from './pages/Login';
import ConfirmedBooking from './pages/ConfirmedBooking'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservations" element={<BookingPage />} />
          <Route path="/order-online" element={<OrderOnline />} />
          <Route path="/login" element={<Login />} />
          <Route path="/confirmation" element={<ConfirmedBooking />} />
        </Routes>
      </main>
      <Footer />
    </Router>

  );
}

export default App;
