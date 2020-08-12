// vendor modules
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
// react modules
import Image from '@hawk-ui/image';
// css modules
import './index.scss';

let slideIndex = 0;

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
    isAnimated: PropTypes.bool,
  };
  static defaultProps = {
    isAnimated: false,
  };
  state = {};

  componentDidMount() {
    const { isAnimated } = this.props;

    if (isAnimated) {
      this.animatedSlides();
    } else {
      this.showSlides(slideIndex + 1);
    }
  }

  animatedSlides = () => {
    const { id } = this.props;
    let i;
    const slides = document.getElementsByClassName(`slider${id}`);

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    slides[slideIndex - 1].style.display = 'block';
    setTimeout(() => {
      this.animatedSlides();
    }, 2000);
  };

  showSlides = (n) => {
    const { id } = this.props;
    let i;
    const slides = document.getElementsByClassName(`slider${id}`);
    const dots = document.getElementsByClassName(`dot${id}`);

    if (n > slides.length || n === 1) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' active', '');
    }
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].className += ' active';
  };

  plusSlides = (n) => {
    this.showSlides(slideIndex += n);
  };

  currentSlide = (n) => {
    this.showSlides(slideIndex = n);
  };

  render() {
    const { id, slides, isAnimated } = this.props;

    return (
      <div className="hawk-carousel">
        <div className="hawk-carousel__container">
          {_.map(slides, (slide, index) => (
            <div
              className={`hawk-carousel__slides slider${id}`}

              key={index}
            >
              <Image
                src={_.get(slide, 'image', '')}
              />
              <div className="hawk-carousel__slides-caption">
                {_.get(slide, 'caption', '')}
              </div>
            </div>
          ))}

          {!isAnimated && (
            <Fragment>
              <i
                className="fas fa-angle-left"
                onClick={() => {
                  this.plusSlides(-1);
                }}
              />
              <i
                className="fas fa-angle-right"
                onClick={() => {
                  this.plusSlides(1);
                }}
              />
            </Fragment>
          )}
        </div>
        {!isAnimated && (
          <div className="hawk-carousel__dots">
            {_.map(slides, (slide, index) => (
              <span
                key={index}
                className={`hawk-carousel__dot dot${id}`}
                onClick={() => {
                  this.currentSlide(index + 1);
                }}
              />
            ))}
          </div>
        )}
      </div>
    );
  }
}
