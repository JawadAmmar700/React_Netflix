
export const initialState = {
    user: null,
    value: null
}

const reducer = (State, action) => {
    switch (action.type) {
        case "ADD_USER":
            return { ...State, user: action.user }
        case "STORE_EMAIL":
            return {
                ...State,
                value: action.value
            }



        default:
            return State
    }
}

export default reducer

