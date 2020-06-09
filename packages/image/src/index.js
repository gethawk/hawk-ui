// vendor modules
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import getClassnames from 'classnames';
import _ from 'lodash';
// css modules
import './index.scss';

/**
 * @example ../README.md
 */
export default class Image extends Component {
  static propTypes = {
    src: PropTypes.string,
    fallbackSrc: PropTypes.string,
    alt: PropTypes.string,
    role: PropTypes.string,
    title: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.node,
  };

  state = {
    src: this.props.src || this.props.fallbackSrc,
  };

  componentWillReceiveProps(nextProps, prevProps) {
    if (!_.isEqual(nextProps.src, prevProps.src)) {
      this.setState({
        src: nextProps.src,
      });
    }
  }

  handleLoadError = () => {
    this.setState({
      src: this.props.fallbackSrc,
    });
  };

  render() {
    const { src } = this.state;
    const { alt, role, title, className, children } = this.props;

    return src ? (
      <img
        src={src}
        onError={this.handleLoadError}
        alt={alt}
        role={role}
        title={title}
        className={getClassnames('hawk-image', {
          [className]: !_.isEmpty(className),
        })}
      />
    ) : (
      <span
        className={getClassnames('hawk-image__fail-content', {
          [className]: !_.isEmpty(className),
        })}
      >
        {children}
      </span>
    );
  }
}
