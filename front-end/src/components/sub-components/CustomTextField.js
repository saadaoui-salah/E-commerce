import { InputAdornment, Input, MenuItem, TextField, Zoom } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import { useContext, useState } from 'react'
import { OptionsStateContext } from '../../reducers/context'

export const EditField = ({ value, id }) => {
    const state = useContext(OptionsStateContext)
    if (state.edit && id === state.id) {
        return (
            <Zoom in={state.edit} timeout={500}>
                <Input style={{ maxWidth: '40px', fontSize: '14px' }} value={value}></Input>
            </Zoom>
        )
    }
    return (value)
}

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