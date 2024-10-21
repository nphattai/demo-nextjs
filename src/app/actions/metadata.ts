"use server";

export const getMetadata = async () => {
  return Promise.resolve({
    title: "Next.js",
    domain: "https://nextjs.org",
  });
};
