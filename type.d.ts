type Meta = {
  id: string;
  title: string;
  publishedDate: string;
  updatedDate: string;
  tags: string[];
};

type BlogPost = {
  meta: Meta;
  content: ReactElement<any, string | JSXElementConstructor<any>>;
};
