import { proxy } from "valtio";

const state = proxy({
  intro: true,
  colors: ["#ccc", "#1A4D2E", "#80C670", "#726DE8", "#EF674E", "#353934"],
  decals: [
    "pattern_1",
    "pattern_2",
    "pattern_8",
    "pattern_4",
    "pattern_5",
    "pattern_6",
    "pattern_7",
  ],
  color: "#353934",
  decal: "pattern_1",
});

export { state };
