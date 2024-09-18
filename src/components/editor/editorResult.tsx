"use client";
import React from "react";
import { useEditorContext, type EditorContextType } from "./editorContext";
import { mdsource } from "@/lib/mdsource";

export default function EditorResult() {
  const { editorValue } = useEditorContext() as unknown as EditorContextType;
  const [content, setContent] = React.useState(<></>);
  const [isReady, setIsReady] = React.useState(false);

  const asyncMdHandler = React.useCallback(async () => {
    const md = await mdsource(editorValue || "");
    setContent(md as unknown as JSX.Element);
    setIsReady(true);
  }, [editorValue]);

  React.useEffect(() => {
    asyncMdHandler();
  }, [asyncMdHandler]);

  if (!isReady) return null;

  return (
    <div
      className="w-full h-full"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
