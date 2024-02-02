export default function Home() {
  return (
    <div className="h-[calc(100vh-80px)] w-full flex flex-col gap-4 items-center justify-center">
      <h1 className="text-4xl md:text-5xl text-center font-bold">
        My biggest Title
      </h1>
      <p className="text-gray-500 text-center max-w-[624px] mx-auto w-full px-6">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores
        distinctio labore deleniti, dignissimos corporis repudiandae nisi
        accusantium nihil laborum, at enim fugit hic molestias magnam vel odio
        ipsa assumenda aliquid.
      </p>
    </div>
  );
}
