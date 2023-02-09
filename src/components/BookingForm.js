import { useState } from 'react';
import '../components/css/BookingForm.css'

function BookingPage() {
    const [name, setName]= useState("");
    const [email, setEmail]= useState("");
    const [reservationDate, setReservationDate] = useState("");
    const [reservationTime, setReservationTime] = useState("17:00");
    const [numberOfGuests, setNumberOfGuests] = useState(1);
    const [occasion, setOccasion] = useState("Birthday");
    const [availableTimes, setAvailableTimes] = useState([
        "17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00",
        "22:00",
    ]);

    const handleSubmit = e => {
        e.preventDefault();
        console.log("Form submitterd",{
            name,
            email,
            reservationDate, 
            reservationTime,
            numberOfGuests,
            occasion
        })
    };

    return(
        <form>
            <div class="form-input">

                <div className="name">
                    <label htmlFor="res-name">Name</label>
                    <input type="text" id="res-name" 
                    value={name} onChange={e=> setName(e.target.value)}/>
                </div>

                <div className="email">
                    <label htmlFor="res-email">Email</label>
                    <input type="email" id="res-email" 
                    value={email} onChange={e=> setEmail(e.target.value)}/>
                </div>
                
                <div className="date">
                    <label htmlFor="res-date">Choose date</label>
                    <input type="date" id="res-date" 
                    value={reservationDate} onChange={e=> setReservationDate(e.target.value)}/>
                </div>

                <div className="time">
                    <label htmlFor="res-time">Choose time</label>
                    <select id="res-time " value={reservationTime} 
                    onChange={e => setReservationTime(e.target.value)}>
                      {
                        availableTimes.map(time => (
                            <option key={time}>{time}</option>
                        ))
                      }
                    </select>
                </div>

                <div className="guests">
                    <label htmlFor="guests">Number of guests</label>
                    <input type="number" placeholder={1} min={1} max={10} id="guests" 
                    value={numberOfGuests} onChange={e => setNumberOfGuests(e.target.value)}/>
                </div>
                
                <div className="ocassion">
                    <label htmlFor="occasion">Occasion</label>
                    <select id="occasion" value={occasion} onChange={e => setOccasion(e.target.value)}>
                      <option>Birthday</option>
                      <option>Engagement</option>
                      <option>Anniversary</option>
                    </select>
                </div>
            </div>
            <input className="btn" type="submit" defaultValue="Make Your reservation" onClick={handleSubmit}/>
        </form>
    );
}

export default BookingPage;