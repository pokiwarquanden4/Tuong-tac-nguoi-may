import { faBars, faChartSimple, faCreditCard, faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCallback, useState } from "react";
import './index.scss'
import { navLink } from "../../routers";
import { useNavigate } from "react-router-dom";

interface NavBarLayoutProps {
    children: React.ReactNode;
}

const NavBarLayout = ({ children }: NavBarLayoutProps) => {
    const navigate = useNavigate()
    const [selectNav, setSelectNav] = useState(navLink.homePage.nav)

    const onClickNav = useCallback((nav: string) => {
        setSelectNav(nav)
        navigate(nav)
    }, [navigate])

    return <div>
        {children}
        <div className="bottom-nav">
            <FontAwesomeIcon onClick={() => onClickNav(navLink.homePage.nav)} className={`${selectNav === navLink.homePage.nav ? 'navActive' : ''}`} icon={faHouse}></FontAwesomeIcon>
            <FontAwesomeIcon onClick={() => onClickNav(navLink.credit.nav)} className={`${selectNav === navLink.credit.nav ? 'navActive' : ''}`} icon={faCreditCard}></FontAwesomeIcon>
            <FontAwesomeIcon onClick={() => onClickNav('chart')} className={`${selectNav === 'chart' ? 'navActive' : ''}`} icon={faChartSimple}></FontAwesomeIcon>
            <FontAwesomeIcon onClick={() => onClickNav(navLink.setting.nav)} className={`${selectNav === navLink.setting.nav ? 'navActive' : ''}`} icon={faBars}></FontAwesomeIcon>
        </div>
    </div>
}

export default NavBarLayout
