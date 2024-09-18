"use client";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";

const EditorProvider = dynamic(async () => {
  const { EditorProvider } = await import("@/components/editor/editorContext");
  return EditorProvider;
});

const EditorShikiResult = dynamic(
  () => import("@/components/editor/editorShikiResult")
);

const EditorTextArea = dynamic(
  () => import("@/components/editor/editorTextArea")
);

export default function EditorShikiDemo({ className }: { className?: string }) {
  return (
    <section
      className={cn(
        "flex min-h-screen flex-col items-center justify-between p-24",
        className
      )}
    >
      <EditorProvider>
        <div className="lg:max-w-[1024px] mx-auto flex flex-col gap-5 mt-10 p-2">
          <h1>Editor with codeToHtml: </h1>
          <EditorTextArea className="text-black" />
          <article className="prose">
            <EditorShikiResult />
          </article>
        </div>
      </EditorProvider>
    </section>
  );
}
