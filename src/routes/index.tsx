import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense, useEffect, useState } from "react";

const AnimaStudio = lazy(() => import("@/animastudio/App"));

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AnimaStudio — Vector Rigging & Skeletal Animation" },
      {
        name: "description",
        content:
          "AnimaStudio: advanced vector-based 2D puppet rigging and skeletal animation suite with inverse kinematics and automation.",
      },
      { property: "og:title", content: "AnimaStudio" },
      {
        property: "og:description",
        content:
          "Vector-based 2D puppet rigging and skeletal animation studio.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div className="min-h-screen w-full bg-neutral-950">
      {mounted ? (
        <Suspense
          fallback={
            <div className="flex min-h-screen items-center justify-center text-neutral-400">
              Loading AnimaStudio…
            </div>
          }
        >
          <AnimaStudio />
        </Suspense>
      ) : (
        <div className="flex min-h-screen items-center justify-center text-neutral-400">
          Loading AnimaStudio…
        </div>
      )}
    </div>
  );
}
