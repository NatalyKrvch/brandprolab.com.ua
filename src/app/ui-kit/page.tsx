import {
  Button,
  Container,
  TestimonialCard,
  UserBadge,
  ExternalLink,
  Icon,
  InternalLink,
  Label,
  UnderlinedText,
} from '@/components';

const Uikit = () => {
  return (
    <>
      <div className="m-4 h-[300] w-[442]">
        <TestimonialCard
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          clientName="Anastasiia Kovalchuk"
          clientPhotoUrl="https://media.vanityfair.com/photos/659d6933b6da4325190e2751/1:1/w_1333,h_1333,c_limit/Lindsay-Lohan.jpg"
          clientLink="https://www.google.com/"
        />
      </div>
      <div className="m-4 w-[442]">
        <TestimonialCard text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
      </div>
      <div className="w-50">
        <UserBadge
          userName="John Doe"
          userPhotoUrl="https://media.vanityfair.com/photos/659d6933b6da4325190e2751/1:1/w_1333,h_1333,c_limit/Lindsay-Lohan.jpg"
        />
      </div>
      <div className="m-4">
        <UnderlinedText>Underlined Text</UnderlinedText>
      </div>

      <div className="m-4 w-[464px]">
        <Button>Записатись</Button>
      </div>
      <div className="m-4">
        <Label>Ваш розвиток починається тут!</Label>
      </div>
      <div className="m-4">
        <Icon size="l" iconURL="/icons/nav/hand.svg" iconAlt="icon" />
      </div>
      <div className="m-4">
        <Icon size="m" iconURL="/icons/nav/hand.svg" iconAlt="icon" />
      </div>
      <div className="m-4">
        <Icon
          size="s"
          iconURL="/icons/nav/hand.svg"
          iconAlt="icon"
          isIconCentered
        />
      </div>
      <div className="m-4">
        <InternalLink href="/" className="font-bold underline">
          Back
        </InternalLink>
      </div>
      <div className="m-4">
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
          efficitur elit malesuada lectus pulvinar finibus. Cras ex est, dapibus
          a risus laoreet, efficitur varius turpis. Mauris elit orci, ornare non
          semper nec, pharetra eu est. Mauris eget risus ante. Cras quis feugiat
          leo. Sed fringilla ullamcorper congue. Curabitur vitae accumsan ante.
          Nam nec tempor dui. Curabitur massa odio, tempus eget sem sit amet,
          volutpat cursus neque. Ut consequat maximus sodales. Curabitur dui
          libero, semper ut nulla pharetra, viverra feugiat elit. Ut fermentum
          mauris turpis, dignissim lacinia purus consectetur ac. Proin metus
          metus, sagittis eget vehicula at, sagittis id quam. Fusce vestibulum
          mauris sem, sit amet ultrices arcu sodales eu. Aliquam sed tortor eget
          urna vulputate pellentesque. Praesent vel justo facilisis, ultricies
          est eget, sagittis lectus. Sed eget convallis lacus. Vestibulum ante
          ipsum primis in faucibus orci luctus et ultrices posuere cubilia
          curae; Suspendisse quis blandit massa, ac mollis lectus. Sed hendrerit
          nibh in erat consequat fermentum. Etiam egestas sit amet odio at
          ultrices. Duis nec metus sollicitudin, pretium ante quis, interdum ex.
          Proin sed interdum ipsum. Vivamus interdum euismod viverra. Nulla
          interdum ligula quis quam interdum, eget blandit lectus cursus. Fusce
          euismod ac lorem eget lobortis. Fusce quis blandit ligula. Nulla
          pulvinar purus sit amet pellentesque elementum. Nunc non pellentesque
          purus. Fusce fringilla ex mauris, non ullamcorper ex mattis vel.
          Suspendisse sed erat ut dui condimentum vestibulum quis nec lacus.
          Etiam porttitor, tellus sit amet fermentum blandit, nisi est pretium
          nulla, ut tempor neque metus vitae neque. Nullam aliquet convallis
          metus id mollis. Etiam finibus turpis turpis, sit amet pulvinar quam
          pretium vel. Suspendisse tempor dapibus lorem vel porta. Sed accumsan
          felis aliquet ornare blandit. Pellentesque habitant morbi tristique
          senectus et netus et malesuada fames ac turpis egestas. Fusce in
          suscipit nunc. Donec ac aliquet augue, et imperdiet neque. Quisque
          quis commodo arcu. Nullam eu magna neque.
        </p>
      </Container>
    </>
  );
};

export default Uikit;
