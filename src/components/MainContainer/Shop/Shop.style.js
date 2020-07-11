import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles({
    root: {
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
        right: '20px'
    },
    offerButton: {
        position: 'absolute !important',
        left: '20px',
        color: '#ffffff !important'
    },
});

export default useStyles;
