import { getMetadata } from "./actions/metadata";

export default async function Home() {
  const { domain, title } = await getMetadata();

  console.log("rendering Home page with metadata:", { domain, title });

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-4xl font-bold text-center">{title}</h1>
      <h2 className="text-2xl text-center">Welcome to {domain}</h2>
    </div>
  );
}
