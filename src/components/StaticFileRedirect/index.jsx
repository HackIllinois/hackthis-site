import ReactGA from 'react-ga';

const StaticFileRedirect = ({ to }) => {
  const redirect = () => window.location.replace(to);

  // Record the pageview to google analytics before redirect
  ReactGA.set({ page: to });
  ReactGA.ga('send', 'pageview', to, {
    hitCallback: redirect,
  });

  // In case google analytics is down or request fails for some reason, continue to redirect after timeout
  setTimeout(redirect, 1000);
  
  return null;
};

export default StaticFileRedirect;