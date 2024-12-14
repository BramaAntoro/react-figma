import React from 'react';
import Messi from '../assets/img/profile/messi.jpg';

const Stories = () => {
    const highlights = [
        { id: 1, title: 'Messi', avatar: Messi },
        { id: 2, title: 'Messi', avatar: Messi },
        { id: 3, title: 'Messi', avatar: Messi },
        { id: 4, title: 'Messi', avatar: Messi },
        { id: 5, title: 'Messi', avatar: Messi },
        { id: 6, title: 'Messi', avatar: Messi },
        { id: 7, title: 'Messi', avatar: Messi },
        { id: 8, title: 'Messi', avatar: Messi },
        { id: 9, title: 'Messi', avatar: Messi },
        { id: 9, title: 'Messi', avatar: Messi },
        { id: 9, title: 'Messi', avatar: Messi },
        { id: 9, title: 'Messi', avatar: Messi },
        { id: 9, title: 'Messi', avatar: Messi },
        { id: 9, title: 'Messi', avatar: Messi },
        { id: 9, title: 'Messi', avatar: Messi },
        { id: 9, title: 'Messi', avatar: Messi },
        { id: 9, title: 'Messi', avatar: Messi },
        { id: 9, title: 'Messi', avatar: Messi },
        { id: 9, title: 'Messi', avatar: Messi },
        { id: 9, title: 'Messi', avatar: Messi },
        { id: 9, title: 'Messi', avatar: Messi },
        { id: 9, title: 'Messi', avatar: Messi },
        { id: 9, title: 'Messi', avatar: Messi },
        { id: 9, title: 'Messi', avatar: Messi },
        { id: 9, title: 'Messi', avatar: Messi },
        { id: 9, title: 'Messi', avatar: Messi },
        { id: 9, title: 'Messi', avatar: Messi },
        { id: 9, title: 'Messi', avatar: Messi },
        { id: 9, title: 'Messi', avatar: Messi },
        { id: 9, title: 'Messi', avatar: Messi },
        { id: 9, title: 'Messi', avatar: Messi },
    ];

    return (
        <div className="flex space-x-4 md:space-x-6 p-4 md:p-6 overflow-x-auto bg-white/30 rounded-2xl mx-2 md:mx-6 my-4">
            {highlights.map((item) => (
                <div key={item.id} className="flex flex-col items-center flex-shrink-0">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden mb-2 border-2 border-gray-300 p-1">
                        <img
                            src={item.avatar}
                            alt={item.title}
                            className="w-full h-full object-cover rounded-full"
                        />
                    </div>
                    <span className="text-xs md:text-sm font-medium text-gray-700">{item.title}</span>
                </div>
            ))}
        </div>
    );
};

export default Stories;
