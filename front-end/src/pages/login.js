import { Grid, TextField, Paper, Button } from "@material-ui/core"



export const Login = () => {
    return (
        <Grid container justify="center" align="center">
            <Paper
                style={{ backgroundColor: "#101b38" }}
                elevation={3}>
                <div
                    style={{ display: 'flex' }}
                >
                    <div>
                        <h1 style={{color:'white'}}>Welcome !</h1>
                        <h3 style={{color:'white'}}>Sign In</h3>
                        <TextField
                            variant="outlined"
                            label="Email"
                        />
                        <br />
                        <TextField
                            
                            variant="outlined"
                            label="Password"
                        />
                        <br />
                        <Button
                            variant="contained"
                            color="success.main"
                        >Login</Button>
                    </div>
                    <div></div>
                </div>
            </Paper>
        </Grid>
    )
}