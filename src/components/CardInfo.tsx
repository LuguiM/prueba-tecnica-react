interface CardInfoProps {
  image?: string;
  title?: string;
  gender?: string;
  year?: string;
}

export const CardInfo: React.FC<CardInfoProps> = ({
  image,
  title,
  gender,
  year,
}) => {

    const formatYear = year ? year.slice(0,4) : ""

  return (
    <div className="flex flex-col justify-center border">
      <img src={image} alt={title} className="h-100 object-cover" />
      <div className="p-2">
        <h2 className="text-bodyLarge font-bold">{title}</h2>
        <p>
          {formatYear}-{gender}
        </p>
      </div>
    </div>
  );
};
