import UserProfile from "./components/UserProfile"

const App = () => {
  const userData = {
    name: 'John',
    age: 25,
    email: 'john@example.com',
   };
  return (
    <div>
    <UserProfile user={userData} />
    </div>
  )
}

export default App;