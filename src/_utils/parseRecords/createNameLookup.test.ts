import { createNameLookup } from "./createNameLookup";

test("no races", () => {
  expect(createNameLookup("")).toEqual({});
});

test("single racer", () => {
  expect(createNameLookup("1,Jeff")).toEqual({
    1: "Jeff",
  });
});

test("multiple racers", () => {
  expect(createNameLookup("1,Jeff\n2,Archer\n3,Maddy")).toEqual({
    1: "Jeff",
    2: "Archer",
    3: "Maddy",
  });
});
