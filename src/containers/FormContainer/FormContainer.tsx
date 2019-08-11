import React, { memo, useState, useCallback, useEffect } from "react";
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
  useEffect(() => {
    setFirstName(props.firstName);
    setMiddleName(props.middleName);
    setLastName(props.lastName);
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
    </Modal>
  );
};

export default memo(FormContainer);
