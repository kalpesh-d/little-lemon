import Navigation from "./Navigation";
import { Link } from "react-router-dom";
import './css/ConfirmedBooking.css';

function Confirmed() {
    return(
        <>
            <Navigation />
            <section className="reserve-header-text">
              <h1>Your Reservation is Confirmed!</h1>
              <p>A confirmation message has been sent to your email.</p>
              <p>Thanks for dining with us!</p>
            </section>
            <section className="buttons">
                <Link to='/'>
                    <button className="btn home">Home</button>
                </Link>
            </section>
        </>
    );
}

export default Confirmed;