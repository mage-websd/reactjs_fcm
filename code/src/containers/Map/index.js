import React, { useEffect } from 'react'
import '../../lib/WeMap/assets/js/wemap-gl.js';
// import '../../lib/WeMap/assets/css/wemap.min.css';
import {appendScript} from '../../helpers/base.js';


export default class Map extends React.Component {

  componentDidMount = () => {
    // appendScript('https://raw.githubusercontent.com/WEMAP-Official/WeMap-Web-SDK-Release/master/assets/js/wemap-gl.js');
    // var map = new wemapgl.WeMap({
    //         container: 'map',
    //         key: 'zZjAMHCwZAHTQqXIvigmZOXNiI'
    // });
  }

  render = () => {

    return (
      <div className="blog-detail container">
        Load map
         <div id="map"></div>
      </div>
    )
  }
}
