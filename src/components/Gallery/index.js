import React, { useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";
import styled from "styled-components";
import "react-image-gallery/styles/css/image-gallery.css";
import "./style.css";
import useFirestore from "hooks/useFirestore";

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
`;

const GalleryHeading = styled.h1`
  font-size: 2.5rem;
  color: #010606;
  margin-bottom: 64px;
`;

const Gallery = () => {
  const { docs } = useFirestore("images");
  const [images, setImages] = useState([]);
  useEffect(() => {
    let images = [];
    docs.forEach((doc) => {
      images.push({
        original: doc.url,
        thumbnail: doc.url,
      });
    });
    setImages(images);
  }, [docs, setImages]);

  return (
    <GalleryContainer id="gallery">
      <GalleryHeading>Gallery</GalleryHeading>
      <ImageGallery autoPlay useTranslate3D showPlayButton={false} showThumbnails={false} items={images} />
    </GalleryContainer>
  );
};

export default Gallery;
