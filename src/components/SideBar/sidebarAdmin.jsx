import { Link } from "react-router-dom"
import { Clock, LayoutDashboard, PlaySquare, Table } from "lucide-react"

const items = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
  },
  {
    title: "Assignments",
    icon: Table,
    href: "/assignments",
    isActive: true,
  },
  {
    title: "Schedule",
    icon: Clock,
    href: "/schedule",
  },
  {
    title: "Recordings",
    icon: PlaySquare,
    href: "/recordings",
  },
]

const SideBar = () => {
  return (
    <nav className="space-y-1">
      {items.map((item) => (
        <Link
          key={item.title}
          href={item.href}
          className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all hover:bg-accent ${
            item.isActive ? "bg-red-700 text-white" : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <item.icon className="h-4 w-4" />
          {item.title}
        </Link>
      ))}
    </nav>
  )
}
export default SideBar
