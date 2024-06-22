import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const roughter = inject(Router);

  let isloggedIn = sessionStorage.getItem("isLogined");


  if (isloggedIn == "false") {
    roughter.navigate(["login"])
    return false;
  }

  return true;
};
