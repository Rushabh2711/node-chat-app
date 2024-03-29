const users = []

const addUser = ({ id, username, room}) => {
    //clean data
    username = username.trim().toLowerCase()
    room = room.trim().toLowerCase()

    if (!username || !room) {
        return {
            error: 'Username ans room are required!'
        }
    }

    // check for existing user
    const existinguser = users.find((user) => {
        return user.room === room && user.username === username
    })

    //validate username
    if(existinguser) {
        return {
            error: 'Username is in use!'
        }
    }

    //store user
    const user = { id, username, room }
    users.push(user)
    return { user }
}

const removeUser = (id) => {
    const index = users.findIndex((u) => u.id === id)

    if ( index != -1 ) {
        return users.splice(index, 1)[0]
    }
}

const getUser = (id) => {
    return users.find((user) => user.id === id)
}

const getUsersInRoom = (room) => {
    room = room.trim().toLowerCase()
    return users.filter((user) => user.room === room)
}

module.exports = {
    addUser,
    getUser,
    removeUser,
    getUsersInRoom
}





