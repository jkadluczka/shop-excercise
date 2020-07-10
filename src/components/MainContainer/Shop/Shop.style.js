import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles({
    root: {
        background: props => props.variant ? 'black' : 'red',
        color: props => props.variant ? 'white' : 'black',
        width: '100%',
        height: '100%'
    },
    swapShopButton: {
        position: 'absolute',
        top: '2px'
    },
    leftButtonPosition: {
        left: '2px',
    },
    rightButtonPosition: {
        right: '2px',
    },
    title: {
        display: 'flex',
    },
    toolBar: {
        display: 'flex',
        justifyContent: 'center'
    },
    fabRoot: {
        height: '20px !important',
        minHeight: '20px !important',
        width: '20px !important',
    },
    loginIcon: {
        position: 'absolute !important',
        right: '10px'
    },
    offerButton: {
        position: 'absolute !important',
        left: '20px',
        color: '#ffffff !important'
    },
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
