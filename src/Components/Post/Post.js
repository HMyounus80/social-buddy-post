import React from 'react';
import { Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';




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
    marginBottom: 20,
    boxShadow: '5px 5px 10px gray',
  },
  img:{
    padding: '2px 5px',
    borderRadius:'50%',
    float: 'left',
    marginRight: 10
 }
});


const Post = (props) => {
    //console.log(props.post);
    const {title, id , body, userId } = props.post;


    const classes = useStyles();
    return (
         <div>
           <Card className={classes.root , classes.pos}>

          <CardContent>         
             <Typography variant="h5" component="h3">
                Id: {id}
            </Typography>
            <br/>
            <Typography variant="h5" component="h3">
                userId: {userId}
            </Typography>
            <Typography variant="h5" component="h2">
               Name: {title}
            </Typography>
            <br/>
            <Typography variant="body2" color="textPrimary" component="p">
               Body: {body}
            </Typography>
            <br/>
            <Link to={`/post/${id}`}>
                <Button size="small" variant="contained" color="primary" style={{textDecoration:'none', target:'_blank' }}>See More</Button>
            </Link>
        </CardContent>
 
      </Card>
        </div>

    );
}

export default Post;