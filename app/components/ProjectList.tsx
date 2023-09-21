import Image from "next/image";
import Link from "next/link";
import ProductItem from "@/app/components/ProductItem";
import { QrCodeIcon } from "@heroicons/react/24/solid";
import projects from "@/lib/data/projects";

export default function ProjectList() {
  return (
    <section className="max-w-3xl mx-auto my-14">
      <h2 className="text-3xl font-bold mb-4 mt-20">Recent Projects</h2>
      <div className="flex flex-wrap gap-y-3">
        {projects.map(
          (project) =>
            project.recent && (
              <div
                key={project.name}
                className="flex-auto w-full sm:w-96 max-w-md"
              >
                <ProductItem {...project} />
              </div>
            )
        )}
      </div>
    </section>
  );
}
