export interface NewsStory {
  id: number;
  by: string;
  descendants: number;
  kids: [number];
  score: number;
  time: number;
  title: string;
  text: string;
  type: string;
  url: string;
}

export interface NewsStoryResponse {
  data: NewsStory;
}

export interface NewsAllResponse {
  data: number[];
}
