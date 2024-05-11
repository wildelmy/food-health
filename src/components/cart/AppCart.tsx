import { AppCartItem } from "./AppCartItem";
import boiledDumplings from "../../assets/boiled-dumplings.png";
import ayamGeprekPopular from "../../assets/ayam-geprek-popular.jpg";
import berryBlastSmoothie from "../../assets/berry-blast-smoothie.jpg";
import watermelonSmoothie from "../../assets/watermelon-smoothie.jpg";

export const AppCart = () => {
  const cartItems = [
    {
      id: 1,
      name: "Boiled Dumplings",
      price: 320,
      rating: 4.8,
      img: boiledDumplings,
      reviews: "1k",
    },
    {
      id: 2,
      name: "Ayam Geprek Popular",
      price: 320,
      rating: 4.8,
      img: ayamGeprekPopular,
      reviews: "1k",
    },
    {
      id: 3,
      name: "Berry Blast Smoothie",
      price: 320,
      rating: 4.8,
      img: berryBlastSmoothie,
      reviews: "1k",
    },
    {
      id: 4,
      name: "Watermelon Smoothie",
      price: 320,
      rating: 4.8,
      img: watermelonSmoothie,
      reviews: "1k",
    },
  ];

  return (
    <section className="px-7">
      <div className="mb-5 flex justify-between mt-8 lg:mb-0 lg:mt-auto">
        <div className="lg:mb-5">
          <h4 className="font-semibold text-2xl">My Cart</h4>
          <p className="text-sm">Shopping is happy</p>
        </div>
        <i className="iconify text-secondary-grey text-3xl" data-icon="mdi:bell" />
      </div>
      <ul className="flex flex-col gap-4">
        {cartItems.map((item, index) => (
          <li className="translate-x-10 will-appear" style={{ transitionDelay: `${index * 500}ms` }}>
            <AppCartItem key={item.id} itemData={item} />
          </li>
        ))}
      </ul>
    </section>
  );
};
