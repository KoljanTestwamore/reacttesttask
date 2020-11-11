import TableById from "./TableById";
import IdInput from "./IdInput";
import React, { useState } from "react";

import styles from "../styles/MainContainer.module.css";

export default function MainContainer() {
  const [id, setId] = useState();
  return (
    <div className={styles.mainContainer}>
      <div className={styles.header}>
        <img src="/logo.svg" className={styles.logo} />
        <img src="/moto.svg" className={styles.moto} />
      </div>
      <p className={styles.title}>
        Получение информации о штрафе по УИН
      </p>
      <IdInput
        setId={setId}
      />
      { id && <TableById
        id={id}
      />}
    </div>
  );
}
