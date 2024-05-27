
import React from "react";
import { CgLogOut } from "react-icons/cg";
import { HiOutlineClock } from "react-icons/hi";
import profile from "/image.jpg";
import { RiLockPasswordLine } from "react-icons/ri";
import { RiSecurePaymentLine } from "react-icons/ri";
import { MdDashboard, MdOutlineHelp } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { MdOutlineAppBlocking } from "react-icons/md";
import '../styles/Sidebar.css'
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="profile12">
        <div className="profile1">
          <img src={profile} className="profile" />
          <div className="profile-header-para">
            <p className="profile-header-para1">Access Transport</p>
            <p className="profile-header-para2"> Company</p>
          </div>
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
                <Link to="listening" className="list_dash">
                  Listening
                </Link>
              </li>
              <li>
                <MdOutlineAppBlocking  className="icon" />
                <Link to="deal" className="list_dash">
                  Deals
                </Link>
              </li>
              <li>
                <HiOutlineClock className="icon" />
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
                <Link href="payments" className="list_dash">
                  Payments Details
                </Link>
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
            <p> Weekly Report</p>
            <p className="weeklypargraph">
              Your weekly Report is ready for dawnload
            </p>
            <button>Dawnload</button>
          </div>
        </div>
      </div>
      <Link to="login" className="logout">
        <CgLogOut style={{ color: "red" }} />
        Logout
      </Link>
    </div>
  );
}

export default Sidebar