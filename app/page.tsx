import Posts from "@/app/components/Posts";
import { ProfileCard } from "@/app/components/ProfileCard";

export const revalidate = 86400;

export default function Home() {
  return (
    <div className="mx-auto">
      <ProfileCard />
      <Posts />
    </div>
  );
}
