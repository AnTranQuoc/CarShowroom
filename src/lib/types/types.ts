export type CarManufacturer =
  | "Lamborghini"
  | "Ferrari"
  
  | "Bugatti";


export type LoaderProps = {
  selectedCar: {
    manufacturer: string;
    model: string;
    logo: string;
    video: string;
  };
};

export type CarColorProps = {
  name: string;
  hexCode: string;
};
