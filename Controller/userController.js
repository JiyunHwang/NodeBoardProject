/* define user method */
// login page
export const login = (req, res) => {
    res.send("login");
}

// do logout
export const logout = (req, res) => {
    res.send("logout");
}

// join page
export const joinSite = (req, res) => {
    res.send("join");
}

export const getIsLogin = () => {
    // --- return login status
    return true;
}

export const getUserInfo = () => {
    // --- get user information from database using service object and return
    return {nickname: 'Jiyun'}
}