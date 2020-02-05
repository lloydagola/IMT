import React from "react";
import ImageGallery from 'react-grid-gallery';
import './gallery.css';

const Gallery = props => (
      <ImageGallery images={props.images}/>
);

export default Gallery;
