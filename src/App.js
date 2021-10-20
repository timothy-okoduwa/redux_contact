import "antd/dist/antd.css";

import Redu2 from "./Global2/Redu2";
import Home from "./Global2/Home";
import Friendpage from "./Global2/Friendpage";
import Businesspage from "./Global2/Businesspage";
import Addcontact from "./Global2/Addcontact";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Redu2 />
      </div>

      <Switch>
        <Route path="/" exact component={Home} />

        <Route path="/Friendpage" component={Friendpage} />
        <Route path="/Businesspage" component={Businesspage} />
        <Route path="/Addcontact" component={Addcontact} />
      </Switch>
    </Router>
  );
}

export default App;
