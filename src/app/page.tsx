import { EditorProvider } from "@/components/editor/editorContext";
import EditorResult from "@/components/editor/editorResult";
import EditorTextArea from "@/components/editor/editorTextArea";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <EditorProvider>
        <div className="lg:max-w-[1024px] mx-auto flex flex-col gap-5 mt-10 p-2">
          <h1>Editor</h1>
          <EditorTextArea className="text-black" />
          <article className="prose dark:text-white dark:prose-headings:text-white">
            <EditorResult />
          </article>
        </div>
      </EditorProvider>
    </main>
  );
}
