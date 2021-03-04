import React from 'react';

function Share() {
  var html = '<div className="fb-share-button" data-href="https://smart-travel.rikkei.org/news/detail/noti12" id="fbshare" data-layout="button_count"></div>';
  return (
    <div>
    <p>share</p>
    <div dangerouslySetInnerHTML = {{__html: html}} />
    </div>
  );
}

export default Share;
