import DashboardBestEmployees from './DashboardBestEmployees'
import DashboardDonutChartContent from './DashboardDonutChartContent'
import DashboardHeader from './DashboardHeader'
import './Dashboard.css'
import DashboardAreaChart from './DashboardAreaChart'
import DashboardTrendingFoods from './DashboardTrendingFoods'

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
                        <DashboardAreaChart />
                    </div>
                    <DashboardDonutChartContent />
                    <div className="stat-item stat-item-section trending_dishes" id="trending_dishes">
                        <div className="trending_dishes-header mb-5">
                            <h2>Trending dishes</h2>
                            <select name="" id="">
                                <option value="">Today</option>
                                <option value="">Yesterday</option>
                                <option value="">Last week</option>
                                <option value="">Last month</option>
                            </select>
                        </div>
                        <div className="trending-dishes-titles">
                            <h3 className='font-semibold mb-2'>Dishes</h3>
                            <h3 className='font-semibold mb-2'>Orders</h3>
                        </div>
                        <div  id="trending-dishes-list">
                            <DashboardTrendingFoods />
                        </div>
                    </div>
                    <DashboardBestEmployees />
                </div>
            </div>
        </section>
    )
}

export default Dashboard