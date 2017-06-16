import React from 'react';
import DatePicker from 'material-ui/DatePicker';
import areIntlLocalesSupported from 'intl-locales-supported';
import moment from 'moment';

let DateTimeFormat = Intl.DateTimeFormat;

function getLocaleDateFormat(locale) {
  const defaultFormat = 'YYYY-MM-DD';
  if (!locale) return defaultFormat;
  var formats = {
    "en-AU": "DD/MM/YYYY",
    "en-US": "MM/DD/YYYY",
    "en-GB": "DD/MM/YYYY",
  };
  return formats[locale] || defaultFormat;
}

/**
 * Parses the given text and returns a Date, if it is valid, or, the given string,
 * if it's not valid
 * @param {string} dateString 
 * @param {string} locale 
 */
function parse(dateString, locale) {
  const dateFormat = getLocaleDateFormat(locale);
  const momentObject = moment(dateString, dateFormat, true);

  if (momentObject.isValid()) {
    console.log('valid');
    return momentObject.toDate();
  }
  console.log('invalid');
  return dateString;
}

/**
 * Formats the given date according to the given locale
 * @param {date} Date The date to be formatted as string
 * @param {string} locale The locale used in the formatting
 */
function format(date, locale) {
  const dateFormat = getLocaleDateFormat(locale);
  const momentObject = moment(date);
  return momentObject.format(dateFormat);
}

/**
 * Example of using Keyboard and custom parsers and formatters
 */
const KeyboardAndLocalization = () => (
  <div>
    <DatePicker
      floatingLabelText="Keyboard & Localization"
      DateTimeFormat={DateTimeFormat}
      okLabel="OK"
      cancelLabel="Annuler"
      locale="en-US"
      keyboardEnabled={true}
      container="inline"
      parseDate={parse}
      formatDate={format}
      hintText={getLocaleDateFormat("en-US")}
    />
  </div>
);

export default KeyboardAndLocalization;
