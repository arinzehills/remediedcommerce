import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(()=>({
    root: {
        maxWidth: '100%',
        width:'90%',
        marginLeft: '30px',
        marginTop:'30px'
    },
    media:{
        height:0 ,
        paddingTop: '56.25%',
        
    },
    cardActions:{
        display:'flex',
        justifyContent:'flex-end',
        
            
    },
    red: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        '&:hover': {
            background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
          },
        border: 0,
        borderRadius: 10,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
        marginRight:'10px'
      },
    cardContent:{
        display:'flex',
        justifyContent:'space-between', 
        fontSize: '30px'     
    },

}));