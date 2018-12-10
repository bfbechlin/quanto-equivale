import { useEffect } from 'react';
import ReactGA from 'react-ga';
import cookie from 'cookie';

const gaTrackingID = 'UA-130212787-1';

export function init(debug) {
  ReactGA.initialize(gaTrackingID, {
    debug,
  });
}

export function useScreenTracking(path, title) {
  useEffect(() => {
    ReactGA.pageview(path, title);
  });
}

export const EVENTS = {
  SEARCH_CREATION: 'search - creation',
  SEARCH_VIEW: 'search - view',
  SEARCH_TRACK: 'search - track',
  SHARE: 'share',
};

export const SHARE_TYPES = {
  FACEBOOK: 'facebook',
  WHATSAPP: 'whatsapp',
};

export function getUser() {
  const { _gid } = cookie.parse(document.cookie);
  return Number(_gid.split('.').filter(Number).join(''));
}

export function newGAEvent(category, action, value) {
  ReactGA.event({ category, action, value });
}
