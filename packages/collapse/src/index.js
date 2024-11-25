import React, { Component } from 'react';
import PropTypes from 'prop-types';
import getClassnames from 'classnames';
import _ from 'lodash';
import './index.scss';

/**
 * @example ../README.md
 */
export default class Collapse extends Component {
  static propTypes = {
    headers: PropTypes.array.isRequired,
    panes: PropTypes.array.isRequired,
    className: PropTypes.string,
  };

  componentDidMount() {
    this.setupAccordion();
  }

  componentDidUpdate(prevProps) {
    // If headers or panes change (i.e., if filtered content changes)
    if (prevProps.headers !== this.props.headers || prevProps.panes !== this.props.panes) {
      this.setupAccordion();
    }
  }

  setupAccordion() {
    // Ensure event listeners are added after render
    const accordionItemHeaders = document.querySelectorAll('.hawk-collapse-item-header');

    accordionItemHeaders.forEach((accordionItemHeader) => {
      accordionItemHeader.removeEventListener('click', this.handleAccordionClick);
      accordionItemHeader.addEventListener('click', this.handleAccordionClick);
    });
  }

  handleAccordionClick = (event) => {
    const accordionItemHeader = event.currentTarget;
    const current = document.querySelector('.hawk-collapse-item-header.active');

    // Collapse the previously active item
    if (current && current !== accordionItemHeader) {
      current.classList.remove('active');
      current.nextElementSibling.style.maxHeight = 0;
    }

    // Toggle the clicked item
    accordionItemHeader.classList.toggle('active');

    const accordionItemBody = accordionItemHeader.nextElementSibling;

    // Expand or collapse the clicked item
    if (accordionItemHeader.classList.contains('active')) {
      accordionItemBody.style.maxHeight = `${accordionItemBody.scrollHeight}px`;
    } else {
      accordionItemBody.style.maxHeight = 0;
    }
  };

  render() {
    const { headers, panes, className } = this.props;

    return (
      <div className={getClassnames('hawk-collapse', { [className]: _.isString(className) })}>
        {_.map(headers, (header, index) => (
          <div key={index} className="hawk-collapse-item">
            <div className="hawk-collapse-item-header">
              {header}
            </div>
            <div className="hawk-collapse-item-body">
              <div className="hawk-collapse-item-body-content">
                {panes[index]}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
