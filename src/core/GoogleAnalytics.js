import { useEffect } from 'react';
import ReactGA from 'react-ga';

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
