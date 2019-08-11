import React, {
  memo,
  useState,
  useCallback,
  useEffect,
  useDebugValue
} from "react";
import Modal from "@components/Modal";
import { FormContainerModel } from "./models";

const FormContainer = (props: FormContainerModel) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const handleFirstNameChange = useCallback(
    e => {
      const value = e.currentTarget.value;
      setFirstName(value);
    },
    [firstName]
  );
  const handleLastNameChange = useCallback(
    e => {
      const value = e.currentTarget.value;
      setLastName(value);
    },
    [lastName]
  );
  const handleMiddleNameChange = useCallback(
    e => {
      const value = e.currentTarget.value;
      setMiddleName(value);
    },
    [middleName]
  );
  const clearValues = useCallback(() => {
    setFirstName("");
    setMiddleName("");
    setLastName("");
  }, []);
  const resetValues = useCallback(() => {
    setFirstName(props.firstName);
    setMiddleName(props.middleName);
    setLastName(props.lastName);
  }, [props.firstName, props.lastName, props.middleName]);
  useEffect(() => {
    resetValues();
  }, []);
  return (
    <Modal>
      <div>
        <input onChange={handleFirstNameChange} value={firstName} type="text" />
        <input
          onChange={handleMiddleNameChange}
          value={middleName}
          type="text"
        />
        <input onChange={handleLastNameChange} value={lastName} type="text" />
      </div>
      <div>
        <button onClick={clearValues}>Очистить</button>{" "}
        <button onClick={resetValues}>Отменить</button>
      </div>
    </Modal>
  );
};

export default memo(FormContainer);
