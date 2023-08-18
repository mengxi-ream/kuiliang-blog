import Posts from "@/app/components/Posts";
import ProfileCard from "@/app/components/ProfileCard";
import Timeline from "@/app/components/Timeline";
import ProjectGroup from "@/app/components/ProjectGroup";

export const revalidate = 86400;

export default function Home() {
  return (
    <div className="mx-auto">
      <div className="flex flex-wrap justify-center items-center space-x-16 lg:space-x-20">
        <ProfileCard />
        <Timeline />
      </div>
      <ProjectGroup />
      <Posts />
    </div>
  );
}
