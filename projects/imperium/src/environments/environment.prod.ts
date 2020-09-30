declare var require: any;

export const environment = {
	version: require("./../../../../package.json").version,
  production: true
};
