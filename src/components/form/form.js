import React, {useState, useContext} from "react";
import {AlertContext} from "../../context/alert/alert-context";
import {FirebaseContext} from "../../context/firebase/firebase-context";

const Form = () => {

  const [value, setValue] = useState('');
  const alert = useContext(AlertContext);
  const firebase = useContext(FirebaseContext);

  const submitHandler = (event) => {
    event.preventDefault();

    if (value.trim()) {
      firebase.addNote(value.trim())
        .catch(() => {
          alert.show('Ошибка !!!', 'danger');
        });
      setValue('');
    } else {
      alert.show('Введите текст')
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
        placeholder='Введите текст...'
        value={value}
        onChange={(event) => setValue(event.target.value)}/>
      </div>
    </form>
  )
};

export default Form;