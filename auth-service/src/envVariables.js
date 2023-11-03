const envVariables = {
  // DB configurations
  DB_USER: process.env.DB_USER|| 'cjlrvhfsdfllmd' || "naibnlzmvvhqmr",
  DB_PASSWORD:process.env.DB_PASSWORD|| '8e2e4c7256039c5fdc229c5c7c0958a03da96064419a03e538bfb5b3c33e4df3' || "0ac29de357517ad18581f18fbb8fe1c3539ee142c427933fc81fcf0f5f002127",
  DB_HOST: process.env.DB_HOST|| 'ec2-54-83-192-245.compute-1.amazonaws.com' || "ec2-54-221-215-228.compute-1.amazonaws.com",
  DB_NAME: process.env.DB_NAME|| 'd5tatmsgkrarn3' || "d4dif7madvk5a4",
  DB_SSL: process.env.DB_SSL || true,
  DB_PORT: process.env.DB_PORT || 5432,
  DB_MAX_POOL_SIZE: process.env.DB_MAX_POOL_SIZE || "5",
  //server configurations
  SERVER_PORT: process.env.SERVER_PORT || "8080",
  PORT: 8080,
	BODY_LIMIT: "100kb",
	CROS_HEADERS: ["Link"]
};
export default envVariables;
