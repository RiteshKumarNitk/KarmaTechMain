import React, { useEffect, useState } from 'react';

const Eyes = () => {
    const [rotate, setRotate] = useState(0);

    useEffect(() => {
        const handleMouseMove = (e) => {
            let mouseX = e.clientX;
            let mouseY = e.clientY;
            let deltaX = mouseX - window.innerWidth / 2;
            let deltaY = mouseY - window.innerHeight / 2;

            var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
            setRotate(angle-180);
        };

        window.addEventListener('mousemove', handleMouseMove);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className='eyes w-full h-screen overflow-hidden p-20 shadow-2xl bg-white'>
            <div data-scroll data-scroll-speed="-.6" className='w-full relative h-full roun  bg-cover bg-center bg-[url("https://images.pexels.com/photos/5708064/pexels-photo-5708064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")]'>
                <div className='absolute flex top-1/2 gap-10 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                    <div className='flex items-center justify-center w-[15vw] h-[15vw] bg-zinc-100 rounded-full'>
                        <div className='relative w-2/3 h-2/3 items-center justify-center rounded-full bg-zinc-900'>
                            <div
                                style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }}
                                className='absolute line w-full h-10 rotate-0 top-1/2 left-1/2   -translate-x-[50%] -translate-y-[50%]'
                            >
                                <div className='w-10 h-10 rounded-full bg-zinc-100'></div>
                            </div>
                        </div>
                    </div>

                    <div className='flex items-center justify-center w-[15vw] h-[15vw] bg-zinc-100 rounded-full'>
                        <div className='relative w-2/3 h-2/3 items-center justify-center rounded-full bg-zinc-900'>
                            <div
                                style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }}
                                className='absolute line w-full h-10 rotate-0 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'
                            >
                                <div className='w-10 h-10 rounded-full bg-zinc-100'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Eyes;
