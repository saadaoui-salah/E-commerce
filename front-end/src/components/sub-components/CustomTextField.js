import { InputAdornment, MenuItem, TextField } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'

export const SelectField = (props) => {
    return (
        <div >
            <TextField
                style={{ width: '100%' }}
                size="medium"
                variant="outlined"
                onChange={props.setState}
                value={props.state}
                select
                label="Select Category">
                {props.choices.map(choice => {
                    return (
                        <MenuItem key={choice.id}>{choice.category}</MenuItem>
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