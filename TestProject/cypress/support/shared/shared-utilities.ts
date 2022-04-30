// Code that starts on line 1 looks weird to me now

import { Act, Chainable, UpdateSelect } from "./shared-models";

/**
 * Executes a force click on an element
 * @param tag data-cy tag
 */
export function forceClick(tag: string): void {
    cy.get(tag).click({ force: true });
}

/**
 * Execute force click on first item in a list
 * @param tag data-cy tag
 */
export function clickFirstListItem(tag: string): void {
    cy.get(tag).first().click({ force: true });
}

/**
 * Asserts a value is contained in an element
 * @param tag data-cy tag
 * @param value value to check for the element to contain
 */
export function assertValue(tag: string, value: any): void {
    cy.get(tag).contains(value);
}

/**
 * Asserts all elements are found
 * @param tags list od data-cy tags
 */
export function assertElements(tags: string[]): void {
    tags.forEach(tag => cy.get(tag));
}

/**
 * Gets the count of an element
 * @param tag data-cy tag
 * @returns a cypress chainable of any (can expect a number)
 */
export function getItemCount(tag: string): Chainable {
    return cy.get(tag).invoke('length');
}

/**
 * Gets the count of children of an element
 * @param tag data-cy tag
 * @returns a cypress chainable of any (can expect a number)
 */
export function getChildrenCount(tag: string): Chainable {
    return cy.get(tag).children().invoke('length');
}

/**
 * Gets the display value of an element
 * @param tag data-cy tag
 * @returns a cypress chainable of any (can expect a string)
 */
export function getItemValue(tag: string): Chainable {
    return cy.get(tag).invoke('text');
}

/**
 * Wait infinitely until the previous value has changed
 * @param select function that returns a chainable of any
 * @param previousValue value waiting to change
 */
export function waitForUpdate(select: UpdateSelect, previousValue: string | number): void {
    select().then(currentValue => {
        if(currentValue === previousValue) {
            waitForUpdate(select, previousValue);
        }
    });
}

/**
 * Performs a user action
 * @param input action object to execute
 */
export function act(input: Act): void {
    const [action, prerequisite, select, interception, mock] = Object.values(input);
    if(prerequisite) {
        if(select) {
            const previousValue = select();

            if(interception) {
                mock ? cy.intercept(interception, mock).as('intercept') : cy.intercept(interception).as('intercept');
                prerequisite();
                cy.wait('@intercept');
            } else {
                prerequisite();
            }

            waitForUpdate(select, previousValue);
        } else {
            prerequisite();
        }
    }
    action();
}