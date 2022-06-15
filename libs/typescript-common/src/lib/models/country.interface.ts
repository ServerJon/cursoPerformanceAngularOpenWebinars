import { Region } from './region.interface';

export interface Country extends Region {
  region: Region;
  adminregion: Region;
  incomeLevel: Region;
  lendingType: Region;
  capitalCity: string;
  longitude: string;
  latitude: string;
}
