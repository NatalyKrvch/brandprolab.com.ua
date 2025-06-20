import { MainSocialMediaCard, SocialMediaCard } from '@/components';
import { normalizeImageURL, normalizeText } from '@/utils';

import getMainColorByIndex from './helpers/getMainColorByIndex';
import { SubscribeSectionProps } from './types';

const SubscribeSection = ({ subscribeData }: SubscribeSectionProps) => {
  const { mainCard, cards, title } = subscribeData;

  return (
    <section>
      <h2 className="mb-4 px-1 pb-4 text-32 font-bold leading-none tracking-tight text-black tablet:mb-5 tablet:px-2 tablet:text-40 tablet:leading-40 desktop:mb-12 desktop:px-2 desktop:pb-0 desktop:text-52 desktop:leading-52">
        {title}
      </h2>
      <div className="flex flex-col gap-4 desktop:grid desktop:grid-cols-[1fr_1fr] desktop:gap-6">
        <div className="desktop:col-span-1">
          <MainSocialMediaCard
            desktopPhotoURL={normalizeImageURL(mainCard.desktopImage)}
            tabletPhotoURL={normalizeImageURL(mainCard.tabletImage)}
            mobilePhotoURL={normalizeImageURL(mainCard.mobileImage)}
            iconURL={normalizeImageURL(mainCard.icon)}
            description={normalizeText(mainCard.description)}
            platformName={normalizeText(mainCard.platform)}
            platformURL={mainCard.link.trim()}
          />
        </div>

        <div className="grid grid-cols-1 gap-4 tablet:grid-cols-2 tablet:gap-4 desktop:col-span-1 desktop:grid-cols-2 desktop:gap-6 [@media(min-width:1090px)_and_(max-width:1223px)]:grid-cols-4">
          {cards.map((card, index) => (
            <SocialMediaCard
              key={card._key}
              iconURL={normalizeImageURL(card.icon)}
              description={normalizeText(card.description)}
              label={normalizeText(card.title)}
              socialMediaURL={card.link.trim()}
              mainColor={getMainColorByIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubscribeSection;
