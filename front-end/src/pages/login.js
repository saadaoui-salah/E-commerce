import { Grid, TextField, Paper, Button } from "@material-ui/core"
import { useForm } from "../hooks"
import { useMutation } from "@apollo/client"
import { LOGIN } from "../graphql/mutations"
import { useEffect, useContext } from "react"
import { useHistory } from "react-router-dom"
import { AuthContext } from "../reducers/context"
import { setLogin } from "../reducers/actoins"

export const Login = () => {
    const { authState, authDispatch } = useContext(AuthContext)
    const history = useHistory()
    const { values, onChange, onSubmit } = useForm(authenticate, {
        username: "",
        password: "",
    })
    const [login, { loading, data, error }] = useMutation(LOGIN, { variables: values })
    const submit = (e) => {
        const username = document.getElementsByName('username').values
        const password = document.getElementsByName('password').values
        if (username && password) onSubmit(e)
    }
    function authenticate() {
        login()
    }
    useEffect(() => {
        if (data && data.tokenAuth.success && !loading) {
            authDispatch(setLogin(data.tokenAuth.user.type))
            history.push("")
        }
    }, [data, loading])
    return (
        <Grid container justify="center" align="center">
            <Paper
                style={{
                    backgroundColor: "#fff",
                    width: "400px",
                    height: "400px",
                    display: 'flex',
                    justifyContent: "center",
                    alignItems: "center"
                }}
                elevation={2}>

                <form method="POST">
                    <div>
                        <h1 style={{ color: '#25265eb3' }}>Welcome !</h1>
                        <h3 style={{ color: '#25265eb3' }}>Sign In</h3>
                    </div>
                    <TextField
                        onChange={e => onChange(e)}
                        variant="outlined"
                        style={{ marginBottom: "20px", width: '300px' }}
                        name="username"
                        required
                        label="username"
                    />
                    <br />
                    <TextField
                        onChange={e => onChange(e)}
                        type="password"
                        style={{ marginBottom: "20px", width: '300px' }}
                        variant="outlined"
                        required
                        name="password"
                        label="Password"
                    />
                    <br />
                    <Button
                        type="submit"
                        variant="outlined"
                        color="success"
                        style={{ marginTop: "5px" }}
                        onClick={(e) => submit(e)}
                    >
                        Login
                    </Button>
                </form>
            </Paper>
        </Grid>
    )
}