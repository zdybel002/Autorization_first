import React, { useContext } from "react";

import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import AuthContext from "../../store/auth-contex";

import styles from "./Home.module.css";

const Home = (props) => {
  const ctx = useContext(AuthContext);
  return (
    <Card className={styles.home}>
      <h1>Рады Вас Видеть Снова!</h1>
      <Button onClick={ctx.onLogout}>Wyjście</Button>
    </Card>
  );
};

export default Home;
