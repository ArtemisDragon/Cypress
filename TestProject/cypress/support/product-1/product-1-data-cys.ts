// Code that starts on line 1 looks weird to me now

import { tagStart } from "../shared/shared-data-cys";

/**
 * Used to select components
 */
export enum ProductOneComponent {
    COMPONENT_ONE = '[data-cy=component-one]',
    COMPONENT_TWO = '[data-cy=component-two]',
    LIST_ITEM = '[data-cy=list-item]',
    LIST = '[data-cy=list]',
}

/**
 * Used to select elements containing values
 */
export enum ProductOneValue {
    VALUE_ONE = '[data-cy=value-one]',
    VALUE_TWO = '[data-cy=value-two]',
}

/**
 * Used to select container elements
 */
export enum ProductOneContainer {
    TAG_ONE = '[data-cy=product-one-tag-one]',
    TAG_TWO = '[data-cy=product-one-tag-two]',
}

/**
 * Used to select buttons
 */
export enum ProductOneButton {
    BUTTON_ONE = '[data-cy=product-one-button-one]',
    BUTTON_TWO = '[data-cy=product-one-button-two]',
}

/**
 * All data-cy tags of ProductOne
 */
export const ProductOne = {
    ...ProductOneComponent,
    ...ProductOneContainer,
    ...ProductOneValue,
    ...ProductOneButton,
}

export const variableTagStart = `${tagStart}prefix-`;
export const variableTagEnd = '-suffix]';

export enum VaryingStartTag {
    START_ONE = '[data-cy=start-one-',
    START_TWO = '[data-cy=start-two-',
}

export enum VaryingEndTag {
    END_ONE = '-end-one]',
    END_TWO = '-end-two]',
}