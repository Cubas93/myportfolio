import React from 'react';
import Bar from './images/bar.jpg'
import Secrets from './images/secrets.jpg'
import Sticky from './images/sticky.jpg'



function Work(){
    return (
    
        <div class="grid-container">
        <div class= "image">
            <img class="image__img"src={Bar} alt="Mana Deli website" />
            <div class="image__overlay image__overlay--blur">
      <div class="image__title">ManaDeli</div>
      <p class="image__description">
        HTML5, CSS and Javascript.  
      </p>
      <a href="https://manadeli.netlify.app/" class="btn">Visit Site</a>
    </div>
    </div>
    <div class="image">
    <img class="image__img" src={Secrets} alt="Secrets website" />
    <div class="image__overlay image__overlay--blur">
      <div class="image__title">Secrets</div>
      <p class="image__description">
        Simple site built with MongoDB, EJS, Oauth
      </p>
      <a href="https://keeper-of-secrets.herokuapp.com/" class="btn">Visit Site</a>
    </div>
  </div>
  <div class="image">
    <img class="image__img" src={Sticky} alt="Stick a note Website" />
    <div class="image__overlay image__overlay--blur">
      <div class="image__title">Stick-a-Note</div>
      <p class="image__description">
        My first React project
      </p>
      <a href="https://csb-1tl43-k3g9g9kz2-cubas93.vercel.app/" class="btn">Visit Site</a>
    </div>
  </div>

    </div>



    );
}

export default Work;