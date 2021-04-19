import {
    Dialog,Button,
    DialogActions,
    DialogContent,
    DialogTitle,
} from '@material-ui/core'


export default function CustomDialog({open, handleClose, title, content, agree, disagree }){
    return(
        <Dialog
                open={open}
                keepMounted
                onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="alert-dialog-slide-title">{title}</DialogTitle>
                <DialogContent>
                        {content}
                </DialogContent>
                <DialogActions style={{display:'flex',justifyContent:'space-between'}}>
                    <Button onClick={handleClose} color="secondary">
                        {disagree}
            </Button>
                    <Button onClick={handleClose} color="primary">
                        {agree}
            </Button>
                </DialogActions>
            </Dialog>
    )
} 