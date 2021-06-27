import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider, useTheme } from '@material-ui/core'
import { useReducer, useContext } from 'react'
import { dark } from './reducers/state'
import { DarkReducer } from './reducers/reducers'
import { DarkContext } from './reducers/context'


const Theme = ({ children }) => {
    console.log("theme")
    const {state} = useContext(DarkContext)
    const darkTheme = createMuiTheme({
        type: 'dark',
        overrides:{
            MuiPaper:{
                elevation0:"0 7px 14px 0 rgb(65 69 88 / 10%), 0 3px 6px 0 rgb(0 0 0 / 7%)"
            }
        }
    })
    
    const lightTheme = createMuiTheme({
        type: 'light',
        shadows:[
            {0:"none"},
            {1:"0 7px 14px 0 rgb(65 69 88 / 10%), 0 3px 6px 0 rgb(0 0 0 / 7%)"},
            ]
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
