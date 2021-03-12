
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import Unarchive from "@material-ui/icons/Unarchive";
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import NotificationsIcon from '@material-ui/icons/Notifications';
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import User from "./views/Users/User";
import TableList from "views/TableList/TableList.js";
import Rooms from "./views/Rooms/Room";
import UpgradeToPro from "./views/UpgradeToPro/UpgradeToPro";
import NotificationsPage from "views/Notifications/Notifications.js";
import Employee from "./views/Employees/Employee";
import Hotel from "./views/Hotels/Hotel";
import Role from "./views/Roles/Role";
import CreateUser from "./views/Users/CreateUser";
import EditUser from "./views/Users/EditUser";
import DeleteUser from "./views/Users/DeleteUser";
import Login from "./views/LoginAdmin/Login";
import UserProfile from "./views/UserProfile/UserProfile";
import HomeBefore from "./viewHome/HomeBefore/HomeBefore";
import LoginHome from "./viewHome/LoginHome/LoginHome";
import SignUp from "./viewHome/signUp/SignUp";
import HomeAfter from "./viewHome/HomeAfter/HomeAfter";
// core components/views for RTL layout


const dashboardRoutes = [
    // ===================admin========================
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin"

  },
  {
    path: "/users",
    name: "User",

    icon: Person,
    component: User,
    layout: "/admin"
  },
  {
    path: "/employee",
    name: "Employee",

    icon: AssignmentIndIcon,
    component: Employee,
    layout: "/admin"
  },
  {
    path: "/table",
    name: "Table List",

    icon: "content_paste",
    component: TableList,
    layout: "/admin"
  },
  {
    path: "/typography",
    name: "Hotel",

    icon: AccountBalanceIcon,
    component: Hotel,
    layout: "/admin"
  },
  {
    path: "/rooms",
    name: "Room",

    icon: MeetingRoomIcon,
    component: Rooms,
    layout: "/admin"
  },
  {
    path: "/roles",
    name: "Role",

    icon: BorderColorIcon,
    component: Role,
    layout: "/admin"
  },
  {
    path: "/notifications",
    name: "Notification",

    icon: NotificationsIcon,
    component: NotificationsPage,
    layout: "/admin"
  },

  {
    path: "/upgrade-to-pro",
    name: "Upgrade To PRO",
    icon: Unarchive,
    component: UpgradeToPro,
    layout: "/admin"
  },
  {
    path: "/userProfile",
    name: "",

    icon: "",
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/createUser",
    name: "create",
    icon: "",
    component: CreateUser,
    layout: "/admin"

  },
  {
    path: "/editUser",
    name: "",
    icon: "",
    component: EditUser,
    layout: "/admin"
  },
  {
    path: "/deleteUser",
    name: "",
    icon: "",
    component: DeleteUser,
    layout: "/admin"
  },
  {
    path: "/login",
    name: "",
    icon: "",
    component: Login,
    layout: "/admin"

  },


//=================================Home======================


  {
    path: "/home",
    name: "",
    icon: "",
    component: HomeBefore,
    layout: ""
  },
  {
    path: "/HaLong",
    name: "",
    icon: "",
    component: HomeAfter,
    layout: ""
  },
  {
    path: "/loginHome",
    name: "",
    icon: "",
    component: LoginHome,
    layout: ""
  },
  {
    path: "/signUpHome",
    name: "",
    icon: "",
    component: SignUp,
    layout: ""
  },


];

export default dashboardRoutes;
