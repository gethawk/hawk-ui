// vendor modules
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import getClassnames from 'classnames';
// react modules
import Tooltip from '@hawk-ui/tooltip';
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
        <div
          className={getClassnames('hawk-sidebar--container', {
            [`hawk-sidebar--${variant}-container`]: variant,
          })}
        >
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
                  <Tooltip
                    key={item.title}
                    position="right"
                    content={item.title}
                    isDisabled={variant === 'expanded'}
                  >
                    <a
                      href={item.link}
                      className="hawk-sidebar--section-menu-link"
                    >
                      <div
                        className={getClassnames('hawk-sidebar--section-menu-item', {
                          active: activeKey === item.key,
                        })}
                      >
                        {variant === 'expanded' ? (
                          <Fragment>
                            <span>{item.title}</span>
                            <i className="fas fa-caret-right" />
                          </Fragment>
                        ) : <i className={item.icon} />}
                      </div>
                    </a>
                  </Tooltip>
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
