"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const Search = ({ fromList,destination,checkin,checkout }) => {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const pathname = usePathname();
  const { replace } = useRouter();

  const [allowSearch, setAllowSearch] = useState(true);

  const [searchTerm, setSearchTerm] = useState({
    destination: destination || "Puglia",
    checkin: checkin || "",
    checkout: checkout || ""
  });

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    const newSearchTerm = { ...searchTerm, [name]: value };

    if (
      new Date(newSearchTerm.checkin).getTime() >
      new Date(newSearchTerm.checkout).getTime()
    ) {
      setAllowSearch(false);
    } else {
      setAllowSearch(true);
    }
    // set new searchTerm
    setSearchTerm(newSearchTerm);
  };

  const doSearch = (e) => {
    params.set('destination', searchTerm.destination);

    if (searchTerm?.checkin && searchTerm?.checkout) {
      params.set('checkin', searchTerm?.checkin);
      params.set('checkout', searchTerm?.checkout);
    }

    if (pathname.includes('hotels')) {
      replace(`${pathname}?${params.toString()}`);
    }else{
      replace(`${pathname}hotels?${params.toString()}`);
    }

  }

  return (
    <>
      <div className="lg:max-h-[250px] mt-6">
        <div id="searchParams" className={fromList && "!shadow-none"}>
          <div>
            <span>Destination</span>
            <h4 className="mt-2">
              <select
                onChange={handleInputChange}
                value={searchTerm?.destination}
                name="destination"
                id="destination"
              >
                <option value="Puglia">Puglia</option>
                <option value="Catania">Catania</option>
                <option value="Palermo">Palermo</option>
                <option value="Frejus">Frejus</option>
                <option value="Paris">Paris</option>
              </select>
            </h4>
          </div>

          <div>
            <span>Check in</span>
            <h4 className="mt-2">
              <input
                onChange={handleInputChange}
                value={searchTerm?.checkin}
                type="date"
                name="checkin"
                id="checkin"
              />
            </h4>
          </div>

          <div>
            <span>Checkout</span>
            <h4 className="mt-2">
              <input
                onChange={handleInputChange}
                value={searchTerm?.checkout}
                type="date"
                name="checkout"
                id="checkout"
              />
            </h4>
          </div>
        </div>
      </div>

      <button 
      onClick={doSearch}
      disabled={!allowSearch}
      className="search-btn">
        🔍️ {fromList ? "Modify Search" : "Search"}
      </button>
    </>
  );
};

export default Search;
