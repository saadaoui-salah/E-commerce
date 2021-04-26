import {EDIT, REMOVE, OPEN,CLOSE} from './actoins'
import {options, dropDown} from './state'
import {useReducer} from 'react'


export const OptionsReducer = (state, action) => {
    switch (action.type) {
        case EDIT:
            return {
                remove:false,
                edit: true,
                id:action.id
            }
        case REMOVE:
            return {
                id:null,
                edit: true,
                remove: false
            }
        default:
            return state
    }
}

export const Dropdown = (state, action) => {
    switch(action.type){
        case OPEN:
            return {
                open:true,
                id:action.id
            }
        case CLOSE:
            return {
                id:null,
                open:false
            }
        default:
            return state
    }
}

export const [optionsState, optionsDispatch] = () => {
    useReducer(OptionsReducer, options)
    return [state, dispatch]
}

export const [dropDownState, dropDownDispatch] = () => {
    useReducer(Dropdown, dropDown)
    return [state, dispatch]
}