import { EditorProvider } from "@/components/editor/editorContext";
import EditorShikiResult from "@/components/editor/editorShikiResult";
import EditorTextArea from "@/components/editor/editorTextArea";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <EditorProvider>
        <div className="lg:max-w-[1024px] mx-auto flex flex-col gap-5 mt-10 p-2">
          <h1>Editor with codeToHtml: </h1>
          <EditorTextArea className="text-black" />
          <article className="prose">
            <EditorShikiResult />
          </article>
        </div>
      </EditorProvider>
    </main>
  );
}
