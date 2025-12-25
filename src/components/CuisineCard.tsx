import Link from "next/link"

type CuisineCardProps = {
    id: string;
    name: string;
    image: string;
    starsRequired: number;
};

export default function CuisineCard({
    id,
    name,
    image,
    starsRequired,
}: CuisineCardProps) {
    const locked = starsRequired > 0;

    return (<div className="overflow-hidden rounded-xl border shadow-sm">
        <img
            src={image}
            alt={name}
            className="h-40 w-full object-cover"
        />
        <div className="p-4">
            <h2 className="text-xl font-semibold">{name}</h2>

            {locked ? (
                <p className="mt-2 text-sm text-gray-500">
                    Unlock with {starsRequired} stars.
                </p>
            ) : (
                <Link href={`/cuisines/${id}`}
                className="mt-4 inline-block rounded bg-black px-4 py-2 text-white">
                    Start
                </Link>
            )}
        </div>
    </div>
    ); 
}