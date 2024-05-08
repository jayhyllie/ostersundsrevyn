export type HTTPResponse = {
  success: boolean;
  message?: string;
  team?: Record<string, any>[];
  error?: boolean | string;
  images?: string | string[];
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
