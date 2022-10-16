import { Nullish } from './Nullish';

export type Falsy<T = false> = Nullish<T> | false;
