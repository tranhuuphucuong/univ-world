import { BlurImage } from '@/components/blur-image';
import { strapiImage } from '@/lib/strapi/strapiImage';
import { truncate } from '@/lib/utils';
import { Article } from '@/types/types';
import { format } from 'date-fns';
import { Link } from 'next-view-transitions';
import Balancer from 'react-wrap-balancer';

export const BlogCard = ({
  article,
  locale,
}: {
  article: Article;
  locale: string;
}) => {
  return (
    <Link
      className="group grid w-full grid-cols-1 overflow-hidden rounded-3xl border border-transparent shadow-derek transition duration-200 hover:scale-[1.02] hover:border-neutral-800 hover:bg-base md:grid-cols-2"
      href={`/${locale}/blog/${article.slug}`}
    >
      <div className="">
        {article.image ? (
          <BlurImage
            src={strapiImage(article.image.url)}
            alt={article.title}
            height="1200"
            width="1200"
            className="h-full w-full rounded-3xl object-cover object-top"
          />
        ) : (
          <div className="flex h-full items-center justify-center group-hover:bg-base">
            {/* <Logo /> */}
          </div>
        )}
      </div>
      <div className="flex flex-col justify-between p-4 group-hover:bg-base md:p-8">
        <div>
          <div className="mb-4 flex flex-wrap gap-4">
            {article.categories?.map((category, idx) => (
              <p
                key={`category-${idx}`}
                className="rounded-full bg-dim px-4 py-2 text-xs font-bold capitalize text-muted"
              >
                {category.name}
              </p>
            ))}
          </div>
          <p className="mb-4 text-lg font-bold md:text-4xl">
            <Balancer>{article.title}</Balancer>
          </p>
          <p className="mt-2 text-left text-base text-muted md:text-xl">
            {truncate(article.description, 500)}
          </p>
        </div>
        <div className="mt-6 flex items-center space-x-2">
          {/* <Image
            src={article.authorAvatar}
            alt={article.author}
            width={20}
            height={20}
            className="rounded-full h-5 w-5"
          /> */}
          {/* <p className="text-sm font-normal text-muted">{article.author}</p> */}
          <div className="h-1 w-1 rounded-full bg-neutral-300"></div>
          <p className="max-w-xl text-sm text-neutral-300 transition duration-200 group-hover:text-typo">
            {format(new Date(article.publishedAt), 'MMMM dd, yyyy')}
          </p>
        </div>
      </div>
    </Link>
  );
};

export const BlogCardVertical = ({
  article,
  locale,
}: {
  article: Article;
  locale: string;
}) => {
  return (
    <Link
      className="group w-full overflow-hidden rounded-3xl border border-transparent shadow-derek transition duration-200 hover:scale-[1.02] hover:border-neutral-800 hover:bg-base"
      href={`/${locale}/blog/${article.slug}`}
    >
      <div className="">
        {article.image ? (
          <BlurImage
            src={strapiImage(article.image.url || '')}
            alt={article.title}
            height="800"
            width="800"
            className="h-64 w-full rounded-3xl object-cover object-top md:h-96"
          />
        ) : (
          <div className="flex h-64 items-center justify-center group-hover:bg-base md:h-96">
            {/* <Logo /> */}
          </div>
        )}
      </div>
      <div className="flex flex-col justify-between p-4 group-hover:bg-base md:p-8">
        <div>
          <div className="mb-4 flex flex-wrap gap-4">
            {article.categories?.map((category, idx) => (
              <p
                key={`category-${idx}`}
                className="rounded-full bg-dim px-4 py-2 text-xs font-bold capitalize text-muted"
              >
                {category.name}
              </p>
            ))}
          </div>
          <p className="mb-4 text-lg font-bold md:text-xl">
            <Balancer>{article.title}</Balancer>
          </p>
          <p className="mt-2 text-left text-sm text-muted md:text-base">
            {truncate(article.description, 500)}
          </p>
        </div>
        <div className="mt-6 flex items-center space-x-2">
          {/* <Image
            src={article.authorAvatar}
            alt={article.author}
            width={20}
            height={20}
            className="rounded-full h-5 w-5"
          />
          <p className="text-sm font-normal text-muted">{article.author}</p> */}
          <div className="h-1 w-1 rounded-full bg-neutral-300"></div>
          <p className="max-w-xl text-sm text-neutral-300 transition duration-200 group-hover:text-typo">
            {format(new Date(article.publishedAt), 'MMMM dd, yyyy')}
          </p>
        </div>
      </div>
    </Link>
  );
};
