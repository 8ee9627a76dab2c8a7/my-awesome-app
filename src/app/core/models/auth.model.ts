export interface FirebaseSignupResponse {
  idToken: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  email: string;
}

export interface FirebaseSigninResponse {
  idToken: string;
  localId: string;
  email: string;
  refreshToken: string;
}

export interface FirebaseRefreshResponse {
  access_token: string;
  expires_in: string;
  token_type: string;
  refresh_token: string;
  id_token: string;
  user_id: string;
  project_id: string;
}
