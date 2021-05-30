import { createMuiTheme } from '@material-ui/core/styles'


export const customTheme = createMuiTheme({
    type: 'dark',
    palette: {
        primary:{
            light:'#7bc3f5b5',
            main:'#101b38',
            dark:'#0097ff',
            contrastText: "#fff"
        },
        secondary:{
            light:'#0085ea57',
            main:'#7bc3f5b5',
            dark:'#0097ff',
            contrastText: "#fff"
        },
    },
    direction:'ltr'
})
