import React from "react";
import { CiStopwatch } from "react-icons/ci";
import { RiArrowDropDownLine } from "react-icons/ri";
import { MdDashboard, MdOutlineHelp } from "react-icons/md";
import '../styles/Payment.css'
const tableData = [
  {
    id: 1,
    image: "pexels2.jpg",
    email: "example1@example.com",
    name: "payment from king",
    date: "12.3.2024",
    amount: "$900",
    status: "Canceling",
  },
  {
    id: 2,
    image: "pexels4.jpg",
    email: "example2@example.com",
    name: "payment from king",
    date: "12.3.2024",
    amount: "$700",
    status: "pending",
  },
  {
    id: 3,
    image: "pexels2.jpg",
    email: "example3@example.com",
    name: "payment from king",
    date: "12.3.2024",
    amount: "$600",
    status: "Paid",
  },
  {
    id: 4,
    image: "pexels5.jpg",
    email: "example4@example.com",
    name: "payment from king",
    date: "12.3.2024",
    amount: "$500",
    status: "Canceling",
  },
  {
    id: 5,
    image: "pexels4.jpg",
    email: "example5@example.com",
    name: "payment from king",
    date: "12.3.2024",
    amount: "$400",
    status: "pending",
  },
  {
    id: 6,
    image: "pexels3.jpg",
    email: "example6@example.com",
    name: "payment from king",
    date: "12.3.2024",
    amount: "$300",
    status: "pending",
  },
  {
    id: 6,
    image: "pexels2.jpg",
    email: "example6@example.com",
    name: "payment from king",
    date: "12.3.2024",
    amount: "$300",
    status: "pending",
  },
  {
    id: 6,
    image: "pexels1.jpg",
    email: "example6@example.com",
    name: "payment from king",
    date: "12.3.2024",
    amount: "$300",
    status: "pending",
  },
];

function Payment() {
  return (
    <div className="App">
      <div className="tablepaymentparagraph">
        <p className="paragraphtable1">Payment Details</p>
        <p className="paragraphtable2">
          <CiStopwatch  className="tableicon "/>
          Last 30 days
          <RiArrowDropDownLine  className="tableicon"/>
        </p>
      </div>

      <header className="App-header">
        <table className="tablepayment">
          <thead className="head">
            <tr className="header-images">
              <th>
                <MdDashboard className="icon" />
              </th>
              <th >Car</th>
              <th>Transaction</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((data) => (
              <tr>
                <td>
                  <MdDashboard className="icon" />
                </td>
                <td>
                  <img src={data.image} className="dataimage" />
                </td>
                <td>{data.name}</td>
                <td>{data.date}</td>
                <td>{data.amount}</td>
                <td>{data.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default Payment;
