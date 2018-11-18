import React from 'react';
import Typography from '@material-ui/core/Typography';
import Collapse from '@material-ui/core/Collapse';

const TIMEOUT = 250;

class DescriptionViewer extends React.Component {
  state = {
    open: true,
    text: '',
  };

  componentDidUpdate(prevProps) {
    const { text } = this.props;
    if (text !== prevProps.text) {
      this.setState({ open: false });
      setTimeout(() => this.setState({ open: true, text }), TIMEOUT);
    }
  }

  render() {
    const { open, text } = this.state;
    return (
      <Collapse in={open} unmountOnExit timeout={TIMEOUT}>
        <Typography variant="body1">
          {text}
        </Typography>
      </Collapse>
    );
  }
}

export default DescriptionViewer;
