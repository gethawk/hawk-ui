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
    collapseIndex: PropTypes.number,
    onSelect: PropTypes.func,
  };
  static defaultProps = {
    collapseIndex: null,
  };
  state = {};

  render() {
    const { tableHeader, tableContent, selectedItems, isSelectable, isLoading, renderLoading, collapseIndex, onSelect, renderDataNotFound } = this.props;

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
                          ) : <td key={subIndex}>{item.render(content, index)}</td>
                        )
                      ))}
                    </tr>
                    {_.isEqual(collapseIndex, index) && (
                      !_.isEmpty(_.get(content, 'children.header', [])) ? (
                        <tr className="hawk-table__collapse-tr">
                          <td
                            colSpan={_.size(tableHeader)}
                            className="hawk-table__collapse-td"
                          >
                            <div className="hawk-table__collapse-content">
                              <table className="hawk-table__collapse-table">
                                <thead>
                                  <tr>
                                    {_.map(_.get(content, 'children.header', []), (collapseHContent, collapseHSubIndex) => (
                                      <th key={collapseHSubIndex}>
                                        <span>{_.get(collapseHContent, 'title', '')}</span>
                                      </th>
                                    ))}
                                  </tr>
                                </thead>
                                <tbody>
                                  {_.map(_.get(content, 'children.body', []), (collapseBContent, collapseBSubIndex) => (
                                    <tr key={collapseBSubIndex}>
                                      {_.map(_.get(content, 'children.header', []), (collapseHContent, collapseHSubIndex) => (
                                        !_.isEmpty(collapseHContent.dataIndex) ? (
                                          <td key={collapseHSubIndex}>
                                            {_.isString(collapseHContent.dataIndex) ? (
                                              <span>
                                                {collapseBContent[collapseHContent.dataIndex]}
                                              </span>
                                            ) : (
                                              <div></div>
                                            )}
                                          </td>
                                        ) : <td key={collapseHSubIndex}>{collapseHContent.render(collapseBContent, index)}</td>
                                      ))}
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </td>
                        </tr>
                      ) : (
                        <tr>
                          <td
                            className="hawk-table__not-found"
                            colSpan={isSelectable ? tableHeader.length + 1 : tableHeader.length}
                          >
                            No matching records found
                          </td>
                        </tr>
                      )
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

