export type Diagnostic = {
  title: string;
  subtitle: string;
  description: string;
  benefitsTitle: string;
  benefits: string[];
  buttonText: string;
  buttonLink: string;
};

export type AllData = {
  diagnostic: Diagnostic;
};
