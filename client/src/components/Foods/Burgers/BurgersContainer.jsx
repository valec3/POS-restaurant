import { dataBurgerFoods } from "../mockdata" 
import defectImgFood from "../../../assets/img/dishes/default-img-food.jpg"

const BurgersContainer = () => {
    return (
        <section className="md:px-10">
            <header>
                <h2 className="font-GilroyBold text-4xl text-black mb-3">Burgers</h2>
            </header>
            <div className="grid md:grid-cols-4 gap-8">
                {
                    dataBurgerFoods.map((food) => (
                        <div key={food.id} className="rounded-[2rem] bg-white p-6 flex flex-col gap-1 items-center">
                            <img 
                                className="w-full h-60 object-cover rounded-md"
                                src={food.imgUrl || defectImgFood} 
                                alt="Foto de hamburguesa" 
                            />
                            <h2 className="font-bold text-black text-xl md:text-2xl">{food.name}</h2>
                            <p className="italic text-gray-500">{food.weight}</p>
                            <p className="text-primary text-2xl font-bold">$ {food.price}</p>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default BurgersContainer