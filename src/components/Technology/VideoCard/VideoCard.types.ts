import { VideoType } from './../Video/Video.types';

export interface VideoCardType extends VideoType {
  title: string,
  description: string,
  isEven?: boolean
}
