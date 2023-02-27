interface SanityBody {
  _createdAt: string;
  _updatedAt: string;
  _id: string;
  _rev: string;
}
export interface Social extends SanityBody {
  type: 'social';
  title: string;
  url: string;
}
interface Image {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'refeence';
  };
}
export interface PageInfo extends SanityBody {
  _type: 'pageInfo';
  address: string;
  bgInfo: string;
  email: string;
  role: string;
  heroImage: string;
  name: string;
  phoneNo: string;
  profilePic: string;
}
export interface Technology extends SanityBody {
  _type: 'skill';
  image: string;
  progress: string;
  title: string;
}
export interface Skill extends SanityBody {
  _type: 'skill';
  url: string;
  linkToBuild: string;
  summary: string;
  technologies: Technology[];
  image: Image;
  progress: number;
}
export interface Project extends SanityBody {
  _type: 'project';
  title: string;
  image: string;
  linkToBuild: string;
  summary: string;
  technologies: Technology[];
}
export interface Experience extends SanityBody {
  _type: 'experience';
  company: string;
  companyImage: string;
  dateStarted: date;
  dateEnded: date;
  isCurrentlyWorkingHere: boolean;
  jobTitle: string;
  points: string[];
  technologies: Technology[];
}
