import {TypographyStyleOptions} from '@material-ui/core/styles/createTypography';
import {createMuiTheme} from '@material-ui/core';
import {makeStyles, Theme} from '@material-ui/core/styles';

export const applyGlobalStyles = makeStyles((theme: Theme) => ({
    '@global': {
        a: {
            color: theme.palette.primary.main,
        },
    },
}));

const headingTypography: TypographyStyleOptions = {
    fontFamily: '\'Montserrat\', sans-serif',
    fontWeight: 300,
    textTransform: 'uppercase',
};

export const theme = createMuiTheme({
    props: {
        MuiButtonBase: {
            disableRipple: true,
        },
    },
    palette: {
        primary: {
            main: '#7AC74F',
            contrastText: '#fff',
        },
        secondary: {
            main: '#A1CF6B',
            contrastText: '#000',
        },
    },
    typography: {
        body1: {
            fontFamily: '\'Lato\', serif',
        },
        h1: headingTypography,
        h2: headingTypography,
        h3: headingTypography,
        h4: headingTypography,
        h5: {
            ...headingTypography,
            fontSize: '0.8rem',
            fontWeight: 400,
        },
        h6: {
            ...headingTypography,
            fontSize: '0.8rem',
            fontWeight: 400,
            textTransform: 'none',
        },
    },
});