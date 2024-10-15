export interface Photo {
  id: string;
  url: string;
  description: string;
  category: string;
}

export interface User {
  id: string;
  name: string;
  avatar: string;
  photoCount: number;
}