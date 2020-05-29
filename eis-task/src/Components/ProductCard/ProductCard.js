import React from "react";
import {
  CardContainer,
  CardHeading,
  CardImage,
  CardPrice,
  CardQuantity,
  CardColor
} from "./Styled";

export default function ProductCard() {
  return (
    <CardContainer>
      <CardHeading>name of product</CardHeading>
      <CardImage>image of product</CardImage>
      <CardPrice>price of product</CardPrice>
      <CardQuantity>quantity of product</CardQuantity>
      <CardColor>color of product</CardColor>
      <CardButton>X</CardButton>
    </CardContainer>
    )
}
