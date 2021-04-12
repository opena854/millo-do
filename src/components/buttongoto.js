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
    state,
    ...props
  }) => (
    <Button
      variant={variant}
      color={color}
      onClick={() => {
        onClick();
        history.push(toUrl, state);
      }}
    >
      {children}
    </Button>
  )
);

export default ButtonGoTo;
