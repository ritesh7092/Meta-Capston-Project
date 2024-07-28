import React, { useState } from 'react';

const BookingForm = (props) => {
    const [date, setDate] = useState("");
    const [times, setTimes] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        props.submitForm({ date, times, guests, occasion });
    }

    const handleChange = (e) => {
        setDate(e.target.value);
        props.dispatch({ type: 'SET_DATE', payload: e.target.value });
    }

    return (
        <header>
            <section>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <div>
                            <label htmlFor='book-date'>Choose Date</label>
                            <input
                                id='book-date'
                                value={date}
                                onChange={handleChange}
                                type='date'
                                required
                            />
                        </div>

                        {/* for time selection */}
                        <div>
                            <label htmlFor='book-time'>Choose Time:</label>
                            <select
                                id="book-time"
                                value={times}
                                onChange={(e) => setTimes(e.target.value)}
                            >
                                <option value="">Select a Time</option>
                                {
                                    props.availableTimes.availableTimes.map((availableTime, index) => (
                                        <option key={index} value={availableTime}>{availableTime}</option>
                                    ))
                                }
                            </select>
                        </div>
                        
                        {/* for Number of guests */}
                        <div>
                            <label htmlFor='book-guests'>Number of Guests:</label>
                            <input
                                id='book-guests'
                                min='1'
                                type='number'
                                value={guests}
                                onChange={(e) => setGuests(e.target.value)}
                                required
                            />
                        </div>

                        {/* Occasion field */}
                        <div>
                            <label htmlFor='book-occasion'>Occasion:</label>
                            <select
                                id='book-occasion'
                                value={occasion}
                                onChange={(e) => setOccasion(e.target.value)}
                            >
                                <option value="">Select an Occasion</option>
                                <option value="Birthday">Birthday</option>
                                <option value="Anniversary">Anniversary</option>
                            </select>
                        </div>
                        
                        {/* submit button */}
                        <div className='btnReceive'>
                            <input aria-label='On Click' type='submit' value={"Make Your Reservation"} />
                        </div>
                    </fieldset>
                </form>
            </section>
        </header>
    );
};

export default BookingForm;
