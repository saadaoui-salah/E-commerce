import { useContext, useState } from 'react'
import EditIcon from '@material-ui/icons/Edit';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import SaveAltOutlinedIcon from '@material-ui/icons/SaveAltOutlined';
import DeleteIcon from '@material-ui/icons/Delete';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import {
    IconButton,
    Button,
    Fade,
    Slide,
} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles'
import { Grow } from '@material-ui/core'
import CustomDialog from './Dialog'
import { edit, cancel } from '../../reducers/actoins'
import { OptionsContext } from '../../reducers/context'
import { useTheme, ThemeProvider } from '@material-ui/core/styles'
import { customTheme } from '../../themes'
const useStyle = makeStyles(() => ({
    optionBtn: {
        width: '30px',
        height: '30px',
        marginRight: '5px'
    },
    icon: {
        color: '#fff',
        width: '20px',
        height: '20px'
    },
    addBtn: {
        backgroundColor: "#0062a77a",
        marginRight:"10px",
        color: "#0af",
        fontWeight:"bold",
        '&:hover': {
            transition: '0.5s',
            backgroundColor: '#0260a7'
        }
    },
    deleteBtn: {
        fontWeight:"bold",
        backgroundColor: '#96365891',
        color: '#ff4487',
        '&:hover': {
            backgroundColor: '#9a2b53e3'
        }
    }

}))

export const SaveIconButton = ({ display }) => {
    const style = useStyle()
    const { state, dispatch } = useContext(OptionsContext)
    return (
        <IconButton

            onClick={() => dispatch(edit(false))}
            varialnt="outlined"
            style={{ backgroundColor: "#0063cc" }}
            className={style.optionBtn}
        >
            <Grow
                in={display}
                style={{ transformOrigin: '0 0 0' }}
                {...(display ? { timeout: 600 } : {})}
            >
                <SaveAltOutlinedIcon
                    className={style.icon}
                />
            </Grow>
        </IconButton>
    )
}

export const CancelIconButton = ({ display }) => {
    const style = useStyle()
    const { state, dispatch } = useContext(OptionsContext)
    return (
        <IconButton
            onClick={() => dispatch(edit(false))}
            style={{ backgroundColor: "#f50057" }}
            className={style.optionBtn}
        >
            <Grow
                in={display}
                style={{ transformOrigin: '0 0 0' }}
                {...(display ? { timeout: 600 } : {})}
            >
                <CloseOutlinedIcon className={style.icon} />
            </Grow>
        </IconButton>
    )
}

export const EditIconButton = ({ id }) => {
    const style = useStyle()
    const { state, dispatch } = useContext(OptionsContext)
    return (
        <IconButton
            onClick={() => dispatch(edit(id.id))}
            varialnt="outlined"
            style={{ backgroundColor: "#0063cc" }}
            className={style.optionBtn}
        >
            <Fade in={true} timeout={600}>
                <EditIcon className={style.icon} />
            </Fade>
        </IconButton>
    )
}

export const DeleteIconButton = () => {
    const style = useStyle()
    const theme = useTheme(customTheme)
    const { state, dispatch } = useContext(OptionsContext)
    return (
        <ThemeProvider theme={theme}>
            <IconButton
                color="primary"
                onClick={() => dispatch(cancel())}
                className={style.optionBtn}
            >
                <Fade in={true} timeout={600}>
                    <DeleteIcon className={style.icon} />
                </Fade>
            </IconButton>
        </ThemeProvider>
    )
}
export const TableOptions = ({ id }) => {
    const { state, dispatch } = useContext(OptionsContext)
    const displayEditOptions = state.edit.id === id
    return (
        <>
            {
                displayEditOptions ? (
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center'
                        }}>
                        <SaveIconButton display={displayEditOptions} />
                        <CancelIconButton display={displayEditOptions} />
                    </div>

                )
                    : (

                        <div style={{ display: 'flex', justifyContent: 'center' }}>

                            <EditIconButton id={id} />
                            <DeleteIconButton />
                        </div>
                    )}

        </>
    )
}

export const CardOptions = ({ id }) => {
    const { state, dispatch } = useContext(OptionsContext)
    const displayEditOptions = state.id === id.id
    if (displayEditOptions) {
        return (
            <Slide timeout={350} direction="left" in={displayEditOptions} mountOnEnter  >
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center'
                    }}>
                    <SaveIconButton onClick={cancel()} display={displayEditOptions} />
                    <CancelIconButton onClick={edit(id)} display={displayEditOptions} />
                </div>
            </Slide>
        )
    }
    return (
        <Slide timeout={350} direction="left" in={!displayEditOptions} mountOnEnter unmountOnExit >
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <EditIconButton id={id} />
            </div>
        </Slide>
    )
}

export const AddButton = ({ value, content, title }) => {
    const style = useStyle()
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)
    console.log(`open ${open}`)
    return (
        <>
            <Button
                onClick={handleOpen}
                className={style.addBtn}
            >
                New {value} +
            </Button>
            <Fade in={open} timeout={10000}>
                <CustomDialog
                    open={open}
                    handleClose={handleClose}
                    title={title}
                    content={content}
                    agree="Save"
                    disagree="Cancel"
                />
            </Fade>
        </>
    )
}

export const DeleteButton = ({ title, content }) => {
    const style = useStyle()
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)
    return (
        <>
            <Button
            className={style.deleteBtn} 
            onClick={handleOpen} 
            >
                delete <DeleteIcon />
            </Button>
            <CustomDialog
                open={open}
                handleClose={handleClose}
                title={title}
                content={content}
                agree="Delete"
                disagree="Cancel"
            />

        </>
    )
}

export const ArrowIconButton = () => {
    const [open, setOpen] = useState(false)
    if (open) {
        return (
            <IconButton aria-label="expand row" size="small" onClick={() => setOpen(false)}>
                <KeyboardArrowUpIcon />
            </IconButton>
        )
    }
    return (
        <IconButton aria-label="expand row" size="small" onClick={() => setOpen(true)}>
            <KeyboardArrowDownIcon />
        </IconButton>
    )
}