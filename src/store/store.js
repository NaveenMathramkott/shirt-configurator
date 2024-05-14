import { proxy } from "valtio";

const state = proxy({
  intro: true,
  colors: ["#ccc", "#EF5E", "#80C670", "#726DE8", "#EF674E", "#353934"],
  decals: ["react", "three2", "pmndrs", "pattern1"],
  color: "#EF5E",
  decal: "three2",
});

export { state };
