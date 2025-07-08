import { AbstractControl, ValidationErrors } from '@angular/forms';

export function validatePassword(
  control: AbstractControl
): ValidationErrors | null {
  const regex = /(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+/;

  if (!control.value || regex.test(control.value)) {
    return null;
  }

  return { passwordInvalid: true };
}
