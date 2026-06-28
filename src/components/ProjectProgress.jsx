function ProjectProgress() {
  return (
    <div
      style={{
        background: "#1e293b",
        color: "white",
        padding: "20px",
        borderRadius: "15px",
      }}
    >
      <h2>Project Progress</h2>

      <div
        style={{
          background: "#334155",
          height: "15px",
          borderRadius: "10px",
          marginTop: "15px",
        }}
      >
        <div
          style={{
            width: "75%",
            height: "100%",
            background: "#22c55e",
            borderRadius: "10px",
          }}
        ></div>
      </div>

      <p style={{ marginTop: "10px" }}>75% Completed</p>
    </div>
  );
}

export default ProjectProgress;