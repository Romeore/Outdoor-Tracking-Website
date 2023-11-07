export interface Device {
  id: string;
  name: string;
  location: {
    latitude: number;
    longitude: number;
  };
};
