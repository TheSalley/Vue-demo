export interface Http {
  get<T>(url: string, params?: any): Promise<T>;

  post<T>(url: string, params?: any): Promise<T>;

  upload<T>(url: string, params: any): Promise<T>;

  put<T>(url: string, params: any): Promise<T>;

  delete<T>(url: string, params: any): Promise<T>;

  download(url: string): void;
}

export interface ResType<T> {
  code: number;
  data?: T;
  msg: string;
  err?: string;
}
