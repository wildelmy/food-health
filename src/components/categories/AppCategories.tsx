import indonesianFood from "../../assets/indonesian-food.png";
import japaneseFood from "../../assets/japanese-food.png";
import koreanFood from "../../assets/korean-food.png";
import { AppCategoryCard } from "./AppCategoryCard";

export const AppCategories = () => {
  const categories = [
    {
      id: 1,
      name: "Indonesia Food",
      img: indonesianFood,
    },
    {
      id: 2,
      name: "Japanese Food",
      img: japaneseFood,
    },
    {
      id: 3,
      name: "Korean Food",
      img: koreanFood,
    },
  ];
  return (
    <section className="mb-8">
      <h6 className="pl-7 lg:pl-0 mb-3 text-xl md:text-2xl font-semibold">
        Categories
      </h6>
      <ul className="flex gap-3 overflow-auto hide-scroll-bar">
        <li className="lg:hidden flex-shrink-0 w-4" />
        {categories.map((category, index) => (
          <li
            className="relative flex-shrink-0 flex-grow w-[9.82rem] h-[9.4rem] lg:h-[8rem] rounded-xl overflow-hidden cursor-pointer translate-x-10 will-appear"
            style={{ transitionDelay: `${index * 500}ms` }}
            >
            <AppCategoryCard key={category.id} category={category} />
          </li>
        ))}
        <li className="lg:hidden flex-shrink-0 w-4" />
      </ul>
    </section>
  );
};
