import { useState } from "react";


export const useForm = (callback, initialState = {}) => {
    const [values, setValues] = useState(initialState)

    const onChange = (e) => {
        if (e.target.type === "number"){
            setValues({ ...values, [e.target.name]: e.target.valueAsNumber })
        } else{
            setValues({ ...values, [e.target.name]: e.target.value })
        }
    }

    const onSubmit = (e) => {
        e.preventDefault()
        callback()
    }
    return { values, onChange, onSubmit,}
}

export function useOpen (){
    const [open, setOpen] = useState(false)
    const handleOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }
    return { open, handleOpen, handleClose,}
  }