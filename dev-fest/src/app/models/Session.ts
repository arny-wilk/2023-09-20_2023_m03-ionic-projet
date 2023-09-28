import {BaseEntity} from "./BasEntity";

export interface Session extends BaseEntity {
  title: string;
  titleMobile: string;
  image: string;
  type: string;
  track: {title: string};
  category: string;
  language: string;
  tags: [{0: string}];
  complexity: string;
}
