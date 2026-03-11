export default function ProjectCard({ project }) {

    return (
        <div className="project-card">

            <img src={project.image} />

            <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.type}</p>
            </div>

        </div>
    )
}