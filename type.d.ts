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

type IconInnerSize =
  | "w-2/3"
  | "w-3/4"
  | "w-4/5"
  | "w-5/6"
  | "w-11/12"
  | "w-full";

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
