import React, { useState } from "react";
import { FormControl, TextField, Button, FormGroup } from "@material-ui/core";

import "./FormSendTweet.scss";

export default function FormSendTweet(props) {
  const { sendTweet } = props;
  const [formValue, setFormValue] = useState({
    name: "",
    tweet: "",
  });

  const onFormChange = (event) => {
    setFormValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="FormSendTweet">
      <h2 className="FormSendTweet__title">Enviar Tweet</h2>
      <form
        className="FormSendTweet__form"
        onSubmit={(event) => sendTweet(event, formValue)}
        onChange={onFormChange}
      >
        <FormControl>
          <FormGroup>
            <TextField
              className="FormSendTweet__form-name"
              type="text"
              name="name"
              placeholder="Nombre de usuario"
              margin="normal"
            />
          </FormGroup>
          <FormGroup>
            <TextField
              className="FormSendTweet__form-textarea"
              multiline
              name="tweet"
              placeholder="Escribe tu tweet"
              rows="6"
              margin="normal"
            />
          </FormGroup>
          <FormGroup>
            <Button type="submit">Enviar Tweet</Button>
          </FormGroup>
        </FormControl>
      </form>
    </div>
  );
}
