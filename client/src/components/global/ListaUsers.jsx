import React, { useEffect, useState } from "react";
import "./ListaUsers.css";
import User from "./User";

export default function ListaUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((res) => setUsers(res));
  });

  return (
    <div className="lista-users">
      {users.map((user) => (
        <div className="style-user">
          <User
            texto={user.company.name}
            nombre={user.name}
            imagen="https://tecnoduero.com/wp-content/uploads/2017/02/h.png"
          />
        </div>
      ))}
    </div>
  );
}
