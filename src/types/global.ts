export type EventCustom = Event & { target: { innerText: string } };

export interface AppStateInteface {
  user: UserInteface;
  movies: Record<string, any>;
}

export interface UserInteface {
  role?: string;
}
