export type Recipe = {
    id: string;
    name: string;
    image: string;
    cuisine: string;
};

export const recipes: Recipe[] = [
    {
        id: "carbonara",
        name: "Spaghetti Carbonara",
        image: "/carbonara.jpg",
        cuisine: "italian",
    },
    {
        id: "margherita",
        name: "Margherita Piazza",
        image: "/margherita.jpg",
        cuisine: "italian",
    },
    {
        id: "ramen",
        name: "Tonkotsu Ramen",
        image: "/ramen.jpg",
        cuisine: "japanese",
    },
];
