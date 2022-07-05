import React, { useState } from 'react'
import { graphql, Link } from "gatsby"
import '../styles/articles.css'

const articles = ({ data }) => {
    const results = data.allPrismicBlogPosts.edges

    console.log(results)

    const renderArticlePreviews = results.map(item => {
        let myString = item.node.data.body[0].primary.post_text.text
        let myTime = item.node.data.timestamp.substring(0, 10)

        return (
            <div
                key={item.node.id}
                className="articles-card-preview">
                <h3>{item.node.data.blog_title.text}</h3>
                <p>{myTime}</p>
                <img src={item.node.data.body[1].items[0].image.url}></img>
                <p>{myString.substring(0, 240)}...</p>
                <Link to="">Read More.. </Link>

            </div>
        )

    }
    )


    return (
        <section className="section articles" id="articles">

            <h2>Articles</h2>

            <div className="articles-card-container">
                {renderArticlePreviews}
            </div>

        </section>
    )
}


export const query = graphql`
query  {
    allPrismicBlogPosts {
      edges {
        node {
          id
          data {
            blog_title {
              text
            }
            body {
              ... on PrismicBlogPostsDataBodyImageCaption {
                id
                items {
                  image {
                    alt
                    url
                  }
                }
              }
              ... on PrismicBlogPostsDataBodyText {
                id
                primary {
                  post_text {
                    text
                  }
                }
              }
            }
            timestamp
          }
        }
      }
    }
  }
  
  
`

export default articles