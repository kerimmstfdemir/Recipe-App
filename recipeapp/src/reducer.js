export const initalState = {
    loginInformation : false,
    userName:"",
    password:""
}

export const reducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            return {...state};
        case "USERNAME":
            return {...state, loginInformation:true, userName:action.username};
        case "PASSWORD":
            return {...state, loginInformation:true, password:action.password}
        default:
            break;
    }
}