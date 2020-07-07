// vendor modules
import React from 'react';
// react modules
import PropTypes from 'prop-types';
import _ from 'lodash';
import getClassnames from 'classnames';
// utils modules
import { layoutOptions } from '../utils/layouts';
// css modules
import '../layouts.scss';

export default function Layouts(props) {
  const { selected, onSelectLayout } = props;

  return (
    <div className="hawk-email-editor-layouts">
      {_.map(layoutOptions, (item, index) => (
        <button
          key={index}
          className={getClassnames('card-block', {
            active: _.isEqual(selected, index + 1),
          })}
          onClick={() => {
            onSelectLayout(index + 1);
          }}
        >
          <div
            dangerouslySetInnerHTML={{ __html: item.layouts }}
          />
        </button>
      ))}
    </div>
  );
}

Layouts.propTypes = {
  selected: PropTypes.number,
  onSelectLayout: PropTypes.func,
};
