interface AppCategoryCardProps {
  category: {
    id: number;
    name: string;
    img: string;
  };
}

export const AppCategoryCard = ({ category }: AppCategoryCardProps) => {
  return (
    <div tabIndex={0} title={category.name}>
      <img src={category.img} alt={category.name} />
      <div className="absolute w-full h-full inset-0 bg-gradient-to-t from-black/60">
        <strong className="absolute bottom-2.5 left-2 font-semibold text-white text-sm">
          {category.name}
        </strong>
      </div>
    </div>
  );
};
