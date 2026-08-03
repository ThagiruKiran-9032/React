function UserCard({ user, onEditUser, onDeleteUser }) {
  return (
    <div>
      <h3>{user.name}</h3>
      <p>{user.email}</p>

      <button onClick={() => onEditUser(user.id)}>Edit</button>

      <button onClick={() => onDeleteUser(user.id)}>Delete</button>

      <hr />
    </div>
  );
}

export default UserCard;
