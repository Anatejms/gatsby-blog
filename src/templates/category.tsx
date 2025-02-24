import React from "react"
import Layout from "../layouts"
import { getAuthor, getCategory } from "../services/config"

type Category = {
  category: string
  pages: {
    node: {
      frontmatter: {
        category: string
        slug: string
        title: string
        date: string
        shortDescription: string
        featuredImage: string
        author: string
      }
      id: string
    }
  }[]
}
export default ({pageContext}: {pageContext: Category}) => {
  const { category, pages } = pageContext
  const categoryConfig = getCategory(category);

  return (
    <Layout>
      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-2">
            <div className="col-md-7 heading-section text-center">
              <h2 className="mb-4">{category}</h2>
              <p>{categoryConfig.description}</p>
            </div>
          </div>
          <div className="row">
	    			<div className="col-lg-8">
              <div className="row">
                {pages.map(({node}) => {
                  console.log('node', node)
                  const {frontmatter, id} = node;
                  const author = getAuthor(frontmatter.author);
                  return (
                    <div className="col-md-12" key={node.id}>
                      <div className="blog-entry">
                        <a href={frontmatter.slug} className="img" style={{backgroundImage: `url('${frontmatter.featuredImage}')`}}></a>
                        <div className="text pt-2 mt-3">
                          <span className="category mb-1 d-block"><a href={`/category/${frontmatter.category}`}>{frontmatter.category}</a></span>
                          <h3 className="mb-4"><a href={frontmatter.slug}>{frontmatter.title}</a></h3>
                          <p className="mb-4">{frontmatter.shortDescription}</p>
                          <div className="author mb-4 d-flex align-items-center">
                            <a href={frontmatter.slug} className="img" style={{backgroundImage: `url('${author.image}')`}}></a>
                            <div className="ml-3 info">
                              <span>Written by</span>
                              <h3><a href="#">{author.name}</a>, <span>{new Date(frontmatter.date).toLocaleDateString()}</span></h3>
                            </div>
                          </div>
                          <div className="meta-wrap d-md-flex align-items-center">
                            <div className="half">
                              <p><a href={frontmatter.slug} className="btn btn-primary p-3 px-xl-4 py-xl-3">Continue Reading</a></p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}