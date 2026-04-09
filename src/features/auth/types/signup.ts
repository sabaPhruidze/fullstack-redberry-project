export type SignUpStep = 1 | 2 | 3;

export type SignUpFormValues = {
  email: string;
  password: string;
  confirmPassword: string;
  username: string;
  avatarFile: File | null;
};

export type RegisterPayload = SignUpFormValues;

export type RegisteredUser = {
  id: number;
  username: string;
  email: string;
  avatar: string;
  fullName: string;
  mobileNumber: string;
  age: number;
  profileComplete: boolean;
};

export type RegisterResponseData = {
  user: RegisteredUser;
  token: string;
};

export const INITIAL_SIGN_UP_FORM: SignUpFormValues = {
  email: "",
  password: "",
  confirmPassword: "",
  username: "",
  avatarFile: null,
};
