import React from 'react'
import { Footer } from '../container';
import Navbar from './Navbar/Navbar';
import "./TableBook.css"

function TableBook() {
  return (
    <div>
      <Navbar />
      <section id="form" data-aos="fade-up">
        <div class="container">
          <h3 class="headtext__cormorant">Book Table</h3>
          <div class="form__wrapper">
            <form name="booking" method="POST" netlify>
              <div class="form__group">
                <label for="firstName" className='p__cormorant '>First Name</label>
                <input type="text" className='app__newsletter-input' id="firstName" name="First Name" placeholder='Enter your first name' required />
              </div>
              <div class="form__group">
                <label for="lastName" className='p__cormorant '>Last Name</label>
                <input type="text"  id="lastName" name="Last Name" placeholder='Enter your last name' required />
              </div>
              <div class="form__group">
                <label for="email" className='p__cormorant '>Email</label>
                <input type="email"  id="email" name="Email" placeholder='Enter your email' required />
              </div>
              <div class="form__group">
                <label for="tableType" className='p__cormorant '>No of Persons</label>
                <select name="Table Type" id="tableType" required >
                  <option selected disabled>Choose</option>
                  <option value="small">2</option>
                  <option value="medium">4</option>
                  <option value="large">6</option>
                  <option value="large">more than 6</option>
                </select>
              </div>
              <div class="form__group">
                <label for="placement" className='p__cormorant '>Placement</label>
                <select name="Placement" id="placement">
                  <option selected disabled>Choose</option>
                  <option value="outdoor">Outdoor</option>
                  <option value="indoor">Indoor</option>
                  <option value="rooftop">rooftop</option>
                </select>
              </div>
              <div class="form__group">
                <label for="date" className='p__cormorant '>Date</label>
                <input type="date" id="date" name="Date" required />
              </div>
              <div class="form__group">
                <label for="time" className='p__cormorant '>Time</label>
                <input type="time" id="time" name="Time" required />
              </div>
              <div class="form__group form__group__full">
                <label for="note" className='p__cormorant '>Note</label>
                <textarea name="Note" id="note" rows="4"></textarea>
              </div>
              <button type="submit" class="custom__button">Book Table</button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </div >
  )
}

export default TableBook;