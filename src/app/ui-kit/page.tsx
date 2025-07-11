'use client';

// import dynamic from 'next/dynamic';

import {
  // Button,
  Container,
  DiplomaCard,
  // EndlessCarousel,
  ExternalLink,
  HeroMainCard,
  // FlipCard,
  Icon,
  InternalLink,
  Label,
  List,
  // ServiceCardBack,
  // ServiceCardFront,
  PhotoCard,
  // SimpleCard,
  // SocialMediaCard,
  // TestimonialCard,
  UnderlinedText,
  UserBadge,
} from '@/components';
import { IconClassType } from '@/lib/constants';
import {
  EXPERTISE_CARD_HEIGHT,
  EXPERTISE_CARD_PHOTO_HEIGHT,
  EXPERTISE_CARD_PHOTO_WIDTH,
  HERO_CARD_HEIGHT,
  HERO_CARD_PHOTO_HEIGHT,
  HERO_CARD_PHOTO_WIDTH,
} from '@/styles/constants';
// import { MainSocialCardColor } from '@/styles/constants';

// const ControlledCarousel = dynamic(
//   () =>
//     import('@/components/Carousels/ControlledCarousel').then(
//       mod => mod.ControlledCarousel,
//     ),
//   { ssr: false },
// );

// const TESTIMONIALS_ONE = [
//   {
//     text: 'Цей сервіс перевершив усі мої очікування! Рекомендую кожному, хто шукає якість і турботу.',
//   },
//   {
//     text: 'Неймовірний досвід! Команда дуже уважна до деталей.',
//   },
//   {
//     text: 'Я отримала більше, ніж очікувала. Дуже вдячна!',
//   },
//   {
//     text: 'Швидко, зручно і професійно. Однозначно 10 з 10.',
//   },
//   {
//     text: 'Це найкраще рішення, яке я приймала для свого проєкту.',
//   },
//   {
//     text: 'Дякую за індивідуальний підхід та чудовий результат!',
//   },
// ];

// const TESTIMONIALS_TWO = [
//   {
//     text: 'Lorem ipsum dolor sit amet consectetur. Eget turpis ut eget ante leo lacus amet...',
//     clientName: 'Іван',
//     clientPhotoUrl:
//       'https://media.vanityfair.com/photos/659d6933b6da4325190e2751/1:1/w_1333,h_1333,c_limit/Lindsay-Lohan.jpg',
//     clientLink: 'https://linkedin.com/in/ivan',
//   },
//   {
//     text: 'Lorem ipsum dolor sit amet consectetur. Eget turpis ut eget ante leo lacus amet',
//     clientName: 'Олена',
//     clientPhotoUrl:
//       'https://media.vanityfair.com/photos/659d6933b6da4325190e2751/1:1/w_1333,h_1333,c_limit/Lindsay-Lohan.jpg',
//     clientLink: 'https://linkedin.com/in/olena',
//   },
//   {
//     text: 'Lorem ipsum dolor sit amet consectetur. Eget turpis ut eget ante leo lacus amet...',
//     clientName: 'Іван',
//     clientPhotoUrl:
//       'https://media.vanityfair.com/photos/659d6933b6da4325190e2751/1:1/w_1333,h_1333,c_limit/Lindsay-Lohan.jpg',
//     clientLink: 'https://linkedin.com/in/ivan',
//   },
//   {
//     text: 'Lorem ipsum dolor sit amet consectetur. Eget turpis ut eget ante leo lacus amet',
//     clientName: 'Олена',
//     clientPhotoUrl:
//       'https://media.vanityfair.com/photos/659d6933b6da4325190e2751/1:1/w_1333,h_1333,c_limit/Lindsay-Lohan.jpg',
//     clientLink: 'https://linkedin.com/in/olena',
//   },
//   {
//     text: 'Lorem ipsum dolor sit amet consectetur. Eget turpis ut eget ante leo lacus amet...',
//     clientName: 'Іван',
//     clientPhotoUrl:
//       'https://media.vanityfair.com/photos/659d6933b6da4325190e2751/1:1/w_1333,h_1333,c_limit/Lindsay-Lohan.jpg',
//     clientLink: 'https://linkedin.com/in/ivan',
//   },
//   {
//     text: 'Lorem ipsum dolor sit amet consectetur. Eget turpis ut eget ante leo lacus amet',
//     clientName: 'Олена',
//     clientPhotoUrl:
//       'https://media.vanityfair.com/photos/659d6933b6da4325190e2751/1:1/w_1333,h_1333,c_limit/Lindsay-Lohan.jpg',
//     clientLink: 'https://linkedin.com/in/olena',
//   },
// ];

const Uikit = () => {
  return (
    <>
      <div className="mb-4 w-[552px]">
        <span className="my-3 text-xl font-bold">HeroMainCard component</span>
        <HeroMainCard
          title="Емоційний стан, кар’єра, бренд"
          subtitle="— все під контролем!"
          description="Запишіться на безкоштовну консультацію, яка допоможе вам знайти нові можливості, побудувати особистий бренд і досягти успіху в ІТ."
          buttonText="Записатись"
          buttonLink="https://google.com"
          iconURL="./icons/cards/shield.svg"
        />
      </div>

      {/* <div className="mb-4">
        {/* <span className="my-3 text-xl font-bold">
          MainSocialMediaCard component
        </span> */}
      {/* <MainSocialMediaCard
          desktopPhotoURL="/images/temp/photo_desktop.png"
          tabletPhotoURL="/images/temp/photo_tablet.png"
          mobilePhotoURL="/images/temp/photo_mobile.png"
          iconURL="/icons/cards/socialMedia/insta.svg"
          description="– основна платформа для кар’єрних порад, інформації про ринок праці."
          platformName="LinkedIn"
          platformURL="https://linkedin.com"
        />
      </div>  */}

      {/* <div className="mb-4">
        <span className="my-3 text-xl font-bold">
          EndlessCarousel component
        </span>
        <EndlessCarousel>
          {TESTIMONIALS_ONE.map((testimonial, index) => (
            <div key={index} className="mx-4">
              <TestimonialCard
                amountOfWordsToDisplay={12}
                {...testimonial}
                className="desktop:h-216 desktop:w-336"
              />
            </div>
          ))}
        </EndlessCarousel>
      </div> */}

      {/* <div className="mx-4 my-16">
        <span className="my-3 text-xl font-bold">
          TestimonialCarousel component
        </span>
        <ControlledCarousel>
          {TESTIMONIALS_TWO.map((t, i) => (
            <TestimonialCard
              amountOfWordsToDisplay={15}
              key={i}
              {...t}
              className="h-240 desktop:h-300"
            />
          ))}
        </ControlledCarousel>
      </div> */}
      {/* 
      <div className="m-4 w-[314px]">
        <span className="my-3 text-xl font-bold">
          SocialMediaCard component
        </span>
        <SocialMediaCard
          iconURL="/icons/cards/socialMedia/insta.svg"
          socialMediaURL="https://www.instagram.com/"
          label="@zakharovavictoriiaa"
          description="Публікації та відео про саморозвиток і пошук роботи."
          mainColor={MainSocialCardColor.BLUE}
        />
      </div> */}

      {/* <div className="relative mx-4 my-10 h-[500px] w-[480px]">
        <span className="my-3 text-xl font-bold">FlipCard component</span>
        <FlipCard
          front={
            <ServiceCardFront
              iconURL="/icons/cards/hand.svg"
              header="Точкова кар’єрна консультація"
              label="90 хв."
              description="Онлайн-зустріч для вирішення конкретного запиту: аудит резюме, LinkedIn, підготовка до співбесіди чи боротьба з вигоранням."
              callToActionText="Що можна вирішити на консультації?"
              whiteIconURL=''
            />
          }
          back={
            <ServiceCardBack
              header="Разова онлайн-зустріч (1,5-2 год.) для вирішення конкретного запиту:"
              list={[
                'Провести аудит резюме: що залишити, змінити чи додати, щоб воно стало результативним',
                'Перевірити LinkedIn-профіль: надам рекомендації для його покращення та залучення рекрутерів',
                'Розробити стратегію пошуку роботи: як і де шукати вакансії, яких помилок уникати',
              ]}
            />
          }
        />
      </div> */}

      {/* <div className="m-4 w-[480px]">
        <span className="my-3 text-xl font-bold">FlipCardFront component</span>
        <FlipCardFront
          iconURL="/icons/cards/hand.svg"
          header="Точкова кар’єрна консультація"
          label="90 хв."
          description="Онлайн-зустріч для вирішення конкретного запиту: аудит резюме, LinkedIn, підготовка до співбесіди чи боротьба з вигоранням."
          callToAction="Що можна вирішити на консультації?"
        />
      </div> */}
      {/* 
      <div className="m-4 w-[480px]">
        <span className="my-3 text-xl font-bold">FlipCardBack component</span>
        <FlipCardBack
          header="Разова онлайн-зустріч (1,5-2 год.) для вирішення конкретного запиту:"
          list={[
            'Провести аудит резюме: що залишити, змінити чи додати, щоб воно стало результативним',
            'Перевірити LinkedIn-профіль: надам рекомендації для його покращення та залучення рекрутерів',
            'Розробити стратегію пошуку роботи: як і де шукати вакансії, яких помилок уникати',
          ]}
        />
      </div> */}

      {/* <div className="m-4">
        <span className="my-3 text-xl font-bold">Video component</span>
        <Video
          videoUrl="https://www.youtube.com/watch?v=4glKLs5Py1A"
          thumbnailSrc="/images/temp/Screenshot.png"
        />
      </div> */}

      <div className="m-4 flex flex-col gap-5">
        <span className="my-3 text-xl font-bold">PhotoCard component</span>
        <PhotoCard
          text="Чому мені можна довіряти?"
          photoUrl="/images/temp/photo-expert.png"
          backgroundUrl="/images/backgrounds/expert-bg.svg"
          imageWidth={EXPERTISE_CARD_PHOTO_WIDTH}
          imageHeight={EXPERTISE_CARD_PHOTO_HEIGHT}
          cardHeight={EXPERTISE_CARD_HEIGHT}
        />
      </div>

      <div className="m-4 flex flex-col gap-5">
        <PhotoCard
          photoUrl="/images/temp/photo-hero.png"
          backgroundUrl="/images/backgrounds/hero-photocard-bg.svg"
          imageWidth={HERO_CARD_PHOTO_WIDTH}
          imageHeight={HERO_CARD_PHOTO_HEIGHT}
          cardHeight={HERO_CARD_HEIGHT}
        />
      </div>

      <div className="m-4 flex flex-col gap-5">
        <span className="my-3 text-xl font-bold">DiplomaCard component</span>
        <DiplomaCard
          onClick={() => console.log('Click')}
          diplomaURL="https://media.vanityfair.com/photos/60073e65d507f0e0031b84c5/master/w_2560%2Cc_limit/VF0321_Cover_SUB-OPENER.png"
        />
        <DiplomaCard diplomaURL="https://media.vanityfair.com/photos/63e561bc4d9ea7ac2d152348/16:9/w_5791,h_3257,c_limit/VU0323_Cover_EdLetterPage.jpg" />
      </div>

      {/* <div className="m-4 flex w-[408] flex-col gap-5">
        <span className="my-3 text-xl font-bold">SimpleCard component</span>
        <SimpleCard backgroundColor="bg-teal-light" className="p-6">
          <p className="mb-6 font-bold">SimpleCard content</p>
          <List list={['Item 1', 'Item 2', 'Item 3']} />
        </SimpleCard>
      </div> */}

      <div className="m-4 flex flex-col gap-5">
        <span className="my-3 text-xl font-bold">List component</span>
        <List list={['Item 1', 'Item 2', 'Item 3']} />
      </div>

      {/* <div className="m-4 flex h-[300] w-[442] flex-col gap-5">
        <span className="my-3 text-xl font-bold">
          TestimonialCard component
        </span>
        <TestimonialCard
          amountOfWordsToDisplay={15}
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          clientName="Anastasiia Kovalchuk"
          clientPhotoUrl="https://media.vanityfair.com/photos/659d6933b6da4325190e2751/1:1/w_1333,h_1333,c_limit/Lindsay-Lohan.jpg"
          clientLink="https://www.google.com/"
        />
      </div> */}

      {/* <div className="m-4 flex w-[442] flex-col gap-5">
        <span className="my-3 text-xl font-bold">
          TestimonialCard with no client component
        </span>
        <TestimonialCard
          amountOfWordsToDisplay={12}
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
      </div> */}

      <div className="w-50 m-4 flex flex-col gap-5">
        <span className="my-3 text-xl font-bold">UserBadge component</span>
        <UserBadge
          userName="John Doe"
          userPhotoUrl="https://media.vanityfair.com/photos/659d6933b6da4325190e2751/1:1/w_1333,h_1333,c_limit/Lindsay-Lohan.jpg"
        />
      </div>

      <div className="m-4 flex flex-col gap-5">
        <span className="my-3 text-xl font-bold">UnderlinedText component</span>
        <UnderlinedText>Underlined Text</UnderlinedText>
      </div>

      {/* <div className="m-4 w-[464px]">
        <Button onClick={() => console.log('Click')}>Записатись</Button>
      </div> */}

      <div className="m-4 flex flex-col gap-5">
        <span className="my-3 text-xl font-bold">Label component</span>
        <Label>Ваш розвиток починається тут!</Label>
      </div>

      <div className="m-4 flex flex-col gap-5">
        <span className="my-3 text-xl font-bold">Icon component</span>
        <Icon
          iconURL="/icons/cards/hand.svg"
          iconAlt="icon"
          type={IconClassType.SERVICES}
        />
        <Icon
          iconURL="/icons/cards/hand.svg"
          iconAlt="icon"
          type={IconClassType.EXPERTISE}
        />
      </div>

      <div className="m-4 flex flex-col gap-5">
        <span className="my-3 text-xl font-bold">InternalLink component</span>
        <InternalLink href="/" className="font-bold underline">
          Back
        </InternalLink>
      </div>

      <div className="m-4 flex flex-col gap-5">
        <span className="my-3 text-xl font-bold">ExternalLink component</span>
        <ExternalLink
          href="https://tailwindcss.com/"
          className="font-bold underline"
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 26L26 6"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M26 26L6 6"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </ExternalLink>
      </div>

      <div className="m-4 flex flex-col gap-5">
        <span className="my-3 text-xl font-bold">Container component</span>
        <Container>
          <p className="border-x-2 border-b-2 font-bold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dolor
            massa, commodo sit amet urna ac, tincidunt luctus ligula. Nam et
            laoreet ante. Nunc id ultrices enim. Vestibulum scelerisque nisl nec
            gravida malesuada. Nunc massa elit, rhoncus vitae malesuada et,
            vulputate et ligula. Integer volutpat ut lectus pretium accumsan.
            Donec mi urna, semper ac cursus eget, hendrerit quis mi. Sed ut leo
            non odio tincidunt facilisis. Maecenas a orci augue. Phasellus porta
            rutrum felis. Sed gravida leo id nulla mattis, iaculis iaculis massa
            maximus. Maecenas pretium nibh et maximus condimentum. Mauris
            efficitur elit malesuada lectus pulvinar finibus. Cras ex est,
            dapibus a risus laoreet, efficitur varius turpis. Mauris elit orci,
            ornare non semper nec, pharetra eu est. Mauris eget risus ante. Cras
            quis feugiat leo. Sed fringilla ullamcorper congue. Curabitur vitae
            accumsan ante. Nam nec tempor dui. Curabitur massa odio, tempus eget
            sem sit amet, volutpat cursus neque. Ut consequat maximus sodales.
            Curabitur dui libero, semper ut nulla pharetra, viverra feugiat
            elit. Ut fermentum mauris turpis, dignissim lacinia purus
            consectetur ac. Proin metus metus, sagittis eget vehicula at,
            sagittis id quam. Fusce vestibulum mauris sem, sit amet ultrices
            arcu sodales eu. Aliquam sed tortor eget urna vulputate
            pellentesque. Praesent vel justo facilisis, ultricies est eget,
            sagittis lectus. Sed eget convallis lacus. Vestibulum ante ipsum
            primis in faucibus orci luctus et ultrices posuere cubilia curae;
            Suspendisse quis blandit massa, ac mollis lectus. Sed hendrerit nibh
            in erat consequat fermentum. Etiam egestas sit amet odio at
            ultrices. Duis nec metus sollicitudin, pretium ante quis, interdum
            ex. Proin sed interdum ipsum. Vivamus interdum euismod viverra.
            Nulla interdum ligula quis quam interdum, eget blandit lectus
            cursus. Fusce euismod ac lorem eget lobortis. Fusce quis blandit
            ligula. Nulla pulvinar purus sit amet pellentesque elementum. Nunc
            non pellentesque purus. Fusce fringilla ex mauris, non ullamcorper
            ex mattis vel. Suspendisse sed erat ut dui condimentum vestibulum
            quis nec lacus. Etiam porttitor, tellus sit amet fermentum blandit,
            nisi est pretium nulla, ut tempor neque metus vitae neque. Nullam
            aliquet convallis metus id mollis. Etiam finibus turpis turpis, sit
            amet pulvinar quam pretium vel. Suspendisse tempor dapibus lorem vel
            porta. Sed accumsan felis aliquet ornare blandit. Pellentesque
            habitant morbi tristique senectus et netus et malesuada fames ac
            turpis egestas. Fusce in suscipit nunc. Donec ac aliquet augue, et
            imperdiet neque. Quisque quis commodo arcu. Nullam eu magna neque.
          </p>
        </Container>
      </div>
    </>
  );
};

export default Uikit;
