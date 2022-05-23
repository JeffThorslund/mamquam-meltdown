import { timing, createResults, mergeEntries, Entry } from "./timing";

// test variables
const emptyStarts: Entry[] = [];
const emptyEnds: Entry[] = [];

describe("timing", () => {
  test("both empty lists", () => {
    const expected = {};
    expect(timing(emptyStarts, emptyEnds)).toEqual(expected);
  });

  test("normal runs", () => {
    const normalStarts = [
      { racerId: "1", time: 1 },
      { racerId: "2", time: 3 },
    ];
    const normalEnds = [
      { racerId: "1", time: 2 },
      { racerId: "2", time: 4 },
    ];

    const expected = {
      "1": [
        {
          endTime: 2,
          startTime: 1,
        },
      ],
      "2": [
        {
          endTime: 4,
          startTime: 3,
        },
      ],
    };

    expect(timing(normalStarts, normalEnds)).toEqual(expected);
  });

  test("include did not finish", () => {
    const normalStarts = [
      { racerId: "1", time: 1 },
      { racerId: "2", time: 3 },
      { racerId: "1", time: 5 },
    ];
    const normalEnds = [
      { racerId: "2", time: 4 },
      { racerId: "1", time: 6 },
    ];

    const expected = {
      "1": [
        {
          endTime: null,
          startTime: 1,
        },
        {
          endTime: 6,
          startTime: 5,
        },
      ],
      "2": [
        {
          endTime: 4,
          startTime: 3,
        },
      ],
    };

    expect(timing(normalStarts, normalEnds)).toEqual(expected);
  });

  test("include did not finish as last race", () => {
    const normalStarts = [
      { racerId: "1", time: 1 },
      { racerId: "2", time: 3 },
    ];
    const normalEnds = [{ racerId: "2", time: 4 }];

    const expected = {
      "1": [
        {
          endTime: null,
          startTime: 1,
        },
      ],
      "2": [
        {
          endTime: 4,
          startTime: 3,
        },
      ],
    };

    expect(timing(normalStarts, normalEnds)).toEqual(expected);
  });

  test("did not start", () => {
    const missingStarts = [{ racerId: "2", time: 3 }];
    const normalEnds = [
      { racerId: "2", time: 4 },
      { racerId: "1", time: 6 },
    ];

    const expected = {
      "1": [
        {
          endTime: 6,
          startTime: null,
        },
      ],
      "2": [
        {
          endTime: 4,
          startTime: 3,
        },
      ],
    };

    expect(timing(missingStarts, normalEnds)).toEqual(expected);
  });

  test("racer got passed", () => {
    const missingStarts = [
      { racerId: "1", time: 1 },
      { racerId: "2", time: 2 },
    ];
    const normalEnds = [
      { racerId: "2", time: 3 },
      { racerId: "1", time: 4 },
    ];

    const expected = {
      "1": [
        {
          endTime: 4,
          startTime: 1,
        },
      ],
      "2": [
        {
          endTime: 3,
          startTime: 2,
        },
      ],
    };

    expect(timing(missingStarts, normalEnds)).toEqual(expected);
  });
});

test("create races structure", () => {
  const startInstances = [
    {
      racerId: "1",
      time: 123,
    },
    {
      racerId: "2",
      time: 456,
    },
  ];

  const expectedBaseObject = { 1: [], 2: [] };

  expect(createResults(startInstances)).toEqual(expectedBaseObject);
});

describe("merging", () => {
  test("merge empty lists", () => {
    expect(mergeEntries([], [])).toEqual([]);
  });

  test("merge only starts", () => {
    const starts = [
      { racerId: "1", time: 1 },
      { racerId: "2", time: 2 },
    ];

    const ends: Entry[] = [];

    const expected = [
      { racerId: "1", time: 1, type: "start" },
      { racerId: "2", time: 2, type: "start" },
    ];

    expect(mergeEntries(starts, ends)).toEqual(expected);
  });

  test("merge only ends", () => {
    const ends = [
      { racerId: "1", time: 1 },
      { racerId: "2", time: 2 },
    ];

    const starts: Entry[] = [];

    const expected = [
      { racerId: "1", time: 1, type: "end" },
      { racerId: "2", time: 2, type: "end" },
    ];

    expect(mergeEntries(starts, ends)).toEqual(expected);
  });

  test("merge starts and ends", () => {
    const starts = [
      { racerId: "1", time: 1 },
      { racerId: "2", time: 3 },
    ];

    const ends = [
      { racerId: "1", time: 2 },
      { racerId: "2", time: 4 },
    ];

    const expected = [
      { racerId: "1", time: 1, type: "start" },
      { racerId: "1", time: 2, type: "end" },
      { racerId: "2", time: 3, type: "start" },
      { racerId: "2", time: 4, type: "end" },
    ];

    expect(mergeEntries(starts, ends)).toEqual(expected);
  });
});
