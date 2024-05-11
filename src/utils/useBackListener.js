import React, { useState, useEffect, useContext } from 'react';

import { UNSAFE_NavigationContext } from "react-router-dom";

export const useBackListener = (callback) => {
  const navigator = useContext(UNSAFE_NavigationContext).navigator;

  console.log("|here")

  useEffect(() => {
    const listener = ({ location, action }) => {
      console.log("listener", { location, action });
      if (action === "POP") {
        callback({ location, action });
      }
    };

    const unlisten = navigator.listen(listener);
    return unlisten;
  }, [callback, navigator]);
};