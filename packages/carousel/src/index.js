// vendor modules
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
// react modules
import Button from '@hawk-ui/button';
// css modules
import './index.scss';

/**
 * @example ../README.md
 */
export default class Carousel extends Component {
  static propTypes = {
    slides: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.object,
    ]),
    id: PropTypes.string,
    options: PropTypes.bool,
  };
  static defaultProps = {
    id: 'carousel',
  }
  state = {
    slideOptions: {
      start: 0,
      end: _.size(this.props.slides),
    },
  };

  prev = () => {
    const { id, options } = this.props;
    const width = _.get(options, 'width');
    let num = 0;
    const slider = document.getElementById(`slider-${id}`);
    const left = slider.style.transform.split('px')[0].split('(')[1];

    if (left) {
      num = Number(left) + Number(width);
    } else {
      num = Number(width);
    }
    slider.style.transform = `translateX(${num}px)`;
    slider.style.transition = 'all 0.5s';
    this.setState((prevState) => {
      const slideOptions = { ...prevState.slideOptions };

      slideOptions.start -= 1;
      slideOptions.end += 1;

      return { slideOptions };
    });
  };

  next = () => {
    const { id, options } = this.props;
    const width = -_.get(options, 'width');
    let num = 0;
    const slider = document.getElementById(`slider-${id}`);
    const left = slider.style.transform.split('px')[0].split('(')[1];

    if (left) {
      num = Number(left) + Number(width);
    } else {
      num = Number(width);
    }
    slider.style.transform = `translateX(${num}px)`;
    slider.style.transition = 'all 0.5s';
    this.setState((prevState) => {
      const slideOptions = { ...prevState.slideOptions };

      slideOptions.start += 1;
      slideOptions.end -= 1;

      return { slideOptions };
    });
  };

  render() {
    const { slides, id, options } = this.props;
    const { slideOptions } = this.state;

    return (
      <div className="hawk-carousel">
        <div
          className="hawk-carousel__container"
          id={`slider-${id}`}
        >
          {_.map(slides, (item) => (
            item
          ))}
        </div>
        {slideOptions.start >= 1 && (
          <Button
            type="button"
            variant="outlined"
            icon="fas fa-chevron-left"
            className="hawk-carousel__prev-next previous"
            onClick={() => { this.prev(); }}
          />
        )}
        {!_.isEqual(slideOptions.end, _.get(options, 'display')) && (
          <Button
            type="button"
            variant="outlined"
            icon="fas fa-chevron-right"
            className="hawk-carousel__prev-next next"
            onClick={() => { this.next(); }}
          />
        )}
      </div>
    );
  }
}
