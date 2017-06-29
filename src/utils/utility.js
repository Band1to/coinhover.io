import { compose, isEmpty, join, juxt, head, not, tail, toUpper } from 'ramda';

export const notEmpty = compose(not, isEmpty);