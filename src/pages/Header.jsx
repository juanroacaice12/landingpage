import React from 'react';

const Header = () => {
    return (
        <header className="bg-gray-800 text-white p-4">
            <div className="container mx-auto">
                <h1 className="text-2xl font-bold">Tu Nombre o Título</h1>
                <nav className="mt-4">
                    <ul className="flex space-x-4">
                        <li><a href="#inicio" className="hover:text-gray-300">Inicio</a></li>
                        <li><a href="#servicios" className="hover:text-gray-300">Servicios</a></li>
                        <li><a href="#contacto" className="hover:text-gray-300">Contacto</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
