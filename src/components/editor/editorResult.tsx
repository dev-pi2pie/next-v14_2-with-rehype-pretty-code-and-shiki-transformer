"use client";
import React from "react";
import { useEditorContext } from "./editorContext";
import { mdsource } from "@/lib/mdsource";

// because the mdsource function is async
// import this component should use dynamic import

export default function EditorResult() {
  const { editorValue } = useEditorContext();
  const [content, setContent] = React.useState(<></>);

  const asyncMdHandler = React.useCallback(async () => {
    const md = await mdsource(editorValue || "");
    setContent(md as any);
  }, [editorValue]);

  React.useEffect(() => {
    asyncMdHandler();
  }, [asyncMdHandler]);

  return (
    <div
      className="w-full h-full"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
