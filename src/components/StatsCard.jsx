function StatsCard({ title, value, color }) {
  return (
    <div
      style={{
        background: color,
        borderRadius: "20px",
        color: "white",
        padding: "20px",
        height: "150px",

        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",

        boxShadow: "0 10px 20px rgba(0,0,0,.25)",
        cursor: "pointer",
        transition: "0.3s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-8px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      <h3
        style={{
          margin: 0,
          fontSize: "20px",
        }}
      >
        {title}
      </h3>

      <h1
        style={{
          marginTop: "15px",
          fontSize: "36px",
        }}
      >
        {value}
      </h1>
    </div>
  );
}

export default StatsCard;