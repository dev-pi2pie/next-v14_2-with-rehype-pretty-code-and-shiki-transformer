"use client";
import React from "react";
import { useEditorContext } from "./editorContext";
import { shikiToHtml } from "@/lib/shikiToHtml";

export default function EditorShikiResult() {
  const { editorValue } = useEditorContext();
  const [content, setContent] = React.useState(<></>);
  const [lang, setLang] = React.useState("javascript");
  const [theme, setTheme] = React.useState("github-light");

  const asyncShikiHandler = React.useCallback(async () => {
    const html = await shikiToHtml({
      code: editorValue || "",
      lang,
      theme,
    });
    try {
      setContent(html as unknown as JSX.Element);
    } catch (e) {
      return "";
    }
  }, [editorValue, lang, theme]);
  React.useEffect(() => {
    asyncShikiHandler();
  }, [asyncShikiHandler]);
  return (
    <>
      <section>
        <div className="flex flex-row justify-between">
          <div className="flex flex-col justify-start gap-2">
            <span>language: </span>
            <input
              className="px-2"
              type="text"
              value={lang}
              onChange={(e) => setLang(e.target.value)}
            />
          </div>
          <div className="flex flex-col justify-start gap-2">
            <span>theme: </span>
            <input
              className="px-2"
              type="text"
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
            />
          </div>
        </div>
      </section>
      <section>
        <div
          className="w-full h-full"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </section>
    </>
  );
}
