import { Info } from "~/models/naruto";

export interface NarutoData {
    error: boolean
    select: string,
    loading: boolean,
    characters: string[],
    character: Info,
    options: any,
    photo_select: number,
    
}