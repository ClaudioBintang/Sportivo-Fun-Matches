import { Home, Activity, Tag, Users } from "lucide-react";
import { Link } from "react-router-dom";
const SideBar = () => {
    return (
    <>
      <div className="absolute inset-y-0 left-0 w-64 px-2 space-y-6 text-white transition duration-200 ease-in-out transform -translate-x-full bg-gray-800 py-7 md:relative md:translate-x-0">
      <nav>
        <Link
          href="/dashboard"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white"
        >
          <Home className="inline-block mr-2" size={20} />
          Dashboard
        </Link>
        <Link
          href="/dashboard/sport-categories"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white"
        >
          <Tag className="inline-block mr-2" size={20} />
          Sport Categories
        </Link>
        <Link
          href="/dashboard/sport-activities"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white"
        >
          <Activity className="inline-block mr-2" size={20} />
          Sport Activities
        </Link>
        <Link
          href="/dashboard/user-transactions"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white"
        >
          <Users className="inline-block mr-2" size={20} />
          User Transactions
        </Link>
      </nav>
    </div>
    </>
    )
}
export default SideBar