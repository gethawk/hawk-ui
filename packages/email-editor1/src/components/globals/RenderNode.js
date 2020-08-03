// vendor modules
import React, { Fragment, useEffect, useRef, useCallback } from 'react';
// react modules
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { useNode, useEditor } from '@craftjs/core';

export default function RenderNode({ render }) {
  const { actions, query } = useEditor();
  const {
    id,
    isActive,
    isHover,
    dom,
    name,
    moveable,
    deletable,
    connectors: { drag },
  } = useNode((node) => ({
    isActive: node.events.selected,
    isHover: node.events.hovered,
    dom: node.dom,
    name: node.data.custom.displayName || node.data.displayName,
    moveable: query.node(node.id).isDraggable(),
    deletable: query.node(node.id).isDeletable(),
  }));
  const currentRef = useRef(null);

  useEffect(() => {
    if (dom) {
      if (isActive || isHover) {
        dom.classList.add('component-selected');
      } else {
        dom.classList.remove('component-selected');
      }
    }
  }, [dom, isActive, isHover]);

  // eslint-disable-next-line no-shadow
  const getPos = useCallback((dom = HTMLElement) => {
    const { top, left, bottom } = dom
    ? dom.getBoundingClientRect()
    : { top: 0, left: 0, bottom: 0 };

    return {
      top: `${top > 0 ? top : bottom}px`,
      left: `${left}px`,
    };
  }, []);

  const scroll = useCallback(() => {
    const { current: currentDOM } = currentRef;

    if (!currentDOM) return;
    const { top, left } = getPos(dom);

    currentDOM.style.top = top;
    currentDOM.style.left = left;
  }, [dom]);

  useEffect(() => {
    document
      .querySelector('.emailRender')
      .addEventListener('scroll', scroll);

    return () => {
      document
        .querySelector('.emailRender')
        .removeEventListener('scroll', scroll);
    };
  }, [scroll]);

  return (
    <Fragment>
      {isHover || isActive ? ReactDOM.createPortal(
        <div
          ref={currentRef}
          className="component-selected__options"
          style={{
            left: getPos(dom).left,
            top: getPos(dom).top,
            zIndex: 1,
          }}
        >
          <h2>{name}</h2>
          {moveable ? (
            <div
              ref={drag}
              className="component-selected__options-icon"
            >
              <i className="fa fa-arrows-alt" />
            </div>
          ) : null}
          {deletable ? (
            <div
              onClick={(event) => {
                event.stopPropagation();
                actions.delete(id);
              }}
              className="component-selected__options-icon"
            >
              <i className="fa fa-trash" />
            </div>
          ) : null}
        </div>,
        document.body,
      ) : null}
      {render}
    </Fragment>
  );
}

RenderNode.propTypes = {
  render: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.array,
    PropTypes.object,
  ]),
};
