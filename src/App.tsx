import { AppCart } from "./components/cart/AppCart";
import { AppCategories } from "./components/categories/AppCategories";
import { AppFoodStatus } from "./components/foo-status/AppFoodStatus";
import { AppHero } from "./components/AppHero";
import { AppStatistics } from "./components/AppStatistics";
import { MainLayout } from "./layouts/MainLayout";

function App() {
  return (
    <MainLayout>
      <div className="grid grid-cols-12">
        <div className="col-span-12 lg:col-span-8">
          <AppHero />
          <AppCategories />
          <AppFoodStatus />
        </div>
        <div className="col-span-12 lg:col-span-4">
          <AppStatistics />
          <AppCart />
        </div>
      </div>
    </MainLayout>
  );
}

export default App;
