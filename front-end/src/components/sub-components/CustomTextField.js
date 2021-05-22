import { InputAdornment, Input, MenuItem, TextField, Zoom } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import { useContext, useState } from 'react'

export const SelectStatus = (props) => {
    const [status, setStatus] = useState(props.default)
    const handleSelect = (e) => {
        setStatus(e.target.value)
    }
    console.log(props.default)
    return (
        <div >
            <TextField
                
                size="small"
                variant="outlined"
                onChange={handleSelect}
                value={status}
                select
                defaultValue="WAITING">
                {props.choices.map(choice => {
                    return (
                        <MenuItem value={choice.value} style={{ color: choice.color }}>{choice.name}</MenuItem>
                    )
                })
                }
            </TextField>
        </div>
    )
}


export const SearchField = () => {
    return (
        <>
            <TextField
                style={{
                    width: '100%',
                    backgroundColor: '#fff',
                    borderRadius: '5px',
                }}
                size="small"
                placeholder="Search"
                variant="outlined"
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    ),
                }}

            />

        </>

    )
}