import { EDIT, REMOVE, OPEN, CLOSE } from './actoins'
import { UPDATE_PRODUCT, ADD_PRODUCT } from './actoins'


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

export const productReducer = (state, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return [...state, {
                id: action.product.id,
                image: action.product.image,
                name: action.product.name,
                category: action.product.category,
                quantity: action.product.quantity,
                bPrice: action.product.bPrice,
                vPrice: action.product.vPrice,
            }]
        case UPDATE_PRODUCT:
            return [...state, {
                id: action.product.id,
                image: action.product.image,
                name: action.product.name,
                category: action.product.category,
                quantity: action.product.quantity,
                bPrice: action.product.bPrice,
                vPrice: action.product.vPrice,
            }]
        default:
            return state
    }

}