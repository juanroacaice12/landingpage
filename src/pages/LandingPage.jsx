import React from 'react';
import Header from './Header';
import Formulario from './Formulario';
import Footer from './Footer';

const LandingPage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">
                {/* Contenido principal */}
                <section id="inicio" className="py-20">
                    <div className="container mx-auto text-center">
                        <h2 className="text-4xl font-bold mb-4">Bienvenido a Tu Landing Page</h2>
                        <p className="text-lg text-gray-700">Aquí puedes colocar información sobre tu servicio o producto.</p>
                    </div>
                </section>
                <Formulario />
            </main>
            <Footer />
        </div>
    );
};

export default LandingPage;
