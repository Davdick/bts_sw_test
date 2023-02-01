module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{css,jpg,jfif,png,html,js,json}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};