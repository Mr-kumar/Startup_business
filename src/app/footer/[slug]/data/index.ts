import { getHeroData, type HeroData } from './herodata';

export interface PageData {
  hero: HeroData;
}

export const getPageData = async (slug: string): Promise<PageData> => {
  return {
    hero: getHeroData(slug)
  };
};

export type { HeroData };
