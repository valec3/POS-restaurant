
const DashboardDonutChart = () => {
    return (
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
    )
}

export default DashboardDonutChart