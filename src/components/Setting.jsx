import React from 'react'
import { IoIosSettings } from "react-icons/io";
import '../styles/Setting.css'
import { Link, Outlet } from 'react-router-dom';
function Setting() {
  return (
    <div className="settings">
      <div className="settingcard">
        <div className="settingpage">
          <IoIosSettings className="settingicon" />
          <div>
            <Link to="settingform">Settings</Link>
            <p className="settingparagraph2">Access The General Settings</p>
          </div>
        </div>

        <div className="settingpage">
          <IoIosSettings className="settingicon" />
          <div>
            <Link to="account">Account</Link>
            <p className="settingparagraph2">Edit Your Password Information</p>
          </div>
        </div>
        <div className="settingpage">
          <IoIosSettings className="settingicon" />
          <div>
            <Link to="notification">Notification</Link>
            <p className="settingparagraph2">
              Control Your Notification History
            </p>
          </div>
        </div>
        <div className="settingpage">
          <IoIosSettings className="settingicon" />
          <div>
            <Link>Language</Link>

            <p className="settingparagraph2">Change Your Language</p>
          </div>
        </div>
        <div className="settingpage">
          <IoIosSettings className="settingicon" />
          <div>
            <Link to="changepassword">changePassword</Link>
            <p className="settingparagraph2">Access To Your Account Password</p>
          </div>
        </div>
        <div className="settingpage">
          <IoIosSettings className="settingicon" />
          <div>
            <Link to="license">License</Link>
            <p className="settingparagraph2">Terms and Condition</p>
          </div>
        </div>
        <div className="settingpage">
          <IoIosSettings className="settingicon" />
          <div>
            <Link>PaymentMethod</Link>
            <p className="settingparagraph2">Means Of Payments</p>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Setting