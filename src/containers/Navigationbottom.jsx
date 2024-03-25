import { IoMdChatbubbles } from "react-icons/io";
import { CgMenuGridR } from 'react-icons/cg';
import { HiHome } from "react-icons/hi2";
import { HiOutlineViewGridAdd } from "react-icons/hi";
import { IoGrid } from "react-icons/io5";

const Navigation = ({ className }) => {
  return (
    <footer
      className={`fixed bottom-0 left-0 right-0 h-18 text-2xl p-2 px-4 z-50 bg-accent text-white flex justify-between ${className}`}
    >
      <button className='flex justify-center flex-grow'>
        <IoGrid />
      </button>
      <button className='flex justify-center flex-grow'>
        <HiOutlineViewGridAdd />
      </button>
      <button className='flex justify-center flex-grow'>
        < HiHome />
      </button>
      <button className='flex justify-center flex-grow'>
        <CgMenuGridR />
      </button>
      <button className='flex justify-center flex-grow'>
        <IoMdChatbubbles />
      </button>
    </footer>
  );
};

export default Navigation;
