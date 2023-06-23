import 'little-state-machine';

declare module 'little-state-machine' {
  interface GlobalState {
    buyflow: {
      email?: string;
      age?: number;
      firstName?: string;
      lastName?: string;
    };
  }
}
