export interface StandardResponse {
  success: boolean;
  message: string;
  data?: any;
}
export interface BlockedIpsModel {
  ipAddress: string;
  dates: string[];
  currentStrike: string;
}
