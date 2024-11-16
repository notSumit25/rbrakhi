import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="w-full h-screen flex justify-center items-center sm:hidden bg-black">
        <Image
          src="/movile.jpg"
          alt="Picture of the author"
          width={500}
          height={500}
        />
      </div>
      <div
        className="w-full h-screen justify-center items-center bg-cover bg-center hidden sm:block"
        style={{
          backgroundImage: 'url("/pic.jpg")',
        }}
      >
        {/* Other content can go here */}
      </div>
    </div>
  );
}
