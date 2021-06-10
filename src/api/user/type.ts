export enum UserState {
  /**
   * 在职
   */
  ON_JOB = 1,
  /**
   * 离职
   */
  NOT_ON_JOB,
  /**
   * 试用期
   */
  TRIAL_PERIOD,
}

export enum UserRole {
  /**
   * 管理员
   */
  ADMIN,
  /**
   * 普通用户
   */
  NROMAL,
}

export interface LoginRequest {
  username: string
  password: string
}

export interface UserInfo {
  userId: string
  userName: string
  userEmail: string
  state: UserState
  deptId: string[]
  role: number
  token: string
  roleList: string[]
}
