const AuthService = {
    ping: () => {
        return fetch("/ping")
        .then(res => res.json())
        .then(data => console.log(data));
    }
}

export default AuthService;