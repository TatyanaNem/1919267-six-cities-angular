import { AbstractControl, ValidationErrors } from '@angular/forms';

export function validateEmail(
  control: AbstractControl
): ValidationErrors | null {
  const regex = /^[^\s@]+@[^\s@]+\.(?!.*[^a-zA-Z])[a-zA-Z]{2,}$/;

  if (!control.value || regex.test(control.value)) {
    return null;
  }

  return { emailInvalid: true };
}
