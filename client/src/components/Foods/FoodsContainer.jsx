import { Outlet } from "react-router-dom"

const FoodsContainer = () => {
    return (
        <section className="md:px-10 h-full">
            <Outlet />
        </section>
    )
}

export default FoodsContainer