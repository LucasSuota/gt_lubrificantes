import Image from "next/image";
import { headerItems } from "../constants/headerItems";

const Header = () => {
  return (
    <header className="mx-auto max-w-screen-xl bg-[#101010] flex items-center justify-between">
      <Image src={"/assets/gt_logo.png"} alt="logo" width={130} height={130} />
      <ul className="flex flex-row gap-8 cursor-pointer">
        {headerItems.map((item, index) => (
          <li
            className="text-white hover:text-red-500 uppercase font-light"
            key={index}
          >
            {item.title}
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
