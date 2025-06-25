export enum MainSocialCardColor {
  RED = 'red',
  BLUE = 'blue',
}

export type socialMediaColorClassMapType = {
  [key in MainSocialCardColor]: {
    bg: string;
    text: string;
  };
};

export interface SocialMediaCardProps {
  iconURL: string;
  socialMediaURL: string;
  label: string;
  description: string;
  mainColor: MainSocialCardColor;
}
