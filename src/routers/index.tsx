import NavBarLayout from "../layout/NavBarLayout";
import NonNavBarLayout from "../layout/NonNavBarLayout";
import SignUp from "../pages/CreateAccount/signUp";
import Credit from "../pages/Credit/credit";
import HomePage from "../pages/HomePage/homepage";
import Login from "../pages/Login/login";
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
    }
}

export const urlList = [
    {
        url: navLink.homePage.nav,
        content: navLink.homePage
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
        url: navLink.login.nav,
        content: navLink.login
    }
]
