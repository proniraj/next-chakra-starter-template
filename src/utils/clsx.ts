/**
 * A tiny utility for conditionally joining class names together.
 * @param args - The class names to join together.
 * @returns The joined class names.
 */
export default function clsx(...args: (string | number)[]): string {
  return args
    .filter(Boolean)
    .map((arg) => (Array.isArray(arg) ? clsx(...arg) : arg))
    .filter(Boolean)
    .join(" ");
}
