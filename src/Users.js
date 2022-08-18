import React from "react";
import "./style.css";
// import { icons } from "react-icons";
import { AiOutlineMail } from "react-icons/ai";

const Users = ({ users, loading }) => {
  return loading ? (
    <div id="main"></div>
  ) : (
    // <></>
    <div className="row" id="main">
      {users.map((user) => (
        <div>
          <div className="info">
            <img src={user.avatar} alt="" className="img" />
            <h2 style={{ textAlign: "center" }}>ID: {user.id}</h2>
            <p className="name">
              {user.first_name} {user.last_name}
            </p>

            <p className="email">
              <AiOutlineMail style={{ paddingTop: "4px" }} />
              {user.email}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Users;
