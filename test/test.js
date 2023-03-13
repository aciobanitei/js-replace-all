const assert = require("assert");
const replaceall = require("../lib/index").replaceall;

describe("js-replace-all", () => {
  describe("#replaceall", () => {
    it("replacing 'abc' with '' from 'Test abc test test abc test test test abc test test abc'", () => {
      assert.equal(
        replaceall(
          "Test abc test test abc test test test abc test test abc",
          "abc",
          ""
        ),
        "Test  test test  test test test  test test "
      );
    });

    it("replacing '/' with '-' from '123/123/123/123/123'", () => {
      assert.equal(
        replaceall("123/123/123/123/123", "/", "-"),
        "123-123-123-123-123"
      );
    });
  });
});
