import React from 'react'
import Link from 'gatsby-link'

const IndexPage = ({data}) => (
  <div>
    <h1>{data.contentfulMydata.title}</h1>
    <p>{data.contentfulMydata.description.description}</p>
    <img src={data.contentfulMydata.image.resolutions.src} />
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage

export const query = graphql`
	query PageQuery {
		contentfulMydata {
	    title
	    description {
	      id
	      description
	    }
	    image {
	      id
	      resolutions(width:300, height:200, resizingBehavior:THUMB){
	        src
	      }
	    }
	  }
	}
`