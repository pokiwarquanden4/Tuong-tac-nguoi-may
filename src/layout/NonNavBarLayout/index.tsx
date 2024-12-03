interface NonNavBarLayoutProps {
    children: React.ReactNode;
}

const NonNavBarLayout = ({ children }: NonNavBarLayoutProps) => {
    return <div>
        {children}
    </div>
}

export default NonNavBarLayout