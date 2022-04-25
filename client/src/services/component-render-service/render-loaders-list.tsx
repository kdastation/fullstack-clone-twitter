import React from "react";
import { createAnArrayOfArbitraryLength } from "../../utils/utils";

export const renderLoadersList = (
  ComponentLoader: React.ElementType,
  countLoaders: number
) => {
  return createAnArrayOfArbitraryLength(countLoaders).map((_, index) => {
    return <ComponentLoader key={index} />;
  });
};
