import { render as rtlRender } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { AppProvider } from '@/providers/app-provider';
import { type FunctionComponent } from 'react';

// eslint-disable-next-line import/export
export const render = (
	ui: any,
	{ ...renderOptions }: Record<string, any> = {}
) => {
	const returnValue = {
		...rtlRender(ui, {
			wrapper: AppProvider as FunctionComponent<unknown>,
			...renderOptions,
		}),
	};

	return returnValue;
};

// eslint-disable-next-line import/export
export * from '@testing-library/react';
export { userEvent, rtlRender };
