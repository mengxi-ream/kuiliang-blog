type Meta = {
  id: string;
  title: string;
  publishedDate: string;
  updatedDate: string;
  tags: string[];
  abstract: string;
};

type BlogPost = {
  meta: Meta;
  content: ReactElement<any, string | JSXElementConstructor<any>>;
};

type Project = {
  name: string;
  icon?: ReactElement;
  imageSrc: string;
  stack?: string[];
  description: string;
  time: string;
  recent: boolean;
  postLink?: string;
  QRCodeSrc?: string;
  githubLink?: string;
  youtubeLink?: string;
};
