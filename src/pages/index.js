import React, { Component } from "react";
import Link from "gatsby-link";

import { siteMetadata } from "../../gatsby-config";
import ProfilePic from "../assets/myAvatar.png";

import About from "../components/About";
import Projects from "../components/Project";
import Skills from "../components/Skills";
import Before from "../components/Before";
import Favorite from "../components/Favorite";
import Footer from "../components/Footer";

class IndexPage extends Component {
  render() {
    const projectEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <div style={{ background: "#CEE0E5", paddingTop: "1rem" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexFlow: "row-reverse wrap",
            margin: "auto"
          }}
        >
          <div className="avatar" style={{ flexDirection: "column" }}>
            <img
              style={{
                width: "300px",
                borderStyle: "solid",
                borderColor: "#dfdbe5",
                borderRadius: "50%"
              }}
              src={ProfilePic}
              alt="avatar"
            />

          </div>
          <div style={{ flexDirection: "column", marginLeft: "1.45rem", marginRight: "1.45rem" }}>
            <h1>{siteMetadata.author}</h1>
            <h3>{siteMetadata.description}</h3>
            <br />
            <About />
            <br />
            <Projects projectEdges={projectEdges} />
            <br />
            <Skills />
            <br />
            <Before />
            <br />
            <Favorite />
          </div>
        </div>
        <hr />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Footer />
        </div>
      </div>
    );
  }
}

export const rootQuery = graphql`
  query IndexQuery {
    allMarkdownRemark {
      edges {
        node {
          excerpt
          frontmatter {
            title        
            path
            ProjectLink
            RepositoryLink                
            desc
          }
        }
      }
    }
  }
`;

export default IndexPage;