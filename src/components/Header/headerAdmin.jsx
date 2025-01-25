import {Bell, User} from 'lucide-react';

const Header = () => {
    return (
    <>
     <header className="bg-white shadow-md">
      <div className="container px-6 py-4 mx-auto">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-gray-800">Sports Dashboard</h1>
          </div>
          <div className="flex items-center">
            <button className="p-1 mr-4 text-gray-400 hover:text-gray-600">
              <Bell size={20} />
            </button>
            <button className="p-1 text-gray-400 hover:text-gray-600">
              <User size={20} />
            </button>
          </div>
        </div>
      </div>
     </header>
    </>
    )
}
export default Header