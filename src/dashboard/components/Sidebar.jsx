import React from 'react'
import profile from "/image.jpg";
import { MdDashboard,MdOutlineHelp  } from "react-icons/md";
import '../styles/Sidebar.css'
import { IoMdSettings } from "react-icons/io";
import { Link } from 'react-router-dom';
function Sidebar() {
  return (
    <div className="sidebar">
      <div>
        <div className="profile1">
          <img src={profile} className="profile" />
          <p>Access Transport Company</p>
        </div>
        <div className="othermenus">
          <div className="menu">
            <p>menu</p>
            <div className="linkside">
              <li>
                <MdDashboard className="icon" />
                <Link to="toure" className="list_dash">
                  Dashboard
                </Link>
              </li>
              <li>
                <IoMdSettings className="icon" />
                <Link to="toure" className="list_dash">
                  Listening
                </Link>
              </li>
              <li>
                <IoMdSettings className="icon" />
                <Link to="toure" className="list_dash">
                  Active Cars
                </Link>
              </li>
            </div>
          </div>
          <div className="othermenu">
            <p>othermenu</p>
            <div className="linkside">
              <li>
                <IoMdSettings className="icon" />
                <Link to="toure" className="list_dash">
                  Payments Details
                </Link>
              </li>
              <li>
                <IoMdSettings className="icon" />
                <Link to="toure" className="list_dash">
                  Settings
                </Link>
              </li>
              <li>
                <MdOutlineHelp className="icon" />
                <Link to="toure" className="list_dash">
                  Help Center
                </Link>
              </li>
            </div>
          </div>

          <div className="weekly">
            <p>weekly Report</p>
             <p>Your weekly Report
             is ready for dawnload</p>
            <button>Dawnload as Pdf</button>
          </div>
        </div>
      </div>
      <Link to="logout" className="logout">
        Logout
      </Link>
    </div>
  );
}

export default Sidebar