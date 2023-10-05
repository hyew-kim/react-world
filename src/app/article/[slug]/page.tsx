'use client';
export default function ArticlePage({ params }: { params: { slug: string } }) {
  return <main>article: {params.slug}</main>;
}
