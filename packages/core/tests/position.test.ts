import { describe, expect, it } from "vitest";
import { getOverlayPositionStyle } from "../src";

describe("getOverlayPositionStyle()", () => {
  it("calcula bottom-right", () => {
    expect(getOverlayPositionStyle("bottom-right", 16)).toEqual({
      right: "16px",
      bottom: "16px",
    });
  });

  it("calcula top-center", () => {
    expect(getOverlayPositionStyle("top-center", "5%")).toEqual({
      top: "5%",
      left: "50%",
      transform: "translateX(-50%)",
    });
  });

  it("calcula center", () => {
    expect(getOverlayPositionStyle("center", 0)).toEqual({
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    });
  });

  it("calcula center-right", () => {
    expect(getOverlayPositionStyle("center-right", 20)).toEqual({
      top: "50%",
      right: "20px",
      transform: "translateY(-50%)",
    });
  });
});