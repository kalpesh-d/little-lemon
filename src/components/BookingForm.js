import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../components/css/BookingForm.css'

function BookingPage(props) { 
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [date, setDate] = useState("");
    const [numberOfGuests, setNumberOfGuests] = useState(1);
    const [occasion, setOccasion] = useState("");
  
    const [finalTime, setFinalTime] = useState(
        props.availableTimes.map((times) => <option>{times}</option>)
    );

    function handleDateChange(e) {
      setDate(e.target.value);

      var stringify = e.target.value;
      const date = new Date(stringify);

      props.updateTimes(date);

      setFinalTime(props.availableTimes.map((times) => <option>{times}</option>));
    } 

    return(    
        <form>
            <div class="form-input">
                <div className="name">
                    <label htmlFor="res-name">Full Name</label>
                    <input type="text" id="res-name" 
                    value={name} onChange={e => setName(e.target.value)}/>
                </div>

                <div className="email">
                    <label htmlFor="res-email">Email</label>
                    <input type="email" id="res-email" 
                    value={email} onChange={e => setEmail(e.target.value)}/>
                </div>

                <div className="date">
                    <label htmlFor="res-date">Choose date</label>
                    <input type="date" id="res-date" 
                    value={date} onChange={handleDateChange}/>
                </div>

                <div className="time">
                    <label htmlFor="res-time">Choose time</label>
                    <select id="res-time" >
                        {finalTime}
                    </select>
                </div>

                <div className="guests">
                    <label htmlFor="guests">Number of guests</label>    
                    <input type="number" placeholder={1} min={1} max={10} id="guests" 
                    value={numberOfGuests} onChange={e => setNumberOfGuests(e.target.value)}/>
                </div>

                <div className="ocassion">
                    <label htmlFor="occasion">Occasion</label>
                    <select id="occasion" value={occasion} onChange={setOccasion} >
                      <option>Birthday</option>
                      <option>Engagement</option>
                      <option>Anniversary</option>
                    </select>
                </div>
            </div>
            <Link to="/confirmed">
                <button className="btn" type='submit'>Submit</button>
            </Link>
        </form>
    );
}

export default BookingPage;