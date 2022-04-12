import React, { Component } from "react";

import { Categories, HeroBanner } from "./../../components/containers";
export function Home() {
  return (
    <div className="home">
      <HeroBanner />
      <Categories />
    </div>
  );
}
