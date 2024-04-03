import Logo from './Logo';
import Navbar from './Navbar';
import { MdNotifications } from "react-icons/md";
import { PiUserRectangleFill } from "react-icons/pi";
import { BsToggleOff } from "react-icons/bs";

const Header = () => {
  return (
    <header className='h-20 w-full flex'>
        <div className='flex flex-col justify-center items-center w-1/2'>
          <h1>Title</h1>
          <h3>
          Path variable
          </h3>
        </div>
        <div className='flex justify-end w-1/2'>
          <div className='flex items-center w-1/3 justify-around pr-10'>
          <MdNotifications />
          <PiUserRectangleFill />
          <span>
            <h2>Username</h2>
            <h4>ID:</h4>
            </span>
        <BsToggleOff />
        </div>
        </div>
    </header>
  );
};

export default Header;