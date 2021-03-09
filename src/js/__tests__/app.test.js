import sortHealth from '../app';

test('sort index health level', () => {
	const users = [
		{ name: 'мечник', health: 10 },
		{ name: 'маг', health: 100 },
		{ name: 'лучник', health: 80 },
	];
	const expected = [
		{ name: 'маг', health: 100 },
		{ name: 'лучник', health: 80 },
		{ name: 'мечник', health: 10 },
	];
	const received = sortHealth(users);
	expect(received).toEqual(expected);
});

test('sort index health level', () => {
	const users = [
		{ name: 'мечник', health: 100 },
		{ name: 'маг', health: 100 },
		{ name: 'лучник', health: 100 },
	];
	const expected = [
		{ name: 'мечник', health: 100 },
		{ name: 'маг', health: 100 },
		{ name: 'лучник', health: 100 },
	];
	const received = sortHealth(users);
	expect(received).toEqual(expected);
});

test('sort index health level', () => {
	const users = [
		{ name: 'мечник', health: 10 },
		{ name: 'маг', health: 10 },
		{ name: 'лучник', health: 100 },
	];
	const expected = [
		{ name: 'лучник', health: 100 },
		{ name: 'мечник', health: 10 },
		{ name: 'маг', health: 10 },
	];
	const received = sortHealth(users);
	expect(received).toEqual(expected);
});
