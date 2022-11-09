export function HandlerUserName(enteredUserName) {
  if (enteredUserName.length < 6) {
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
export function AlertHandler(case1, case2, case3, touch1, touch2, touch3) {
  if (touch1 == false || touch2 == false || touch3 == false) {
    return alert('يرجى إدخال كافة البيانات');
  }
  if (case1 == false || case2 == false || case3 == false) {
    return alert('يرجى التأكد من صحة البيانات المدخلة');
  }
  return true;
}
export function addNumber(x, z) {
  return x + z;
}
