import logo from "../assets/logo.svg";
import IconList from "../assets/icon/list_alt.png";
import IconGraph from "../assets/icon/graph_bar.png";
import IconTable from "../assets/icon/table.png";

export const AppNavigation = () => {
  return (
    <nav className="flex flex-col items-center py-7 h-full max-w-24 bg-gradient-to-b from-primary-orange-1 to-primary-yellow rounded-2xl">
      <a href="/">
        <img src={logo} alt="logo Food Health" />
      </a>
      <ul className="mt-20 grid gap-10">
        <li className="hover:bg-yellow-600">
          <i
            className="iconify text-white text-3xl"
            data-icon="material-symbols-light:stockpot"
          />
        </li>
        <li>
          <img src={IconList} alt="logo Food Health" className="w-5 mx-auto" />
        </li>
        <li>
          <img src={IconGraph} alt="logo Food Health" className="w-5 mx-auto" />
        </li>
        <li>
          <img src={IconTable} alt="logo Food Health" className="w-5 mx-auto" />
        </li>
        <li>
          <i className="iconify text-white text-2xl" data-icon="mdi:bell" />
        </li>
        <li>
          <i
            className="iconify text-white text-3xl"
            data-icon="solar:settings-bold"
          />
        </li>
      </ul>
    </nav>
  );
};
