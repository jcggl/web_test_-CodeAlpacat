export interface NavRouterType {
  location: any;
  selected: string;
  checkActiveLink(address: string): void;
  isTechVision: boolean
}