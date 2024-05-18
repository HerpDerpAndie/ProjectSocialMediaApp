const initialState = {
    username: "User",
    email: "",
    password: "123456",
    isLogin: false
};

export const profileReducer = (state = initialState, action) => { 
    if (action.type === 'CREATE_PROFILE') {
        const data = action.payload;
        const newUsername = data.username;
        const newEmail = data.email;
        const newPassword = data.password;

        return {
            ...state,
            username: newUsername,
            email: newEmail,
            password: newPassword
        };
    } else if (action.type === 'LOGIN') {
        const newLoginState = action.payload
        
        return {
            ...state,
            isLogin: newLoginState
        }
    }
    return state;
};