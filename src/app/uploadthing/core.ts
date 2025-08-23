import { createUploadthing, type FileRouter } from "uploadthing/next";
import { auth } from "next-auth";

const f = createUploadthing();

export const ourFileRouter = {
  productImage: f({ image: { maxFileSize: "4MB", maxFileCount: 4 } })
    .middleware(async () => {
      // (Optionally) check auth here
      return { userId: "admin" };
    })
    .onUploadComplete(async ({ file }) => {
      // You could persist the file URL to DB here if needed
      console.log("Uploaded:", file.url);
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
