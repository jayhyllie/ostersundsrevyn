export type HTTPResponse = {
  success: boolean;
  message?: string;
  team?: Record<string, any>[];
  error?: boolean;
};
