module.exports = {
  siteMetadata: {
    title: 'Test',
  },
  plugins: [
  	'gatsby-plugin-react-helmet',
	  	{
	    resolve: `gatsby-source-contentful`,
	    options: {
	      spaceId: `m6gv0asl720l`,
	      accessToken: `aa6fcbc07a5339482bdd0e1a7a5f460d8b75a9f0d21f4faf884195bcd655b38b`,
	    },
	  }],
}
