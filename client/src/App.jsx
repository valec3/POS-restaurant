import './App.css'
import { Routes,Route,BrowserRouter, Navigate } from 'react-router-dom'
import DashboardPage from './pages/DashboardPage'
import Dashboard from './components/Dashboard/Dashboard'
import Bills from './components/Bills/Bills'

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                <Route path="/" element={<h1>Home</h1>} />
                <Route path="/about" element={<h1>About</h1>} />
                <Route path="/dashboard" element={<DashboardPage/>}>
                    <Route index={true} element={<Navigate to='/dashboard/stats'/>} />
                    <Route path="/dashboard/stats" element={<Dashboard/>} />
                    <Route path="/dashboard/settings" element={<h2>Settings dashboard</h2>} />
                    <Route path="/dashboard/profile" element={<h2>Profile dashboard</h2>} />
                    <Route path="/dashboard/notifications" element={<h2>Notifications dashboard</h2>} />
                    <Route path="/dashboard/messages" element={<h2>Messages dashboard</h2>} />
                    <Route path="/dashboard/employees" element={<h2>Employees dashboard</h2>} />
                    <Route path="/dashboard/food-drinks" element={<h2>Foods drinks</h2>} />
                    <Route path="/dashboard/bills" element={<Bills/>} />
                    <Route path="/dashboard/support" element={<h2>Support</h2>} />
                </Route>
                <Route path="*" element={<h1>Not Found</h1>} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
