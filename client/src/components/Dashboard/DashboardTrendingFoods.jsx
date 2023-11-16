import { foods } from "./data"

const DashboardTrendingFoods = () => {
    return (
        <div>
            <div className="trending-dishes-list">
                {foods.map(food => (
                    <div className="trending-dish flex gap-2 mb-2" key={food.name}>
                        <img src={food.image} alt="" className="rounded-full w-12 h-12 object-cover" />
                        <div>
                            <p>{food.name}</p>
                            <p>{food.orders}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default DashboardTrendingFoods