import React, { useState, useEffect } from 'react';
import Post from '../Post/Post';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));


const Home = () => {
    const [post, setPost] = useState([]);

    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPost(data));
    },[])
    
    const classes = useStyles();
    return (
        <div>
          <h2 style={{textAlign: 'center'}}>All Post: {post.length}</h2>
        {
         <Container>
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={3}>  
                    </Grid>
                 <Grid item xs={6}>
                {
                    post.map(post => <Post post={post} key={post.id}/>)
                }
                 </Grid>
                <Grid item xs={3}> 
                     </Grid>
                 </Grid>
             </div>
         </Container>
        
        }
        
    </div>
    );
};

export default Home;