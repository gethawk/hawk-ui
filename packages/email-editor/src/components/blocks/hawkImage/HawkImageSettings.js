// vendor modules
import React from 'react';
// react modules
import { useNode } from '@craftjs/core';
import Label from '@hawk-ui/label';
import RangeSlider from '@hawk-ui/range-slider';
import ColorPicker from '@hawk-ui/color-picker';
import BorderPicker from '@hawk-ui/border-picker';

export default function HawkImageSettings() {
  const { actions: { setProp } } = useNode((node) => ({
    props: node.data.props,
  }));

  return (
    <div className="image-editor-setting">
      <div className="editor-form-section">
        <Label
          title="Background Color"
        />
        <ColorPicker
          defaultColor="6997DB"
          onSave={(event) => {
            console.log('query event', event);
          }}
        />
      </div>
      <div className="editor-form-section">
        <div className="editor-form-section__row">
          <div className="editor-form-section__column">
            <Label
              title="Border Color"
            />
            <ColorPicker
              defaultColor="6997DB"
              onSave={(event) => {
                console.log('query event', event);
              }}
            />
          </div>
          <div className="editor-form-section__column">
            <Label
              title="Border Style"
            />
            <BorderPicker
              type="solid"
              onSelect={(event) => {
                console.log('query event', event);
              }}
            />
          </div>
        </div>
      </div>
      <div className="editor-form-section">
        <Label
          title="Border Width"
        />
        <RangeSlider
          value="50"
        />
      </div>
      <div className="editor-form-section">
        <Label
          title="Horizontal Padding"
        />
        <RangeSlider
          value="50"
        />
      </div>
      <div className="editor-form-section">
        <Label
          title="Vertical Padding"
        />
        <RangeSlider
          value="50"
        />
      </div>
    </div>
  );
}
