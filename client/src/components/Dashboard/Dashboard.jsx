import './dashboard.css'
import { employees } from './data'
const Dashboard = () => {
    
    return (
        <section className="dashboard">
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
            <div className="dashboard-content">
                <div className="dashboard-slider">
                    <h2>Dashboard</h2>
                    <div className="slides">
                        <p>Yesterday</p>
                        <p className="active">Today</p>
                        <p>Week</p>
                        <p>Month</p>
                    </div>
                </div>
                <div className="dashboard-stats">
                    <div className="stat-item stat-item-section">
                        <h3>Daily sales</h3>
                        <div className="chart" id="areaChart"></div>
                    </div>
                    <div className="donut stat-item-section">
                        <div className="stat-item chart">
                            <div>
                                <h4>Total income</h4>
                                <select name="" id="">
                                    <option value="">Today</option>
                                    <option value="">Yesterday</option>
                                    <option value="">Last week</option>
                                    <option value="">Last month</option>
                                </select>
                            </div>
                            <div id="donutChart"></div>
                        </div>
                        <div className="stats-customers stat-item">
                            <h3>Customers</h3>
                            <p>-2.33%</p>
                            <h4>21,375</h4>
                            <span className="progress-bar"></span>
                        </div>
                        <div className="stats-customers stat-item">
                            <h3>Customers</h3>
                            <p>+32.40%</p>
                            <h4>256</h4>
                            <span className="progress-bar"></span>
                        </div>
                    </div>
                    <div className="stat-item stat-item-section trending_dishes" id="trending_dishes">
                        <div className="trending_dishes-header">
                            <h2>Trending dishes</h2>
                            <select name="" id="">
                                <option value="">Today</option>
                                <option value="">Yesterday</option>
                                <option value="">Last week</option>
                                <option value="">Last month</option>
                            </select>
                        </div>
                        <div className="trending-dishes-titles">
                            <h3>Dishes</h3>
                            <h3>Orders</h3>
                        </div>
                        <div  id="trending-dishes-list">

                        </div>
                    </div>
                    <div className="stat-item stat-item-section best-employees" id="best-employees">
                        <div className="best-employees__header">
                            <h2>Best employees</h2>
                            <select name="" id="">
                                <option value="">Today</option>
                                <option value="">Yesterday</option>
                                <option value="">Last week</option>
                                <option value="">Last month</option>
                            </select>
                        </div>
                        <div className="best-employees__titles">
                            <h3>Employee</h3>
                            <h3>Earnings</h3>
                        </div>
                        <div>
                            {
                                employees.map((employee, index) => (
                                    <div key={index}>
                                        <div className="best-employee-info">
                                            <img src={`employee.imgUrl`} alt={employee.name} className="best-employee__img"/>
                                            <div>
                                                <h4 className="best-employee__name">{employee.name}</h4>
                                                <p className="best-employee__position">{employee.position}</p>
                                            </div>
                                        </div>
                                        <p className="best-employee__earnings">{employee.earnings}</p>
                                    </div>

                                    )
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Dashboard