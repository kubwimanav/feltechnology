
import React from "react";
import { CgLogOut } from "react-icons/cg";
import { HiOutlineClock } from "react-icons/hi";
import profile from "/image.jpg";
import { RiLockPasswordLine } from "react-icons/ri";
import { RiSecurePaymentLine } from "react-icons/ri";
import { MdDashboard, MdOutlineHelp } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import '../styles/Sidebar.css'
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="profile12">
        <div className="profile1">
          <img src={profile} className="profile" />
          <p>Access Transport Company</p>
        </div>
        <div className="othermenus">
          <div className="menu">
            <p>Menu</p>
            <div className="linkside">
              <li>
                <MdDashboard className="icon" />
                <Link to="/" className="list_dash">
                  Dashboard
                </Link>
              </li>
              <li>
                <RiLockPasswordLine className="icon" />
                <Link to="/" className="list_dash">
                  Listening
                </Link>
              </li>
              <li>
                <HiOutlineClock  className="icon" />
                <Link to="activecar" className="list_dash">
                  Active Cars
                </Link>
              </li>
            </div>
          </div>
          <div className="othermenu">
            <p>Othermenu</p>
            <div className="linkside">
              <li>
                <RiSecurePaymentLine className="icon" />
                <a href="payment" className="list_dash">
                  Payments Details
                </a>
              </li>
              <li>
                <IoMdSettings className="icon" />
                <Link to="setting" className="list_dash">
                  Settings
                </Link>
              </li>
              <li>
                <MdOutlineHelp className="icon" />
                <Link to="helpcenter" className="list_dash">
                  Help Center
                </Link>
              </li>
            </div>
          </div>

          <div className="weekly">
            <p>weekly Report</p>
            <p>Your weekly Report is ready for dawnload</p>
            <button>Dawnload as Pdf</button>
          </div>
        </div>
      </div>
      <Link to="logout" className="logout">
        <CgLogOut />
        Logout
      </Link>
    </div>
  );
}

export default Sidebar