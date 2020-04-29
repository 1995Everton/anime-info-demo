import { NarutoInfo } from '~/models/naruto';

export interface NarutoData {
  error: boolean;
  select: string;
  loading: boolean;
  characters: string[];
  character: NarutoInfo;
  options: any;
  photo_select: number;
}
