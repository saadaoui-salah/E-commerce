import { EDIT, DARK, REMOVE, OPEN, CLOSE, LOGIN, LOGOUT } from './actoins'

export function DarkReducer(state, action){
    switch (action.type){
        case DARK:
            return action.dark
        default:
            return state
    }
}

export function AuthReducer(state, action){
    switch (action.type){
        case LOGIN:
            return {
                loggedIn: true,
                type: action.userType,
            }
        case LOGOUT:
            return {
                loggedIn: false,
                type: null,
            }
        default:
            return state
    }
}

export function OptionsReducer(state, action) {
    switch (action.type) {
        case EDIT:
            return {
                remove: false,
                edit: true,
                id: action.id
            }
        case REMOVE:
            return {
                id: null,
                edit: true,
                remove: false
            }
        default:
            return state
    }
}

export const Dropdown = (state, action) => {
    switch (action.type) {
        case OPEN:

            return {
                open: true,
                id: action.id
            }
        case CLOSE:
            return {
                id: null,
                open: false
            }
        default:
            return state
    }
}

