export const initalState = {
    loginInformation : false
}

export const reducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            return {...state, loginInformation:false};
        case "HOME":
            return {...state, loginInformation:true};
        default:
            break;
    }
}