export interface IPost {
  id: number;
  content: string;
  img: string | null;
  user: {
    email: string;
  };
}
