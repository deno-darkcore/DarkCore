export class Path {
  filePath: string;

  constructor(fp: string) {
    this.filePath = fp;
  }
  toString() {
    return this.filePath;
  }

  /* TODO:
  *    Add check if valid path
  *    Add easy way to add to the path
  *    Functions for extracting all the dirs, the filename, etc
  */
}