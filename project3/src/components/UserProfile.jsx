const UserProfile = ({user}) => {
  return (
    <div>
    <h1>User Profile</h1>
    <h2>{user.name}</h2>
    <h2>{user.age}</h2>
    <h2>{user.email}</h2>
    </div>
  )
}
export default UserProfile;