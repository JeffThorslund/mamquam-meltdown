import { buildRacerInfoLookup } from "./buildRacerInfoLookup";

test("no races", () => {
  expect(buildRacerInfoLookup("")).toEqual({});
});

test("single racer", () => {
  expect(buildRacerInfoLookup("1,Jeff")).toEqual({
    1: "Jeff",
  });
});

test("multiple racers", () => {
  expect(buildRacerInfoLookup("1,Jeff\n2,Archer\n3,Maddy")).toEqual({
    1: "Jeff",
    2: "Archer",
    3: "Maddy",
  });
});
