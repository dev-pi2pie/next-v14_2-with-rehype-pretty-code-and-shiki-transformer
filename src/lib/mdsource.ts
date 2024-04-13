import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypePrettyCode from "rehype-pretty-code";
// shiki
import {
  transformerNotationDiff,
  transformerNotationWordHighlight,
  transformerNotationHighlight,
} from "@shikijs/transformers";

export const mdsource = async (source: string) => {
  const processor = unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkBreaks)
    .use(remarkRehype)
    .use(rehypePrettyCode, {
      theme: "min-light",
      transformers: [
        transformerNotationDiff(),
        transformerNotationWordHighlight(),
        transformerNotationHighlight(),
      ],
    })
    .use(rehypeStringify);

  const result = await processor.process(source);
  return result.toString();
};
