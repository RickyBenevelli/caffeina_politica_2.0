import { useMDXComponent } from "next-contentlayer2/hooks";
import type { MDXComponents } from "mdx/types";

/**
 * Small synchronous wrapper so that `useMDXComponent` (a hook) is never
 * called from inside an async server component.
 */
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
