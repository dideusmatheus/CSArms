import { FormGroup } from '@angular/forms';

//31I- criando a validação e depois usar ela no novo-usuario.componente.ts
export function usuarioSenhaIguaisValidator(formGroup: FormGroup) {
  
  const username = formGroup.get('userName')?.value ?? '';
  const password = formGroup.get('password')?.value ?? '';

  if (username.trim() + password.trim()) {
    return username !== password ? null : { senhaIgualUsuario: true };
  } else {
    return null;
  }
}