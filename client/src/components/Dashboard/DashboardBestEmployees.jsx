import { employees } from './data'

const DashboardBestEmployees = () => {
    return (
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
                        <div key={index} className='flex justify-between'>
                            <div className="best-employee-info">
                                <img src={employee.avatar} alt={employee.name} className="best-employee__img"/>
                                <div>
                                    <h4 className="best-employee__name">{employee.name}</h4>
                                    <p className="best-employee__position">{employee.position}</p>
                                </div>
                            </div>
                            <p className="best-employee__earnings text-black">{employee.earnings}</p>
                        </div>

                        )
                    )
                }
            </div>
        </div>
    )
}

export default DashboardBestEmployees