import { defaultOptions, getEnvVariable } from 'https://raw.githubusercontent.com/mohsenny/test-automation-framework/main/dist/src/perfomrance/index.js';
                                              
export const customOptions = Object.assign({}, defaultOptions, {
  host: getEnvVariable("MY_HOSTNAME"),
  runType: getEnvVariable("RUN_TYPE"),
  runType: getEnvVariable("RUN_TYPE"),
  account: Object.assign({}, defaultOptions.account, {
    email: "custom@example.com",
  }),
  // Add or override other settings specific to the consumer
});