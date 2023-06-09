import { List, Map, merge } from 'immutable';

export function concatElements(page1, page2) {
  return List(page1.concat(page2));
}

export function mergeElements(page1, page2) {
  return Map(merge(page1, page2));
}
