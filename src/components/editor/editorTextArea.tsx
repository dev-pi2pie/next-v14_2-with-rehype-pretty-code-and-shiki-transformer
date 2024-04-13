"use client";
import React from "react";
import { useEditorContext } from "./editorContext";
import { cn } from "@/lib/utils";
import { Textarea } from "../ui/textarea";

export default function EditorTextArea({
  className,
}: Readonly<{ className?: string }>) {
  const { editorValue, setEditorValue } = useEditorContext();
  const [text, setText] = React.useState<string>(editorValue);
  const defferedText = React.useDeferredValue(text);

  React.useEffect(() => {
    setEditorValue(defferedText);
  }, [defferedText, setEditorValue]);

  return (
    <div className={cn("w-full h-full", className)}>
      <Textarea
        className="w-full] p-5 min-w-[320px] md:min-w-[640px] min-h-[320px] text-lg"
        placeholder="Type something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></Textarea>
    </div>
  );
}
