import { notFound } from "next/navigation";

type PageProps = {
  searchParams?: {
    search?: string;
  };
};

export default async function Page({ searchParams }: PageProps) {
  let url = "http://localhost:3000/api/items";
  if (searchParams?.search) {
    url += `?search=${searchParams.search}`;
  }
  const res = await fetch(url);
  const { items } = await res.json();

  if (items.length === 0) {
    notFound();
  }

  return <div>{JSON.stringify(items)}</div>;
}

export const dynamic = "force-dynamic";
