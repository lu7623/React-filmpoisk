export const GENRES = {
  '0': 'Не выбран',
  comedy: 'Комедия',
  drama: 'Драма',
  action: 'Боевик',
  thriller: 'Триллер',
  horror: 'Ужасы',
  family: 'Семейный',
  cartoon: 'Анимированный',
  fantasy: 'Фэнтези',
  romance: 'Романтика',
  adventure: 'Приключения',
  musical: 'Мьюзикл',
  war: 'Военный',
} as const;

export const YEARS = {
  '0': 'Не выбран',
  '2009': '2009',
  '2008': '2008',
  '2007': '2007',
  '2006': '2006',
  '1990-2005': '1990-2005',
  '1950-1989': '1950-1989',
} as const;

type Sort = 'release_year' | 'title' | 'rating';
type Order = 'asc' | 'desc';
export type Genres = keyof typeof GENRES;
export type Years = keyof typeof YEARS;

export interface QueryParams {
  title?: string;
  genre?: Genres;
  release_year?: Years;
  sort_by?: Sort;
  order?: Order;
  page?: number;
  limit?: number;
}

export type Actor = {
  name: string;
  photo: string; // base64 img
};

export type FullMovieInfo = {
  id: string;
  title: string;
  description: string;
  release_year: number;
  poster: string;
  genre: string;
  rating: number;
  total_rates_count: string; 
  actors: Actor[];
};

export type ShortMovieInfo = Omit<
  FullMovieInfo,
  'actors' | 'total_rates_count'
>;

export interface SearchResponse {
  search_result: ShortMovieInfo[];
  total_pages: number;
}


export type RateMovieRequest = {
  movieId: string;
  user_rate: number;
};

export type RateMovieResponse = {
  movieId: string;
  newAverageRate: number;
  newTotalRatesCount: number;
};