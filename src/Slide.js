import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

export default class Slide extends React.Component {
  render() {
    const images = [
      {
        original: "/img/photos/original/a.png",
        thumbnail: "/img/photos/thumb/a.png",
      },
      {
        original: "/img/photos/original/b.png",
        thumbnail: "/img/photos/thumb/b.png",
      },
      {
        original: "/img/photos/original/c.png",
        thumbnail: "/img/photos/thumb/c.png",
      },
      {
        original: "/img/photos/original/d.png",
        thumbnail: "/img/photos/thumb/d.png",
      },
      {
        original: "/img/photos/original/e.png",
        thumbnail: "/img/photos/thumb/e.png",
      },
    ];
    return <ImageGallery items={images} autoPlay={true} />;
  }
}
