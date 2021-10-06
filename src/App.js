import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { ContextController } from "./context";
import About from "./pages/About";
import Home from "./pages/Home";
import Started from "./component/Started";
import Lyrics from "./component/tracks/Lyrics";
function App() {
  return (
    <ContextController>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/main" component={Started} />
          <Route exact path="/main/lyrics/track/:id" component={Lyrics} />
          <Route exact path="/about" component={About} />
        </Switch>
      </Router>
    </ContextController>
  );
}

export default App;
