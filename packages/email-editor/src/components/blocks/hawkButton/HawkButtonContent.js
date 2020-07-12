// vendor modules
import React from 'react';
// react modules
import Label from '@hawk-ui/label';
import Input from '@hawk-ui/input';
import RangeSlider from '@hawk-ui/range-slider';
import ColorPicker from '@hawk-ui/color-picker';
import BorderPicker from '@hawk-ui/border-picker';

export default function HawkButtonContent() {
  return (
    <div className="button-editor-content">
      <div className="editor-form-section">
        <Input
          type="text"
          label="Button Text"
        />
      </div>
      <div className="editor-form-section">
        <Input
          type="text"
          label="Link URL"
        />
      </div>
      <div className="editor-form-section">
        <Label
          title="Button Color"
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
          title="Alignment"
        />
        <div>A</div>
      </div>
      <div className="editor-form-section">
        <Label
          title="Horizontal Button Padding"
        />
        <RangeSlider
          value="50"
        />
      </div>
      <div className="editor-form-section">
        <Label
          title="Vertical Button Padding"
        />
        <RangeSlider
          value="50"
        />
      </div>
      <div className="editor-form-section">
        <Label
          title="Corner Radius"
        />
        <RangeSlider
          value="50"
        />
      </div>
    </div>
  );
}
