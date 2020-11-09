import { environment } from '../../src/environments/environment';
var baseUrl = environment.apiEndpoint;

export var obj = {
  commonApi: `${baseUrl}/portal_api/genericApi`,

  diff: `${baseUrl}/portal_api/varianceCalculation`,

  resource: `${baseUrl}/portal_api/userViewAllResource`,

  adoption: `${baseUrl}/portal_api/dailyActivityPercentagePerGroup`,
};
