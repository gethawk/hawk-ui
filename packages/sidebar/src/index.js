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
    activeKey: PropTypes.string,
  };
  static defaultProps = {
    variant: 'expanded',
  }

  state = {};

  render() {
    const { variant, panes, activeKey } = this.props;

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
                    <div
                      className={getClassnames('hawk-sidebar--section-menu-item', {
                        active: activeKey === item.key,
                      })}
                    >
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
