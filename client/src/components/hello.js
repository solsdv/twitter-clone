import AuthService from "../services/AuthService";

function Hello() {

    const handleClick = async() => {
        const data = await AuthService.ping();
        console.log(data)
      }


    return (
        <h1>fdsafafds</h1>
    )
}

export default Hello;