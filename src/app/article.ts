export class Article {
    id: number;
    title: string;
    description: string;
    content: string;
    date: Date = new Date();
    imageUrl: string;
    key: string;
}