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
    header: PropTypes.object,
    panes: PropTypes.array,
    footer: PropTypes.object,
    activeKey: PropTypes.string,
    onClick: PropTypes.func,
  };
  static defaultProps = {
    variant: 'expanded',
  }

  state = {};

  render() {
    const { variant, header, panes, footer, activeKey, onClick } = this.props;

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
          {header ? (
            <div
              className={getClassnames({
                [`hawk-sidebar--${variant}-header-title`]: header.title,
                [`hawk-sidebar--${variant}-header-element`]: header.element,
              })}
            >
              {header.title ? header.title : header.element}
            </div>
          ) : null}
          <div className="hawk-sidebar--container-pane">
            <div>
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
                          onClick={() => { onClick(item); }}
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
                        {variant === 'expanded' && item.extras && _.isEqual(item.key, activeKey) ? (
                          <div className="hawk-sidebar--section-submenu">
                            {_.map(item.extras, (subItem) => (
                              <div
                                className={getClassnames('hawk-sidebar--section-submenu-link', {
                                  active: activeKey === subItem.key,
                                })}
                              >
                                <a
                                  href={subItem.link}
                                  onClick={() => { onClick(subItem); }}
                                >
                                  {subItem.title}
                                </a>
                              </div>
                            ))}
                          </div>
                        ) : null}
                      </Tooltip>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            {footer ? (
              <div
                className={getClassnames({
                  [`hawk-sidebar--${variant}-footer-title`]: footer.title,
                  [`hawk-sidebar--${variant}-footer-element`]: footer.element,
                })}
              >
                {footer.title ? footer.title : footer.element}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
