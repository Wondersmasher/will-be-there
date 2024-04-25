import { useState } from "react";
import { NavLink } from "react-router-dom";
import WBT from "../../../assets/WBT.png";
import Avatar2 from "/public/images/Avatar (2).png";
import  CloseMenuBtn  from "/public/icons/navigation menu/Close-Menu.svg";
import  Harmburger from "/public/icons/navigation menu/Harmburger-Menu-Icon.svg";


const DashNavBar = () => {
  const [dashNavOpen, setDashNavOpen] = useState(false);

  const handleDashNavOpen = () => {
    setDashNavOpen(!dashNavOpen);
  };

  return (
    <nav className='flex justify-between h-[10vh] py-10 md:px-24 px-8 w-full items-center mb-14 sticky top-0 shadow-md bg-wybt-white'>
      <div>
        <div>
          <a href='/' className={`justify-center flex flex-col items-center z- min-w-[6px] relative z-50 `}>
            <img src={WBT} alt='WBT Logo' width='62px' />
            <p className='font-[Cinzel] font-[800] text-wybt-primary md:text-[10px] text-center text-nowrap text-[9px] mt-[-4px]'>
              WILL BE THERE
            </p>
          </a>
        </div>
      </div>

      <div className={`border-wybt-primary border justify-between w-auto ml-auto border-solid h-10 items-center rounded-md gap-12 py-6 px-10 sm:flex hidden ${dashNavOpen ? "flex" : ""}`}>
        <div className='gap-5 flex whitespace-nowrap text-nowrap'>
          <span>--EventName--</span>
          <NavLink to='/dashboard'> Dashboard</NavLink>
          <NavLink to='/profile'> Profile</NavLink>
        </div>
        <div className='flex items-center gap-8'>
          <p>Unpublished</p>
          <img src={Avatar2} alt='' width='30px' />
        </div>
      </div>

      {/* MOBILE MENU */}
      <div className='sm:hidden block z-50 '>
        <button onClick={handleDashNavOpen}>
          {dashNavOpen ? <img src={CloseMenuBtn} alt="" /> : <img src={Harmburger} alt=""/>}
        </button>
      </div>

      {dashNavOpen && (
        <div className={`shadow-md border p-20 justify-between w-auto border-solid h-[60vh] items-center rounded-md gap-12 py-14 px-9 flex sm:hidden flex-col absolute right-0 top-4 bg-wybt-white`}>
          <div className='gap-5 flex whitespace-nowrap text-nowrap flex-col'>
            <span>--EventName--</span>
            <NavLink to='/dashboard'> Dashboard</NavLink>
            <NavLink to='/profile'> Profile</NavLink>
          </div>
          <div className='flex  items-center gap-2 md:gap-8 md:flex-row flex-col'>
            <p>Unpublished</p>
            <img src={Avatar2} alt="" width="30px" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default DashNavBar;
