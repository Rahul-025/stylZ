import React from "react";
import CategoryCard from "../../components/home-category-card/HomeCategory-card.component";
import { CategoriesContainer } from "./home.style";

const categories = [
  {
    id: 1,
    title: "Men's",
    imageSrc:
      "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 2,
    title: "Watches",
    imageSrc: "https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 6,
    title: "Women's",
    imageSrc: "https://images.pexels.com/photos/2608344/pexels-photo-2608344.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 4,
    title: "Sunglasses",
    imageSrc: "https://images.pexels.com/photos/1532244/pexels-photo-1532244.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 5,
    title: "Sneakers",
    imageSrc: "https://images.pexels.com/photos/1478442/pexels-photo-1478442.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 3,
    title: "Bags",
    imageSrc: "https://images.pexels.com/photos/934673/pexels-photo-934673.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

const Home = () => {
  return (
    <CategoriesContainer>
      {categories.map((category) => (
        <CategoryCard key={category.id} category={category} />
      ))}
    </CategoriesContainer>
  );
};

export default Home;
