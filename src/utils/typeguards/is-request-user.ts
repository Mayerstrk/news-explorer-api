import { type RequestUser } from '../../types/request';

function isRequestUser(value: unknown): value is RequestUser {
	if (typeof value !== 'object' || value === null) return false;

	const keys = Object.keys(value);
	return keys[0] === '_id' && typeof (value as RequestUser)._id === 'number';
}

export { isRequestUser };
