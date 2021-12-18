import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./AdminLogin/Login";
import RefPartnerDetails from "./RefPartnerDetails";
import RefPartnerList from "./RefPartnerList";
import ChannelPartners from "./ChannelPartners";
import ReferedLeads from "./ReferedLeads";
import LeadDetails from "./LeadDetails";
import Fselist from "./Fselist";
import FseDetails from "./FseDetails";
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/dash" component={Dashboard} />
          <Route path="/rplist" component={RefPartnerList} />
          <Route path="/rpdetails/:Id" component={RefPartnerDetails} />

          <Route path="/chdetails" component={ChannelPartners} />
          <Route path="/fselist" component={Fselist} />
          <Route path="/fsedetails/:Id" component={FseDetails} />
          <Route path="/referedlead/:Id" component={ReferedLeads} />
          <Route path="/leadetails/:Id" component={LeadDetails} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
