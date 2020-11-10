import React, { useEffect, useState } from "react";
import styles from "./TableById.module.css";

export default function TableById(props) {
  const id = props.id;

  const [items, setItems] = useState({});
  const [ready, setReady] = useState(false);
  const [showError, setShowError] = useState(false);

  useEffect(async () => {
    setReady(false);
    setShowError(false);

    const res = await fetch(`https://test-task.shtrafovnet.com/fines/${id}`);
    if (res.status === 200) {
      const items = await res.json();
      setItems(items);
    } else {
      setShowError(true);
    }
    setReady(true);
  }, [id]);

  function makeElements(items) {
    return [{
      code: "doc_number",
      value: "Свидетельство о регистрации"
    },{
      code: "bill_at",
      value: "Дата постановления",
      modifier: (value) => value.split("T")[0]
    },{
      code: "koap_code",
      value: "Нарушение"
    },{
      code: "division_name",
      value: "Получатель платежа"
    },{
      code: "payee_inn",
      value: "ИНН"
    },{
      code: "payee_kpp",
      value: "КПП"
    },{
      code: "payee_bank_account",
      value: "Расчетный счет"
    },{
      code: "payee_bank_name",
      value: "Банк получателя"
    },{
      сode: "payee_bank_bik",
      value:"БИК"
    },{
      code: "payee_oktmo",
      value: "ОКТМО(ОКАТО)"
    },{
      code: "kbk",
      value: "КБК"
    },{
      code: "amount",
      value: "Сумма штрафа"
    },{
      code: "discount_at",
      value: "Скидка",
      modifier: (value) => `Активна до ${value.split("T")[0]}`
    },{
      code: "payment_status",
      value: "Статус",
      modifier: (value) => value === "paid" ? "Оплачен" : "Не оплачен"
    },{
      code: "amount_to_pay",
      value: "Осталось заплатить",
      modifier: (value) => value ? value : null
    }].map(el =>
      items[el.code] && <tr key={el.code}>
        <td>
          { el.value }:
        </td>
        <td>
          { el.modifier
          ? el.modifier(items[el.code])
          : items[el.code] }
        </td>
      </tr>);
  }

  return ( <div className={styles.mainContainer}>
    { showError
    ? (
      <div className={styles.message}>
        <img src="/not-found 1.svg" />
      Штраф {id} не найден
      </div>
    )
    : ready
      ? <div className={styles.tableWrapper}>
        <p className={styles.title}>
          Постановление #{items.number}
        </p>
        <table>
          <tbody>
            {makeElements(items)}
          </tbody>
        </table>
      </div>
      : <div className={styles.message}>
        <img src="/loadingAnim.svg" />
        Загрузка
      </div>
    }
    </div>);
}
