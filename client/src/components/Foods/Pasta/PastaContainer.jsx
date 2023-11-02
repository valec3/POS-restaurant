import FoodCard from "../FoodCard"
import {dataPastaFoods} from "../mockdata.js"
import defectImgFood from "../../../assets/img/dishes/default-img-pasta.webp"

const PastaContainer = () => {
    return (
        <section className="md:px-10">
            <header>
                <h2 className="font-GilroyBold text-4xl text-black mb-3">Burgers</h2>
            </header>
            <div className="grid md:grid-cols-4 gap-8">
                {
                    dataPastaFoods.map((food) => (
                        <FoodCard key={food.id} food={food} defectImgFood={defectImgFood}  />
                    ))
                }
            </div>
        </section>
    )
}

export default PastaContainer