module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '1e61b3d583ef51afe815ce674361c048'),
  },
});
