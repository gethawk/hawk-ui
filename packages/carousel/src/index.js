// vendor modules
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import getClassnames from 'classnames';
// react modules
import Button from '@hawk-ui/button';
// css modules
import './index.scss';

/**
 * @example ../README.md
 */
export default class Carousel extends Component {
  static propTypes = {
    variant: PropTypes.oneOf(['contained', 'card', 'poster']),
    layout: PropTypes.oneOf(['horizontalTop', 'horizontalBottom']),
    slides: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.object,
    ]),
    header: PropTypes.array,
    id: PropTypes.string,
    options: PropTypes.bool,
  };
  static defaultProps = {
    id: 'carousel',
    variant: 'contained',
    layout: 'horizontalTop',
  }
  state = {
    slideOptions: {
      start: 0,
      end: _.size(this.props.slides),
    },
  };

  onHandleClick = ({ type = 'options', index = 0 }) => {
    const { id, options, variant, slides } = this.props;
    const width = _.isEqual(type, 'options')
      ? -100 * index
      : _.isEqual(type, 'previous')
        ? _.get(options, 'width')
        : -_.get(options, 'width');
    let num = 0;
    const slider = document.getElementById(`slider-${id}`);
    const left = slider.style.transform.split(_.includes(['contained', 'poster'], variant) ? '%' : 'px')[0].split('(')[1];

    if (left) {
      num = _.isEqual(type, 'options')
        ? Number(width)
        : Number(left) + Number(width);
    } else {
      num = Number(width);
    }

    slider.style.transform = `translateX(${num}${_.includes(['contained', 'poster'], variant) ? '%' : 'px'})`;
    slider.style.transition = 'all 0.5s';
    this.setState((prevState) => {
      const slideOptions = { ...prevState.slideOptions };

      slideOptions.start = _.isEqual(type, 'options')
        ? index
        : _.isEqual(type, 'previous')
          ? slideOptions.start - 1
          : slideOptions.start + 1;
      slideOptions.end = _.isEqual(type, 'options')
        ? _.size(slides) - index
        : _.isEqual(type, 'previous')
          ? slideOptions.end + 1
          : slideOptions.end - 1;

      return { slideOptions };
    });
  };

  render() {
    const { slides, id, options, variant, header, layout } = this.props;
    const { slideOptions } = this.state;

    return (
      <div
        className={getClassnames('hawk-carousel', {
          [`hawk-carousel__${layout}`]: _.isString(layout),
        })}
      >
        <div
          className="hawk-carousel__container"
          id={`slider-${id}`}
          style={{
            transform: `translateX(0${_.includes(['contained', 'poster'], variant) ? '%' : 'px'})`,
            transition: 'all 0.5s ease 0s',
          }}
        >
          {_.map(slides, (item) => (
            item
          ))}
        </div>
        {_.isEqual(variant, 'contained') && (
          <div className="hawk-carousel__navigation">
            {_.map(slides, (item, index) => (
              <span
                key={index}
                className={getClassnames('hawk-carousel__navigation-dot', {
                  active: _.isEqual(slideOptions.start, index),
                })}
                onClick={() => { this.onHandleClick({ index }); }}
              />
            ))}
          </div>
        )}
        {_.isEqual(variant, 'poster') ? (
          <div className="hawk-carousel__thumbnail">
            {_.map(header, (item, index) => (
              <div
                key={index}
                className={getClassnames('hawk-carousel__thumbnail-item', {
                  active: _.isEqual(slideOptions.start, index),
                })}
                onClick={() => { this.onHandleClick({ index }); }}
              >
                <img
                  src={item}
                />
              </div>
            ))}
          </div>
        ) : (
          <Fragment>
            {slideOptions.start >= 1 && (
              <Button
                type="button"
                variant="outlined"
                icon="fas fa-chevron-left"
                className="hawk-carousel__prev-next previous"
                onClick={() => { this.onHandleClick({ type: 'previous' }); }}
              />
            )}
            {!_.isEqual(slideOptions.end, _.get(options, 'display')) && (
              <Button
                type="button"
                variant="outlined"
                icon="fas fa-chevron-right"
                className="hawk-carousel__prev-next next"
                onClick={() => { this.onHandleClick({ type: 'next' }); }}
              />
            )}
          </Fragment>
        )}
      </div>
    );
  }
}
