import { Item, Query } from "qiita-api/v2/items/@types";

export interface Methods {
  get: {
    query?: Query;
    resBody: Item[];
  };
}
