import { recipes } from "@/lib/recipes"
import RecipeCard from "@/components/RecipeCard";

type Props = {
    params: Promise<{
        cuisineId: string;
    }>;
};

export default async function CuisinePage({ params }: Props) {
    const { cuisineId } = await params;

    const filteredrecipes = recipes.filter( (recipe) => recipe.cuisine == cuisineId);
    return (
        <main className="min-h-screen p-8">
            <h1 className="text-3xl font-bold capitalize">
                {cuisineId} Recipes
            </h1>

            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
                {filteredrecipes.map((recipe) => (<RecipeCard key={recipe.id} {...recipe} />
            ))}
            </div>
        </main>
    );
}