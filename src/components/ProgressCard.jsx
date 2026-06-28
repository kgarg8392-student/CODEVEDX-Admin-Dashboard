function ProgressCard() {
  return (
    <div
      style={{
        background: "#1e293b",
        color: "white",
        padding: "20px",
        borderRadius: "15px",
      }}
    >
      <h3>Project Progress</h3>

      <div
        style={{
          background: "#374151",
          height: "12px",
          borderRadius: "10px",
          marginTop: "10px",
        }}
      >
        <div
          style={{
            width: "75%",
            height: "12px",
            background: "#22c55e",
            borderRadius: "10px",
          }}
        ></div>
      </div>

      <p style={{ marginTop: "10px" }}>75% Completed</p>
    </div>
  );
}

export default ProgressCard;