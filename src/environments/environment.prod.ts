export const environment = {
  production: true,
  test: import.meta.env['NG_APP_PUBLIC_TEST'] || 'test_prod',
};

console.log(import.meta.env)
