import heroImg from "../assets/healthy-salad-assortment.png";

export const AppHero = () => {
  return (
    <section className="overflow-hidden flex items-center h-[297px] lg:h-[202px] mb-3 text-white bg-primary-orange-2 lg:rounded-xl will-appear">
      <div className="container pr-3">
        <h1 className="font-semibold">New Menu!</h1>
        <p>Get Free Shipping Every $30 With No Minimum Purchase</p>
      </div>
      <img
        src={heroImg}
        alt="healthy-salad-assortment"
        className="-mr-[230px] md:-mr-0 h-full"
      />
    </section>
  );
};
