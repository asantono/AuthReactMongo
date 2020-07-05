import React from "react";
import { useDispatch } from "react-redux";
import { getSecret, logoutUser } from "../redux/actions/authActions";

const Header = () => {
  const dispatch = useDispatch();

  return (
    <div className="header">
      <div className="header__item" onClick={(e) => dispatch(getSecret())}>
        SECRET!!!
      </div>
      <div className="header__item" onClick={(e) => dispatch(logoutUser())}>
        Logout
      </div>
    </div>
  );
};

export default Header;
