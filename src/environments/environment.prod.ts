declare const apiKey: string;

export const environment = {
  production: true,
  test: import.meta.env['TEST'] || 'test_prod',
};
