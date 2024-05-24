import React from 'react'
import { CiStopwatch } from "react-icons/ci";
import { MdEdit } from "react-icons/md";
import { RiArrowDropDownLine, RiDeleteBin6Line } from "react-icons/ri";
import { MdDashboard, MdOutlineHelp } from "react-icons/md";
import activeimage from '/pexels5.png'
import '../styles/Activecar.css'
function Activecar() {

const tableData = [
  {
    id: 1,
    image: "pexels5.png",
    email: "example1@example.com",
    name: "payment from king",
    date: "12.3.2024",
    cartype: "hyundai",
    type: "card",
    amount: "$900",
    status: "Canceling",
  },
  {
    id: 2,
    image: "pexels5.png",
    email: "example2@example.com",
    name: "payment from king",
    date: "12.3.2024",
    cartype: "hyundai",
    type: "card",
    amount: "$700",
    status: "pending",
  },
  {
    id: 3,
    image: "pexels5.png",
    email: "example3@example.com",
    name: "payment from king",
    date: "12.3.2024",
    cartype: "hyundai",
    amount: "$600",
    type: "card",
    status: "Paid",
  },
  {
    id: 4,
    image: "pexels5.png",
    email: "example4@example.com",
    name: "payment from king",
    date: "12.3.2024",
    cartype: "hyundai",
    amount: "$500",
    type: "card",
    status: "Canceling",
  },
  {
    id: 5,
    image: "pexels5.png",
    email: "example5@example.com",
    name: "payment from king",
    date: "12.3.2024",
    cartype: "hyundai",
    amount: "$400",
    type: "card",
    status: "pending",
  },
  {
    id: 6,
    image: "pexels5.png",
    email: "example6@example.com",
    name: "payment from king",
    date: "12.3.2024",
    cartype: "hyundai",
    amount: "$300",
    type: "card",
    status: "pending",
  },
  {
    id: 6,
    image: "pexels5.png",
    email: "example6@example.com",
    name: "payment from king",
    date: "12.3.2024",
    cartype: "hyundai",
    amount: "$300",
    type: "card",
    status: "pending",
  },
  {
    id: 6,
    image: "pexels5.png",
    email: "example6@example.com",
    name: "payment from king",
    date: "12.3.2024",
    cartype: "hyundai",
    amount: "$300",
    type: "card",
    status: "pending",
  },
    ];
    let i = 0;

  return (
    <div className='active'>
      <div className="tableactiveparagraph">
        <p className="paragraphtable1">Payment Details</p>
        <p className="paragraphtable2">Add a car</p>
      </div>
      <div className="activecar">
        <div className="activecard">
          <div className="activecard1">
            <div className="activecard12">
              <div>
                <p>Toyota ModelX</p>
                <p>2021</p>
              </div>

              <p>120,000/day</p>
            </div>
            <img src={activeimage} />
          </div>
          <div className="activecard1">
            <div className="activecard12">
              <div>
                <p>Toyota ModelX</p>
                <p>2021</p>
              </div>

              <p>120,000/day</p>
            </div>
            <img src={activeimage} />
          </div>

          <div className="activecard1">
            <div className="activecard12">
              <div>
                <p>Toyota ModelX</p>
                <p>2021</p>
              </div>

              <p>120,000/day</p>
            </div>
            <img src={activeimage} />
          </div>
          <div className="activecard1">
            <div className="activecard12">
              <div>
                <p>Toyota ModelX</p>
                <p>2021</p>
              </div>

              <p>120,000/day</p>
            </div>
            <img src={activeimage} />
          </div>

          <div className="activecard1">
            <div className="activecard12">
              <div>
                <p>Toyota ModelX</p>
                <p>2021</p>
              </div>

              <p>120,000/day</p>
            </div>
            <img src={activeimage} />
          </div>
        </div>
     
          <table className="tableactive">
            <thead className="header-images">
              <tr className="header-imag">
                <th className="thactive">No</th>
                <th className="thactive">CarDriver</th>
                <th className="thactive">Phone</th>
                <th className="thactive">Date</th>
                <th className="thactive">Cartype</th>
                <th className="thactive">ReturnDate</th>
                <th className="thactive">Type</th>
                <th className="thactive">Totalprice</th>
                <th className="thactive">Action</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((data) => (
                <tr>
                  <td className="id-icon">
                    <MdDashboard className="icon" />
                    <p>#{(i += 1)}</p>
                  </td>
                  <td className="tdactive ">
                    <img src={data.image} className="dataimage" />
                  </td>
                  <td className="tdactive ">{data.name}</td>
                  <td className="tdactive ">{data.date}</td>
                  <td className="tdactive ">{data.cartype}</td>
                  <td className="tdactive ">{data.date}</td>
                  <td className="tdactive ">{data.type}</td>
                  <td className="totalprice">{data.amount}</td>
                  <td className="activeedit-delite">
                    <MdEdit />
                    <RiDeleteBin6Line className="active-delite" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
      
      </div>
    </div>
  );
}

export default Activecar