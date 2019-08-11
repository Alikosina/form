import React, { memo } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  font-family: "Roboto";
`;

const ButtonComponent = (props: any) => {
  const { children, ...otherProps } = props;
  return <StyledButton {...otherProps}>{children}</StyledButton>;
};

export default memo(ButtonComponent);
