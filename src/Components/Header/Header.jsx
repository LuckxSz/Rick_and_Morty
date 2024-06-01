import rnm from '../../assets/rnm.png';

export const Header = () => {
  return (
    <div className="bg-gradient-to-w-full h-16 flex items-center justify-between px-4   shadow-lg shadow-black-500/40">
      <div className="flex items-center space-x-2">
        <img className="w-8 h-8" src={rnm} alt="Rick and Morty logo" />
        <h1 className="text-lg font-semibold text-white">Rick and Morty API</h1>
      </div>
      <ul className="flex items-center space-x-4 [&>li]:text-[white]: ">
        <li className=" hover:text-white transition-colors duration-300 cursor-pointer">Home</li>
        <li className=" hover:text-white transition-colors duration-300 cursor-pointer">About</li>
        <li className=" hover:text-white transition-colors duration-300 cursor-pointer">FAQ</li>
        <li className="hover:text-white transition-colors duration-300 cursor-pointer">Contact</li>
      </ul>
    </div>
  );
};
