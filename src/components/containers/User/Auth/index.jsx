import React from "react";

import { Register } from "./Register";
import { SignIn } from "./SignIn";
import * as SC from "./../../styledComponents";
import style from "./Auth.module.scss";
export function Authentication() {
  return (
    <div className={style.container}>
      <SignIn />
    </div>
  );
}
