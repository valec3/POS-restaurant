import './App.css'
import { Routes,Route,BrowserRouter, Navigate } from 'react-router-dom'
import DashboardPage from './pages/DashboardPage'
import Dashboard from './components/Dashboard/Dashboard'
import Bills from './components/Bills/Bills'
import Home from './components/Home'
import useAuth from './hooks/useAuth'
import Profile from './components/Profile/Profile'
import ProtectedRoute from './components/ProtectedRoute'
import FoodsContainer from './components/Foods/FoodsContainer'
import CategoriesFoods from './components/Foods/Categories/CategoriesFoods'
import BurgersContainer from './components/Foods/Burgers/BurgersContainer'

function App() {
    const { auth }= useAuth()

    return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/about" element={<h1>About</h1>} />
                <Route path="/dashboard" element={<ProtectedRoute isAllowed={auth}/>}>
                    <Route path='/dashboard' element={<DashboardPage/>}>
                        <Route index={true} element={<Dashboard/>} />
                        <Route path="/dashboard/settings" element={<h2>Settings dashboard</h2>} />
                        <Route path="/dashboard/profile" element={<Profile/>} />
                        <Route path="/dashboard/notifications" element={<h2>Notifications dashboard</h2>} />
                        <Route path="/dashboard/messages" element={<h2>Messages dashboard</h2>} />
                        <Route path="/dashboard/employees" element={<h2>Employees dashboard</h2>} />
                        <Route path="/dashboard/food-drinks" element={<FoodsContainer/>}>
                            <Route index={true} element={<CategoriesFoods/>} />
                            <Route path="/dashboard/food-drinks/burgers" element={<BurgersContainer/>} />
                            <Route path='/dashboard/food-drinks/pizzas' element={<h2>Pizzas</h2>} />
                            <Route path='/dashboard/food-drinks/drinks' element={<h2>Drinks</h2>} />
                            <Route path='/dashboard/food-drinks/wok' element={<h2>Wok</h2>} />
                            <Route path='/dashboard/food-drinks/pasta' element={<h2>Pasta</h2>} />
                            <Route path='/dashboard/food-drinks/desserts' element={<h2>Desserts</h2>} />
                            <Route path='/dashboard/food-drinks/*' element={<Navigate to='/dashboard/food-drinks'/>} />
                        </Route>
                        <Route path="/dashboard/bills" element={<Bills/>} />
                        <Route path="/dashboard/support" element={<h2>support</h2>} />
                        <Route path="/dashboard/*" element={<Navigate to='/dashboard'/>} />
                    </Route>
                </Route>
                <Route path="*" element={<h1>Not Found</h1>} />
            </Routes>
        </BrowserRouter>
    </>
    )
}

export default App

