import Image from 'next/image'
export default function Home() {
  return (
    <div className="flex justify-center h-full flex-col relative px-12">
      {/* <div className="text-[10rem] font-sans leading-tight text-[#8F8CA8] font-[900] opacity-5">
        <h1>I Build</h1>
        <h1>Websites</h1>
      </div> */}
      <div className="z-[2] flex text-[#8F8CA8] justify-between items-center">
        <div className="">
          <h1 className="text-7xl font-[800] mb-2">Luis Carlos</h1>
          <h6 className="w-max text-5xl font-[300] mb-12 relative">
            Full Stack Web Developer
          </h6>

          <button className="px-5 py-2 border-2 rounded-md font-[700] hover:bg-[#1f1d2e] hover:text-[#c4a7e7]">
            View Work
          </button>
          <button className="px-5 py-2 border-2 rounded-md font-[700] ml-4 hover:bg-[#1f1d2e] hover:text-[#c4a7e7]">
            Contact Me
          </button>
        </div>

        <Image
          src="/assets/programmer-animate.svg"
          alt="Programmer Animate"
          width={600}
          height={600}
          priority
        />
      </div>
    </div>
  )
}
