import React from "react";
import Container from "../layout/Container";
import VerticalProductItem from "../../../src/components/layout/VerticalProductItem";
import special1 from "../../../public/SpecialOffer/special1.png"

const TestItem = () => {
  return (
    <div className="bg-slate-400">
      <Container>
        <VerticalProductItem src={special1} Pname="Basic Crew Neck Tee" Color="Black" Offer="New" OfferEye={true} Price="44.00"/>
      </Container>
    </div>
  );
};

export default TestItem;
