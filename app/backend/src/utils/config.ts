import 'dotenv/config';

const config = {
  port: process.env.PORT || 3000,
  JWT_SECRET: process.env.JWT_SECRET,
};

export default config;
