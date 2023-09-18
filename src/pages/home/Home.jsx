import { useState } from "react";
import { toursList } from "../../data";
import HeroHeader from "../../components/hero-header/HeroHeader";
import Services from "../../components/services/Services";
import Sorting from "../../components/sorting/Sorting";
import TourList from "../../components/tours/TourList";
import Pagination from "../../components/pagination/Pagination";
import paginate  from "../../utils/pagination";
import Banner from "../../components/banner/Banner";


export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);

  // // sorting
  const [sortedPostes, setsortedPostes] = useState("recommended");
  const sortedToures =
    sortedPostes === "low"
      ? toursList.sort((a, b) => a.priceFrom - b.priceFrom)
      : sortedPostes === "high"
      ? toursList.sort((a, b) => b.priceFrom - a.priceFrom)
      : toursList.sort((a, b) => b.rating - a.rating);

  const { pages, posts } = paginate(
    toursList.length,
    sortedToures,
    currentPage
  );

  return (
    <>
      <HeroHeader />
      <Services />
      <Sorting
        tourslength={toursList.length}
        setsortedPostes={setsortedPostes}
        sortedPostes={sortedPostes}
      />
      <TourList toursList={posts} />
      <Pagination
        pages={pages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <Banner />
    </>
  )
}
