export interface ITodo {
    id: number;
    description: string;
    date: string; 
    category: string | null;
}

export interface ICategory {
    id: number;
    title: string;
}