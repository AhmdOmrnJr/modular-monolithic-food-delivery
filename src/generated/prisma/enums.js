"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleKey = exports.TokenType = exports.RatingScore = exports.CartEventType = exports.OrderStatusKey = exports.RefundStatus = exports.PaymentAttemptStatus = void 0;
exports.PaymentAttemptStatus = {
    PENDING: 'PENDING',
    AUTHORIZED: 'AUTHORIZED',
    SUCCESS: 'SUCCESS',
    FAILED: 'FAILED'
};
exports.RefundStatus = {
    PENDING: 'PENDING',
    COMPLETED: 'COMPLETED',
    FAILED: 'FAILED'
};
exports.OrderStatusKey = {
    PENDING: 'PENDING',
    COMPLETED: 'COMPLETED',
    CANCELED: 'CANCELED'
};
exports.CartEventType = {
    ADD_TO_CART: 'ADD_TO_CART',
    UPDATE_QUANTITY: 'UPDATE_QUANTITY',
    REMOVE_FROM_CART: 'REMOVE_FROM_CART',
    CLEAR_CART: 'CLEAR_CART',
    LOCK_CART: 'LOCK_CART',
    UNLOCK_CART: 'UNLOCK_CART'
};
exports.RatingScore = {
    ONE: 'ONE',
    TWO: 'TWO',
    THREE: 'THREE',
    FOUR: 'FOUR',
    FIVE: 'FIVE'
};
exports.TokenType = {
    REFRESH: 'REFRESH',
    VERIFICATION: 'VERIFICATION',
    FORGOT_PASSWORD: 'FORGOT_PASSWORD'
};
exports.RoleKey = {
    ADMIN: 'ADMIN',
    CUSTOMER: 'CUSTOMER',
    RESTAURANT_MANAGER: 'RESTAURANT_MANAGER'
};
//# sourceMappingURL=enums.js.map