// vendor modules
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _, { transform } from 'lodash';
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
    variant: PropTypes.oneOf(['contained', 'card']),
    slides: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.object,
    ]),
    id: PropTypes.string,
    options: PropTypes.bool,
  };
  static defaultProps = {
    id: 'carousel',
    variant: 'contained',
  }
  state = {
    slideOptions: {
      start: 0,
      end: _.size(this.props.slides),
    },
  };

  onHandleClick = ({ type, navigation = null }) => {
    const { id, options, variant } = this.props;
    const { slideOptions } = this.state;

    console.log('query navigation', navigation, slideOptions.start);
    const width = _.isEqual(type, 'previous') ? _.get(options, 'width') : -_.get(options, 'width');
    let num = 0;
    const slider = document.getElementById(`slider-${id}`);
    const left = slider.style.transform.split(_.isEqual(variant, 'contained') ? '%' : 'px')[0].split('(')[1];

    console.log('query left', left);
    if (left) {
      num = Number(left) + Number(width);
    } else {
      num = Number(width);
    }
    slider.style.transform = `translateX(${num}${_.isEqual(variant, 'contained') ? '%' : 'px'})`;
    slider.style.transition = 'all 0.5s';
    this.setState((prevState) => {
      const slideOptions = { ...prevState.slideOptions };

      slideOptions.start = _.isEqual(type, 'previous') ? slideOptions.start - 1 : slideOptions.start + 1;
      slideOptions.end = _.isEqual(type, 'previous') ? slideOptions.end + 1 : slideOptions.end - 1;

      return { slideOptions };
    });
  };

  render() {
    const { slides, id, options, variant } = this.props;
    const { slideOptions } = this.state;

    return (
      <div className="hawk-carousel">
        <div
          className="hawk-carousel__container"
          id={`slider-${id}`}
          style={{
            transform: `translateX(0${_.isEqual(variant, 'contained') ? '%' : 'px'})`,
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
                onClick={() => { this.onHandleClick({ navigation: index }); }}
              />
            ))}
          </div>
        )}
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
      </div>
    );
  }
}
