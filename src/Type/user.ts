import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

interface ErrorResponse {
    message: string;
}

export const isFetchBaseQueryError = (error: any): error is FetchBaseQueryError => {
    return error && 'data' in error;
};

export const isErrorResponse = (data: any): data is ErrorResponse => {
    return data && 'message' in data;
};

export interface CustomJwtPayload {
    user: string; 
    role: string; 
    [key: string]: any; 
}

export type TAdmin = {
    exp: number;
    iat: number;
    role: string;
    user: string;
  };

  export type TAdminInitialState = {
    user: null | TAdmin;
    token: null | string;
  };
export type TUser = {
    exp: number;
    iat: number;
    role: string;
    email:string;
    name?: string;
    phoneNumber?: string;
    address?: string;
  };

  export type TUserInitialState = {
    user: null | TUser;
    token: null | string;
  };