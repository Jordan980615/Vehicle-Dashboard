import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Vehicle from "./components/vehicle.component"
import create from "./components/create.component"
import Updates from "./components/update.component"
// import deletes from "./components/delete.component"



function App() {
  return (
    <Router>
      <div>
        <Route path="/" exact component={Vehicle} />
        <Route path="/create" component={create} />
        {/* <Route path="/update" component={updates} /> */}
        {<Route path = "/update" component={()=> <Updates title={""}/> } />}
        {/* <Route path="/update" render={(props)=> <updates text="HelloWorld" {...props}/> } /> */}
        {/* <Route path="/delete" component={deletes} /> */}
      </div>
    </Router>
  );
}

export default App;
