const FloatingChatIcon: React.FC = () => {
    return (
        <div
            className="fixed bottom-5 right-5 w-12 h-12 rounded-full flex 
            items-center justify-center shadow-lg cursor-pointer"
        >
            <a
                href="https://wa.me/12015544914"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with us on WhatsApp"
                className="relative group"
            >
                <img
                    src="/Icons/whatsapp-fill.svg"
                    alt="WhatsApp Icon"
                    className="w-12 h-12"
                />
                <span
                    className="absolute hidden group-hover:inline-block w-40
                     bg-gray-700 text-white text-center rounded-md py-1 z-[1] 
                     bottom-full rigth-1/2 transform -translate-x-1/2 mb-2 opacity-100
                      transition-all duration-300"
                >
                    Chat with us on WhatsApp
                </span>
            </a>
        </div>
    );
};

export default FloatingChatIcon;
