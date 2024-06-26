"use client";
import React from "react";

export const editorContext = React.createContext<any>({});
export const useEditorContext = () => React.useContext(editorContext);

export type EditorContextType = {
  editorValue: string;
  setEditorValue: React.Dispatch<React.SetStateAction<string>>;
};

export const EditorProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [editorValue, setEditorValue] = React.useState<EditorContextType>();

  return (
    <editorContext.Provider value={{ editorValue, setEditorValue }}>
      {children}
    </editorContext.Provider>
  );
};
