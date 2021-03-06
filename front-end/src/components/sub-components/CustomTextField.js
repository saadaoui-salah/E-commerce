import { InputAdornment, MenuItem, TextField } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'

export const SelectField = (props) => {
    console.log(props)
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


export const SearchField = ({textRef, onChange}) => {
    return (
        <>
            <TextField
                style={{
                    width: '100%',
                    backgroundColor: '#fff',
                    borderRadius: '5px',
                }}
                onChange={onChange}
                inputRef={textRef}
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