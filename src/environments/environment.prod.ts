import 'dotenv/config';

export const environment = {
  production: true,
  test: process.env['TEST'] || 'test_prod',
};
