export interface IRoute {
  path: string;
  Component: React.ComponentType;
  exact?: boolean;
}
