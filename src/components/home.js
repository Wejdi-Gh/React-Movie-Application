

import React from "react";
import film from '../Images/Top Greatest Movie .mp4'
const Home = () => ( <div>
    <h2> Coming Soon ....</h2>
<header>
    
  
  <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
    <source src={film} type="video/mp4"/>
  </video>
</header>
</div>)

export default Home