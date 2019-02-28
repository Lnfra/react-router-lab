import React from "react";
import { Redirect } from "react-router-dom";

function TacosFeed({ match, history, userIsLoggedIn }) {
  const onClickBack = () => {
    history.push("/");
  };

  if (userIsLoggedIn) {
    return (
      <div>
        <h1>This is your TacosFeed</h1>
        <h2>{match.params.id}</h2>
        <button onClick={onClickBack}>Back</button>
      </div>
    );
  } else {
    return <Redirect to="/unauthorized" />;
  }
}

export default TacosFeed;
