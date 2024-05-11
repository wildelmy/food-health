import { useEffect, useState } from "react";

interface AppCartItemProps {
  itemData: {
    id: number;
    name: string;
    price: number;
    rating: number;
    img: string;
    reviews: string;
  };
}

export const AppCartItem = ({ itemData }: AppCartItemProps) => {
  const [itemsQuantity, setItemsQuantity] = useState(1);
  const [limits, setLimits] = useState({
    min: false,
    max: false,
  });

  useEffect(() => {
    setLimits({
      max: itemsQuantity === 10,
      min: itemsQuantity === 1,
    });
  }, [itemsQuantity]);

  const { img, name, rating, reviews, price } = itemData;
  return (
    <div className="flex gap-4 p-3 bg-white rounded-xl" title={name}>
      <img
        src={img}
        alt={name}
        className="rounded-2xl w-[120px] object-cover"
      />
      <div className="flex flex-col flex-grow">
        <strong className="font-medium">{name}</strong>
        <div className="flex gap-1">
          <i
            className="iconify text-yellow-400 text-base"
            data-icon="ic:baseline-star"
          />
          <span className="font-medium text-xs">{rating}</span>
          <span className="text-xs text-secondary-grey">
            ({reviews}+ reviews)
          </span>
        </div>
        <div className="mt-4 flex flex-wrap justify-between items-center">
          <div>
            <strong className="font-bold">${price}</strong>
          </div>
          <div className="flex gap-4 lg:gap-1">
            <button
              title="menus one"
              className="w-8 h-8 grid place-items-center rounded-full bg-primary-orange-1 disabled:bg-secondary-soft-grey text-white"
              disabled={limits.min}
              onClick={() => setItemsQuantity((prev) => prev - 1)}
            >
              <i
                className="iconify font-bold text-xl"
                data-icon="ic:round-remove"
              />
            </button>
            <span className="font-semibold text-2xl w-5 lg:w-6 text-center">
              {itemsQuantity}
            </span>
            <button
              title="plus one"
              className="w-8 h-8 grid place-items-center rounded-full bg-primary-orange-1 disabled:bg-secondary-soft-grey text-white"
              disabled={limits.max}
              onClick={() => setItemsQuantity((prev) => prev + 1)}
            >
              <i className="iconify font-bold text-xl" data-icon="mi:add" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
