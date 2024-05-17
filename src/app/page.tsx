import Link from "next/link";

export default async function HomePage() {

  async function getDownloadPath()  {
      return await (await fetch('http://localhost:3000/api/khis'))
  }

  const downloadPath = await getDownloadPath()

  console.log({downloadPath})

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
          <span className="text-[hsl(280,100%,70%)]">KHIS</span> Analytics App
        </h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
          <Link
            className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
            href={`file:///`}
            target="_blank"
          >
            <h3 className="text-2xl font-bold">First Steps →</h3>
            <div className="text-lg">
              Download KHIS Analytics file
              
            </div>
          </Link>
          <Link
            className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
            href="#"
            target="_blank"
          >
            <h3 className="text-2xl font-bold">link →</h3>
            <div className="text-lg">
              {''}
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
