export const DEVICES = [
    {
      name: "XXS",
      width: 320,
      height: 667,
    },
    {
      name: "XS",
      width: 360,
      height: 667,
    },
    {
      name: "S",
      width: 560,
      height: 667,
    },
    {
      name: "M",
      width: 760,
      height: 667,
    },
    {
      name: "L",
      width: 960,
      height: 667,
    },
    {
      name: "XL",
      width: 1160,
      height: 667,
    },
    {
      name: "XXL",
      width: 1360,
      height: 667,
    },
    {
      name: "XXXL",
      width: 1660,
      height: 667,
    },
    {
      name: "fullHD",
      width: 1920,
      height: 667,
    },
  ];
  
  export const LABELS = {
    skip: "skip",
    embedAnyway: "embed anyway",
    useProxy: "use proxy to embed URL",
    embedDirectly: "embed without proxy",
  };
  
  export const NOTIFICATIONS = {
    infoCheckValidity: "Checking URL validity ...",
    infoInvalidURL: "URL is not valid.",
    infoCheckIsIframeable: "Checking iframe compatibility ...",
    infoLocalhostDetected:
      "Localhost detected. Check your local server settings in case it does not work.",
    infoIframeCheckFailedButEmbedding:
      "Iframe compatibility could not be determined, trying to embed the URL anyway.",
    warningMixedContent:
      "Mixed content detected, make sure to use only either HTTP or HTTPS for diffsite and the URLs.",
    warningUserSkippedIframeCheck: "Iframe compatibility check was skipped.",
    warningUsingIframeProxy:
      "URL does not allow iframe embedding. Using proxy to display page, visual and functional differences may occur.",
    errorNoIframeEmbedding: "URL does not allow iframe embedding.",
    errorUnreachableURL: "URL can not be reached.",
  };
  