import { describe, it, expect } from 'vitest';
import { LANGUAGE_COLORS } from '$lib/types';

describe('LANGUAGE_COLORS', () => {
	it('contains common languages', () => {
		expect(LANGUAGE_COLORS.TypeScript).toBe('#3178c6');
		expect(LANGUAGE_COLORS.JavaScript).toBe('#f1e05a');
		expect(LANGUAGE_COLORS.Python).toBe('#3572A5');
	});

	it('returns undefined for unknown languages', () => {
		expect(LANGUAGE_COLORS['Brainfuck']).toBeUndefined();
	});
});
