import React from 'react';
import ReactGA from 'react-ga';
import queryString from 'query-string';


export default (title, pathResolver = null) => (
  WrappedComponent => (
    class NewScreenHOC extends React.Component {
      componentDidMount() {
        const { location } = this.props;
        const path = pathResolver ? pathResolver(this.props)
          : location.pathname + location.search;
        ReactGA.pageview(path, [], title);
      }

      render() {
        const { match, location } = this.props;
        const routing = {
          params: match.params,
          query: queryString.parse(location.search),
        };
        return (
          <WrappedComponent routing={routing} {...this.props} />
        );
      }
    }
  )
);
