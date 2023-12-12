import { useState } from "react";

const [loadedAds, setLoadedAds] = useState(12); // Initial value is 12

const fetchData = async () => {
  try {
    const response = await fetch(
      `https://6573c5a1f941bda3f2af2023.mockapi.io/advert/advert?limit=${loadedAds}`
    );
    const data = await response.json();
    setAds(data);
    // Extract unique makes from the data
    const uniqueMakes = [...new Set(data.map((ad) => ad.make))];
    setMakes(uniqueMakes);
  } catch (error) {
    console.error("Error fetching ads:", error);
  }
};

const handleLoadMore = () => {
  setLoadedAds((prevLoadedAds) => prevLoadedAds + 12); // Increase the number of loaded ads by 12
};

export default fetchData;
