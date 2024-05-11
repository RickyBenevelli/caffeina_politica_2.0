import { format, parseISO } from "date-fns";
import {
  allArticles,
  allBibliographies,
  type Article,
  type Bibliography,
} from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import type { MDXComponents } from "mdx/types";
import { notFound } from "next/navigation";

import { cn } from "@/lib/utils";

import Image from "next/image";
import { Note } from "@/components/Note";
import { BNote } from "@/components/BNote";
import { YoutubeVideo } from "@/components/YoutubeVideo";
import { PhotoCopyright } from "@/components/PhotoCopyright";
import Views from "@/components/Views";
import { Separator } from "@/components/ui/Separator";

import ProgressBar from "@/components/ProgressBar";
import ShareWhatsapp from "@/components/ShareWhatsapp";
import ShareTelegram from "@/components/ShareTelegram";

interface PostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams(): Promise<
  PostPageProps["params"][]
> {
  return allArticles.map((article) => ({ slug: article.slug }));
}

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const article = allArticles.find((article) => article.slug === params.slug);

  if (!article) throw new Error(`Post not found for slug: ${params.slug}`);
  return { title: article?.title };
};

const mdxComponents: MDXComponents = {
  h1: ({ className, ...props }) => (
    <h1
      className={cn(
        "mt-2 scroll-m-20 text-4xl font-bold tracking-tight",
        className
      )}
      {...props}
    />
  ),
  h2: ({ className, ...props }) => (
    <h2
      className={cn(
        "mt-10 scroll-m-20 border-b pb-1 text-3xl font-semibold tracking-tight first:mt-0",
        className
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }) => (
    <h3
      className={cn(
        "mt-8 scroll-m-20 text-2xl font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  ),
  h4: ({ className, ...props }) => (
    <h4
      className={cn(
        "mt-8 scroll-m-20 text-xl font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  ),
  h5: ({ className, ...props }) => (
    <h5
      className={cn(
        "mt-8 scroll-m-20 text-lg font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  ),
  h6: ({ className, ...props }) => (
    <h6
      className={cn(
        "mt-8 scroll-m-20 text-base font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  ),
  a: ({ className, ...props }) => (
    <a
      className={cn("font-medium underline underline-offset-4", className)}
      {...props}
    />
  ),
  p: ({ className, ...props }) => (
    <p
      className={cn(
        "leading-7 [&:not(:first-child)]:mt-6 text-justify",
        className
      )}
      {...props}
    />
  ),
  ul: ({ className, ...props }) => (
    <ul className={cn("my-6 ml-6 list-disc", className)} {...props} />
  ),
  ol: ({ className, ...props }) => (
    <ol className={cn("my-6 ml-6 list-decimal", className)} {...props} />
  ),
  li: ({ className, ...props }) => (
    <li className={cn("mt-2", className)} {...props} />
  ),
  blockquote: ({ className, ...props }) => (
    <blockquote
      className={cn(
        "mt-6 border-l-2 pl-6 italic [&>*]:text-muted-foreground",
        className
      )}
      {...props}
    />
  ),
  img: ({
    className,
    alt,
    ...props
  }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className={cn("rounded-md border mx-auto w-full", className)}
      alt={alt}
      {...props}
    />
  ),
  hr: ({ ...props }) => <hr className="my-4 md:my-8" {...props} />,
  table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="my-6 w-full overflow-y-auto">
      <table className={cn("w-full", className)} {...props} />
    </div>
  ),
  tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr
      className={cn("m-0 border-t p-0 even:bg-muted", className)}
      {...props}
    />
  ),
  th: ({ className, ...props }) => (
    <th
      className={cn(
        "border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
        className
      )}
      {...props}
    />
  ),
  td: ({ className, ...props }) => (
    <td
      className={cn(
        "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
        className
      )}
      {...props}
    />
  ),
  pre: ({ className, ...props }) => (
    <pre
      className={cn(
        "mb-4 mt-6 overflow-x-auto rounded-lg border bg-black py-4",
        className
      )}
      {...props}
    />
  ),
  code: ({ className, ...props }) => (
    <code
      className={cn(
        "relative rounded border px-[0.3rem] py-[0.2rem] font-mono text-sm",
        className
      )}
      {...props}
    />
  ),
  Note,
  BNote,
  YoutubeVideo,
  PhotoCopyright,
};

const PostLayout = ({ params }: { params: { slug: string } }) => {
  // Find the post for the current page.
  const article = allArticles.find(
    (article: Article) => article.slug === params.slug
  );

  // 404 if the post does not exist.
  if (!article) notFound();

  // Parse the MDX file via the useMDXComponent hook.
  const MDXContent = useMDXComponent(article.body.code);
  const bib = allBibliographies.find(
    (bib: Bibliography) => bib.slug === article.slug
  )?.body.code;
  const MDXBibliography = useMDXComponent(bib as string);

  return (
    <article className="mx-6 sm:mx-auto max-w-3xl py-8">
      <div className="mb-8 text-center">
        <ProgressBar />
        <time dateTime={article.date} className="mb-1 text-xs text-gray-600">
          {format(parseISO(article.date), "LLLL d, yyyy")}
        </time>
        <h1 className="text-3xl font-bold">{article.title}</h1>
        <div className="text-base text-gray-600">
          <Views slug={article.slug} trackView={true} show={false} />
        </div>
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={article.image}
        alt={article.title}
        className="object-cover rounded-md"
      />

      <div className="py-4 flex justify-between items-center">
        <div className="flex gap-6 items-center">
          {/*<ShareWhatsapp />
          <ShareTelegram />*/}
          {/* <SaveArticle slug={article.slug} /> */}
        </div>
        <div className="text-base text-gray-600">
          {article.readingTime} min read
        </div>
      </div>
      <Separator />

      <MDXContent components={mdxComponents} />
      <hr className="my-8" />
      <h2 className="mt-10 scroll-m-20 pb-1 text-3xl font-semibold tracking-tight first:mt-0">
        Bibliography
      </h2>
      <MDXBibliography components={mdxComponents} />
    </article>
  );
};

export default PostLayout;
