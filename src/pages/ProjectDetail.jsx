import { useParams } from "react-router-dom"
import projects from "../data/projects"

export default function ProjectDetail() {

  const { id } = useParams()

  const project = projects.find(p => p.id === Number(id))

  if (!project) {
    return <p>Project not found</p>
  }

  return (

    <div className="container">

      <h1>{project.title}</h1>

      <img src={project.image} style={{ width: "100%" }} />

      <p>{project.type}</p>

    </div>

  )

}