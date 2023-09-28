import {BaseEntity} from "./BasEntity";

export interface Speaker extends BaseEntity {
  name: string;
  featured: boolean;
  company: string;
  companyLogo: string;
  country: string;
  photoUrl: string;
  shortBio: string;
  bio: string;
  tags: [{0: string, badges: [] }];
  socials: [{ icon: string, name: string, link: string }];
}
