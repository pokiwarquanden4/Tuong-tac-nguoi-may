import NavBarLayout from "../layout/NavBarLayout";
import NonNavBarLayout from "../layout/NonNavBarLayout";
import Chart from "../pages/Chart/chart";
import SignUp from "../pages/CreateAccount/signUp";
import Credit from "../pages/Credit/credit";
import HomePage from "../pages/HomePage/homepage";
import Login from "../pages/Login/login";
import AddGroup from "../pages/Setting/CreateGroup/AddGroup/AddGroup";
import Groups from "../pages/Setting/CreateGroup/createGroup";
import GroupDetails from "../pages/Setting/CreateGroup/GroupDetails/GroupDetails";
import EditProfile from "../pages/Setting/EditProfile/editProfile";
import History from "../pages/Setting/History/history";
import Setting from "../pages/Setting/setting";

export const navLink = {
    homePage: {
        nav: '/',
        layout: NavBarLayout,
        content: HomePage
    },
    setting: {
        nav: '/setting',
        layout: NavBarLayout,
        content: Setting
    },
    login: {
        nav: '/login',
        layout: NonNavBarLayout,
        content: Login
    },
    signup: {
        nav: '/signup',
        layout: NonNavBarLayout,
        content: SignUp
    },
    credit: {
        nav: '/credit',
        layout: NavBarLayout,
        content: Credit
    },
    editProfile: {
        nav: '/setting/editProfile',
        layout: NonNavBarLayout,
        content: EditProfile
    },
    history: {
        nav: '/setting/history',
        layout: NonNavBarLayout,
        content: History
    },
    groups: {
        nav: '/setting/groups',
        layout: NonNavBarLayout,
        content: Groups
    },
    groupsDetails: {
        nav: '/setting/groups/details',
        layout: NonNavBarLayout,
        content: GroupDetails
    },
    addGroup: {
        nav: '/setting/groups/add',
        layout: NonNavBarLayout,
        content: AddGroup
    },
    chart: {
        nav: '/chart',
        layout: NavBarLayout,
        content: Chart
    }
}

export const urlList = [
    {
        url: navLink.homePage.nav,
        content: navLink.homePage
    },
    {
        url: navLink.chart.nav,
        content: navLink.chart
    },
    {
        url: navLink.signup.nav,
        content: navLink.signup
    },
    {
        url: navLink.credit.nav,
        content: navLink.credit
    },
    {
        url: navLink.setting.nav,
        content: navLink.setting
    },
    {
        url: navLink.editProfile.nav,
        content: navLink.editProfile
    },
    {
        url: navLink.history.nav,
        content: navLink.history
    },
    {
        url: navLink.groups.nav,
        content: navLink.groups
    },
    {
        url: navLink.login.nav,
        content: navLink.login
    },
    {
        url: navLink.groupsDetails.nav,
        content: navLink.groupsDetails
    },
    {
        url: navLink.addGroup.nav,
        content: navLink.addGroup
    }
]
