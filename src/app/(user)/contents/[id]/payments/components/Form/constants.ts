import { format } from 'date-fns';

const mid = process.env.NICEPAY_MID;
const returnURL = `${process.env.NICEPAY_RETURN_URL}`;
const ediDate = format(new Date(), 'yyyyMMddHHmmss');

export { mid, returnURL, ediDate };
