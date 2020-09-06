import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import Comment from '../Comment/Comment';



const useStyles = makeStyles({
    root: {
        minWidth: 275,
        marginTop: 20
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
        marginBottom: 20,
        boxShadow: '5px 5px 10px gray',
    },
});

const PostDetails = (props) => {
    
    
    const {Id} = useParams();

    const [postDetail, setPostDetail] = useState({});

    useEffect(() =>{
        const url = `https://jsonplaceholder.typicode.com/posts/${Id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setPostDetail(data))
    }, [Id]);

    const { userId, title, body } = postDetail;

  
    const [comment, setComment] = useState([])
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${Id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setComment(data))
    }, [Id])

    const classes = useStyles();
    
   
    return (
        <div>
            <Container>
                <div className={classes.root}>
                    <Grid container spacing={3}>
                        <Grid item xs={3}>
                           
                        </Grid>
                        <Grid item xs={6}>
                            <Card className={classes.root , classes.pos}>
                                <CardContent>
                                <Typography variant="h5" component="h3">
                                       userId: {userId}
                                    </Typography>
                                    <br/>
                                    <Typography variant="h5" component="h2">
                                       Title: {title}
                                    </Typography>
                                    <br/>
                                    <Typography variant="body2" color="textPrimary" component="p">
                                       Body: {body}
                                    </Typography>
                                </CardContent>                              
                            </Card>
                            <Comment comment={comment}></Comment>
                        </Grid>
                        <Grid item xs={3}>
                         
                        </Grid>
                    </Grid>                      
                </div>
            </Container>
        </div>
    );
};

export default PostDetails;