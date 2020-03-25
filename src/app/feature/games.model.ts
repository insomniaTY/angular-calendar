
import { firestore } from 'firebase';
import Timestamp = firestore.Timestamp;

export class Game {
  name: string;
  developer: string;
  publisher: string;
  releaseDate: Timestamp;
  coverURL: string;
  screenshots: [];
  platforms: string[];
  genre: [];
  trailer: string;
}
