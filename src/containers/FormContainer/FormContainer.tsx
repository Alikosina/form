import React, { memo, useState, useCallback, useEffect } from "react";
import Modal from "@components/Modal";
import Field from "@components/Field";
import Button from "@components/Button";
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
        <Field
          label="First Name"
          value={firstName}
          name="firstName"
          onChange={handleFirstNameChange}
        />
        <Field
          label="Middle Name"
          value={middleName}
          name="middleName"
          onChange={handleMiddleNameChange}
        />
        <Field
          label="Last Name"
          value={lastName}
          name="lastName"
          onChange={handleLastNameChange}
        />
      </div>
      <div>
        <Button onClick={clearValues}>очистить</Button>
        <Button onClick={resetValues}>отменить</Button>
      </div>
    </Modal>
  );
};

export default memo(FormContainer);
