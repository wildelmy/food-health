import { useState } from "react";
import { AppFoodStatusCard } from "./AppFoodStatusCard";
import fishFood from "../../assets/fish.png";
import chickenFood from "../../assets/chicken.png";
import eggsFood from "../../assets/eggs.png";

export const AppFoodStatus = () => {
  const [selectedStatus, setSelectedStatus] = useState(1);

  const foods = [
    {
      name: "Sambal Fried Fish with Fresh Vegetables",
      img: fishFood,
      date: "7 Dec, 16:10",
    },
    {
      name: "Archipelago Noodles with Chicken Katsu",
      img: chickenFood,
      date: "7 Dec, 16:10",
    },
    {
      name: "Salted Egg Chicken With Mayonnaise",
      img: eggsFood,
      date: "7 Dec, 16:10",
    },
  ];

  return (
    <section className="px-7 lg:px-0 mb-5">
      <div className="flex items-center justify-between mb-7">
        <div className="flex justify-between gap-9 flex-grows w-full md:w-fit text-xl font-medium text-secondary-grey">
          <div
            className={`${
              selectedStatus === 1 ? "text-black border-b-2 border-b-black" : ""
            } `}
          >
            <button onClick={() => setSelectedStatus(1)}>Order</button>
          </div>
          <div
            className={`${
              selectedStatus === 2 ? "text-black border-b-2 border-b-black" : ""
            } `}
          >
            <button onClick={() => setSelectedStatus(2)}>Delivered</button>
          </div>
          <div
            className={`${
              selectedStatus === 3 ? "text-black border-b-2 border-b-black" : ""
            } `}
          >
            <button onClick={() => setSelectedStatus(3)}>Finished</button>
          </div>
        </div>
        <button className="hidden lg:block font-medium text-primary-orange-1">
          See all
        </button>
      </div>
      <div className="flex flex-col gap-3">
        {selectedStatus === 1 && (
          <>
            <div className="translate-y-10 will-appear delay-0">
              <AppFoodStatusCard food={foods[0]} />
            </div>
            <div className="translate-y-10 will-appear delay-500">
              <AppFoodStatusCard food={foods[1]} />
            </div>
            <div className="translate-y-10 will-appear delay-1000">
              <AppFoodStatusCard food={foods[2]} />
            </div>
          </>
        )}
        {selectedStatus === 2 && (
          <>
            <div className="translate-y-10 will-appear delay-0">
              <AppFoodStatusCard food={foods[1]} />
            </div>
            <div className="translate-y-10 will-appear delay-500">
              <AppFoodStatusCard food={foods[2]} />
            </div>
            <div className="translate-y-10 will-appear delay-1000">
              <AppFoodStatusCard food={foods[0]} />
            </div>
          </>
        )}
        {selectedStatus === 3 && (
          <>
            <div className="translate-y-10 will-appear delay-0">
              <AppFoodStatusCard food={foods[2]} />
            </div>
            <div className="translate-y-10 will-appear delay-500">
              <AppFoodStatusCard food={foods[0]} />
            </div>
            <div className="translate-y-10 will-appear delay-1000">
              <AppFoodStatusCard food={foods[1]} />
            </div>
          </>
        )}
      </div>
    </section>
  );
};
