// Code that starts on line 1 looks weird to me now

import { Chainable } from "../shared/shared-models";
import { assertElements, clickFirstListItem, getItemCount } from "../shared/shared-utilities";
import { ProductOne } from "./product-1-data-cys";

export function doSomethingToAddToList(): void {}

export function getListItemCount(): Chainable {
    return getItemCount(ProductOne.LIST_ITEM);
}

export function clickFirstProductOneListItem(): void {
    clickFirstListItem(ProductOne.LIST_ITEM);
}

export function checkInitialProductOneDisplay(): void {
    assertElements([
        ProductOne.BUTTON_ONE,
        ProductOne.BUTTON_TWO,
        ProductOne.COMPONENT_ONE,
        ProductOne.COMPONENT_TWO,
        ProductOne.LIST,
        ProductOne.TAG_ONE,
        ProductOne.VALUE_ONE,
    ]);
}