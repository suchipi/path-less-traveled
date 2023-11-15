import path from "path";

export interface PathMarker {
  (...parts: Array<string>): string;
  relative(otherPath: string): string;
  concat(...parts: Array<string>): PathMarker;
}

export function pathMarker(...base: Array<string>): PathMarker {
  const baseDir = path.resolve(...base);

  return Object.assign(
    (...parts: Array<string>) => {
      return path.resolve(baseDir, ...parts);
    },
    {
      relative: (otherPath: string) => {
        return path.relative(baseDir, otherPath);
      },
      concat: (...parts: Array<string>) => {
        return pathMarker(baseDir, ...parts);
      },
    }
  );
}
