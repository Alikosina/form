import React, { memo, useCallback } from "react";
import { FieldComponentProps } from "./models";
import styled from "styled-components";

const StyledFieldContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 5px;
  @media (max-width: 1199px) {
    flex-direction: column;
`;

const StyledLabel = styled.label`
  width: 100px;
  margin-right: 5px;
  @media (max-width: 1199px) {
    margin-right: 0;
    margin-bottom: 5px;
  }
`;

const FieldComponent = (props: FieldComponentProps) => {
  const { name, label, value, onChange, ...otherProps } = props;
  return (
    <StyledFieldContainer>
      <StyledLabel htmlFor={name}>{label}</StyledLabel>
      <input
        value={value}
        name={name}
        id={name}
        onChange={onChange}
        type="text"
        {...otherProps}
      />
    </StyledFieldContainer>
  );
};

export default memo(FieldComponent);
