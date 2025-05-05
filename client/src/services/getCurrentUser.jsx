export default async function getCurrentUser() {
    return await fetch(`${__API_URL__}/api/v1/auth/me`, {
        method: "GET",
        credentials: "include",
        headers: {
            'Content-Type': 'application/json',
        },
    }).then(res => res.json());
}