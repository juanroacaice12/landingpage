import React from 'react';

const Formulario = () => {
    return (
        <section id="contacto" className="bg-gray-100 py-8">
            <div className="container mx-auto">
                <h2 className="text-2xl font-bold mb-4">Contacto</h2>
                <form className="max-w-lg mx-auto">
                    <div className="mb-4">
                        <label htmlFor="nombre" className="block mb-2">Nombre</label>
                        <input type="text" id="nombre" name="nombre" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block mb-2">Email</label>
                        <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="mensaje" className="block mb-2">Mensaje</label>
                        <textarea id="mensaje" name="mensaje" rows="4" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"></textarea>
                    </div>
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Enviar</button>
                </form>
            </div>
        </section>
    );
};

export default Formulario;
