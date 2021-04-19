import { useContext, useState } from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import SaveAltOutlinedIcon from '@material-ui/icons/SaveAltOutlined';
import {
    IconButton,
    Button,
    Fade,
} from "@material-ui/core";
import { OptionsStateContext } from '../../reducers/context'
import { makeStyles } from '@material-ui/core/styles'
import { Grow } from '@material-ui/core'
import CustomDialog from './Dialog'
import { edit, cancel } from '../../reducers/actoins'
import { OptionsDispatchContext } from '../../reducers/context'

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
        backgroundColor: '#0af',
        color: "#fff",
        '&:hover': {
            transition: '0.5s',
            backgroundColor: '#0260a7'
        }
    },
    deleteBtn: {
        backgroundColor: '#f50057',
        color: '#fff',
        '&:hover': {
            backgroundColor: '#c50046'
        }
    }

}))

export const SaveIconButton = ({ display }) => {
    const style = useStyle()
    const dispatch = useContext(OptionsDispatchContext)
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
    const dispatch = useContext(OptionsDispatchContext)
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
    const dispatch = useContext(OptionsDispatchContext)
    return (
        <IconButton
            onClick={() => {
                dispatch(edit(id));
            }}
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
    const dispatch = useContext(OptionsDispatchContext)
    return (
        <IconButton onClick={() => dispatch(cancel())} style={{ backgroundColor: "#f50057" }} className={style.optionBtn} >
            <Fade in={true} timeout={600}>
                <DeleteIcon className={style.icon} />
            </Fade>
        </IconButton>
    )
}
export const TableOptions = ({ id }) => {
    const state = useContext(OptionsStateContext)
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
    const state = useContext(OptionsStateContext)
    const displayEditOptions = state.edit && state.id === id
    console.log(state)
    console.log(id)
    console.log(displayEditOptions)
    if (displayEditOptions) {
        <div
            style={{
                display: 'flex',
                justifyContent: 'center'
            }}>
            <SaveIconButton display={displayEditOptions} />
            <CancelIconButton display={displayEditOptions} />
        </div>
    }
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <EditIconButton id={id} />
        </div>
    )
}

export const AddButton = ({ value, content, title }) => {
    const style = useStyle()
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)
    return (
        <>
            <Button
                onClick={handleOpen}
                className={style.addBtn}
            >
                New {value} +
            </Button>
            <CustomDialog
                open={open}
                handleClose={handleClose}
                title={title}
                content={content}
                agree="Save"
                disagree="Cancel"
            />
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
            <Button className={style.deleteBtn} onClick={handleOpen} >delete</Button>
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