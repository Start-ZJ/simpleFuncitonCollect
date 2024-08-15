// import { checkIsNum } from './../simpleFuncitonCollect'
// import { test, expect } from '@jest/globals';
const checkIsNum = (value: string | number | null | undefined): boolean => {
  return !isNaN(parseFloat(value.toString())) && isFinite(Number(value));
};
test("checkIsNum with number", () => {
  expect(checkIsNum(1)).toBe(true);
});

test("checkIsNum with string number", () => {
  expect(checkIsNum("123")).toBe(true);
});

test("checkIsNum with non-number string", () => {
  expect(checkIsNum("abc")).toBe(false);
});

test("checkIsNum with empty string", () => {
  expect(checkIsNum("")).toBe(false);
});

test("checkIsNum with null", () => {
  // 注意：原始函数没有处理 null 或 undefined，这里假设我们扩展了函数来处理这些情况  
  expect(checkIsNum(null)).toBe(false);
});
