import React from 'react';
import { storiesOf } from '@kadira/storybook';
import SelectFieldMenu from './SelectFieldMenu';
import Theme from '@ox2/theme-wrapper/Theme/Theme';
import MenuItem from 'material-ui/MenuItem';

const input = {
  value: 'my value',
  onChange: (value) => console.log('🍇', value), // eslint-disable-line no-console
};

const meta = {
  touched: false,
  error: '',
};

const metaError = {
  touched: true,
  error: 'invalid something',
};

storiesOf('SelectFieldMenu', module)
  .addDecorator((getStory) => (
    <Theme>
      <div style={{width: '320px', padding: '20px'}}>
        { getStory() }
      </div>
    </Theme>
  ))
  .add('default', () => (
    <SelectFieldMenu input={input} label={'My label'} meta={meta}>
      <MenuItem primaryText="" style={{ WebkitAppearance: 'initial'}} value={''} />
      <MenuItem primaryText="Red" style={{ WebkitAppearance: 'initial'}} value={'#ff0000'} />
      <MenuItem primaryText="Green" style={{ WebkitAppearance: 'initial'}} value={'#00ff00'} />
      <MenuItem primaryText="Blue" style={{ WebkitAppearance: 'initial'}} value={'#0000ff'} />
    </SelectFieldMenu>
  ))
  .add('with error', () => (
    <SelectFieldMenu input={input} label={'My label'} meta={metaError}>
      <MenuItem primaryText="" style={{ WebkitAppearance: 'initial'}} value={''} />
      <MenuItem primaryText="Red" style={{ WebkitAppearance: 'initial'}} value={'#ff0000'} />
      <MenuItem primaryText="Green" style={{ WebkitAppearance: 'initial'}} value={'#00ff00'} />
      <MenuItem primaryText="Blue" style={{ WebkitAppearance: 'initial'}} value={'#0000ff'} />
    </SelectFieldMenu>
  ));
