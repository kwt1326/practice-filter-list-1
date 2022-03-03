import React from "react";

export const useStore = <T>(context: React.Context<T>) => React.useContext<T>(context);