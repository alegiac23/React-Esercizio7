// Implementa un componente UncontrolledLogin che implementa tutte le operazioni del componente Login, ma utilizzando componenti non controllati.
// Accedi ai valori del modulo utilizzando l'API FormData. Stampa i valori del modulo nella console quando il pulsante "login" viene cliccato.

import { type BaseSyntheticEvent } from "react";

export function UncontrolledLogin() {
  function handleFormSubmit(event: BaseSyntheticEvent) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get("email");
    const password = formData.get("password");

    console.log({ email, password });
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email"></input>
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input id="password" name="password" type="password"></input>
      </div>

      <button type="submit">Login</button>
    </form>
  );
}
