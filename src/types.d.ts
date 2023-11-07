// types.d.ts
export {}; // this file should be a module
declare global {
  interface Window {
    google: typeof google;
    initMap?: () => void;
  }
}
