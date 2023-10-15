const DashboardHeader = () => {
    return (
        <header className="dashboard-header">
                <div className="dashboard-header-txt">
                    <a className="arrow-left" href="index.html">
                        <img src="./img/arrow-narrow.svg" alt=""/>
                    </a>
                    <p>Dashboard</p>
                    <img className="less-icon" src="./img/less-icon.svg" alt="menor icon"/>
                    <p>Sales statistics</p>
                </div>
                <div className="dashboard-search">
                    <img src="./img/notification-icon.svg" alt=""/>
                    <img src="./img/clock-icon.svg" alt=""/>
                    <div className="dashboard-search-input">
                        <img src="./img/search-icon.svg" alt=""/>
                        <input type="text" placeholder="Search..."/>
                    </div>
                </div>
        </header>
    )
}

export default DashboardHeader