import { isPositive } from "./main";

describe("Test isPositive", () => {
  it("should return true when n > 0", () => {
    expect(isPositive(1)).toBe(true); //truyền giá trị với kết quả mong muốn
    expect(isPositive(100)).toBe(true);
    expect(isPositive(100000000000)).toBe(true);
  });

  it("should return false when n = 0", () => {
    //ở đây nó sẽ sai vì kết quả của nó khác với kết quả mong muốn
    expect(isPositive(0)).toBe(false);
  });
 
  
  it("should return false when n < 0", () => {
    expect(isPositive(-1)).toBe(false);
    expect(isPositive(-100)).toBe(false);
    expect(isPositive(-100000000000)).toBe(false);
  });
});
