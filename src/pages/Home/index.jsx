import React, { Component } from "react";

import { Categories, HeroBanner, Courses } from "./../../components/containers";
export function Home() {
  return (
    <div className="home">
      <HeroBanner />
      <Categories />
      <Courses />
    </div>
  );
}
