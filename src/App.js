import "./App.css";
import React, { useState, useEffect } from "react";

const App = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://reqres.in/api/users?page=2`);
        const res = await response.json();
        setUsers(res.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredUsers = users.filter(
    (user) =>
      user.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.last_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <header className="App-header">SearchBar by GJ</header>
<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdF1JuuXMLmKSTIQGjY0G7AcJAPLBOPvMoye9A-D8PK7XqFgA/viewform?embedded=true" width="650" height="1500" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>  
      <h1>List of users</h1>
      <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={handleSearch}
      />
          <p>type to find by name</p>

      <ul>
        {filteredUsers.map((user) => (
          <tr className="user-list">
            <td key={user.id}>
              <img src={user.avatar} alt={user.email} />
              <div>
                <h3>
                  {user.first_name} {user.last_name}
                </h3>
                <p>{user.email}</p>
              </div>
            </td>
          </tr>
        ))}
      </ul>
    </div>
  );
};

export default App;
