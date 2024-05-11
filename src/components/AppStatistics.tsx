import { useEffect, useState } from "react";
import { animationFrame } from "../helpers/animationFrame";

export const AppStatistics = () => {
  const [statistics, setStatistics] = useState<{ title: string, amount: number }[]>([]);

  useEffect(() => {
    // FOR ANIMATION STYLE!
    animationFrame((progress) => {
      setStatistics(() => {
        return [
          {
            title: "Total Visitors",
            amount: Math.floor(progress * 300),
          },
          {
            title: "Viewed",
            amount: Math.floor(progress * 3),
          },
          {
            title: "Order",
            amount: Math.floor(progress * 25),
          },
          {
            title: "Cancelled",
            amount: Math.floor(progress * 20),
          },
        ];
      });
    }, 2000);
  }, []);

  return (
    <section className="grid grid-cols-2 gap-1 px-7 mb-4">
      {statistics.map((statistic, index) => (
        <div
          key={index}
          className="grid place-items-center py-3 lg:p-6 bg-white rounded-xl"
        >
          <p className="mb-1.5 text-secondary-grey text-xs">
            {statistic.title}
          </p>
          <p className="font-semibold text-2xl">{statistic.amount}k</p>
        </div>
      ))}
    </section>
  );
};
