import { createMuiTheme } from '@material-ui/core/styles'


const theme = createMuiTheme({
    type: 'dark',
    palette: {
        primary: {
            light: '#fff',
            main: '#ff',
            dark: '#101b38',
            contrastText: {
                active: '#0097ff',
                desactive: '#7bc3f5b5',
                normal: '#fff'
            }
        },
    }
})
