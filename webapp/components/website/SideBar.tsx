"use client";
import LogoTitle from "@/public/logo-title.png";
import Image from "next/image";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

// side bar for app header
const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
  return (
    <nav>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
      <div
        className={`fixed top-0 right-0 h-full w-[260px] bg-body z-50 transition-transform duration-300
          ${isOpen ? "translate-0" : "translate-x-full"}`}
      >
        {/* sidebar content */}
        <div className="p-4">
          <div className="pb-4">
            <Image src={LogoTitle} alt="logo" width={156} height={56} />
          </div>
          <div className="h-px bg-grey-200"></div>
          <ul></ul>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
