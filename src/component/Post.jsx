import React from 'react';
import Messi from '../assets/img/post/messi_pildun.jpg'; // Gambar Messi

const Post = () => {
    return (
        <div className="max-w-2xl mx-auto bg-white/50 rounded-2xl mb-8 overflow-hidden backdrop-blur-sm">
            <div className="p-4 md:p-6 flex items-center justify-between">
                <div className="flex items-center">
                    <img
                        src={Messi}
                        alt="Messi"
                        className="w-10 h-10 md:w-12 md:h-12 rounded-xl"
                    />
                    <div className="ml-3 md:ml-4">
                        <h3 className="font-semibold text-gray-800">Lionel Messi</h3>
                        <p className="text-xs md:text-sm text-gray-600">2 hours ago</p>
                    </div>
                </div>
            </div>
            <div className="relative pb-[75%]">
                <img
                    src={Messi}
                    alt="Post content"
                    className="absolute top-0 left-0 w-full h-full object-cover"
                />
            </div>
            <div className="p-4 md:p-6">
                <p className="text-gray-800 text-sm md:text-base">CAMPEONES DEL MUNDO!!!!!!! 🌎🏆
                    <br />
                    <br />
                    Tantas veces lo soñé, tanto lo deseaba que aún no caigo, no me lo puedo creer……
                    <br />
                    <br />
                    Muchas gracias a mi familia, a todos los que me apoyan y también a todos los que creyeron en nosotros. Demostramos una vez más que los argentinos cuando luchamos juntos y unidos somos capaces de conseguir lo que nos propongamos. El mérito es de este grupo, que está por encima de las individualidades, es la fuerza de todos peleando por un mismo sueño que también era el de todos los argentinos… Lo logramos!!!
                    <br />
                    <br />
                    VAMOS ARGENTINA CARAJO!!!!! 🙌🏻🙌🏻
                    <br />
                    <br />
                    Nos estamos viendo muy pronto… 🇦🇷🇦🇷🇦🇷</p>
            </div>
            <div className="p-4 md:p-6 border-t border-gray-200 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                    <button className="text-gray-600 hover:text-gray-500">❤️ 9999999999 Like</button>
                    <button className="text-gray-600 hover:text-gray-500">💬 9999999999 Comment</button>
                    <button className="text-gray-600 hover:text-gray-500">🔄 9999999999 Share</button>
                </div>
            </div>
        </div>
    );
};

export default Post;
