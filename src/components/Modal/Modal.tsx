import React, { memo } from "react";
import styled from "styled-components";

const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  border: 1px solid;
  border-radius: 15px;
`;

const ModalComponent = ({ children }: any) => {
  return <StyledModal>{children}</StyledModal>;
};

export default memo(ModalComponent);
