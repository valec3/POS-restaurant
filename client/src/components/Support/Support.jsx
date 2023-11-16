
const Support = () => {
    return (
        <div className="bg-gray-100 h-full flex items-center justify-center">
            <div className="bg-white p-8 rounded shadow-md w-full md:w-[60%] lg:w-1/2 h-[85%]">
                <h2 className="text-3xl font-semibold mb-6">Soporte al Usuario</h2>
                <p className="text-gray-700 mb-4">
                Bienvenido a nuestra página de soporte. Estamos aquí para ayudarte. Si tienes alguna pregunta o problema, por favor contáctanos.
                </p>
                <div className="mt-6">
                    <h2 className="text-xl font-semibold mb-2">¿Cómo podemos ayudarte?</h2>
                    <p className="text-gray-700">
                        Si tienes alguna pregunta o problema, no dudes en ponerte en contacto con nuestro equipo de soporte.
                    </p>
                </div>
                <div className="mt-6">
                    <h2 className="text-xl font-semibold mb-2">Información de Contacto</h2>
                    <p className="text-gray-700">
                        Puedes comunicarte con nosotros a través del siguiente correo electrónico: <a href="mailto:soporte@example.com" className="text-blue-500">soporte@example.com</a>
                    </p>
                </div>
                <form>
                    <div className="mt-6">
                        <label className="block text-gray-700 font-semibold">Nombre Completo</label>
                        <input type="text" className="form-input mt-1 block w-full" placeholder="Escribe tu nombre completo" />
                    </div>
                    <div className="mt-6">
                        <label className="block text-gray-700 font-semibold">Correo Electrónico</label>
                        <input type="email" className="form-input mt-1 block w-full" placeholder="Escribe tu correo electrónico" />
                    </div>
                    <div className="mt-6">
                        <label className="block text-gray-700 font-semibold">Mensaje</label>
                        <textarea className="form-textarea mt-1 block w-full resize-none border-[1px] border-gray-200 rounded-lg" rows="3" placeholder="Escribe tu mensaje"></textarea>
                    </div>
                    <div className="mt-6">
                        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Enviar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Support