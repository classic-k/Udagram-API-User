
export const config = {
  'username': process.env.POSTGRES_USERNAME,
  'password': process.env.POSTGRES_PASSWORD,
  'database': process.env.POSTGRES_DB,
  'host': process.env.POSTGRES_HOST,
  'dialect': process.env.DIALECT,
  'url': process.env.URL,
  'jwt': {
    'secret': process.env.JWT_SECRET,
  },
  'dburi':`postgres://${process.env.POSTGRES_USERNAME}:${process.env.POSTGRES_PASSWORD}@${process.env.POSTGRES_HOST}/udagram`
};
