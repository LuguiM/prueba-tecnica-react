interface CardInfoProps {
  image?: string;
  title?: string;
  gender?: string;
  year?: string;
  size?: "small" | "large";
}

export const CardInfo: React.FC<CardInfoProps> = ({
  image,
  title,
  gender,
  year,
  size = "small",
}) => {
  const formatYear = year ? year.slice(0, 4) : "";

  return (
    <div className={size === 'large' ? 'flex flex-col' : 'flex-shrink-0 w-40'}>
      <div className="aspect-[2/3] w-full overflow-hidden rounded-lg">
        <img
          src={`https://image.tmdb.org/t/p/w500${image}`}
          alt={title}
          className="w-full h-full object-cover block"
        />
      </div>

      <h2 className="mt-2 font-semibold truncate">{title}</h2>
      <p className="text-sm text-gray-400">
        {formatYear}-{gender}
      </p>
    </div>
  );
};
