import { useParams } from "react-router-dom";

function ProjectPage() {
  const params = useParams<{ projectId: string }>();
  console.log(params);
  return (
    <div>
      <h1>{params.projectId}</h1>
    </div>
  );
}

export default ProjectPage;
