module.exports = {
	globDirectory: '_site/',
	globPatterns: [
		'**/*.{html,less,css,json,eot,svg,ttf,woff,woff2,js,jpg,png,ico,webp,xml,md,txt,gemspec}'
	],
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	],
	swDest: '_site/sw.js'
};