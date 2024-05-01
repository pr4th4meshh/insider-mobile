export interface Product{
    map(arg0: (card: any) => JSX.Element): import("react").ReactNode;
    rating: any;
    "id": string;
    "title": string;
    "price": string;
    "description": string;
    "category": string;
    "image": any;
    "ratings": string;
}