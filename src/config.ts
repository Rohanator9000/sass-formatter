export interface SassFormatterConfig {
  /**Enable debug messages */
  debug: boolean;
  /**delete rows that are empty. */
  deleteEmptyRows: boolean;
  /**Delete trailing whitespace.*/
  deleteWhitespace: boolean;
  /**Convert css or scss to sass */
  convert: boolean;
  /**set the space after the colon of a property to one.*/
  setPropertySpace: boolean;
  tabSize: number;
  /**insert spaces or tabs. */
  insertSpaces: boolean;
}
