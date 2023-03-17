export const environment = {
  production: true,
  baseurl:'http://0.0.0.0:0000/api/',
  whitelistedDomained :['http://0.0.0.0:0000','0.0.0.0','0.0.0.0:0000'],
  blacklistedRoutes: ['http://0.0.0.0:0000/api/users/account/login'],

  OAUTH: false,
  FIRST_LEVEL_TIMER: 10,
  SECOND_LEVEL_TIMER: 1,
};
