export type EnsembleMember = {
  id: string;
  name: string;
  age: number;
  city: string;
  years: number;
  long_bio: string;
};

export type ProductionMember = {
  id: string;
  name: string;
  role: string;
};

export type OrchestraMember = {
  id: string;
  name: string;
  instrument: string;
};

export type Members = {
  ensemble: EnsembleMember[];
  orchestra: OrchestraMember[];
  production: ProductionMember[];
};

export type Error = {
  error: string;
  message: string;
};

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
