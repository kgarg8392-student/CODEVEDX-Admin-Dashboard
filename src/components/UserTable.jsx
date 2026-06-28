import { useEffect, useState } from "react";

function UserTable() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div
        style={{
          background: "#1e293b",
          color: "white",
          padding: "30px",
          borderRadius: "20px",
          marginTop: "20px",
          textAlign: "center",
          fontSize: "22px",
        }}
      >
        ⏳ Loading Users...
      </div>
    );
  }

  return (
    <div
      style={{
        background: "#1e293b",
        color: "white",
        padding: "25px",
        borderRadius: "20px",
        marginTop: "20px",
        boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: "20px",
          fontSize: "28px",
        }}
      >
        👥 Team Members
      </h2>

      <input
        type="text"
        placeholder="🔍 Search user..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          marginBottom: "20px",
          borderRadius: "10px",
          border: "none",
          outline: "none",
          fontSize: "16px",
          boxSizing: "border-box",
        }}
      />

      <div style={{ overflowX: "auto" }}>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
          }}
        >
          <thead>
            <tr>
              <th
                style={{
                  textAlign: "left",
                  padding: "15px",
                  borderBottom: "1px solid #334155",
                }}
              >
                Name
              </th>

              <th
                style={{
                  textAlign: "left",
                  padding: "15px",
                  borderBottom: "1px solid #334155",
                }}
              >
                Email
              </th>

              <th
                style={{
                  textAlign: "left",
                  padding: "15px",
                  borderBottom: "1px solid #334155",
                }}
              >
                Company
              </th>
            </tr>
          </thead>

          <tbody>
            {users
              .filter((user) =>
                user.name.toLowerCase().includes(search.toLowerCase())
              )
              .map((user) => (
                <tr key={user.id}>
                  <td
                    style={{
                      padding: "15px",
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                    }}
                  >
                    <div
                      style={{
                        width: "45px",
                        height: "45px",
                        borderRadius: "50%",
                        background: "#3b82f6",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: "bold",
                        fontSize: "18px",
                      }}
                    >
                      {user.name.charAt(0)}
                    </div>

                    {user.name}
                  </td>

                  <td style={{ padding: "15px" }}>
                    {user.email}
                  </td>

                  <td style={{ padding: "15px" }}>
                    {user.company.name}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserTable;