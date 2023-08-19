import PostList from "@/app/components/PostList";
import ProfileCard from "@/app/components/ProfileCard";
import Timeline from "@/app/components/Timeline";
import ProjectList from "@/app/components/ProjectList";

export const revalidate = 86400;

export default function Home() {
  return (
    <div className="mx-auto">
      <div className="flex flex-wrap justify-center items-center gap-x-16 lg:gap-x-20">
        <ProfileCard />
        <Timeline />
      </div>
      <ProjectList />
      <PostList />
    </div>
  );
}
