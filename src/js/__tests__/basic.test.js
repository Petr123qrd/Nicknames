import Validator from "../basic";

test("Проверка на совпадение шаблона", () => {
  const name = "a123_adc-b";
  const validator = new Validator();
  const validateNameStatus = validator.validateUsername(name);

  expect(validateNameStatus).toBeTruthy();
});

test("Проверка на число в начале строки", () => {
  const name = "1abc";
  const validator = new Validator();
  const validateNameStatus = validator.validateUsername(name);

  expect(validateNameStatus).toBeFalsy();
});

test("Проверка на число в конце строки", () => {
  const name = "abc1";
  const validator = new Validator();
  const validateNameStatus = validator.validateUsername(name);

  expect(validateNameStatus).toBeFalsy();
});

test("Проверка на '_' в начале строки", () => {
  const name = "_abc";
  const validator = new Validator();
  const validateNameStatus = validator.validateUsername(name);

  expect(validateNameStatus).toBeFalsy();
});

test("Проверка на '_' в конце строки", () => {
  const name = "abc_";
  const validator = new Validator();
  const validateNameStatus = validator.validateUsername(name);

  expect(validateNameStatus).toBeFalsy();
});

test("Проверка на '-' в начале строки", () => {
  const name = "-abc";
  const validator = new Validator();
  const validateNameStatus = validator.validateUsername(name);

  expect(validateNameStatus).toBeFalsy();
});

test("Проверка на '-' в конце строки", () => {
  const name = "abc-";
  const validator = new Validator();
  const validateNameStatus = validator.validateUsername(name);

  expect(validateNameStatus).toBeFalsy();
});

test("Проверка на четыре цифры в строке", () => {
  const name = "a1234c";
  const validator = new Validator();
  const validateNameStatus = validator.validateUsername(name);

  expect(validateNameStatus).toBeFalsy();
});

test("Проверка на недопустимый символ 'ц' в строке", () => {
  const name = "a12ц34c";
  const validator = new Validator();
  const validateNameStatus = validator.validateUsername(name);

  expect(validateNameStatus).toBeFalsy();
});
