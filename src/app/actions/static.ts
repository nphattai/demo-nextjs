"use server";

export const getStatic = async () => {
  return Promise.resolve({
    info: "This is a static page",
  });
};
