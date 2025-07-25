// shared types

export interface Skills {
  skill: string;
  category: string;
  logo_alt: string;
  logo_svg: string;
  url: string;
}
export interface PriorWorksModel {
  title: string;
  image1: string;
  gif: string;
  description: string;
  deployedUrl: string;
  githubFront: string;
  githubBack: string;
  timeframe: string;
  willReturnTo: Boolean;
  complete: Boolean;
  skills: Skills[];
  figmaLinks: string[];
  alt: string;
}
export type FormModel = {
  name: string;
  email: string;
  subject: string;
  message: string;
  contact_number: string;
};
export type messageModel = {
  name: string;
  email: string;
  subject: string;
  message: string;
  dateSent: date;
  status: string;
};
