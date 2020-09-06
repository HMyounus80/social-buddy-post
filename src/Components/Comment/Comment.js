import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        borderRadius: 20,
        paddingRight: 10,
        marginBottom: 30,
        boxShadow: '5px 5px 10px gray',
    },
    img:{
        marginLeft:'30%',
        borderRadius:'50%',
        textAlign:'center'
    }
});

const Comment = (props) => {
    const comment = props.comment;
    
    const classes = useStyles();

    return (
        <div>
            <h4>This Post Comment : {comment.length}</h4>
            {
                comment.map( comment => 
                    <div style={{flexGrow:'1'}} className={classes.pos}>
                        <Grid container spacing={3}>
                            {/* <Grid item xs={3}>                               
                            </Grid> */}
                            <Grid item xs={9}>
                                <Typography style={{ marginLeft: '20px'}}>                                                                      
                                    <h3>Name: {comment.name}</h3>                                   
                                     <h4>Email: {comment.email}</h4>    
                                    <p>Body: {comment.body}</p>
                                </Typography>
                            </Grid>
                        </Grid>
                    </div>
                )
            }
            
        </div>
    );
};

export default Comment;