import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
    return (
        <a
            href="https://wa.me/message/6ETU5R4B3MYDN1"
            target="_blank"
            rel="noreferrer"
            className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center"
            aria-label="Chat with us on WhatsApp"
        >
            <FaWhatsapp size={32} />
        </a>
    );
};

export default WhatsAppButton;
