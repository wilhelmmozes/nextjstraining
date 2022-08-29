import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    container: {
        [theme.breakpoints.down('sm')]: {
            padding: '100px',
            backgroundColor: 'lightGrey',
        },
        [theme.breakpoints.up('md')]: {
            padding: '100px',
            backgroundColor: 'lightGreen',
        },
        [theme.breakpoints.up('lg')]: {
            padding: '100px',
            backgroundColor: 'lightPink',
        },
        '& .titlename': {
            color: 'blue'
        }
    }
}));