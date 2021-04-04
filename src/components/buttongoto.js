import React from "react";

import { withRouter } from "react-router-dom";
import { Button } from "@material-ui/core";

export const ButtonGoTo = withRouter(
  ({
    history,
    children,
    toUrl,
    variant,
    onClick = () => {},
    color,
    ...props
  }) => (
    <Button
      variant={variant}
      color={color}
      onClick={() => {
        onClick();
        history.push(toUrl);
      }}
    >
      {children}
    </Button>
  )
);

export default ButtonGoTo;
