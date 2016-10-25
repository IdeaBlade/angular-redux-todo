export class Todo {
  id: number;
  text: string;
  completed: boolean;
}

export type FilterType = 'SHOW_ALL' | 'SHOW_ACTIVE' | 'SHOW_COMPLETED';
