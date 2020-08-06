// vendor modules
import React, { Component } from 'react';
// react modules
import PropTypes from 'prop-types';
import getClassnames from 'classnames';
import _ from 'lodash';
// css modules
import './index.scss';

/**
 * @example ../README.md
 */
export default class Collapse extends Component {
  static propTypes = {
    headers: PropTypes.array,
    panes: PropTypes.array,
    className: PropTypes.string,
  };

  componentDidMount() {
    const accordianItemHeaders = document.querySelectorAll(
      '.hawk-collapse-item-header',
    );

    accordianItemHeaders.forEach(accordianItemHeader => {
      accordianItemHeader.addEventListener('click', () => {
        const current = document.querySelector('.hawk-collapse-item-header.active');

        if (current && current !== accordianItemHeader) {
          current.classList.toggle('active');
          current.nextElementSibling.style.maxHeight = 0;
        }
        accordianItemHeader.classList.toggle('active');

        const accordianItemBody = accordianItemHeader.nextElementSibling;

        if (accordianItemHeader.classList.contains('active')) {
          accordianItemBody.style.maxHeight = `${accordianItemBody.scrollHeight}px`;
        } else {
          accordianItemBody.style.maxHeight = 0;
        }
      });
    });
  }

  render() {
    const { headers, panes, className } = this.props;

    return (
      <div
        className={getClassnames('hawk-collapse', {
          [className]: _.isString(className),
        })}
      >
        {_.map(headers, (header, index) => (
          <div className="hawk-collapse-item">
            <div className="hawk-collapse-item-header">
              <h4>{header}</h4>
            </div>
            <div className="hawk-collapse-item-body">
              <div className="hawk-collapse-item-body-content">
                <p>{panes[index]}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
