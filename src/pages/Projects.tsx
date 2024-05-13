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
    <div className="grid">
      {projects.map((project) => (
        <div
          key={project.id}
          className="grid-tile"
          style={{ gridColumn: project.span }}
        >
          <h3>{project.name}</h3>
          <div className="grid-tile-image"></div>
        </div>
      ))}
    </div>
  );
}

export default Projects;
