import { configure } from '@kadira/storybook';
import { setOptions } from '@kadira/storybook-addon-options';
import '@ox2/css-font-roboto';
import '@ox2/css-font-roboto-condensed';
import injectTapEventPlugin from 'react-tap-event-plugin';

const req = require.context('../src/', true, /.story\.js$/);

function loadStories() {
  req.keys().forEach(req);
}

// Custom storybook options
setOptions({
  name: 'form-material',
});

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

configure(loadStories, module);
