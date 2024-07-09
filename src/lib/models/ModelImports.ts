import { lazy } from "react";

export const F12 = lazy(() =>
  import("../../components/Scene/Car/f12/Model").then(({ F12 }) => ({
    default: F12,
  }))
);
export const Huracan = lazy(() =>
  import("../../components/Scene/Car/huracan/Model").then(({ Huracan }) => ({
    default: Huracan,
  }))
);

export const Chiron = lazy(() =>
  import("../../components/Scene/Car/chiron/Model").then(({ Chiron }) => ({
    default: Chiron,
  }))
);
export const SpotlightProp = lazy(() =>
  import("../../components/Scene/Floor/Spotlight").then(({ SpotlightProp }) => ({
    default: SpotlightProp,
  }))
);

