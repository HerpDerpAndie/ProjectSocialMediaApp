export const createProfile = (value) => {
    return {
        type: 'CREATE_PROFILE',
        payload: value
    }
};

export const login = (value) => {
    return {
        type: 'LOGIN',
        payload: value
    }
}