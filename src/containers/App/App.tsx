import React, { memo, useEffect } from "react";
import { connect } from "react-redux";
import { fetchValues } from "@store/form/formActions";
import FormContainer from "@containers/FormContainer";
// @ts-ignore
import Loader from "react-loader-spinner";
import styled from "styled-components";

const StyledLoaderContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const AppContainer = ({ dispatch, values, isLoading }: any) => {
  useEffect(() => {
    dispatch(fetchValues());
  }, []);
  return isLoading ? (
    <StyledLoaderContainer>
      <Loader type="ThreeDots" color="#00BFFF" height="100" width="100" />
    </StyledLoaderContainer>
  ) : (
    <div>
      <FormContainer
        firstName={values.firstName}
        middleName={values.middleName}
        lastName={values.lastName}
      />
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  isLoading: state.form.loading,
  values: state.form.data
});

export default connect(mapStateToProps)(memo(AppContainer));
