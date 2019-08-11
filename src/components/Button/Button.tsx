import React, { memo } from "react";
import styled from "styled-components";

const ButtonComponent = (props: any) => {
  const { children, ...otherProps } = props;
  return <button {...otherProps}>{children}</button>;
};

export default memo(ButtonComponent);
