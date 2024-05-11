import React, { useEffect } from "react";
import { AppNavigation } from "../components/AppNavigation";

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  useEffect(() => {
    document.body.classList.add('app-loaded')
  }, [])
  return (
    <div className="min-h-dvh pb-5 bg-secondary-light-grey-2 lg:p-3">
      <div className="max-w-[150rem] mx-auto">
        <div className="grid grid-cols-12 gap-3">
          <div className="hidden lg:block col-span-1">
            <AppNavigation />
          </div>
          <div className="col-span-12 lg:col-span-11">
            <header className="px-7 lg:pl-0 max-w-full flex justify-between items-center py-[30px]">
              <div className="w-96">
                <h1 className="font-bold text-xl lg:text-3xl">
                  <strong className="text-primary-yellow">Food</strong>
                  <strong className="text-primary-orange-1">Health</strong>
                </h1>
                <p className="text-xs md:text-xl">
                  What do you want to eat today?
                </p>
              </div>
              <svg
                className="lg:hidden"
                width="33"
                height="34"
                viewBox="0 0 33 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.3333 11.3333V0H33V11.3333H18.3333ZM0 18.8889V0H14.6667V18.8889H0ZM18.3333 34V15.1111H33V34H18.3333ZM0 34V22.6667H14.6667V34H0ZM3.66667 15.1111H11V3.77778H3.66667V15.1111ZM22 30.2222H29.3333V18.8889H22V30.2222ZM22 7.55556H29.3333V3.77778H22V7.55556ZM3.66667 30.2222H11V26.4444H3.66667V30.2222Z"
                  fill="#F85900"
                />
              </svg>

              <div className="hidden lg:flex overflow-hidden px-7 py-4 max-w-4xl ml-10 bg-white w-full rounded-full">
                <input
                  type="text"
                  name="search"
                  id="search"
                  placeholder="Search"
                  className="flex-grow placeholder:text-secondary-soft-grey focus:outline-none"
                />
                <div className="ml-10">
                  <i
                    className="iconify text-secondary-grey text-xl"
                    data-icon="tabler:search"
                  />
                </div>
              </div>
            </header>
            <main>{children}</main>
          </div>
        </div>
      </div>
    </div>
  );
};
