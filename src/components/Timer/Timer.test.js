import { segmentSizes } from "./Timer";

describe("segmentSizes", () => {
  beforeEach(() => {
    jest.spyOn(Date, "now").mockReturnValue(20);
  });

  it("spaces equally when none complete", () => {
    expect(segmentSizes(20, 10, [false, false, false, false])).toEqual([
      0.25,
      0.25,
      0.25,
      0.25
    ]);
  });

  it("spaces according to time", () => {
    expect(segmentSizes(20, 10, [21, 23, 26, 30])).toEqual([
      0.1,
      0.2,
      0.3,
      0.4
    ]);
  });

  it("mixes them up", () => {
    expect(segmentSizes(20, 10, [21, 23, false, false])).toEqual([
      0.1,
      0.2,
      0.35,
      0.35
    ]);
  });

  it("extends current segment to time when none complete", () => {
    Date.now.mockReturnValue(24)
    expect(segmentSizes(20, 10, [false, false, false, false])).toEqual([
      0.4,
      0.2,
      0.2,
      0.2
    ]);
  });

  it("extends current segment to time", () => {
    Date.now.mockReturnValue(25)
    expect(segmentSizes(20, 10, [21, false, false, false])).toEqual([
      0.1,
      0.4,
      0.25,
      0.25
    ]);
  });
});
