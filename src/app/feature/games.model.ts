<<<<<<< HEAD:src/app/feature/games.model.ts
=======
import { firestore } from 'firebase';
import Timestamp = firestore.Timestamp;

>>>>>>> f22abbfec42b7c0a460497aa3c3e0de4dd9474b5:src/app/shared/data.model.ts
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
