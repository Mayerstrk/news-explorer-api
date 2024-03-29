import { type ControllerHelper } from '../builders/controller-builder';

/**
 * Extracts the 'data' property type from the resolved value of a promise returned by a `ControllerHelper` function.
 * @template T - Extends `ReturnType<ControllerHelper>`, representing the return type of a specific `ControllerHelper`.
 * @type {Type}
 */

type ControllerHelperResponseData<T extends ControllerHelper<any>> =
	T extends ControllerHelper<any> ? Awaited<ReturnType<T>>['data'] : never;

export { ControllerHelperResponseData };
