import Posts from "@/app/components/Posts";
import { ProfileCard } from "@/app/components/ProfileCard";

export const revalidate = 86400;

export default function Home() {
  return (
    <div className="mx-auto">
      <ProfileCard />
      <p className="mt-12 mb-12 text-3xl text-center dark:text-white">
        Hello and Welcome 👋 &nbsp;
        <span className="whitespace-nowrap">
          I'm <span className="font-bold">Kuiliang</span>
        </span>
      </p>
      <Posts />
    </div>
  );
}
