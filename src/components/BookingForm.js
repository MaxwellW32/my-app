import React from "react";
import { useState } from "react";

const date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let currentDate = `${year}-${month <= 9 ? `0` + month : month}-${day}`;

function BookingForm(props) {
  const [resInfo, setResInfo] = useState({
    date: currentDate,
    time: "18:00",
    numGuests: 2,
    occasion: "Anniversary",
  });

  const [didSubmit, setDidSubmit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setDidSubmit(true);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} id="bookingForm">
        <label htmlFor="res-date">Choose date</label>
        <input
          value={resInfo.date}
          name="res-date"
          onChange={(e) => {
            setResInfo((prev) => {
              return { ...prev, date: e.target.value };
            });
          }}
          type="date"
          id="res-date"
        />

        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          value={resInfo.time}
          name="res-time"
          onChange={(e) => {
            setResInfo((prev) => {
              return { ...prev, time: e.target.value };
            });
          }}
        >
          <option>17:00</option>
          <option>18:00</option>
          <option>19:00</option>
          <option>20:00</option>
          <option>21:00</option>
          <option>22:00</option>
        </select>

        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          value={resInfo.numGuests}
          name="guests"
          onChange={(e) => {
            setResInfo((prev) => {
              return { ...prev, numGuests: e.target.value };
            });
          }}
        />

        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={resInfo.occasion}
          name="occasion"
          onChange={(e) => {
            setResInfo((prev) => {
              return { ...prev, occasion: e.target.value };
            });
          }}
        >
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>

        <input
          type="submit"
          value={!didSubmit ? "Make Your reservation" : "Submitted"}
        />
      </form>
    </div>
  );
}

export default BookingForm;
