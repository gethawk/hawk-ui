// vendor modules
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import getClassnames from 'classnames';
// css modules
import './index.scss';

/**
 * @example ../README.md
 */
class Sidebar extends Component {
  static propTypes = {
    variant: PropTypes.oneOf(['expanded', 'collapsed']),
    panes: PropTypes.array,
  };
  static defaultProps = {
    variant: 'expanded',
  }

  state = {};

  render() {
    const { variant, panes } = this.props;

    return (
      <div
        className={getClassnames('hawk-sidebar', {
          [`hawk-sidebar--${variant}`]: variant,
        })}
      >
        <div className="hawk-sidebar--container">
          {_.map(panes, (pane) => (
            <div
              key={pane.title}
              className={getClassnames({
                'hawk-sidebar--container-item-section': !pane.isDisabled,
              })}
            >
              {!pane.isDisabled && (
                <div className="title">
                  <i className={pane.icon} />
                  <span>{pane.title}</span>
                </div>
              )}
              <div className="hawk-sidebar--section-menu">
                {_.map(pane.extras, (item) => (
                  <a
                    key={item.title}
                    href={item.link}
                    className="hawk-sidebar--section-menu-link"
                  >
                    <div className="hawk-sidebar--section-menu-item">
                      <span>{item.title}</span>
                      <i className="fas fa-caret-right" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Sidebar;
