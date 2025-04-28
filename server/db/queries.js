const users = new Map();

function getPasswordHash(username) {
    // This is just for initial setup and testing
    // This must be implemented properly with database
    return users.has(username) ? users.get(username).passwordHash : null;
}

function createProfile(username, passwordHash, name, userType) {
    // This is just for initial setup and testing
    // This must be implemented properly with database
    users.set(username, {
        passwordHash: passwordHash,
        name: name,
        userType: userType
    });
    console.log(users);
}

// This function is only for testing purposes
// This must be removed later
function getAllUsers() {
    return users;
}

export {
    getPasswordHash,
    createProfile,
    getAllUsers
}