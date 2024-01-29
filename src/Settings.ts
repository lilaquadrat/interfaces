export interface Settings {
  _id: string;
  user: string;
  settings: Record<string, string | number | boolean | Record<string, string | number | boolean>>;
}