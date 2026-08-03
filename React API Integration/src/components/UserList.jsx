import UserCard from "./UserCard";

function UserList({ users, onEditUser, onDeleteUser }) {
  return (
    <div>
      {users.map((user) => (
        <UserCard
          key={user.id}
          user={user}
          onEditUser={onEditUser}
          onDeleteUser={onDeleteUser}
        />
      ))}
    </div>
  );
}

export default UserList;
