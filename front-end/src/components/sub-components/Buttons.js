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
import { edit, remove, setID } from '../../reducers/actoins'
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


export const Options = ({ id }) => {
    const style = useStyle()
    const state = useContext(OptionsStateContext)
    const dispatch = useContext(OptionsDispatchContext)
    const displayEditOptions = state.edit && id === state.id
    return (
        <>
            {
                displayEditOptions ? (
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center'
                        }}>
                        <IconButton
                            onClick={() => dispatch(edit(false))}
                            varialnt="outlined"
                            style={{ backgroundColor: "#0063cc" }}
                            className={style.optionBtn}
                        >
                            <Grow
                                in={displayEditOptions}
                                style={{ transformOrigin: '0 0 0' }}
                                {...(displayEditOptions ? { timeout: 600 } : {})}
                            >
                                <SaveAltOutlinedIcon
                                    className={style.icon}
                                />
                            </Grow>
                        </IconButton>

                        <IconButton
                            onClick={() => dispatch(edit(false))}
                            style={{ backgroundColor: "#f50057" }}
                            className={style.optionBtn}
                        >
                            <Grow
                                in={displayEditOptions}
                                style={{ transformOrigin: '0 0 0' }}
                                {...(displayEditOptions ? { timeout: 600 } : {})}
                            >
                                <CloseOutlinedIcon className={style.icon} />
                            </Grow>
                        </IconButton>
                    </div>

                )
                    : (

                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <IconButton
                                onClick={() => {
                                    dispatch(edit(true));
                                    dispatch(setID(id))
                                }}
                                varialnt="outlined"
                                style={{ backgroundColor: "#0063cc" }}
                                className={style.optionBtn}
                            >
                                <Fade in={true} timeout={600}>
                                    <EditIcon className={style.icon} />
                                </Fade>
                            </IconButton>

                            <IconButton onClick={() => dispatch(remove(true))} style={{ backgroundColor: "#f50057" }} className={style.optionBtn} >
                                <Fade in={true} timeout={600}>
                                    <DeleteIcon className={style.icon} />
                                </Fade>
                            </IconButton>
                        </div>
                    )}

        </>
    )
}

export const AddBtn = ({ value, content, title }) => {
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

export const DeleteBtn = ({ title, content }) => {
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