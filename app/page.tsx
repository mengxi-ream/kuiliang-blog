import Posts from "@/app/components/Posts";
import ProfileCard from "@/app/components/ProfileCard";
import Timeline from "@/app/components/Timeline";

export const revalidate = 86400;

export default function Home() {
  return (
    <div className="mx-auto">
      <div className="flex flex-wrap justify-center items-center md:space-x-8 lg:space-x-16">
        <ProfileCard />
        <Timeline />
      </div>
      <Posts />
    </div>
  );
}
