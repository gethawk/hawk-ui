// vendor modules
import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
// React modules
import _ from 'lodash';
import Checkbox from '@hawk-ui/checkbox';
import Loader from '@hawk-ui/loader';

export default class Body extends Component {
  static propTypes = {
    tableHeader: PropTypes.array,
    tableContent: PropTypes.array,
    selectedItems: PropTypes.array,
    isSelectable: PropTypes.bool,
    isLoading: PropTypes.bool,
    renderLoading: PropTypes.element,
    renderDataNotFound: PropTypes.func,
    onSelect: PropTypes.func,
  };
  state = {};

  render() {
    const { tableHeader, tableContent, selectedItems, isSelectable, isLoading, renderLoading, onSelect, renderDataNotFound } = this.props;

    return (
      <tbody>
        {isLoading ? (
          <tr>
            <td
              colSpan={isSelectable ? tableHeader.length + 1 : tableHeader.length}
            >
              <div className="hawk-table__loader">
                {renderLoading ? (
                  <Fragment>
                    {renderLoading}
                  </Fragment>
                ) : (
                  <Loader
                    type="jelly"
                  />
                )}
              </div>
            </td>
          </tr>
        ) : (
          <Fragment>
            {!_.isEmpty(tableContent) ? (
              <Fragment>
                {_.map(tableContent, (content, index) => (
                  <Fragment>
                    <tr
                      key={index}
                      className={_.includes(selectedItems, content.id) ? 'active' : 'inactive'}
                    >
                      {isSelectable && (
                        <td>
                          <Checkbox
                            isChecked={_.includes(selectedItems, content.id)}
                            onChange={() => { onSelect(content.id); }}
                          />
                        </td>
                      )}
                      {_.map(tableHeader, (item, subIndex) => (
                        !_.isEmpty(item) && (
                          !_.isEmpty(item.dataIndex) ? (
                            <td key={subIndex}>
                              {_.isString(item.dataIndex) ? (
                                <span>
                                  {content[item.dataIndex]}
                                </span>
                              ) : (
                                <div
                                  className="hawk-table__content"
                                >
                                  {_.map(item.dataIndex, (value, tdIndex) => (
                                    (!item.dataRender) ? (
                                      <div key={tdIndex}>{content[value]}</div>
                                    ) : (
                                      <Fragment>
                                        {_.isEmpty(item.renderItem(content)[tdIndex]) ? (
                                          <div key={tdIndex}>{content[value]}</div>
                                        ) : (
                                          <div key={tdIndex}>{item.renderItem(content)[tdIndex]}</div>
                                        )}
                                      </Fragment>
                                    )
                                  ))}
                                </div>
                              )}
                            </td>
                          ) : <td key={subIndex}>{item.render(content)}</td>
                        )
                      ))}
                    </tr>
                    {_.get(content, 'expandable') && (
                      <Fragment>
                        {_.map(content.expandable, (expandItem, subIndex) => (
                          <tr
                            key={subIndex}
                            className="active"
                          >
                            {_.map(tableHeader, (item, childIndex) => (
                              <td key={childIndex}>
                                {expandItem[item.dataIndex]}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </Fragment>
                    )}
                  </Fragment>
                ))}
              </Fragment>
            ) : (
              <tr>
                <td
                  className="hawk-table__not-found"
                  colSpan={isSelectable ? tableHeader.length + 1 : tableHeader.length}
                >
                  {renderDataNotFound}
                </td>
              </tr>
            )}
          </Fragment>
        )}
      </tbody>
    );
  }
}

