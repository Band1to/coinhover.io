import * as R from 'ramda'

export const notEmpty = R.compose(R.not, R.isEmpty);