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
    direction:'ltr',
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