import React, { useState } from 'react';
import { Home, Compass, Film, MessageCircle, Heart, PlusSquare, User, Menu, X } from 'lucide-react';

const MyNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { icon: Home, label: 'Dashboard' },
        { icon: Compass, label: 'Discover' },
        { icon: Film, label: 'Videos' },
        { icon: MessageCircle, label: 'Chat' },
        { icon: Heart, label: 'Activity' },
        { icon: PlusSquare, label: 'New Post' },
        { icon: User, label: 'Account' },
        { icon: Menu, label: 'Settings' }
    ];

    return (
        <>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-white text-black"
            >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <div className={`fixed top-0 left-0 h-screen bg-white text-black p-6 transition-all duration-300 ease-in-out z-40
          ${isOpen ? 'w-64 translate-x-0' : 'w-64 -translate-x-full lg:translate-x-0'}`}>
                <div className="mb-8 mt-8 lg:mt-0">
                    <h1 className="text-3xl font-bold mb-8 text-gray-700">Sosmed</h1>
                </div>
                <nav className="space-y-2">
                    {navItems.map((item, index) => (
                        <button
                            key={index}
                            className="flex items-center space-x-4 w-full p-4 rounded-xl hover:bg-gray-200 transition-all hover:translate-x-2"
                            onClick={() => setIsOpen(false)}
                        >
                            <item.icon className="text-gray-500" size={20} />
                            <span className="font-medium">{item.label}</span>
                        </button>
                    ))}
                </nav>
            </div>
        </>
    );
};

export default MyNavbar