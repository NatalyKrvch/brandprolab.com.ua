'use client';

import 'yet-another-react-lightbox/styles.css';

import Lightbox from 'yet-another-react-lightbox';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';

import type { ImageLightboxProps } from './types';

const ImageLightbox = ({ open, onClose, imageUrl }: ImageLightboxProps) => (
  <Lightbox
    open={open}
    close={onClose}
    slides={[{ src: imageUrl }]}
    noScroll={{ disabled: true }}
    carousel={{ finite: true }}
    animation={{
      fade: 300,
      swipe: 300,
      easing: { fade: 'ease-in-out' },
    }}
    plugins={[Zoom]}
  />
);

export default ImageLightbox;
