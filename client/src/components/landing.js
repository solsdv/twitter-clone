import AuthService from "../services/AuthService";

function Landing() {

    const handleClick = async() => {
        const data = await AuthService.ping();
        console.log(data)
      }


    return (
        <>
        <h1>Landing</h1>
        <button onClick={handleClick}>Click Me!!!</button>
        </>
    )
}

export default Landing;