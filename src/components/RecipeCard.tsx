import Link from "next/link"

type RecipeCardProps = {
    id: string;
    name: string;
    image: string;
};

export default function RecipeCard({
    id,
    name,
    image,
}: RecipeCardProps) {
    return(
        <Link href={`/recipe/${id}`}
        className="overflow-hidden rounded-xl border shadow-sm">
            <img 
                src={image}
                alt={name}
                className="h-40 w-full object-cover"
            />
            <div className="p-4">
                <h2 className="text-lg font-semibold">{name}</h2>
            </div>
        </Link>
    );
}