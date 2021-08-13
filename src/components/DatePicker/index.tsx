import DayPickerInput from 'react-day-picker/DayPickerInput';
import { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';

import dateFnsFormat from 'date-fns/format';
import dateFnsParse from 'date-fns/parse';

import PropTypes from 'prop-types';

function CustomOverlay({ classNames, selectedDay, children, ...props }: any) {
  return (
    <div
      className={classNames.overlayWrapper}
      style={{ marginLeft: -125 }}
      {...props}
    >
      <div className={classNames.overlay}>
        <p>
          {selectedDay
            ? `You picked: ${selectedDay.toLocaleDateString()}`
            : 'Please pick a day'}
        </p>
        {children}
      </div>
    </div>
  );
}

CustomOverlay.propTypes = {
  classNames: PropTypes.object.isRequired,
  selectedDay: PropTypes.instanceOf(Date),
  children: PropTypes.node.isRequired,
};

function parseDate(str: string, format: string) {
  const parsed = dateFnsParse(str, format, new Date());
  if (DateUtils.isDate(parsed)) {
    return parsed;
  }
  return;
}

function formatDate(date: Date, format: string) {
  return dateFnsFormat(date, format);
}

export function DatePicker() {
  const FORMAT = 'dd/MM/yyyy';

  return (
    <DayPickerInput
      overlayComponent={CustomOverlay}
      formatDate={formatDate}
      format={FORMAT}
      parseDate={parseDate}
      placeholder={`${dateFnsFormat(new Date(), FORMAT)}`}
      keepFocus={false}
    />
  );
}
