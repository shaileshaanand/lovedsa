import { useQuery } from "react-query";
export const useStats = (username, config) => {
  return useQuery(
    "stats",
    () =>
      fetch(`https://gfgapistaging.herokuapp.com/${username}`).then((res) => {
        return res.json();
      }),
    config
  );
};
