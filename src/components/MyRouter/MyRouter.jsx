import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import NavLinks from "../NavLinks/NavLinks";
import HomePage from "../HomePage/HomePage";
import TwitterFeed from "../TwitterFeed/TwitterFeed";
import TacosFeed from "../TacosFeed/TacosFeed";
import Unauthorized from "../Unauthorized/Unauthorized";

function MyRouter() {
  const data = "Hello World";

  return (
    <BrowserRouter>
      <div>
        <NavLinks />
        <Switch>
          <Route
            path="/twitter"
            render={props => <TwitterFeed data={data} {...props} />}
          />
          <Route path="/tacos/:id/:userid" component={TacosFeed} />
          <Route
            path="/tacos"
            render={props => <TacosFeed userIsLoggedIn={false} {...props} />}
          />
          <Route path="/unauthorized" component={Unauthorized} />
          <Route path="/" exact component={HomePage} />
          <Redirect to="/" />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default MyRouter;
