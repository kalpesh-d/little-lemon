import Navigation from "../components/Navigation";
import BookingForm from "../components/BookingForm";
import Footer from "../components/Footer";  
import { fetchAPI } from '../../src/bookingAPI.js';
import { useReducer } from "react";


function Reservation() {
    function updateTimes(date) {
        return fetchAPI(date);
    }

    const output = fetchAPI(new Date());
    const [availableTimes, dispatch] = useReducer(updateTimes, output);

    return(
        <>
            <Navigation />
            <BookingForm availableTimes={availableTimes} updateTimes={dispatch}/>
            <Footer/>
        </>
    );
}

export default Reservation;