interface NavBarLayoutProps {
    children: React.ReactNode;
}

const NavBarLayout = ({ children }: NavBarLayoutProps) => {
    return <div>
        {children}
    </div>
}

export default NavBarLayout