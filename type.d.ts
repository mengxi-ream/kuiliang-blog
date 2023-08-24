type Meta = {
  id: string;
  title: string;
  publishedDate: string;
  updatedDate: string;
  tags: string[];
  abstract: string;
  project?: string;
  tool?: string;
};

type BlogPost = {
  meta: Meta;
  content: ReactElement<any, string | JSXElementConstructor<any>>;
};

type IconInnerSize = "2/3" | "3/4" | "4/5" | "5/6" | "11/12" | "full";

type Project = {
  name: string;
  icon?: ReactElement;
  iconInfo: {
    src: string;
    innerSize?: IconInnerSize;
    pixelated?: boolean;
  };
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
