import Image from "next/image";

export function ProfileCard() {
  return (
    <div className="max-w-sm mx-auto mt-10 bg-white p-6 rounded-xl shadow-md space-y-4">
      <Image
        className="mx-auto rounded-full"
        src="/images/profile-photo.png"
        alt="Kuiliang Zhang"
        width={160}
        height={160}
        priority={true}
      />

      <div className="text-center">
        <span>Chinese Name: </span>章奎亮
      </div>

      <div className="text-center">
        <span>Email: </span>kuiliang.zhang@outlook.com
      </div>

      <div className="text-center">
        <span>Location: </span>Vancouver, BC, Canada
      </div>
    </div>
  );
}
