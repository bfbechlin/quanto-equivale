import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { FacebookShareButton, WhatsAppShareButton } from './ShareButtons';

const styles = theme => ({
  card: {
    width: '100%',
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: 'cover',
  },
  disclaimer: {
    padding: `${theme.spacing.unit}px 0`,
  },
});

function DescriptionCard({
  classes, searchOption, message, shareLink,
}) {
  const { img, label, link } = searchOption;
  const redirect = () => {
    const win = window.open(link, '_blank');
    win.focus();
  };
  return (
    <Card className={classes.card}>
      <CardActionArea onClick={redirect}>
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

          <Typography variant="body1">
            {message}
          </Typography>
          <Typography classes={{ root: classes.disclaimer }} variant="caption">
            Clique sobre esse texto para ser direcionado para a fonte dessa pesquisa.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <FacebookShareButton link={shareLink} message={message} />
        <WhatsAppShareButton link={shareLink} message={message} />
      </CardActions>
    </Card>
  );
}

export default withStyles(styles)(DescriptionCard);
