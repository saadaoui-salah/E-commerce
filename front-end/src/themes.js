import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider, useTheme } from '@material-ui/core'
import { useReducer, useContext } from 'react'
import { dark } from './reducers/state'
import { DarkReducer } from './reducers/reducers'
import { DarkContext } from './reducers/context'


const Theme = ({ children }) => {
    const {state, dispatch} = useContext(DarkContext)
    const darkTheme = createMuiTheme({
        type: 'dark',
        palette: {
            primary: {
                light: '#7bc3f5b5',
                main: '#101b38',
                dark: '#0097ff',
                contrastText: "#fff"
            },
            secondary: {
                light: '#0085ea57',
                main: '#7bc3f5b5',
                dark: '#0097ff',
                contrastText: "#fff"
            },
        },
        direction: 'ltr',
        transitions: {
            duration: {
                shortest: 150,
                shorter: 200,
                short: 250,
                standard: 300,
                complex: 375,
                enteringScreen: 3000,
                leavingScreen: 3000,
            }
        }
    })
    
    const lightTheme = createMuiTheme({
        type: 'light',
    })
    const theme = state ? darkTheme : lightTheme
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )

}

export const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(DarkReducer, dark)
    return (
        <DarkContext.Provider value={{ state: state, dispatch: dispatch }}>
            <Theme>
                {children}
            </Theme>
        </DarkContext.Provider>
    )
}
