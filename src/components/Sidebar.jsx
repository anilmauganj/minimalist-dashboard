import SidebarNav from './SidebarNav';

export default function Sidebar({ isOpen }) {
  return (
    <div
      className={`${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } fixed top-0 left-0 h-full w-64 min-h-screen bg-gray-800  text-white p-5 z-50 transform transition-transform duration-300 ease-in-out`}
    >
      <h2 className="text-2xl font-bold mb-8">Admin Panel</h2>
      <SidebarNav />
    </div>
  );
}
