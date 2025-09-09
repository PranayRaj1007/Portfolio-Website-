import projects from "../data/projects";

function Projects() {
  return (
    <section id="projects" className="px-8 py-16 bg-gray-100">
      <h3 className="text-3xl font-bold mb-10 text-center">Projects</h3>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((p) => (
          <div key={p.id} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
            <h4 className="text-xl font-semibold mb-2">{p.title}</h4>
            <p className="text-gray-600 mb-4">{p.description}</p>
            <div className="flex space-x-4">
              <a href={p.github} className="text-blue-600 hover:underline">GitHub</a>
              {p.demo && <a href={p.demo} className="text-blue-600 hover:underline">Live Demo</a>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Projects;
