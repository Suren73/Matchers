import indexHealth from '../app';

test('should index health level', () => {
  const data = { name: 'Маг', health: 90 };
  const expected = 'healthy';
  const received = indexHealth(data);
  expect(received).toBe(expected);
});

test('should index health level', () => {
  const data = { name: 'Маг', health: 50 };
  const expected = 'wounded';
  const received = indexHealth(data);
  expect(received).toBe(expected);
});

test('should index health level', () => {
  const data = { name: 'Маг', health: 30 };
  const expected = 'wounded';
  const received = indexHealth(data);
  expect(received).toBe(expected);
});

test('should index health level', () => {
  const data = { name: 'Маг', health: 15 };
  const expected = 'wounded';
  const received = indexHealth(data);
  expect(received).toBe(expected);
});

test('should index health level', () => {
  const data = { name: 'Маг', health: 0 };
  const expected = 'critical';
  const received = indexHealth(data);
  expect(received).toBe(expected);
});
