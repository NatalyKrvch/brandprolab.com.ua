import {
  DASH_LIST_ITEM_SEPARATOR_REGEX,
  LIST_ITEM_PREFIX,
} from '@/lib/constants';

export const formatTextWithListItems = (text: string): string => {
  return text.replace(DASH_LIST_ITEM_SEPARATOR_REGEX, LIST_ITEM_PREFIX);
};
