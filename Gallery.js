import React, { Component } from 'react'
//import axios from 'axios'
import ReactBnbGallery from 'react-bnb-gallery'

const photos = [ {
  photo: "./img/img22.jpg",
  caption: "LET YOUR SMILE CHANGE THE WORLD, BUT DON'T LET WORLD CHANGE YOUR SMILE:)",
  thumbnail: "./img/img21.jpg",
}, {
  photo: "./img/img1.jpg",
  caption: "SMILES OF CHILDREN ARE WORTH WORKING FOR:)",
  thumbnail: "./img/img1.jpg",
}, {
  photo: "./img/img2.jpg",
  caption: "LITTLE BY LITTLE, BIT BY BIT, FAMILY BY FAMILY, SO MUCH GOOD CAN BE DONE ON SO MANY LEVELS",
  thumbnail: "./img/img2.jpg",
}, {
  photo: "./img/img3.jpg",
  caption: "I LOVE THOSE WHO CAN SMILE IN TROUBLE,WHO CAN GATHER STRENGTH FROM DISTRESS AND GROW BRAVE BY REFLECTION..",
  thumbnail: "./img/img3.jpg",
}, {
  photo: "./img/img4.jpg",
  caption: "BLESSED ARE THOSE WHO GET FOOD TO EAT :|",
  thumbnail: "./img/img4.jpg",
}, {
  photo: "./img/img5.jpg",
  caption: "MAKING AND SERVING FOOD HAS ALWAYS BEEN A JOYFULL PROCESS :)",
  thumbnail: "./img/img5.jpg",
}, {
  photo: "./img/img6.jpg",
  caption: "FOR HE SATISFIES THE THIRSTY AND FILLS THE HUNGRY WITH GOOD THINGS",
  thumbnail: "./img/img6.jpg",
}, {
  photo: "./img/img7.jpg",
  caption: "EDUCATION IS NOT PREPARATION OF LIFE, BUT IS LIFE ITSELF",
  thumbnail: "./img/img7.jpg",
}, {
  photo: "./img/img8.jpg",
  caption: "",
  thumbnail: "./img/img8.jpg",
}, {
  photo: "./img/img9.jpg",
  caption: "WATER CAN'T QUENCH ALL THIRST",
  thumbnail: "./img/img9.jpg",
}, {
  photo: "./img/img10.jpg",
  caption: "KNOWLEDGE IS POWER",
  thumbnail: "./img/img10.jpg",
}, {
  photo: "./img/img11.jpg",
  caption: "FUN TIME!!!",
  thumbnail: "./img/img11.jpg",
}, {
  photo: "./img/img12.jpg",
  caption: "",
  thumbnail: "./img/img12.jpg",
}, {
  photo: "./img/img13.jpg",
  caption: "LEARNING AND GROWING TOGETHER*_*",
  thumbnail: "./img/img13.jpg",
}, {
  photo: "./img/img14.jpg",
  caption: "A SMILE FROM A CHILD IS PACKAGED SUNSHINES & RAINBOWS",
  thumbnail: "./img/img14.jpg",
}, {
  photo: "./img/img15.jpg",
  caption: "CREATIVITY IS LIMITLESS",
  thumbnail: "./img/img15.jpg",
}, {
  photo: "./img/img16.jpg",
  caption: "YOU ARE AMAZING JUST THE WAY YOU ARE!!!",
  thumbnail: "./img/img16.jpg",
}, {
  photo: "./img/img17.jpg",
  caption: "YES!WE CAN!",
  thumbnail: "./img/img17.jpg",
}, {
  photo: "./img/img18.jpg",
  caption: "EMPOWER AND EXCEL!!!",
  thumbnail: "./img/img18.jpg",
}, {
  photo: "./img/img19.jpg",
  caption: "USE YOUR SMILE TO CHANGE THE WORLD :)",
  thumbnail: "./img/img19.jpg",
}, {
  photo: "./img/img20.jpg",
  caption: "MEMORIES ARE TIMELESS TREASURES OF THE HEART",
  thumbnail: "./img/img20.jpg",
}, {
  photo: "./img/img21.jpg",
  caption: "YOU HAVE TWO HANDS: ONE TO HELP YOURSELF AND ONE TO HELP OTHERS :)",
  thumbnail: "./img/img21.jpg",
}];

class Gallery extends React.Component {
  constructor() {
    super(...arguments);
    this.state = { galleryOpened: false };
    this.toggleGallery = this.toggleGallery.bind(this);
  }

   toggleGallery() {
    this.setState(prevState => ({
      galleryOpened: !prevState.galleryOpened
    }));
  } 

  render () {
    return (
      <div>
	  <div  class="gallery">
      <button onClick={this.toggleGallery}>Open photo gallery</button>
      <ReactBnbGallery show={this.state.galleryOpened} photos={photos} onClose={this.toggleGallery} />
      </div>
	  </div>
    )
  }
}



export default  Gallery