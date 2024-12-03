import NavBarLayout from "../layout/NavBarLayout";
import NonNavBarLayout from "../layout/NonNavBarLayout";
import HomePage from "../pages/HomePage/homepage";
import Login from "../pages/Login/login";

const navLink = {
    homePage: {
        layout: NavBarLayout,
        content: HomePage
    },
    login: {
        layout: NonNavBarLayout,
        content: Login
    }
}

export const urlList = [
    {
        url: '/',
        content: navLink.homePage
    },
    {
        url: '/login',
        content: navLink.login
    }
]
