// In case you need to implement the FetchAPI
import 'whatwg-fetch';

require('dotenv').config({
  path: '.env.test',
});

jest.mock('./src/helpers/getEnvironments', () => ({
  getEnvironments: () => ({ ...process.env }),
}));
