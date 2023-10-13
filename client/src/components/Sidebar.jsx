import { useNavigate } from "react-router-dom"
import {billIcon,
    dashboardIcon,
    hamburgerIcon,
    settingsIcon,
    notificationIcon,
    shoppingIcon,
    messagesIcon,
    supportIcon
} from "../assets/icons/"

const Sidebar = () => {
    const navigate = useNavigate()
    const optionsAside = [
        {
            name: "Dashboard",
            icon: dashboardIcon,
            link: "/dashboard/stats"
        },
        {
            name: "Food & Drinks",
            icon: hamburgerIcon,
            link: "/dashboard/food-drinks"
        },
        {
            name: "Messages",
            icon: messagesIcon,
            link: "/dashboard/messages"
        },
        {
            name: "Bills",
            icon: billIcon,
            link: "/dashboard/bills"
        },
        {
            name: "Settings",
            icon: settingsIcon,
            link: "/dashboard/settings"
        },
        {
            name: "Notifications",
            icon: notificationIcon,
            link: "/dashboard/notifications"
        },
        {
            name: "Support",
            icon: supportIcon,
            link: "/dashboard/support"
        }
    ]
    const handleClickNavigate = (link) => {
        navigate(link)
    }
    return (
        <aside className="aside">
            <header>
                <img className="logo" src={shoppingIcon} alt="l"/>
                <h1>
                    Smart<span className="aside-title-mod">POS</span>
                </h1>
            </header>
            <div className="nav-container">
                <nav className="navbar">
                    {
                        optionsAside.map((option,index) => {
                            return (
                                <a className="navbar-item" 
                                    key={index} 
                                    onClick={()=>handleClickNavigate(option.link)}
                                >
                                    <img src={option.icon} alt="icono"/>
                                    <p>{option.name}</p>
                                </a>
                            )
                        })
                    }
                </nav>
                <div className="aside-profile">
                    <div>
                        <picture className="aside-profile-img">
                            <img src="./img/perfil-woman.jpg" alt="foto de perfil"/>
                        </picture>
                        <h3>Theresa Webp</h3>
                        <p>Waiter . 4h 56m</p>
                    </div>
                    <a href="#" className="btn">Open profile</a>
                </div>
            </div>
            <p className="copy">&copy; 2020 SmartPOS App</p>
        </aside>
    )
}

export default Sidebar