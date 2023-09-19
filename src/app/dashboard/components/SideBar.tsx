'use client';

import { useState } from 'react';

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div x-data="{ sidebarOpen: true }" className="flex overflow-x-hidden h-screen">
      <aside
        className={`flex-shrink-0 w-64 flex flex-col border-r transition-all duration-300 ${
          open && '-ml-32'
        }`}
      >
        {/*:className="{ '-ml-64': !sidebarOpen }"*/}
        <div className="h-64 bg-gray-900"></div>
        <nav className="flex-1 flex flex-col bg-white">
          <a href="#" className="p-2">
            Nav Link 1
          </a>
          <a href="#" className="p-2">
            Nav Link 2
          </a>
          <a href="#" className="p-2">
            Nav Link 3
          </a>
        </nav>
      </aside>
      <div className="flex-1">
        <header className="flex items-center p-4 text-semibold text-gray-100 bg-gray-900">
          <button onClick={() => setOpen(!open)} className="p-1 mr-4">
            open sidebar
          </button>
          Header
        </header>
        <main className="p-4">Main Content</main>
      </div>
    </div>
  );
};

export default Sidebar;
