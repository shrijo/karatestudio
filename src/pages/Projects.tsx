const projects = [
  { id: "Porjects", span: "span 2", link: "projects" },
  { id: "Websites", span: "span 1", link: "websites" },
  { id: "Porjects", span: "span 2", link: "projects" },
  { id: "Websites", span: "span 1", link: "websites" },
  { id: "Porjects", span: "span 2", link: "projects" },
  { id: "Websites", span: "span 1", link: "websites" },
];

function Projects() {
  return (
    <div className="grid">
      {projects.map((project) => (
        <div className="grid-tile" style={{ gridColumn: project.span }}>
          <h3>{project.id}</h3>
          <div className="grid-tile-image"></div>
        </div>
      ))}
    </div>
  );
}

export default Projects;
