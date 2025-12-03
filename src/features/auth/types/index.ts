// features/auth/types/index.ts
export interface User {
  id: string
  email: string
  name: string
}
export interface RegisterForm {
  email: string
  name: string
  password:string
  confirmPassword:string
}

export interface AuthResponse {
  user: User
  accessToken: string
  refreshToken: string
  expiresIn: number
}

export interface LoginCredentials {
  email: string
  password: string
}

export interface RegisterCredentials extends LoginCredentials {
  name: string
  confirmPassword: string
}

export interface TokenPayload {
  userId: string
  email: string
  role: string
  exp: number
}

export interface RefreshTokenResponse {
  accessToken: string
  refreshToken: string
  expiresIn: number
}