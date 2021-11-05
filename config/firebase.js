require('dotenv').config();

module.exports = {
  api_key: process.env.API_KEY,
  auth_domain: process.env.AUTH_DOMAIN,
  project_id: process.env.PROJECT_ID,
  storage_bucket: process.env.STORAGE_BUCKET,
  sender_id: process.env.SENDER_ID,
  app_id: process.env.APP_ID,
};
