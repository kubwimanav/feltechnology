import React from 'react'
import { RiSecurePaymentFill } from "react-icons/ri";
import { IoIosSettings, IoIosNotifications,IoMdKey,IoMdHeart} from "react-icons/io";
import { MdLanguage } from "react-icons/md";
import { BsFillPersonFill } from "react-icons/bs";
import '../styles/Setting.css'
import { Link, Outlet } from 'react-router-dom';
function Setting() {
  return (
    <div className="settings">
      <div className="settingcard">
        <div className="settingpage">
          <IoIosSettings className="settingicon" />
          <div className="setting-page-link">
            <Link to="settingform" className="setting-page-link-link">
              Settings
            </Link>
            <p className="settingparagraph2">Access The General Settings</p>
          </div>
        </div>

        <div className="settingpage">
          <BsFillPersonFill className="settingicon" />
          <div className="setting-page-link">
            <Link to="account" className="setting-page-link-link">
              Account
            </Link>
            <p className="settingparagraph2">Edit Your Password Information</p>
          </div>
        </div>
        <div className="settingpage">
          <IoIosNotifications className="settingicon" />
          <div className="setting-page-link">
            <Link to="notification" className="setting-page-link-link">
              Notification
            </Link>
            <p className="settingparagraph2">
              Control Your Notification History
            </p>
          </div>
        </div>
        <div className="settingpage">
          <MdLanguage className="settingicon" />
          <div className="setting-page-link">
            <Link className="setting-page-link-link">Language</Link>

            <p className="settingparagraph2">Change Your Language</p>
          </div>
        </div>
        <div className="settingpage">
          <IoMdKey className="settingicon" />
          <div className="setting-page-link">
            <Link to="changepassword" className="setting-page-link-link">
              changePassword
            </Link>
            <p className="settingparagraph2">Access To Your Account Password</p>
          </div>
        </div>
        <div className="settingpage">
          <IoMdHeart className="settingicon" />
          <div className="setting-page-link">
            <Link to="license" className="setting-page-link-link">
              License
            </Link>
            <p className="settingparagraph2">Terms and Condition</p>
          </div>
        </div>
        <div className="settingpage">
          <RiSecurePaymentFill  className="settingicon" />
          <div className="setting-page-link">
            <Link className="setting-page-link-link">PaymentMethod</Link>
            <p className="settingparagraph2">Means Of Payments</p>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Setting