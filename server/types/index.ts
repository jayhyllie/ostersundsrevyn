export type HTTPResponse = {
  success: boolean;
  message?: string;
  team?: Record<string, any>[];
  error?: boolean | string;
  images?: string | string[];
  info?: Record<string, any>[];
};

export type User = {
  id: string;
  age: number;
  bio: string;
  city: string;
  email: string;
  memberIn: string;
  name: string;
  password: string;
  phone: string;
  role: string;
  sortPosition: number;
  years: number;
  images: Images;
};

export type Images = {
  main: string;
  hover: string;
};

export type Info = {
  id: string;
  title: string;
  subtitle?: string;
  content: string;
  buttonLink?: string;
  buttonText?: string;
  text?: string;
  price?: number;
};

export type InfoSections = {
  id: string;
  top?: Info[];
  tickets?: Info[];
  bottom?: Info[];
};
