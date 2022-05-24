import { buildNameLookup } from "./buildNameLookup";

test("no races", () => {
  expect(buildNameLookup("")).toEqual({});
});

test("single racer", () => {
  expect(buildNameLookup("1,Jeff")).toEqual({
    1: "Jeff",
  });
});

test("multiple racers", () => {
  expect(buildNameLookup("1,Jeff\n2,Archer\n3,Maddy")).toEqual({
    1: "Jeff",
    2: "Archer",
    3: "Maddy",
  });
});
