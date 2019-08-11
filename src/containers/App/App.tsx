import React, { memo, useEffect } from "react";
import { connect } from "react-redux";
import { fetchValues } from "@store/form/formActions";

const AppContainer = ({ dispatch }: any) => {
  useEffect(() => {
    dispatch(fetchValues());
  }, []);
  return <h1>Hello Form</h1>;
};

export default connect()(memo(AppContainer));
