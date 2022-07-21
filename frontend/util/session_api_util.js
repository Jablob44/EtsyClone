
export const signup = (user) => {
    return $.ajax({
        url: "/api/users",
        method: "POST",
        data: {user}
    })
}

export const login = (user) => {
    return $.ajax({
        url: "/api/session",
        method: "POST",
        data: {user}
    })
}

export const logout = () => {
    return $.ajax({
        url: `/api/session/`,
        method: "DELETE"
    })
}

export const receiveUser = (userId) => {
    return $.ajax({
        url: `/api/users/${userId}`,
        method: "GET"
    })
}