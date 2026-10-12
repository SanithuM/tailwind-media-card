import React, { useState } from 'react';
import { User2, Heart, CheckCircle2 } from 'lucide-react';

export default function CardGrid() {
    const user = {
        name: "Batman",
        bio: "The Dark Knight of Gotham City, protector of the innocent and a symbol of justice.",
        followers: 1200,
        likes: 500,
        avatar: "/images/batman.webp",
        video: "/videos/batman.mp4"
    };

    const [isHovered, setIsHovered] = useState(false);

    return (
        /* Responsive flex container to display cards side-by-side */
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 p-6 bg-gray-50 min-h-screen">
            
            {/* Split Variant */}
            <div className="w-80 bg-white rounded-[50px] p-2 shadow-sm border border-gray-100 flex flex-col gap-4 select-none">
                
                {/* Image Section */}
                <div className="w-full h-80 rounded-[45px] overflow-hidden bg-gray-100">
                    <img
                        src={user.avatar}
                        alt={user.name}
                        className="w-full h-full object-cover object-top"
                    />
                </div>

                {/* User Info Section */}
                <div className="flex flex-col gap-3">
                    <div className="ml-8">
                        <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-1.5">
                            {user.name}
                            <CheckCircle2 className="w-[18px] h-[18px] fill-green-500 text-white" />
                        </h3>
                        <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                            {user.bio}
                        </p>
                    </div>

                    {/* Footer stats & button */}
                    <div className="flex items-center justify-between pt-2 pb-5">
                        <div className="flex items-center gap-4 text-sm font-medium text-gray-700 ml-8">
                            <span className="flex items-center gap-1">
                                <User2 className="w-4 h-4 text-gray-400" />
                                {user.followers}
                            </span>
                            <span className="flex items-center gap-1">
                                <Heart className="w-4 h-4 text-gray-400" />
                                {user.likes}
                            </span>
                        </div>
                        <button className="bg-gray-100 hover:bg-gray-200 border border-gray-200 text-gray-900 font-medium px-6 py-2 rounded-2xl text-sm transition-colors shadow-sm mr-8">
                            Follow +
                        </button>
                    </div>
                </div>
            </div>

            {/* Overlay Variant */}
            <div className="w-85 h-129 bg-white rounded-[50px] p-2 shadow-sm border border-gray-100 overflow-hidden select-none relative cyrsor-pointer"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
            >
                <div className="w-full h-full rounded-[45px] overflow-hidden relative">
                    {isHovered ? (
                        <video 
                            src={user.video}
                                className=" w-full h-full object-cover object-top transition-opacity duration-300"
                                autoPlay
                                muted
                                loop
                                playsInline
                        />
                    ) : (
                    <img 
                        src={user.avatar}
                        alt={user.name}
                        className="w-full h-full object-cover object-top"
                     />

                    )}


                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/85 via-black/50 to-transparent pt-24 pb-6 px-8 flex flex-col gap-3">
                        
                        {/* Profile Info */}
                        <div>
                            <h3 className="text-xl font-semibold text-white flex items-center gap-1.5">
                                {user.name}
                                <CheckCircle2 className="w-[18px] h-[18px] fill-green-500 text-white" />
                            </h3>
                            <p className="text-sm text-gray-200 mt-1 leading-relaxed">
                                {user.bio}
                            </p>
                        </div>

                        {/* Stats & Button */}
                        <div className="flex items-center justify-between pt-1">
                            <div className="flex items-center gap-4 text-sm font-medium text-gray-200">
                                <span className="flex items-center gap-1">
                                    <User2 className="w-4 h-4 text-gray-300" />
                                    {user.followers}
                                </span>
                                <span className="flex items-center gap-1">
                                    <Heart className="w-4 h-4 text-gray-300" />
                                    {user.likes}
                                </span>
                            </div>
                            <button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/20 text-white font-medium px-6 py-2 rounded-2xl text-sm transition-colors shadow-sm">
                                Follow +
                            </button>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
}
