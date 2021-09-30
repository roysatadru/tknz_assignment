import React, { useMemo, useState } from 'react';
import { AnimateSharedLayout, motion } from 'framer-motion';

import { ImageModel } from '../../models/ImageModel';
import ImageWrapper from '../../components/ImageWrapper';
import Structure from './Structure';

const variants = {
  hidden: { scale: 0 },
  visible: { scale: 1, transition: { type: 'spring', duration: 0.8 } },
};

type ImageModelWithZIndex = ImageModel & { zIndex: number };

type ImageModelWithZIndexTuple = [
  ImageModelWithZIndex,
  ImageModelWithZIndex,
  ImageModelWithZIndex,
  ImageModelWithZIndex,
  ImageModelWithZIndex,
];

interface ImageGalleryProps {
  images: [ImageModel, ImageModel, ImageModel, ImageModel, ImageModel];
  position: 0 | true;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, position }) => {
  const [curIndex, setCurIndex] = useState<number>(0);

  const updatedImages = useMemo(() => {
    const modifiedImagesList: ImageModelWithZIndex[] = [];
    const indexWatched = position && curIndex;

    for (let i = indexWatched; i >= 0; i--) {
      modifiedImagesList.push({ ...images[i], zIndex: i });
    }

    for (let i = indexWatched + 1; i < images.length; i++) {
      modifiedImagesList.push({ ...images[i], zIndex: i });
    }

    return modifiedImagesList as ImageModelWithZIndexTuple;
  }, [position, curIndex, images]);

  const onClickNextImage: React.MouseEventHandler<HTMLDivElement> = event => {
    event.stopPropagation();
    setCurIndex(curState => ++curState % 5);
  };

  return (
    <AnimateSharedLayout>
      <Structure layout>
        {updatedImages.map((item, index) => {
          const clickableCondition =
            index ===
            (curIndex === images.length - 1
              ? images.length - 1
              : (curIndex + 1) % 5);

          return (
            <ImageWrapper
              layout
              key={item.url}
              style={{
                zIndex: item.zIndex,
                ...(index === 0
                  ? {
                      gridColumn: '1 / -1',
                    }
                  : clickableCondition
                  ? {
                      cursor: 'pointer',
                    }
                  : {}),
              }}
              onClick={clickableCondition ? onClickNextImage : undefined}
            >
              <motion.img
                variants={variants}
                initial="hidden"
                animate="visible"
                src={item.url}
                alt={item.altText}
                layout
              />
            </ImageWrapper>
          );
        })}
        {/* <ImageWrapper
          ref={firstImageRef}
          style={{
            gridColumn: '1 / -1',
          }}
          variants={variants}
          initial="hidden"
          animate="visible"
        >
          <img src={firstImage.url} alt={firstImage.altText} />
        </ImageWrapper>
        <ImageWrapper
          ref={secondImageRef}
          variants={variants}
          initial="hidden"
          animate="visible"
        >
          <img src={secondImage.url} alt={secondImage.altText} />
        </ImageWrapper>
        <ImageWrapper
          ref={thirdImageRef}
          variants={variants}
          initial="hidden"
          animate="visible"
        >
          <img src={thirdImage.url} alt={thirdImage.altText} />
        </ImageWrapper>
        <ImageWrapper
          ref={fourthImageRef}
          variants={variants}
          initial="hidden"
          animate="visible"
        >
          <img src={fourthImage.url} alt={fourthImage.altText} />
        </ImageWrapper>
        <ImageWrapper
          ref={fifthImageRef}
          variants={variants}
          initial="hidden"
          animate="visible"
        >
          <img src={fifthImage.url} alt={fifthImage.altText} />
        </ImageWrapper> */}
      </Structure>
    </AnimateSharedLayout>
  );
};

export default ImageGallery;
