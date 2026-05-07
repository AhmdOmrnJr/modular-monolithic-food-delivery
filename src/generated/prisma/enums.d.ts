export declare const PaymentAttemptStatus: {
    readonly PENDING: "PENDING";
    readonly AUTHORIZED: "AUTHORIZED";
    readonly SUCCESS: "SUCCESS";
    readonly FAILED: "FAILED";
};
export type PaymentAttemptStatus = (typeof PaymentAttemptStatus)[keyof typeof PaymentAttemptStatus];
export declare const RefundStatus: {
    readonly PENDING: "PENDING";
    readonly COMPLETED: "COMPLETED";
    readonly FAILED: "FAILED";
};
export type RefundStatus = (typeof RefundStatus)[keyof typeof RefundStatus];
export declare const OrderStatusKey: {
    readonly PENDING: "PENDING";
    readonly COMPLETED: "COMPLETED";
    readonly CANCELED: "CANCELED";
};
export type OrderStatusKey = (typeof OrderStatusKey)[keyof typeof OrderStatusKey];
export declare const CartEventType: {
    readonly ADD_TO_CART: "ADD_TO_CART";
    readonly UPDATE_QUANTITY: "UPDATE_QUANTITY";
    readonly REMOVE_FROM_CART: "REMOVE_FROM_CART";
    readonly CLEAR_CART: "CLEAR_CART";
    readonly LOCK_CART: "LOCK_CART";
    readonly UNLOCK_CART: "UNLOCK_CART";
};
export type CartEventType = (typeof CartEventType)[keyof typeof CartEventType];
export declare const RatingScore: {
    readonly ONE: "ONE";
    readonly TWO: "TWO";
    readonly THREE: "THREE";
    readonly FOUR: "FOUR";
    readonly FIVE: "FIVE";
};
export type RatingScore = (typeof RatingScore)[keyof typeof RatingScore];
export declare const TokenType: {
    readonly REFRESH: "REFRESH";
    readonly VERIFICATION: "VERIFICATION";
    readonly FORGOT_PASSWORD: "FORGOT_PASSWORD";
};
export type TokenType = (typeof TokenType)[keyof typeof TokenType];
export declare const RoleKey: {
    readonly ADMIN: "ADMIN";
    readonly CUSTOMER: "CUSTOMER";
    readonly RESTAURANT_MANAGER: "RESTAURANT_MANAGER";
};
export type RoleKey = (typeof RoleKey)[keyof typeof RoleKey];
