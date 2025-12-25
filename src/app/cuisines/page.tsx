import CuisineCard from "../../components/CuisineCard";

const cuisines = [
    {
        id: "italian",
        name: "Italian",
        image: "/italian.jpg",
        starsRequired:0,
    },
    {
        id: "thai",
        name: "Thai",
        image: "/thai.jpg",
        starsRequired:10,
    },
    {
        id: "mexican",
        name: "Mexican",
        image: "/mexican.jpg",
        starsRequired: 20,
    },
];

export default function CuisinesPages() {
    return (
        <main className="min-h-screen p-8">
            <h1 className="mb-6 text-3xl font-bold">Choose a Cuisine</h1>

            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
                {cuisines.map((cuisine) => (
                    <CuisineCard key={cuisine.id} {...cuisine} />
                ))}
            </div>
        </main>
    );
}