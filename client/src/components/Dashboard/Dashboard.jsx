import DashboardBestEmployees from './DashboardBestEmployees'
import DashboardDonutChart from './DashboardDonutChart'
import DashboardHeader from './DashboardHeader'
import './Dashboard.css'

const Dashboard = () => {
    
    return (
        <section className="dashboard">
            <DashboardHeader />
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
                    <DashboardDonutChart />
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
                    <DashboardBestEmployees />
                </div>
            </div>
        </section>
    )
}

export default Dashboard