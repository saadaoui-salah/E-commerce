import { Grid, TextField, Paper, Button } from "@material-ui/core"
import { useForm } from "../hooks"
import { useMutation } from "@apollo/client"
import { LOGIN } from "../graphql/mutations"
import { useEffect } from "react"

export const Login = (props) => {
    
    const {values, onChange, onSubmit} = useForm(authenticate, {
        username:"",
        password:"",
    })
    const [login, {loading, data, error}] = useMutation(LOGIN, {variables: values})
    console.log(error)
    function authenticate(){
        login()
    }
    useEffect(()=>{
        console.log(data)
        if ( data && data.tokenAuth.success){
            
            props.history.push("/")
        }
    }, [data])
    return (
        <Grid container justify="center" align="center">
            <Paper
                style={{ backgroundColor: "#101b38" }}
                elevation={3}>
                <div
                    style={{ display: 'flex' }}
                >
                    <form>
                        <h1 style={{color:'white'}}>Welcome !</h1>
                        <h3 style={{color:'white'}}>Sign In</h3>
                        <TextField
                            onChange={e => onChange(e)}
                            variant="outlined"
                            name="email"
                            type="email"
                            label="Email"
                            />
                        <br />
                        <TextField
                            onChange={e => onChange(e)}
                            type="password"
                            variant="outlined"
                            name="password"
                            label="Password"
                        />
                        <br />
                        <Button
                            type="submit"
                            onClick={(e) => onSubmit(e)}
                            variant="contained"
                            color="success.main"
                        >Login</Button>
                    </form>
                    <div></div>
                </div>
            </Paper>
        </Grid>
    )
}