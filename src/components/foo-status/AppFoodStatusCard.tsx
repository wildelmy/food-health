interface AppFoodStatusCardProps {
  food: {
    name: string;
    img: string;
    date: string;
  };
}

export const AppFoodStatusCard = ({ food }: AppFoodStatusCardProps) => {
  return (
    <div className="flex gap-2 md:gap-5 p-[10px] bg-white rounded-xl" title={food.name}>
      <img src={food.img} alt={food.name} className="rounded-xl sm:h-24 lg:h-[91px]" />
      <div className="flex flex-col w-full gap-1">
        <p className="font-medium text-sm sm:text-xl">{food.name}</p>
        <div className="flex flex-wrap items-center justify-between gap-1 w-full mt-auto">
          <span className="text-xs sm:text-xl text-secondary-grey">{food.date}</span>
          <button className="px-10 py-3 md:py-3.5 w-fit rounded-full bg-primary-orange-1 text-xs sm:text-base font-medium text-white">
            Order Again
          </button>
        </div>
      </div>
    </div>
  );
};
