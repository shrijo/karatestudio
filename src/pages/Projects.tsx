import { Link } from "react-router-dom";

const projects = [
  { id: "0", name: "asdf", span: "span 2", link: "projects" },
  { id: "1", name: "ölkj", span: "span 1", link: "websites" },
  { id: "2", name: "asdf", span: "span 2", link: "projects" },
  { id: "3", name: "ölkj", span: "span 1", link: "websites" },
  { id: "4", name: "asdf", span: "span 2", link: "projects" },
  { id: "5", name: "ölkj", span: "span 1", link: "websites" },
];

function Projects() {
  return (
    <div className="content">
      <div className="grid">
        {projects.map((project) => (
          <Link
            key={project.id}
            className="grid-tile"
            style={{ gridColumn: project.span }}
            to={"/projects/${project.id}"}
          >
            <h3>{project.name}</h3>
            <div className="grid-tile-image"></div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Projects;
