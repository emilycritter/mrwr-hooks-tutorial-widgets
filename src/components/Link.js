import React from 'react';

const Link = ({ className, href, children }) => {
  const onClick = (event) => {
    if (event.metaKey || event.ctrlKey) { // Boolean values to detect if user wants to open link in new tab
      return;
    }

    event.preventDefault();
    window.history.pushState({}, '', href); // Changes URL without refreshing the page (Note: window.history.pushState is a function available to the browser)

    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
  };

  return (
    <a onClick={onClick} className={className} href={href}>
      {children}
    </a>
  );
}

export default Link;
