module.exports = [
  "strapi::errors",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https:"],
          "img-src": [
            "'self'",
            "data:",
            "blob:",
            "dl.airtable.com",
            'market-assets.strapi.io',
            "strapi-backend-manuel.s3.us-east-2.amazonaws.com", 
          ],
          "media-src": [
            "'self'",
            "data:",
            "blob:",
            "dl.airtable.com",
            'market-assets.strapi.io',
            "strapi-backend-manuel.s3.us-east-2.amazonaws.com", 
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  "strapi::body",
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];