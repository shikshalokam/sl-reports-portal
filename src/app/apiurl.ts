import { environment } from '../../src/environments/environment';
var baseUrl = environment.apiEndpoint;

export var obj = {

  app_login: `${baseUrl}/unique_active_users/uniqueActiveUsers`,

  app_percentage: `${baseUrl}/daily_average_growth/dailyAverageGrowth`,

  role_count: `${baseUrl}/role_count/rolecount`,

  map_data: `${baseUrl}/mapdata_resources/mapDataResources`,

  map_loginpercentage: `${baseUrl}/login_percentage/loginPercentage`,

  averagetimespent: `${baseUrl}/average_timespent/averageTimeSpent`,

  topscorer: `${baseUrl}/topscore_quiz/topScoreQuiz`,

  top5basedratedcontent: `${baseUrl}/average_rating_content/averageRatingContent`,

  lastupdated: `${baseUrl}/last_updated_date/lastUpdatedDate`,


  app_count: `${baseUrl}/app_count/appCount`,

  userneverloggedin: `${baseUrl}/user_never_loggedin/userNeverLoggedIn`,

  login_trend: `${baseUrl}/login_trend/loginTrend`,


  'program-effectivness': `${baseUrl}/count_content_ratings_with_avg_ratings/countContentRating`,

  top5basedratedresource: `${baseUrl}/top_five_content_ratings/topFiveContentRatings`,

  topscoreinquiz: `${baseUrl}/learning_topscore_quiz/scorePercentage`,

  learningquiz: `${baseUrl}/learning_group_participation_percentage/participationPercentage`,

  diff: `${baseUrl}/calculate_variance/variance`,

  view_resource: `${baseUrl}/adoption_content/adoption_content`,

  resource: `${baseUrl}/multiple_resource/multiResource`,

  adoption: `${baseUrl}/multi_selection/multiSelection`,
};
