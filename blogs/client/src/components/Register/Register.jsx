import React, { useState } from "react";
import { Link } from "react-router-dom";
import SignIn from "./SignIn/SignIn";
import SignUp from "./SignUp/SignUp";

import styles from "./style.module.css";
const Register = () => {
  const [active, setActive] = useState(0);

  const comps = [
    { id: 0, component: <SignIn /> },
    { id: 1, component: <SignUp /> },
  ];

  return (
    <>
      <div className={styles.bg}>
        <div className={styles.register}>
          <div className={styles.btnGroup}>
            <Link
              to="/signin"
              onClick={() => setActive(0)}
              className={styles.btnLeft}
            >
              Sign In
            </Link>
            <Link
              to="/signup"
              onClick={() => setActive(1)}
              className={styles.btnRight}
            >
              Sign Up
            </Link>
          </div>
          <div className={styles.comp}>{comps[active].component}</div>
        </div>
      </div>
    </>
  );
};

export default Register;
