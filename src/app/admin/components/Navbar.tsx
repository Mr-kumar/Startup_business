import React from 'react';
import {
  MoreHorizontal,
  Plus,
  Search,
  Bell,
  Calendar,
  Store,
  AppWindow
} from 'lucide-react';
import Image from 'next/image';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-[#2f3640] text-white h-14 flex items-center px-4 justify-between shadow-sm">
      {/* Left Section */}
      <div className="flex items-center gap-6">
        {/* CRM Logo */}
        <div className="flex items-center gap-1 font-semibold text-white">
          <Image
            src="https://cdn-icons-png.flaticon.com/512/3844/3844724.png" // Placeholder CRM logo
            alt="CRM"
            className="w-5 h-5"
          />
          <span>CRM</span>
        </div>

        {/* Navigation Tabs */}
        <div className="hidden md:flex gap-5 text-sm">
          <a className="border-b-2 border-white pb-0.5" href="#">Home</a>
          <a className="hover:text-gray-300" href="#">Leads</a>
          <a className="hover:text-gray-300" href="#">Contacts</a>
          <a className="hover:text-gray-300" href="#">Accounts</a>
          <a className="hover:text-gray-300" href="#">Services</a>
          <a className="hover:text-gray-300" href="#">Projects</a>
          <MoreHorizontal className="cursor-pointer" size={18} />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        <button className="text-sm px-3 py-1 border border-white rounded-md hover:bg-white hover:text-black transition">
          <strong>Try CRM for Everyone ✨</strong>
        </button>

        <Plus className="cursor-pointer hover:text-gray-300" size={18} />
        <Search className="cursor-pointer hover:text-gray-300" size={18} />
        <Bell className="cursor-pointer hover:text-gray-300" size={18} />
        <Calendar className="cursor-pointer hover:text-gray-300" size={18} />
        <Store className="cursor-pointer hover:text-gray-300" size={18} />

        {/* Profile Avatar */}
        <Image
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="avatar"
          className="w-7 h-7 rounded-full object-cover"
        />

        <AppWindow className="cursor-pointer hover:text-gray-300" size={18} />
      </div>
    </nav>
  );
};

export default Navbar;
