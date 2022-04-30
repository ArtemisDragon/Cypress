// Code that starts on line 1 looks weird to me now

export type Chainable = Cypress.Chainable<any>;
export type UpdateSelect = () => Chainable;

/**
 * User action
 * @param action user action to execute
 * @param prerequisite operation to execute before user action
 * @param select function to get what should change
 * @param intercept request to intercept and wait for
 * @param mock mock data to return from intercept request
 */
export interface Act {
    action: () => void;
    prerequisite?: () => void;
    select?: UpdateSelect;
    interception?: string;
    mock?: any;
}