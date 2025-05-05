async function handleLogin({identifier, password}) {
    const { message, user } = await fetch(`${__API_URL__}/api/v1/auth/login`, {
        method: "POST",
        credentials: "include",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            'identifier': identifier,
            'password': password
        })
    }).then(res => res.json());
    console.log(message);
    return user;
}

async function handleSignup({usertype, name, email, dateOfBirth, username, password}) {
    const { message, user } = await fetch(`${__API_URL__}/api/v1/auth/signup`, {
        method: "POST",
        credentials: "include",
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
    console.log(message);
    return user;
}

export {
    handleLogin,
    handleSignup
}