/* eslint-disable */
export const initDragElement = () => {
  let pos1 = 0;
  let pos2 = 0;
  let pos3 = 0;
  let pos4 = 0;
  const popups = document.getElementsByClassName('popup');
  let elmnt = null;
  let currentZIndex = 100;

  for (let i = 0; i < popups.length; i++) {
    const popup = popups[i];
    const header = getHeader(popup);

    popup.onmousedown = function () {
      this.style.zIndex = `${++currentZIndex}`;
    };

    if (header) {
      header.parentPopup = popup;
      header.onmousedown = dragMouseDown;
    }
  }

  function dragMouseDown(e) {
    elmnt = this.parentPopup;
    elmnt.style.zIndex = `${++currentZIndex}`;

    e = e || window.event;
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    if (!elmnt) {
      return;
    }

    e = e || window.event;
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = `${elmnt.offsetTop - pos2}px`;
    elmnt.style.left = `${elmnt.offsetLeft - pos1}px`;
  }

  function closeDragElement() {
    /* stop moving when mouse button is released: */
    document.onmouseup = null;
    document.onmousemove = null;
  }

  function getHeader(element) {
    const headerItems = element.getElementsByClassName('popup-header');

    if (headerItems.length === 1) {
      return headerItems[0];
    }

    return null;
  }
};
