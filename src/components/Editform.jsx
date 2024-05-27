import React from 'react'
import { IoClose } from "react-icons/io5";
function Editform({handlemodal}) {
  return (
      <div  className='editform'>
          <div style={{ display: 'flex', gap:'2px'}}>
              <button className='personal-edit-button'>Personal information</button>
              <button className='other-edit-button'>Other information</button>
          </div>
      <div className="edit-personalinfo">
        <div className="addcar-paragragh-icon">
          <p>Create deal</p>
          <IoClose className="addcar-icon" onClick={handlemodal} />
        </div>

        <form action="" className="addcar-form">
          <div className="label-input-addcar">
            <label htmlFor=""> Car type</label>
            <input type="text"  placeholder='Hyundai'/>
          </div>
          <div className="label-input-addcar">
            <label htmlFor=""> Car image</label>
            <input type="text" />
          </div>
          <div className="label-input-date">
            <label htmlFor=""> Creation date</label>
            <input type="date" className="label-date-addcar" />
          </div>
          <div className="label-input-date">
            <label htmlFor=""> Return date</label>
            <input type="date" className="label-date-addcar" />
          </div>
          <div className="label-input-addcar">
            <label htmlFor=""> Payment method</label>
            <input type="text" />
          </div>
          <div className="label-input-addcar">
            <label htmlFor=""> Total Price</label>
            <input type="text"  placeholder='$18...'/>
          </div>
          <button className="addcar-button">Save</button>
        </form>
      </div>
    </div>
  );
}

export default Editform