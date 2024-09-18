"use client";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";

const EditorProvider = dynamic(async () => {
  const { EditorProvider } = await import("@/components/editor/editorContext");
  return EditorProvider;
});
const EditorResult = dynamic(() => import("@/components/editor/editorResult"));
const EditorTextArea = dynamic(
  () => import("@/components/editor/editorTextArea")
);

export default function EditorDemo({ className }: { className?: string }) {
  return (
    <section
      className={cn(
        "flex min-h-screen flex-col items-center justify-between p-24",
        className
      )}
    >
      <EditorProvider>
        <div className="lg:max-w-[1024px] mx-auto flex flex-col gap-5 mt-10 p-2">
          <h1>Editor</h1>
          <EditorTextArea className="text-black" />
          <article className="prose">
            <EditorResult />
          </article>
        </div>
      </EditorProvider>
    </section>
  );
}
