import { NarutoInfo } from '~/models/naruto';

export interface NarutoData {
  error: boolean;
  select: string;
  loading: boolean;
  characters: string[];
  character: NarutoInfo;
  photo_select: number;
}
