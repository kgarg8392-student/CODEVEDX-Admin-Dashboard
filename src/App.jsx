import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import StatsCard from "./components/StatsCard";
import SalesChart from "./components/SalesChart";
import UserTable from "./components/UserTable";
import RecentActivity from "./components/RecentActivity";
import QuickStats from "./components/QuickStats";
import Footer from "./components/Footer";

function App() {
  return (
    <div
      style={{
        display: "flex",
        background: "#0f172a",
        minHeight: "100vh",
      }}
    >
      <Sidebar />

      <div
        style={{
          flex: 1,
          padding: "30px",
          overflowX: "hidden",
        }}
      >
        <Navbar />

        {/* Stats Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "20px",
            marginTop: "20px",
          }}
        >
          <StatsCard
            title="Users"
            value="12,500"
            color="linear-gradient(135deg,#3B82F6,#2563EB)"
          />

          <StatsCard
            title="Revenue"
            value="$32,000"
            color="linear-gradient(135deg,#10B981,#059669)"
          />

          <StatsCard
            title="Orders"
            value="1,250"
            color="linear-gradient(135deg,#F59E0B,#D97706)"
          />

          <StatsCard
            title="Growth"
            value="85%"
            color="linear-gradient(135deg,#EC4899,#DB2777)"
          />
        </div>

        <div style={{ marginTop: "30px" }}>
          <SalesChart />
        </div>

        <div style={{ marginTop: "30px" }}>
          <UserTable />
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "20px",
            marginTop: "30px",
          }}
        >
          <RecentActivity />
          <QuickStats />
        </div>

        <div style={{ marginTop: "30px" }}>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;