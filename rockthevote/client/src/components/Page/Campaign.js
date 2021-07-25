import React, { useContext } from "react";
import IssueList from "../Issue/IssueList.js";
import { UserContext } from "../../context/UserProvider.js";

const Campaign = () => {
  const {
    user: { username },
    issues,
  } = useContext(UserContext);

  return (
    <div className="profile">
      <h1 className="greet">Hello {username}</h1>
      <h3>Current Campaigns</h3>   
      <div className="issues">
        <IssueList
          issues={issues}
        />
      </div>
    </div>
  );
}

export default Campaign;