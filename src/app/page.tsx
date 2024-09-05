import { EditorProvider } from "@/components/editor/editorContext";
import EditorTextArea from "@/components/editor/editorTextArea";
import dynamic from "next/dynamic";

export default function Home() {
  const EditorResult = dynamic(
    () => import("@/components/editor/editorResult"),
    { ssr: false }
  );
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <EditorProvider>
        <div className="lg:max-w-[1024px] mx-auto flex flex-col gap-5 mt-10 p-2">
          <h1>Editor</h1>
          <EditorTextArea className="text-black" />
          <article className="prose">
            <EditorResult />
          </article>
        </div>
      </EditorProvider>
    </main>
  );
}
