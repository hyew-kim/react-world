import { useSearchParams, usePathname } from 'next/navigation';
export default function ArticlePage() {
  const params = useSearchParams();
  const pathName = usePathname();
  console.log(params);
  console.log(pathName);
  return <main>article</main>;
}
