import clsx from 'clsx';

import type { AdaptiveImageProps } from './types';

export default function AdaptiveImage({
  sources,
  fallbackSrc,
  className,
  alt = '',
}: AdaptiveImageProps) {
  if (!fallbackSrc) return null;

  if (sources.length > 0) {
    return (
      <picture className={clsx(className)}>
        {sources.map(srcObj => (
          <source
            key={srcObj.media}
            srcSet={srcObj.srcSet}
            media={srcObj.media}
          />
        ))}

        <img src={fallbackSrc} alt={alt} className={clsx(className)} />
      </picture>
    );
  }
}
