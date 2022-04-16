import { determineFileType } from "../../utils/utils";

describe("determine file type function", () => {
  test("must correctly determine with good data", () => {
    const file = new File(["foo"], "foo.jpg", {
      type: "image/jpeg",
    });
    expect(determineFileType(file)).toBe("image");
  });

  test("should work correctly without type", () => {
    const file = new File(["foo"], "foo.jpg");
    expect(determineFileType(file)).toBe("");
  });
});
