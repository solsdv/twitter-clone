const AuthService = {
    ping: () => {
        return fetch("/ping", {
        })
          .then((res) => res.json())
          .then((data) => data);
      },
}

export default AuthService;