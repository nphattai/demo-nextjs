"use server";

export const getMetadata = async () => {
  console.log("server action getMetadata");

  return Promise.resolve({
    title: "Next.js",
    domain: "https://nextjs.org",
  });
};
