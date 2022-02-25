import path from "path";

export function pathLessTraveled(baseDir: string) {
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
