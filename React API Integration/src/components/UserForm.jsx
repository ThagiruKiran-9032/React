function UserForm({
  name,
  email,
  setName,
  setEmail,
  onSubmit,
  isEditing,
  onFullUpdate,
}) {
  return (
    <div>
      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button onClick={onSubmit}>{isEditing ? "Update User" : "Add User"}</button>

      {isEditing && <button onClick={onFullUpdate}>Full Update (PUT)</button>}
    </div>
  );
}

export default UserForm;
