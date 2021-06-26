import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider, useTheme } from '@material-ui/core'
import { useReducer, useContext } from 'react'
import { dark } from './reducers/state'
import { DarkReducer } from './reducers/reducers'
import { DarkContext } from './reducers/context'


const Theme = ({ children }) => {
    console.log("theme")
    const {state, dispatch} = useContext(DarkContext)
    const darkTheme = createMuiTheme({
        type: 'dark',
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
