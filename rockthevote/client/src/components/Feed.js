import React, { useContext } from "react";
import IssueForm from "./IssueForm.js";
import IssueList from "./IssueList.js";
import { UserContext } from "../context/UserProvider.js";

export default function Profile() {
  const {
    user: { username },
    getUserIssues,
    createIssue,
    issueComments,
    issues,
  } = useContext(UserContext);

  return (
    <div className="profile">
      <h1>Welcome {username}</h1>
      <h3>Post an issue</h3>
      <IssueForm createIssue={createIssue} />
      <div className="issues">
        <IssueList
          issues={issues}
          getIssues={getUserIssues}
          issueComments={issueComments}
        />
      </div>
    </div>
  );
}