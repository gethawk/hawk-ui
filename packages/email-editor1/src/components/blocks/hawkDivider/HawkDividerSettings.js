// vendor modules
import React from 'react';
// react modules
import { useNode } from '@craftjs/core';
import Label from '@hawk-ui/label';
import RangeSlider from '@hawk-ui/range-slider';
import ColorPicker from '@hawk-ui/color-picker';
import BorderPicker from '@hawk-ui/border-picker';

export default function HawkDividerSettings() {
  const { actions: { setProp } } = useNode((node) => ({
    props: node.data.props,
  }));

  return (
    <div className="divider-editor-setting">
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
        <Label
          title="Margin Top"
        />
        <RangeSlider
          value="50"
        />
      </div>
      <div className="editor-form-section">
        <Label
          title="Margin Bottom"
        />
        <RangeSlider
          value="50"
        />
      </div>
      <div className="editor-form-section">
        <div className="editor-form-section__row">
          <div className="editor-form-section__column">
            <Label
              title="Line Color"
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
              title="Line Style"
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
          title="Line Width"
        />
        <RangeSlider
          value="50"
        />
      </div>
    </div>
  );
}
