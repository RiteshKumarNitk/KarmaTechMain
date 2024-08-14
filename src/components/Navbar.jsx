import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`fixed z-[999] w-full px-10 py-4 flex justify-between items-center font-['Neue Montreal'] ${isScrolled ? 'backdrop-blur-lg bg-white/30' : 'bg-transparent'}`}>
      <div className='logo text-2xl'>
       Sol
      </div>
      <div className='links flex gap-10 items-center text-md'>
        {["Services", "ABOUT US", "OUR SERVICES", "PRICING", "CAREERS", "CONTACT", "let's Connect"].map((item, index) => (
          <a key={index} href="#" className={`text-sm hover:text-underline font-underline capitalize  font-light ${index === 6 && "ml-32 px-5 py-1 border-[2px] rounded-full border-zinc-100 font-white hover:text-yellow-100 hover:border-zinc-500 transition-all  uppercase text-sm"}`}>
            {item}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
