type Props = {
    params: {
        cuisineID: string;
    };
};

export default function CuisinePage({ params }: Props) {
    return (
        <main className="min-h-screen p-8">
            <h1 className="text-3xl font-bold capitalize">
                {params.cuisineID} Cuisine
            </h1>

            <p className="mt-4 text-gray-600">
                Recipes coming soon 🍽️
            </p>
        </main>
    );
}