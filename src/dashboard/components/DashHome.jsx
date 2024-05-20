import React from 'react'
import { IoIosNotifications } from "react-icons/io";
import { MdFilterList } from "react-icons/md";
import { GiShakingHands } from "react-icons/gi";
import '../styles/DashHome.css'
import image from '/image.jpg'
function DashHome() {

      const data = [
        { id: 1, name: "John Doe", carNo: 324, age: 28 },
        { id: 2, name: "Jane Smith", carNo: 324, age: 34 },
        { id: 3, name: "Sam Green", carNo: 324, age: 45 },
      ];
    let i = 0;
  return (
    <div className="dashhomes">
      <div className="top">
        <input
          type="text"
          className="topclass"
          placeholder="Quick Search For anything
                  "
        />

        <div className="notification">
          <IoIosNotifications />
          <div className="homeprofile">
            <img src={image} className="dashhome" />
            <p>foden</p>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card1">
          <GiShakingHands />
          <div className="content">
            <div className="double">
              <p className="onek"> 500+</p>
              <p>Total car rented</p>
            </div>
          </div>
        </div>

        <div className="card1">
          <GiShakingHands />
          <div className="content">
            <div className="double">
              <p className="onek"> 78%</p>
              <p>Earnings</p>
            </div>
          </div>
        </div>

        <div className="card1">
          <GiShakingHands />
          <div className="content">
            <div className="double">
              <p className="onek"> 1k+</p>
              <p>Deals</p>
            </div>
          </div>
        </div>

        <div className="card1">
          <GiShakingHands />
          <div className="content">
            <div className="double">
              <p className="onek"> 1k+</p>
              <p>Deals</p>
            </div>
          </div>
        </div>

        <div className="card1">
          <GiShakingHands />
          <div className="content">
            <div className="double">
              <p className="onek"> 500+</p>
              <p>Companies</p>
            </div>
          </div>
        </div>
      </div>
      <div className="skils-table">
        <div className="customtables">
          <div className="customtable">
            <p>Live Car Status</p>

            <div style={{ display: "flex",gap:'20px' }}>
              <div>
                <MdFilterList  className='filtericon'/>
              </div>
              <p>Filter</p>
            </div>
          </div>

          <table className="custom-table">
            <thead>
              <tr>
                <th>No</th>
                <th>CarNo</th>
                <th>Driver</th>
                <th>Status</th>
                <th>Earnings</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row) => (
                <tr key={row.id}>
                  <td>{row.id}</td>
                  <td>{row.carNo}</td>
                  <td>{row.name}</td>
                  <td>{row.carNo}</td>
                  <td>{row.age}</td>
                  <td>
                    <button>details</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="skills">
          <p className="skillsparagraph">Top 5 Car rented out</p>
          <div>
            <div className="skillstext">
              <p>sportcar</p>
              <p>45651</p>
            </div>

            <div className="toolbarr">
              <div className="spanbar">
                <span className="divbar">90%</span>
              </div>
            </div>
          </div>

          <div>
            <div className="skillstext">
              <p>sportcar</p>
              <p>45651</p>
            </div>

            <div className="toolbarr">
              <div className="spanbar">
                <span className="divbar">90%</span>
              </div>
            </div>
          </div>

          <div>
            <div className="skillstext">
              <p>sportcar</p>
              <p>45651</p>
            </div>

            <div className="toolbarr">
              <div className="spanbar">
                <span className="divbar">90%</span>
              </div>
            </div>
          </div>
          <div>
            <div className="skillstext">
              <p>sportcar</p>
              <p>45651</p>
            </div>

            <div className="toolbarr">
              <div className="spanbar">
                <span className="divbar">90%</span>
              </div>
            </div>
          </div>
        </div>
          </div>
          

     <div>
              
     </div>


    </div>
  );
}

export default DashHome