import { FaHome, FaUsers, FaChartBar, FaCog } from "react-icons/fa";

function Sidebar() {
  const menuStyle = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "12px",
    borderRadius: "10px",
    marginBottom: "12px",
    cursor: "pointer",
    transition: "0.3s",
  };

  return (
    <div
      style={{
        width: "260px",
        backgroundColor: "#111827",
        color: "white",
        padding: "20px",
        minHeight: "100vh",
        borderRight: "1px solid #374151",
      }}
    >
      <h1
        style={{
          fontSize: "30px",
          marginBottom: "30px",
          color: "#60a5fa",
          fontWeight: "bold",
        }}
      >
        🚀 Admin Pro
      </h1>

      <ul style={{ listStyle: "none", padding: 0 }}>
        <li
          style={{
            ...menuStyle,
            background: "#2563eb",
          }}
        >
          <FaHome />
          Dashboard
        </li>

        <li style={menuStyle}>
          <FaUsers />
          Users
        </li>

        <li style={menuStyle}>
          <FaChartBar />
          Analytics
        </li>

        <li style={menuStyle}>
          <FaCog />
          Settings
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;