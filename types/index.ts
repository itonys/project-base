// Common interfaces
export interface IUser {
  id: string
  email: string
  name: string
  createdAt: Date
  updatedAt: Date
}

export interface IApiResponse<T> {
  success: boolean
  data?: T
  error?: string
}

// Auth related interfaces
export interface IAuthState {
  isAuthenticated: boolean
  user: IUser | null
  isLoading: boolean
}

// UI related interfaces
export interface IToastProps {
  title?: string
  description: string
  type?: 'default' | 'success' | 'error' | 'warning'
}

// Component common props interface
export interface IBaseProps {
  className?: string
  children?: React.ReactNode
}
