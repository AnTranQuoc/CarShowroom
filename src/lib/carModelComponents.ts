import {
  
  F12,

  Huracan,
  
  Chiron,
} from "./models/ModelImports";
import { CarManufacturer } from "./types/types";

export const carModelComponents: {
  [key in CarManufacturer]: React.LazyExoticComponent<
    (props: any) => JSX.Element
  >;
} = {

  Lamborghini: Huracan,
  Ferrari: F12,

  Bugatti: Chiron,

};
