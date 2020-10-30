import { environment } from '../../src/environments/environment';
var baseUrl = environment.apiEndpoint;

export var obj = {

  commonApi: `${baseUrl}/mantra4changeApi/genericApi`,

  diff: `${baseUrl}/mantra4changeApi/percentageVariance`,

  resource: `${baseUrl}/mantra4changeApi/multiResource`,

  adoption: `${baseUrl}/mantra4changeApi/multiSelection`,
};
