import React from 'react'
import { MdFilterList } from "react-icons/md";
import made from '/image.jpg'
import '../styles/Table.css'

function Table() {

         const data = [
           { id: 1, name: "John Doe", carNo: 324, age: 28 },
           { id: 2, name: "Jane Smith", carNo: 324, age: 34 },
           { id: 3, name: "Sam Green", carNo: 324, age: 45 },
         ];
         let i = 0;
  return (
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
              <tr className='tablehead'>
                <th >No</th>
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
                      <td><img src={ made}  className='tableimage'/>{row.name}</td>
                  <td>{row.carNo}</td>
                  <td>{row.age}</td>
                  <td>
                    <button className='buttontable'>details</button>
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
  )
}

export default Table