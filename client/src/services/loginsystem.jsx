function handleLogin({identifier, password}) {
    fetch(`${__API_URL__}/api/v1/auth/login`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            'identifier': identifier,
            'password': password
        })
    }).then(res => res.json())
      .then(data => console.log(data));
}

function handleSignup(data) {
    console.log("Handling your signup");
    console.log(data);
}

export {
    handleLogin,
    handleSignup
}