import TableById from "../TableById/TableById";
import React, { useEffect, useState } from "react";

import styles from "./MainContainer.module.css";

export default function MainContainer() {
  function countCheckNumber(number) {
    let res = 0;
    const digits = number.split("");
    let numbers = new Array(digits.length)
                      .fill()
                      .map((_, i) => i % 10 + 1);
    for (let i = 0; i < digits.length; i++) {
      res += digits[i] * numbers[i];
    }
    res %= 11;
    if (res === 10) {
      res = 0;
      let numbers = new Array(digits.length)
                        .fill()
                        .map((_, i) => (i + 2) % 10 + 1);
      for (let i = 0; i < digits.length; i++) {
        res += digits[i] * numbers[i];
      }
      res %= 11;
      if (res === 10)
        return 0;
    }
    return res;
  }

  function handleSend() {
    if ((input.length >= 20)
      && (input.length <= 25)) {
      setId(input);
      setHintMessage("");
    } else {
      setErrorMessage("УИН должен содержать от 20 до 25 цифр");
    }
  }

  function validate(e) {
      setInput(e.target.value);
      setErrorMessage("");
      setFromHint(false);
  }

  const [input, setInput] = useState("");
  const [id, setId] = useState();
  const [errorMessage, setErrorMessage] = useState("");
  const [hintMessage, setHintMessage] = useState("");
  const [fromHint, setFromHint] = useState(false);

  useEffect(() => {
    setInput(input.replace(/\D/g, ""));
    if ((input.length >= 19)
      && (input.length < 25)
      && !fromHint) {
      setHintMessage(input + countCheckNumber(input).toString());
    } else {
      setHintMessage("");
    }
  }, [input]);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.header}>
        <img src="/logo.svg" className={styles.logo} />
        <img src="/moto.svg" className={styles.moto} />
      </div>
      <p className={styles.title}>
        Получение информации о штрафе по УИН
      </p>
      <div className={styles.inputGroup}>
        <input
          value={input}
          onChange={validate}
          onKeyDown={e => {
            if (e.key === "ArrowDown" && hintMessage) {
              setInput(hintMessage);
              setHintMessage("");
              setFromHint(true);
            } else if (e.key === "Enter") {
              handleSend();
            }
          }}
          placeholder="Введите УИН"
        >
        </input>
        <button
          onClick={handleSend}
        >
          Найти
        </button>
      </div>
      {
        hintMessage && <div className={styles.hint}>
          {hintMessage}
        </div>
      }
      {
        errorMessage && <div className={styles.error}>
          {errorMessage}
        </div>
      }
      {!errorMessage && id && <TableById
        id={id}
      />}
    </div>
  );
}
