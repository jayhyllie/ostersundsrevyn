export type TeamMembers = {
  team: Team[];
};

export type Team = {
  id: string;
  name: string;
  memberIn: string;
  age?: number;
  city?: string;
  years?: number;
  bio?: string;
  role?: string;
  sortPosition?: number;
};

export type Error = {
  error: string;
  message: string;
};

export type Ticket = {
  type: string;
  limit: string;
  price: number;
  service: string;
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
  area?: string;
  sortingPosition?: number;
};

export type Video = {
  id: string;
  snippet: {
    title: string;
    thumbnails: {
      default: {
        url: string;
      };
      high: {
        url: string;
      };
      medium: {
        url: string;
      };
    };
    resourceId: {
      videoId: string;
    };
  };
};

export type History = {
  id: string;
  title: string;
  content: string;
};

export type GeneralInfo = {
  title: string;
  text: string;
  obs?: string;
};

export type Images = {
  images: string[];
};

export type Direction = "left" | "right" | "up" | "down";

export enum Member {
  Ensemble = "ensemble",
  Orchestra = "orchestra",
  Production = "production",
}

export enum Style {
  "DEFAULT" = "default",
  "PRIMARY" = "primary",
  "SECONDARY" = "secondary",
  "SUCCESS" = "success",
  "DANGER" = "danger",
  "WARNING" = "warning",
  "INFO" = "info",
}

export enum Btn {
  "SOLID" = "solid",
  "OUTLINE" = "outline",
  "SUBMIT" = "submit",
}

export enum Card {
  "DEFAULT" = "default",
  "ENSEMBLE" = "ensemble",
  "BAND" = "band",
  "PRODUCTION" = "production",
  "BIO" = "bio",
}
