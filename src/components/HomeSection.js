import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NewReleases from "./NewReleases";
import SearchResults from "./SearchResults";

import { removeResultsSongs } from "../store/index";

const HomeSection = () => {
  const userData = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(removeResultsSongs());
  }, []);

  return userData.user.isLoggedIn ? (
    <div>
      <NewReleases />
      <SearchResults />
    </div>
  ) : (
    <div>Login In to check your Latest New Releases &amp; more</div>
  );
};

export default HomeSection;
