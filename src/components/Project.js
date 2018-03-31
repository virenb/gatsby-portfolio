import React, { Component } from "react";

class Projects extends Component {
  getData() {
    const Data = [];
    this.props.projectEdges.forEach(projectEdge => {
      Data.push({
        title: projectEdge.node.frontmatter.title,
        ProjectLink: projectEdge.node.frontmatter.ProjectLink,
        RepositoryLink: projectEdge.node.frontmatter.RepositoryLink,
        desc: projectEdge.node.frontmatter.desc,
        excerpt: projectEdge.node.excerpt,
      });
    });
    return Data;
  }

  render() {
    const Data = this.getData();

    return (
      <div>
        <h2>🚀 Projects/Apps</h2>
        {Data.map(project => (
          <div key={project.title} style={{ padding: ".5rem" }}>
            <p><a href={project.ProjectLink} style={{ textDecoration: "none" }}>{project.title}</a></p>
            <ul style={{ listStyle: "none" }}>
            <li>- <a href={project.RepositoryLink}>GitHub Repository</a></li>
            <li>- {project.desc}</li>      
            <li>- {project.excerpt}</li>                 
            </ul>
          </div>
        ))}
      </div>
    );
  }
}

export default Projects;
