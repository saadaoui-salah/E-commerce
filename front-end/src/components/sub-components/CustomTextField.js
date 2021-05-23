import { InputAdornment, MenuItem, TextField } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'

export const SelectField = (props) => {
    return (
        <div >
            <TextField
                
                size="small"
                variant="outlined"
                onChange={props.setState}
                value={props.state}
                select
                defaultValue={props.default}>
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