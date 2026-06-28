function Navbar() {
  const time = new Date().toLocaleTimeString();

  return (
    <div
      style={{
        background: "#1e293b",
        padding: "20px",
        borderRadius: "15px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: "white",
        boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
      }}
    >
      <div>
        <h2 style={{ margin: 0 }}>Dashboard</h2>
        <p style={{ marginTop: "5px", color: "#94a3b8" }}>
          Welcome Back, Khushi 👋
        </p>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <p>{time}</p>

        <input
          type="text"
          placeholder="🔍 Search..."
          style={{
            padding: "10px",
            borderRadius: "10px",
            border: "none",
            outline: "none",
          }}
        />

        <span style={{ fontSize: "22px" }}>🔔</span>

        <img
          src="https://i.pravatar.cc/40"
          alt="profile"
          style={{
            borderRadius: "50%",
            border: "2px solid #3b82f6",
          }}
        />
      </div>
    </div>
  );
}

export default Navbar;