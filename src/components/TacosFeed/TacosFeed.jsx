import React from "react";

function TacosFeed({ match, history }) {
  const onClickBack = () => { history.push("/")}
  return (
    <div>
      <h1>This is your TacosFeed</h1>
      <h2>{match.params.id}</h2>
      <button onClick={onClickBack}>Back</button>
    </div>
    
  );
}

export default TacosFeed;
