import { useState } from 'react';
import '../components/css/BookingForm.css'

function BookingPage(props) { 
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [date, setDate] = useState("");
    const [numberOfGuests, setNumberOfGuests] = useState(1);
    const [occasion, setOccasion] = useState("");
  
    const [finalTime, setFinalTime] = useState(
        props.availableTimes.map((times) => <option key={times}>{times}</option>)
    );

    function handleDateChange(e) {
      setDate(e.target.value);

      var stringify = e.target.value;
      const date = new Date(stringify);

      props.updateTimes(date);

      setFinalTime(props.availableTimes.map((times) => <option>{times}</option>));
    } 

    const handleSubmit = (e) => {
        e.preventDefault();
        window.location.href = "/confirmed";
    }

    return(    
        <form onSubmit={handleSubmit}>
            <div className="form-input">
                <h2>Reservation</h2>
                <p>Enter reservation details</p>
                <div className="form-group">
                    <label htmlFor="res-name">Full Name</label>
                    <input type="text" id="res-name" required placeholder='Enter Name'
                    value={name} onChange={e => setName(e.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor="res-email">Email</label>
                    <input type="email" id="res-email" required placeholder='Enter Email'
                    value={email} onChange={e => setEmail(e.target.value)}/>
                </div>

                <div className="form-group">
                    <label htmlFor="res-date">Choose date</label>
                    <input type="date" id="res-date" required placeholder='Enter Date'
                    value={date} onChange={handleDateChange}/>
                </div>

                <div className="form-group">
                    <label htmlFor="res-time">Choose time</label>
                    <select id="res-time" required>
                        <option disabled selected>Select time</option>
                        {finalTime}
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="res-guests">Guests</label>    
                    <input type="number" placeholder={1} min={1} max={10} id="res-guests" required
                    value={numberOfGuests} onChange={e => setNumberOfGuests(e.target.value)}/>
                </div>

                <div className="form-group">
                    <label htmlFor="res-occasion">Occasion</label>
                    <select id="res-occasion" value={occasion} onChange={setOccasion} required>
                      <option>Birthday</option>
                      <option>Engagement</option>
                      <option>Anniversary</option>
                    </select>
                </div>
            </div>
            <div className='submit'>
                <button className="btn" type='submit'>Submit</button>
            </div>
        </form>
    );
}

export default BookingPage;