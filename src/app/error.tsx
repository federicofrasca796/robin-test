"use client";

import Button from "@/components/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div>
      <h1>Something went wrong</h1>
      <p>{error.message}</p>
      <Button onClick={reset}>Try again</Button>
    </div>
  );
}
