import { Category } from '../enums/category.enum';

export class Task {
  id!: number;
  idUser!: number;
  title!: string;
  description!: string;
  category!: Category;
  creationDate!: Date;
  deadline!: Date;
}
