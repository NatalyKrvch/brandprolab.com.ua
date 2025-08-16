export type SocialIcon = {
  _key: string;
  _type: 'socialLink';
  url: string;
  label: string;
  whiteIcon: {
    _type: 'image';
    asset: {
      _ref: string;
      _type: 'reference';
    };
  };
  colorIcon: {
    _type: 'image';
    asset: {
      _ref: string;
      _type: 'reference';
    };
  };
};

export interface SocialIconsProps {
  socialLinks: SocialIcon[];
  isColored?: boolean;
  className?: string;
}
