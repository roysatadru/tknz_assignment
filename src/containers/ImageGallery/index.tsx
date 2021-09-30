import React, { useMemo, useState } from 'react';
import { useMediaQuery, Theme } from '@mui/material';
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
  const matchesUpSm = useMediaQuery(
    theme => (theme as Theme).breakpoints.up('sm'),
    {
      defaultMatches: document.body.getBoundingClientRect().width >= 600,
    },
  );

  const [curIndex, setCurIndex] = useState<number>(0);

  const updatedImages = useMemo(() => {
    const modifiedImagesList: ImageModelWithZIndex[] = [];
    if (matchesUpSm) {
      const indexWatched = position && curIndex;

      for (let i = indexWatched; i >= 0; i--) {
        modifiedImagesList.push({ ...images[i], zIndex: i });
      }

      for (let i = indexWatched + 1; i < images.length; i++) {
        modifiedImagesList.push({ ...images[i], zIndex: i });
      }
    } else {
      let currentIndex = position && curIndex;

      for (let i = 0; i < images.length; i++) {
        let index = currentIndex % images.length;

        modifiedImagesList[i] = { ...images[index], zIndex: i };

        currentIndex++;
      }
    }

    return modifiedImagesList as ImageModelWithZIndexTuple;
  }, [matchesUpSm, position, curIndex, images]);

  const onClickNextImage: React.MouseEventHandler<HTMLDivElement> = event => {
    event.stopPropagation();
    setCurIndex(curState => ++curState % 5);
  };

  return (
    <AnimateSharedLayout>
      <Structure layout>
        {matchesUpSm
          ? updatedImages.map((item, index) => {
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
            })
          : updatedImages.map((item, index) => {
              const gridIndex = 3 + ((index - 1) % updatedImages.length);
              const scaleFactor =
                1 - ((index - 1) % (updatedImages.length - 1)) * 0.05;

              return (
                <ImageWrapper
                  layout
                  key={item.url}
                  style={{
                    zIndex: updatedImages.length - index,
                    ...(index === 0
                      ? {
                          gridColumn: '1 / -1',
                        }
                      : index === 1
                      ? {
                          cursor: 'pointer',
                          gridColumn: `${gridIndex} / ${gridIndex + 6}`,
                          gridRow: '2 / 3',
                          scale: scaleFactor,
                        }
                      : {
                          gridColumn: `${gridIndex} / ${gridIndex + 6}`,
                          gridRow: '2 / 3',
                          scale: scaleFactor,
                        }),
                  }}
                  onClick={index === 1 ? onClickNextImage : undefined}
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
      </Structure>
    </AnimateSharedLayout>
  );
};

export default ImageGallery;
