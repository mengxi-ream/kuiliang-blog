import PostList from "@/components/PostList";
import ProfileCard from "@/components/ProfileCard";
import Timeline from "@/components/Timeline";
import ProjectList from "@/components/ProjectList";

export const revalidate = 86400;

export default function Home() {
  return (
    <div className="mx-auto">
      <div className="flex flex-wrap justify-center items-center gap-x-16 lg:gap-x-20 mt-14 mb-20 gap-y-10">
        <ProfileCard />
        <Timeline />
      </div>
      <ProjectList />
      <PostList heading="Recent Posts" />
    </div>
  );
}
