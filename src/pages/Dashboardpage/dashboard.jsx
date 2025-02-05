import AdminNav from "../../components/AdminNav/profileadmin"
import Transaction from "../../components/Transaction/transac"
import SideBar from "../../components/SideBar/sidebarAdmin"
const Dashboardpage = () => {
    return (
        <>
          <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 border-r bg-white">
        <div className="flex h-16 items-center px-4">
          <span className="font-bold">SPORTIVO</span>
        </div>
        <SideBar />
      </div>

      {/* Main Content */}
      <div className="flex-1">
        <header className="flex h-16 items-center justify-between border-b px-4">
            <AdminNav />
        </header>

        <main className="p-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold tracking-tight">Transactions</h1>
              <p className="text-muted-foreground">View and manage your Transactions</p>
            </div>
          </div>
          <Transaction />
        </main>
      </div>
    </div>
        </>
    )
}
export default Dashboardpage