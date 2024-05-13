import { useParams } from "react-router-dom";

function ProjectPage() {
  const params = useParams();
  console.log(params);
  return <h1>{params.projectId}</h1>;
}

export default ProjectPage;
