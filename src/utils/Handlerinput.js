export function HandlerUserName(enteredUserName) {
  if (enteredUserName.length < 4) {
    return false;
  }
  return /^[a-zA-Z0-9]+$/.test(enteredUserName);
}

export function HandlerEmail(enteredEmail) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    enteredEmail,
  );
}
export function HandlerPassword(enteredPassword) {
  if (enteredPassword.length < 6) {
    return false;
  }
  return true;
}
export function HandlerConfirmPassword(Password1, confirmPassword) {
  if (confirmPassword.length != 0 && Password1 == confirmPassword) {
    return true;
  }
  return false;
}
export function HandlerLength(input, length) {
  if (input.length < length) {
    return false;
  }
  return true;
}
