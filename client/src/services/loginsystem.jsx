async function handleLogin({identifier, password}) {
    const { message, token, user } = await fetch(`${__API_URL__}/api/v1/auth/login`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            'identifier': identifier,
            'password': password
        })
    }).then(res => res.json());
    localStorage.setItem("JWT_TOKEN", token);
    console.log({user, message});
}

async function handleSignup({usertype, name, email, dateOfBirth, username, password}) {
    const { message, token, user } = await fetch(`${__API_URL__}/api/v1/auth/signup`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: name,
            username: username,
            email: email,
            dateOfBirth: dateOfBirth,
            password: password,
            usertype: usertype
        })
    }).then(res => res.json());
    localStorage.setItem("JWT_TOKEN", token);
    console.log({user, message});
}

export {
    handleLogin,
    handleSignup
}