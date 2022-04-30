// Code that starts on line 1 looks weird to me now

import { Act } from "../shared/shared-models";
import { listUpdateRequest } from "./product-1-constants";
import { checkInitialProductOneDisplay, clickFirstProductOneListItem, doSomethingToAddToList, getListItemCount } from "./product-1-utilities";

const clickFirstMyListItem: Act = {
    action: clickFirstProductOneListItem,
    prerequisite: doSomethingToAddToList,
    select: getListItemCount,
    interception: listUpdateRequest,
};

const checkInitialDisplay: Act = {
    action: checkInitialProductOneDisplay,
}

export default {
    clickFirstMyListItem,
    checkInitialDisplay,
}