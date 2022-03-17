import path from "path";

export interface PathMarker {
  (...parts: Array<string>): string;
  relative(otherPath: string): string;
}

export function pathMarker(baseDir: string): PathMarker {
  return Object.assign(
    (...parts: Array<string>) => {
      return path.resolve(baseDir, ...parts);
    },
    {
      relative: (otherPath: string) => {
        return path.relative(baseDir, otherPath);
      },
    }
  );
}
