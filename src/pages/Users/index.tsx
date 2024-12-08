import { users } from "../../assets/constanst"

const Users = () => {
  return (
    <div>
      <h2>Listado de usuarios</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.id} - {user.username}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Users
