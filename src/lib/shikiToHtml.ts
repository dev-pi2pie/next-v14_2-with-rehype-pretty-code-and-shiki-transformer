import { codeToHtml } from "shiki";

export const shikiToHtml = async ({
  code,
  lang,
  theme,
}: {
  code: string;
  lang: string;
  theme: string;
}) => {
  const asyncHtml = async () => {
    const html = await codeToHtml(code, {
      lang,
      theme,
    });
    return html;
  };
  try {
    const html = await asyncHtml();
    return html;
  } catch (e) {
    // if (e instanceof Error) {
    //   console.error(e.message);
    // }
    return "";
  }
};
