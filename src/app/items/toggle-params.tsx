"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function ToggleParams() {
  const router = useRouter();
  const params = useSearchParams();

  function onClick() {
    if (params.has("search")) {
      router.push("/items");
    } else {
      router.push("/items?search=xxx");
    }
    // router.refresh(); - does not help either
  }

  return (
    <button onClick={onClick}>
      {params.has("search") ? "Remove search param" : "Add search param"}
    </button>
  );
}
