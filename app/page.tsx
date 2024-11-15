import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Image src="/pic.png" alt="pic" width={500} height={500} />
    </div>
  );
}
