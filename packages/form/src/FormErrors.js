import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

const FormErrors = ({ errors }) => {
  const messages = _.values(errors);
  const topMessage = _.head(messages);

  return (
    <div className="dynamic-form-errors">
      {topMessage}
    </div>
  );
};

FormErrors.propTypes = {
  errors: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

export default FormErrors;
