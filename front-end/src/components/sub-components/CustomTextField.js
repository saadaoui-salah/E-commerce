import { InputAdornment, Input, MenuItem, TextField, Zoom } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import { useContext } from 'react'
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

export const SelectStatus = () => {
    return (
        <TextField select defaultValue="WAITING">
            <MenuItem style={{ color: '#4caf50' }}>DONE</MenuItem>
            <MenuItem style={{ color: '#f50057' }}>CANCELED</MenuItem>
            <MenuItem style={{ color: '#ff9800' }}>WAITING</MenuItem>
        </TextField>
    )
}

export const SearchField = () => {
    return (
        <>
            <TextField
                style={{
                    width: '100%',
                    backgroundColor: '#fff',
                    borderRadius:'5px',
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