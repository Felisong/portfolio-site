// shared types

export interface Skills {
  _id: string;
  skill: string;
  category: string;
  logo_alt: string;
  logo_svg: string;
  url: string;
}
export interface PriorWorksModel {
  title: String;
  image1: String;
  gif: String;
  description: String;
  deployedUrl: String;
  githubFront: String;
  githubBack: String;
  timeframe: String;
  willReturnTo: Boolean;
  complete: Boolean;
  skills: Skills[];
  figmaLinks: String[];
}
