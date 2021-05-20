import {useState} from 'react'

const useToggle = (initialValue) => {
    const [toggle, setToggle] = useState(initialValue)
    return toggle, setToggle(!toggle)
}