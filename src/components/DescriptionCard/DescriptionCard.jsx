import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { FacebookShareButton, WhatsAppShareButton } from './ShareButtons';

const styles = {
  card: {
    width: '100%',
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: 'cover',
  },
};

function DescriptionCard({
  classes, searchOption, message, shareLink,
}) {
  const { img, label } = searchOption;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={label}
          className={classes.media}
          height="140"
          image={img}
          title={label}
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            {label}
          </Typography>
          <Typography component="p">
            {message}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <FacebookShareButton link={shareLink} />
        <WhatsAppShareButton link={shareLink} />
      </CardActions>
    </Card>
  );
}

export default withStyles(styles)(DescriptionCard);
