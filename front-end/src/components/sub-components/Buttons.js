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
import { edit, cancel } from '../../reducers/actoins'
import { DarkContext, OptionsContext } from '../../reducers/context'
import {useOpen} from '../../hooks'

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
    deleteBtn: {
        fontWeight: "bold",
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
            <Fade in={true} timeout={900}>
                <EditIcon className={style.icon} />
            </Fade>
        </IconButton>
    )
}

export const DeleteIconButton = () => {
    const style = useStyle()
    const { state, dispatch } = useContext(OptionsContext)
    return (
        <IconButton
            color="primary"
            onClick={() => dispatch(cancel())}
            className={style.optionBtn}
        >
            <Fade in={true} timeout={600}>
                <DeleteIcon className={style.icon} />
            </Fade>
        </IconButton>
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

export const AddButton = ({ value, dialog, title }) => {
    const { state, dispatch } = useContext(DarkContext)
    const {handleClose, handleOpen, open} = useOpen()
    const useStyle = makeStyles(() => ({
        addBtn: {
            marginRight: "10px",
        },
    }))
    const style = useStyle()
    return (
        <>
            <Button
                elevation={0}
                variant="contained"
                color="primary"
                onClick={handleOpen}
                className={style.addBtn}
            >
                New {value} +
            </Button>
            <Fade in={true} timeout={10000}>
                {dialog}
            </Fade>
        </>
    )
}

export const DeleteButton = ({ title, content }) => {

    return (
        <>
            <Button
                onClick={handleOpen}
                elevation={0}
                color="secondary"
                variant="contained"
            >
                delete <DeleteIcon />
            </Button>


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