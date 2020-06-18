const StaticFileRedirect = ({ to }) => {
  window.location.replace(to);
  return null;
};

export default StaticFileRedirect;