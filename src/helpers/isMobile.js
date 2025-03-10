const isMobile = () => {

  if (process.env.NODE_ENV === 'development' ){
    // If REACT_APP_MOBILE_FIX in Development run additional checks
    if (window.innerWidth < 768) {
      return true;
    }
  }

  if (navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i)
  ) {
    return true;
  }
  else {
    return false;
  }
}

export default isMobile;