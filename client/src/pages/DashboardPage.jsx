import {  Outlet} from "react-router-dom"
import Sidebar from "../components/Sidebar"
const DashboardPage = () => {
    return (
        <div className="h-screen flex">
            <Sidebar/>
            <main className="flex-1 overflow-y-auto pt-[3rem]">
                <Outlet/>
            </main>
        </div>
    )
}

export default DashboardPage