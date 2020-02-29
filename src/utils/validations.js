import { helpers } from 'vuelidate/lib/validators';

export const priceFormat = helpers.regex('alpha', /^[0-9]{1,4},[0-9]{2}$/);
export const dateFormat = helpers.regex('alpha', /([3][0,1]|[0-2]\d)-([1][0-2]|[0]\d)-(\d\d\d\d)/);
