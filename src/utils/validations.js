import { helpers } from 'vuelidate/lib/validators';

export const contains = param => value => !helpers.req(value) || value.indexOf(param) >= 0;
export const dateFormat = helpers.regex('alpha', /([3][0,1]|[0-2]\d)-([1][0-2]|[0]\d)-(\d\d\d\d)/);
