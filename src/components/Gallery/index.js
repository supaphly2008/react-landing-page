import React from "react";
import ImageGallery from "react-image-gallery";
import styled from "styled-components";
import "react-image-gallery/styles/css/image-gallery.css";

const GalleryContainer = styled.div`
  height: 900px;
  max-width: 1000px;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    height: 700px;
  }
  @media screen and (max-width: 480px) {
    height: 600px;
  }
`;

const GalleryHeading = styled.h1`
  font-size: 2.5rem;
  color: #010606;
  margin-bottom: 64px;
`;

const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];

const Gallery = () => {
  return (
    <GalleryContainer id="gallery">
      <GalleryHeading>Gallery</GalleryHeading>
      <ImageGallery items={images} />
    </GalleryContainer>
  );
};

export default Gallery;
