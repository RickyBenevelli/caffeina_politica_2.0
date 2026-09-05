import * as runtime from "react/jsx-runtime";
import type { MDXComponents } from "mdx/types";

/**
 * Velite compiles MDX to a function body. Evaluating it here keeps rendering
 * on the server: the article ships as HTML, with no MDX runtime in the browser.
 */
function useMDXComponent(code: string) {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
}

export function Mdx({
  code,
  components,
}: {
  code: string;
  components?: MDXComponents;
}) {
  const Component = useMDXComponent(code);
  return <Component components={components} />;
}
