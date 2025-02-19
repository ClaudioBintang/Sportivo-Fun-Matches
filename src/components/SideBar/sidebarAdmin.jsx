import { Link } from "react-router-dom"
import { Clock, LayoutDashboard, PlaySquare, Table, Activity } from "lucide-react"
import { Navigate } from "react-router-dom"

const items = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    to: "/dashboard",
    
  },
  {
    title: "Transactions",
    icon: Table,
    to: "/all-transactions",
    isActive: true,
  },
  {
    title: "Activity",
    icon: Activity,
    to: "/activities",
  },
  {
    title: "Recordings",
    icon: PlaySquare,
    to: "/recordings",
  },
]

const SideBar = () => {
  return (
    <nav className="space-y-1">
      {items.map((item) => (
        <Link
          key={item.title}
          to={item.to}
          className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all hover:bg-accent ${
            item.isActive ? "bg-red-700 text-white" : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <item.icon className="w-4 h-4" />
          {item.title}
        </Link>
      ))}
    </nav>
  )
}
export default SideBar
