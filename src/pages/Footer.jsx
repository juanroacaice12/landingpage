import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <p>Tus derechos reservados &copy; 2024</p>
                <div className="flex space-x-4">
                    <a href="https://w.app/juanca" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-whatsapp text-white text-xl hover:text-gray-300"></i>
                    </a>
                    <a href="https://wechat.com/tuusuario" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-weixin text-white text-xl hover:text-gray-300"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
