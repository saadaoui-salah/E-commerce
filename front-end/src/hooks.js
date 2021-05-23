import {useState} from 'react'

export const useToggle = (initialValue) => {
    const [toggle, setToggle] = useState(initialValue)
    return toggle, setToggle(!toggle)
}

export const useSelect = (initialValue)=>{
    const [selected, setSelected] = useState(initialValue)
    function handleChange(e){
        setSelected(e.target.value)
    }
    return selected, handleChange
}