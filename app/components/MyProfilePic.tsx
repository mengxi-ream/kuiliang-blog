import Image from "next/image";

export function MyProfilePic() {
  return (
    <section className="w-full mx-auto">
      <Image
        className="border-4 border-black dark:border-slate-500 drop-shadow-xl shadow-black rounded-full mx-auto mt-8"
        src="/images/profile-photo.png"
        width={200}
        height={200}
        alt="Kuiliang Zhang"
        priority={true}
      />
    </section>
  );
}
