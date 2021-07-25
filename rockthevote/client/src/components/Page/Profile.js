import React, { useContext } from "react";
import IssueForm from "../Issue/IssueForm.js";
import IssueList from "../Issue/IssueList.js";
import { UserContext } from "../../context/UserProvider.js";

const Profile = () => {
  const {
    user: { username },
    getIssuesByUser,
    createIssue,
    issueComments,
    issues,
  } = useContext(UserContext);

  return (
    <div className="profile">
      <h1 className="greet">Welcome {username}</h1>
      <h3>Post an Issue</h3>
      <IssueForm createIssue={createIssue} />
    
      <div className="issues">
        <IssueList
          issues={issues}
          getIssues={getIssuesByUser}
          issueComments={issueComments}
        />
      </div>
    </div>
  );
}

export default Profile;