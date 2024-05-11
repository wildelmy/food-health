import logo from "../assets/logo.svg";
import IconStockpot from "../assets/icon/stockpot.png";
import IconList from "../assets/icon/list.png";
import IconGraph from "../assets/icon/graph.png";
import IconTable from "../assets/icon/table.png";
import IconNotification from "../assets/icon/notifications.png";
import IconSettings from "../assets/icon/settings.png";

export const AppNavigation = () => {
  return (
    <nav className="flex flex-col items-center py-7 h-full max-w-24 bg-gradient-to-b from-primary-orange-1 to-primary-yellow rounded-2xl">
      <a href="/">
        <img src={logo} alt="logo Food Health" />
      </a>
      <ul className="mt-20 grid gap-10">
        <li className="bg-white bg-opacity-[30%] mx-auto p-2 rounded-md">
          <a href="">
            <img
              src={IconStockpot}
              alt="Icon Stockpot"
              className="w-5 mx-auto"
            />
          </a>
        </li>
        <li>
          <a href="">
            <img src={IconList} alt="Icon List" className="w-5 mx-auto" />
          </a>
        </li>
        <li>
          <a href="">
            <img src={IconGraph} alt="Icon Graph" className="w-5 mx-auto" />
          </a>
        </li>
        <li>
          <a href="">
            <img src={IconTable} alt="Icon Table" className="w-5 mx-auto" />
          </a>
        </li>
        <li>
          <a href="">
            <img
              src={IconNotification}
              alt="Icon Notification"
              className="w-5 mx-auto"
            />
          </a>
        </li>
        <li>
          <a href="">
            <img
              src={IconSettings}
              alt="Icon Settings"
              className="w-5 mx-auto"
            />
          </a>
        </li>
      </ul>
    </nav>
  );
};
