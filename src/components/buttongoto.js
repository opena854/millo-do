import React from "react";

import { useNavigate } from "react-router-dom";
import { Button } from "@material-ui/core";

export const ButtonGoTo = ({
    children,
    toUrl,
    variant,
    onClick = () => {},
    color,
    state,
    ...props
  }) => {
    const navigate = useNavigate()
    
    return (
    <Button
      variant={variant}
      color={color}
      onClick={() => {
        onClick();
        navigate(toUrl, { state })
      }}
    >
      {children}
    </Button>
  )}


export default ButtonGoTo;
