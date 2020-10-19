import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import ShareRoundedIcon from '@material-ui/icons/ShareRounded';
import CardMedia from '@material-ui/core/CardMedia';
import img22 from './assets/images/img1.png';

const useStyles = makeStyles({

  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  imgstyle: {
      width: '100%',
      height: '300px'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
});

const CofeeCard = (props) => {
    const classes = useStyles();
    const { title, subtitle, description, imgSrc } = props;

    return (
        <Card>
            <CardHeader
        avatar={
          <Avatar aria-label="a">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="share">
            <ShareRoundedIcon />
          </IconButton>
        }
        title={title}
        subheader={subtitle}
            />
            <CardMedia
                className={classes.media}
                image={imgSrc}
                title={title}
            />
            <CardContent>
                <Typography  className={classes.title} color="textSecondary" gutterBottom>
                {description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    )
};

export default CofeeCard;