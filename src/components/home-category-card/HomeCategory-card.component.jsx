import React from "react";

// Styles
import {
  CategoryCardContainer,
  CategoryTextContainer,
  CategoryCardimage,
  CategoryTitle,
  CategorySubtitle,
} from "./HomeCategory-card.style";

const CategoryCard = ({ category }) => {
  const { title, imageSrc } = category;
  return (
    <CategoryCardContainer>
      <CategoryCardimage src={imageSrc} alt={title} />
      <CategoryTextContainer to={`/shop/${title.toLowerCase()}`}>
        <CategoryTitle>{title}</CategoryTitle>
        <CategorySubtitle>SHOP NOW</CategorySubtitle>
      </CategoryTextContainer>
    </CategoryCardContainer>
  );
};

export default CategoryCard;
