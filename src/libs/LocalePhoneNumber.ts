import Str from 'expensify-common/lib/str';
import Onyx from 'react-native-onyx';
import CONST from '@src/CONST';
import ONYXKEYS from '@src/ONYXKEYS';
import {parsePhoneNumber} from './PhoneNumber';

let countryCodeByIP: number;
Onyx.connect({
    key: ONYXKEYS.COUNTRY_CODE,
    callback: (val) => (countryCodeByIP = val ?? 1),
});

/**
 * Returns a locally converted phone number for numbers from the same region
 * and an internationally converted phone number with the country code for numbers from other regions
 */
function formatPhoneNumber(number: string): string {
    if (!number) {
        return '';
    }

    // eslint-disable-next-line no-param-reassign
    number = number.replace(/ /g, '\u00A0');

    // do not parse the string, if it doesn't contain the SMS domain and it's not a phone number
    if (number.indexOf(CONST.SMS.DOMAIN) === -1 && !CONST.REGEX.DIGITS_AND_PLUS.test(number)) {
        return number;
    }
    const numberWithoutSMSDomain = Str.removeSMSDomain(number);
    const parsedPhoneNumber = parsePhoneNumber(numberWithoutSMSDomain);

    // return the string untouched if it's not a phone number
    if (!parsedPhoneNumber.valid) {
        if (parsedPhoneNumber.number?.international) {
            return parsedPhoneNumber.number.international;
        }
        return numberWithoutSMSDomain;
    }

    const regionCode = parsedPhoneNumber.countryCode;

    if (regionCode === countryCodeByIP) {
        return parsedPhoneNumber.number.national;
    }

    return parsedPhoneNumber.number.international;
}

export {
    // eslint-disable-next-line import/prefer-default-export
    formatPhoneNumber,
};
