import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles({
    loginPaper: {
        height: '250px',
        width: '400px',
        position: 'absolute',
        top: '150px',
        left: 'calc(50% - 200px)',
        display: 'flex',
        flexDirection: 'column',
        '&:focus':{
            outline: 'none'
        }
    },
    loginTitle:{
        padding: '10px 0px',
        textAlign: 'center'
    },
     loginContent:{
         display: 'flex',
         flexDirection: 'column',
         height: '-webkit-fill-available',
         justifyContent: 'space-around'
     }
});

export default useStyles;
