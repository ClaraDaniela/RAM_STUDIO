import ProjectCard from "./ProjectCard"
import projects from "../data/projects"

export default function ProjectGrid() {

    return (

        <section id="projects" className="projects">

            <div className="container">

                <h2>Selected Work</h2>

                <div className="grid">

                    {projects.map(p => (
                        <ProjectCard key={p.id} project={p} />
                    ))}

                </div>

            </div>

        </section>

    )

}