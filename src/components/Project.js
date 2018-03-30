import React, { Component } from "react";

class Projects extends Component {
  getData() {
    const Data = [];
    this.props.projectEdges.forEach(projectEdge => {
      Data.push({
        title: projectEdge.node.frontmatter.title,
        date: projectEdge.node.frontmatter.date,
        excerpt: projectEdge.node.excerpt,
        ProjectLink: projectEdge.node.frontmatter.ProjectLink,
        RepositoryLink: projectEdge.node.frontmatter.RepositoryLink,
        desc: projectEdge.node.frontmatter.desc
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
            <p>{project.title}</p>
            <ul style={{ listStyle: "none" }}>
              <li>- <a href={project.ProjectLink}>Project Here</a></li>
              <li>- <a href={project.RepositoryLink}>Repo Here</a></li>              
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
