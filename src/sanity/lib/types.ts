export type DiagnosticSectionType = {
  _id: string;
  _type: 'diagnosticSection';
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  benefitsTitle: string;
  benefits: string[];
};

export type VideoSectionType = {
  _id: string;
  _type: 'videoSection';
  title: string;
  label: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  VideoLink: string;
  videoCover: {
    _type: 'image';
    asset: {
      _ref: string;
      _type: 'reference';
    };
  };
};

export type CasesSectionType = {
  _id: string;
  _type: 'cases';
  title: string;
  subtitle: string;
  description: string;
  cases: {
    _key: string;
    _type: 'case';
    caseText: string;
  }[];
};

export type ExpertiseSectionType = {
  _id: string;
  _type: 'expertiseSection';
  title: string;
  expertiseCards: {
    _key: string;
    _type: 'expertiseCard';
    title: string;
    icon: {
      _type: 'image';
      asset: {
        _ref: string;
        _type: 'reference';
      };
    };
    shortDescription: string;
    expandText: string;
    detailedDescription: {
      title: string;
      points: string[];
    };
  }[];
  diplomaCards: {
    _key: string;
    _type: 'diplomaCard';
    type: string;
    institution: string;
    diplomaName: string;
  }[];
};

export type HeaderSectionType = {
  _id: string;
  _type: 'header';
  siteTitle: string;
  menuItems: {
    _key: string;
    _type: 'menuItem';
    label: string;
    link: string;
  }[];
  photo: {
    _type: 'image';
    asset: {
      _ref: string;
      _type: 'reference';
    };
  };
  socialLinks: {
    _key: string;
    _type: 'socialLink';
    icon: {
      _type: 'image';
      asset: {
        _ref: string;
        _type: 'reference';
      };
    };
    url: string;
  }[];
};

export type HeroSectionType = {
  _id: string;
  _type: 'hero';
  icon: {
    _type: 'image';
    asset: {
      _ref: string;
      _type: 'reference';
    };
  };
  tagline: (
    | {
        _key: string;
        _type: 'boldText';
        [key: string]: any;
      }
    | {
        _key: string;
        _type: 'regularText';
        [key: string]: any;
      }
  )[];
  description: string;
  buttonText: string;
  buttonLink: string;
  photo: {
    _type: 'image';
    asset: {
      _ref: string;
      _type: 'reference';
    };
  };
};

export type ServicesSectionType = {
  _id: string;
  _type: 'services';
  title: string;
  description: string;
  cards: {
    _key: string;
    _type: 'card';
    icon: {
      _type: 'image';
      asset: {
        _ref: string;
        _type: 'reference';
      };
    };
    title: string;
    label: string;
    shortDescription: string;
    flipText: string;
    detailedDescription: {
      title: string;
      points: string[];
    };
  }[];
};

export type SubscribeSectionType = {
  _id: string;
  _type: 'subscribeSection';
  title: string;
  mainCard: {
    desktopImage: {
      _type: 'image';
      asset: {
        _ref: string;
        _type: 'reference';
      };
    };
    mobileImage: {
      _type: 'image';
      asset: {
        _ref: string;
        _type: 'reference';
      };
    };
    mobileImageReversed: {
      _type: 'image';
      asset: {
        _ref: string;
        _type: 'reference';
      };
    };
    icon: {
      _type: 'image';
      asset: {
        _ref: string;
        _type: 'reference';
      };
    };
    platform: string;
    description: string;
    link: string;
  };
  cards: {
    _key: string;
    _type: 'card';
    icon: {
      _type: 'image';
      asset: {
        _ref: string;
        _type: 'reference';
      };
    };
    title: string;
    description: string;
    link: string;
  }[];
};

export type TestimonialsSectionType = {
  _id: string;
  _type: 'testimonialsSection';
  title: string;
  testimonials: {
    _key: string;
    _type: 'testimonial';
    review: string;
    personName: string;
    personTitle: string;
    link: string;
    smallPhoto: {
      _type: 'image';
      asset: {
        _ref: string;
        _type: 'reference';
      };
    };
    largePhoto: {
      _type: 'image';
      asset: {
        _ref: string;
        _type: 'reference';
      };
    };
  }[];
};

export type AllData = {
  cases: CasesSectionType;
  diagnostic: DiagnosticSectionType;
  expertise: ExpertiseSectionType;
  header: HeaderSectionType;
  hero: HeroSectionType;
  services: ServicesSectionType;
  subscribe: SubscribeSectionType;
  testimonials: TestimonialsSectionType;
  video: VideoSectionType;
};
