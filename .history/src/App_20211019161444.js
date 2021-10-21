
import MasterLayouts from './layouts/admin/MasterLayouts';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
import Dashboard from './component/admin/Dashboard';
import Profile from './component/admin/Profile';
import Home from './component/frontend/Home';
import Register from './component/frontend/auth/Register';
import Login from './component/frontend/auth/Login';
import CategoryComponent from './component/admin/CategoryComponent';
import axios from 'axios';

axios.defaults.baseURL="http://127.0.0.1:8000";
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.withCredentials = true;


function App() {
  return (
     <Router>

    
       <Switch>
       
        <Route path="/"   exact component={Home} />
        <CategotyListe
        <Route  exact   path="/categorys"  component={CategoryComponent} />
        <Route  exact path="/register" component={Register}  />
        <Route exact path="/login" component={Login} />
         <Route   exact path="/admin/dashboard"  component={Dashboard} />
         <Route  exact path="/admin/profile"  component={Profile} />
       </Switch>
    
     </Router>
  );
}

export default App;
