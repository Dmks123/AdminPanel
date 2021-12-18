import React from "react";
import profilepic from "./Assets/profilepic.png";
import PieChartIcon from "@mui/icons-material/PieChart";
import GroupIcon from "@mui/icons-material/Group";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import AddReferalPopup from "./AddReferalPopup";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import { Link } from "react-router-dom";
import adminprofile from "./Assets/adminprofile.png";
export default function AdminNav() {
  return (
    <div>
      <div className="sidenav">
        <div>
          <div className="d-flex">
            <div>
              <img src={adminprofile} className="profile_pic_sidenav" />
            </div>
            <div className="p-2 profile_details">
              <span>Robert Fox </span>
              <p className="mb-0">robert12@gmail.com</p>
            </div>
          </div>
          <div className="pt-5">
            <div className="">
              <Link to="/dash" className="side_menu_dashboardbtn">
                <PieChartIcon className="" />
                Dashboard
              </Link>
            </div>
          </div>
          <div className="mt-3">
            <div className="dropdown ">
              <button
                className="btn side_menu_partnersbtn dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <GroupIcon />
                Partners
                {/* <KeyboardArrowDownIcon /> */}
              </button>
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <a href="">
                  <Link to="/rplist" className="">
                    Referal Partners
                  </Link>
                </a>
                <a href="">
                  <Link to="/chdetails" className="">
                    Channel Partners
                  </Link>
                </a>
              </div>
            </div>
          </div>
          <div className="pt-3">
            <Link to="/fselist" className="side_menu_dashboardbtn1">
              <PieChartIcon className="" />
              FSE
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
