
import Dashboard from "../component/admin/Dashboard";
import Profile from "../component/admin/Profile";


const routes=[
       {path : '/admin' ,exact:true ,name:'admin'},
       {path :'/admin/dashboard', exact:true, name:'dashboard',component:Dashboard},
       {path :'/admin/profile',exact:true  , name:'profile' ,component:Profile},
];
export default  routes;