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

type Product = {
  name: string;
  icon?: {
    src: string;
    innerSize?: IconInnerSize;
    pixelated?: boolean;
  };
  imageSrc: string;
  tags?: string[];
  description: string;
  time: string;
  recent?: boolean;
  mainLink?: string;
  QRCodeSrc?: string;
  githubLink?: string;
  youtubeLink?: string;
};
