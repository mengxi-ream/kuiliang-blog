import Image from "next/image";
import Link from "next/link";
import ProjectItem from "@/app/components/ProjectItem";
import { QrCodeIcon } from "@heroicons/react/24/solid";
import projects from "@/lib/data/projects";

export default function ProjectList() {
  return (
    <section className="max-w-3xl mx-auto my-14">
      <h2 className="text-3xl font-bold my-4">Recent Projects</h2>
      <div className="flex flex-wrap">
        {projects.map(
          (project) =>
            project.recent && (
              <div
                key={project.name}
                className="flex-auto w-full sm:w-96 mx-auto max-w-md"
              >
                <ProjectItem {...project} />
              </div>
            )
        )}
      </div>
    </section>
  );
}
