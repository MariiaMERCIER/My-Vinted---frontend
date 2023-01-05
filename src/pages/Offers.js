import axios from "axios";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import HeaderOffer from "../components/HeaderOffer";

import OfferInfo from "../components/OfferInfo";
import SelectPage from "../components/SelectPage";

const Offers = ({
  token,
  handleToken,
  search,
  setSearch,
  limit,
  setLimit,
  priceSort,
  setPriceSort,
  page,
  setPage,
  priceMax,
  setPriceMax,
  priceMin,
  setPriceMin,
}) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://site--vinted-backend--b4q4rvkfdvcr.code.run/offers",
          {
            params: {
              priceMax: priceMax,
              priceMin: priceMin,
              title: search,
              limit: limit,
              sort: priceSort,
              page: page,
            },
          }
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response?.data);
      }
    };
    fetchData();
  }, [priceMin, priceMax, limit, page, priceSort, search]);

  const handlePriceChangeMax = (event) => {
    setPriceMax(event.target.value);
  };

  const handlePriceChangeMin = (event) => {
    setPriceMin(event.target.value);
  };

  return isLoading ? (
    <>
      <HeaderOffer
        token={token}
        handleToken={handleToken}
        search={search}
        setSearch={setSearch}
      />
      <div className="loading">
        <p>En cours de chargement...</p>
      </div>
      <Footer />
    </>
  ) : (
    <>
      <HeaderOffer
        token={token}
        handleToken={handleToken}
        search={search}
        setSearch={setSearch}
      />
      <div className="container">
        <div className="filters">
          <h2 className="title">Toutes les articles</h2>

          <div className="content-filters">
            <div className="show">
              <p>Price</p>
            </div>
            <div>
              <div className="content-filters-left">
                <div className="asc">
                  <button
                    style={{ display: "flex", alignItems: "center" }}
                    onClick={(event) => {
                      setPriceSort("price - asc");
                    }}
                    className="checkbox"
                    type="checkbox"
                  >
                    ↑
                  </button>
                  <span className="hidden">Prix croissant </span>
                </div>
                <div className="desc">
                  <button
                    style={{ display: "flex", alignItems: "center" }}
                    className="checkbox"
                    onClick={(event) => {
                      setPriceSort("price - dsc");
                    }}
                  >
                    ↓
                  </button>
                  <span className="hidden">Prix décroissant </span>
                </div>
                <div className="input-blocs">
                  <input
                    className="price-input"
                    type="number"
                    value={priceMin}
                    placeholder="min, €"
                    onChange={handlePriceChangeMin}
                  />
                  <input
                    className="price-input"
                    type="number"
                    value={priceMax}
                    placeholder="max, €"
                    onChange={handlePriceChangeMax}
                  />
                </div>
                <div>
                  <SelectPage setLimit={setLimit} />
                </div>
              </div>
            </div>
          </div>
          <div className="content actu">
            {data.offers.map((element) => {
              return (
                <OfferInfo
                  search={search}
                  display={true}
                  elem={element}
                  key={element._id}
                />
              );
            })}
          </div>
          {/* <div className="pages">
            {page === 1 ? null : (
              <button
                onClick={() => {
                  setPage(page - 1);
                }}
              >
                {"<"}
              </button>
            )}
            <span>{page}</span>
            <button
              onClick={() => {
                setPage(page + 1);
              }}
            >
              {">"}
            </button>
          </div> */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Offers;
