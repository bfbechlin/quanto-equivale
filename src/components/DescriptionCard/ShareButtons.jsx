import React from 'react';
import {
  FacebookShareButton as FacebookShareBtt,
  WhatsappShareButton as WhatsappShareBtt,
  FacebookIcon,
  WhatsappIcon,
} from 'react-share';
import IconButton from '@material-ui/core/IconButton';
import { newGAEvent, EVENTS, SHARE_TYPES } from '../../core/GoogleAnalytics';

export function FacebookShareButton({ link, message }) {
  return (
    <FacebookShareBtt
      url={link}
      quote={message}
    >
      <IconButton onClick={() => newGAEvent(EVENTS.SHARE, SHARE_TYPES.FACEBOOK)}>
        <FacebookIcon size={32} round />
      </IconButton>
    </FacebookShareBtt>
  );
}

export function WhatsAppShareButton({ link, message }) {
  return (
    <WhatsappShareBtt
      url={link}
      quote={message}
    >
      <IconButton onClick={() => newGAEvent(EVENTS.SHARE, SHARE_TYPES.WHATSAPP)}>
        <WhatsappIcon size={32} round />
      </IconButton>
    </WhatsappShareBtt>
  );
}
