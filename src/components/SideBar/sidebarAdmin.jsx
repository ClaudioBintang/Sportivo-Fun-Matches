import { Home, BadgeDollarSign, Activity, Table } from "lucide-react";
const SideBar = ({onSelect}) => {
  return (
    <>
    <div className="fixed top-0 left-0 flex flex-col w-64 h-full min-h-screen p-4 text-gray-700 bg-white">
      <h2 className="mb-6 text-2xl font-bold">SPORTIVO</h2>
      <nav className="flex flex-col flex-1 space-y-2">
        <button
          onClick={() => onSelect("dashboard")}
          className="flex items-center p-2 space-x-2 rounded hover:bg-red-700"
        >
          <Home size={20} /> <span>Dashboard</span>
        </button>
        <button
          onClick={() => onSelect("users")}
          className="flex items-center p-2 space-x-2 rounded hover:bg-red-700"
        >
          <BadgeDollarSign size={20} /> <span>Transaction</span>
        </button>
        <button
          onClick={() => onSelect("categories")}
          className="flex items-center p-2 space-x-2 rounded hover:bg-red-700"
        >
          <Table size={20} /> <span>Categories</span>
        </button>
        <button
          onClick={() => onSelect("settings")}
          className="flex items-center p-2 space-x-2 rounded hover:bg-red-700"
        >
          <Activity size={20} /> <span>Activities</span>
        </button>
      </nav>
    </div>
    </>
  )
}
export default SideBar
