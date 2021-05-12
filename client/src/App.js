import AuthService from "./services/AuthService";


function App() {


  const handleClick = async() => {
    const data = await AuthService.ping();
    console.log(data)
  }


  return (
    <>
    <h1>App</h1>
    <button onClick={handleClick}>Click me</button>
    </>
  )
}

export default App;