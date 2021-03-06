/* eslint-disable @typescript-eslint/naming-convention */

export type User = {
  email: string;
  password: string;
  password_confirmation?: string;
  first_name?: string;
  last_name?: string;
  locale?: string;
};
