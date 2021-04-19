import {EDIT, REMOVE, SET_ID} from './actoins'

import {initialState} from './state'

export const OptionsReducer = (state, action) => {
    switch (action.type) {
        case EDIT:
            return {
                ...state,
                edit: action.pyload
            }
        case REMOVE:
            return {
                ...state,
                remove: action.pylaod
            }
        case SET_ID:
            console.log("action.pylaod")
            return {
                ...state,
                id: action.pylaod
            }
        default:
            return state
    }
}