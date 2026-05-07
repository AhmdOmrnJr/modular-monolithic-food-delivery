"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.defineExtension = exports.NullsOrder = exports.JsonNullValueFilter = exports.QueryMode = exports.NullableJsonNullValueInput = exports.JsonNullValueInput = exports.SortOrder = exports.CartEventScalarFieldEnum = exports.RatingScalarFieldEnum = exports.PaymentMethodScalarFieldEnum = exports.PreferredPaymentSettingsScalarFieldEnum = exports.OrderItemScalarFieldEnum = exports.OrderTrackingScalarFieldEnum = exports.OrderStatusScalarFieldEnum = exports.ProviderCustomerScalarFieldEnum = exports.RefundScalarFieldEnum = exports.PaymentAttemptScalarFieldEnum = exports.OrderScalarFieldEnum = exports.MenuItemScalarFieldEnum = exports.MenuCategoryScalarFieldEnum = exports.MenuScalarFieldEnum = exports.CartItemScalarFieldEnum = exports.CartScalarFieldEnum = exports.RestaurantScalarFieldEnum = exports.CustomerScalarFieldEnum = exports.UserTokenScalarFieldEnum = exports.RoleScalarFieldEnum = exports.UserScalarFieldEnum = exports.TransactionIsolationLevel = exports.ModelName = exports.AnyNull = exports.JsonNull = exports.DbNull = exports.NullTypes = exports.prismaVersion = exports.getExtensionContext = exports.Decimal = exports.Sql = exports.raw = exports.join = exports.empty = exports.sql = exports.PrismaClientValidationError = exports.PrismaClientInitializationError = exports.PrismaClientRustPanicError = exports.PrismaClientUnknownRequestError = exports.PrismaClientKnownRequestError = void 0;
const runtime = __importStar(require("@prisma/client/runtime/client"));
exports.PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
exports.PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
exports.PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
exports.PrismaClientInitializationError = runtime.PrismaClientInitializationError;
exports.PrismaClientValidationError = runtime.PrismaClientValidationError;
exports.sql = runtime.sqltag;
exports.empty = runtime.empty;
exports.join = runtime.join;
exports.raw = runtime.raw;
exports.Sql = runtime.Sql;
exports.Decimal = runtime.Decimal;
exports.getExtensionContext = runtime.Extensions.getExtensionContext;
exports.prismaVersion = {
    client: "7.8.0",
    engine: "3c6e192761c0362d496ed980de936e2f3cebcd3a"
};
exports.NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
exports.DbNull = runtime.DbNull;
exports.JsonNull = runtime.JsonNull;
exports.AnyNull = runtime.AnyNull;
exports.ModelName = {
    User: 'User',
    Role: 'Role',
    UserToken: 'UserToken',
    Customer: 'Customer',
    Restaurant: 'Restaurant',
    Cart: 'Cart',
    CartItem: 'CartItem',
    Menu: 'Menu',
    MenuCategory: 'MenuCategory',
    MenuItem: 'MenuItem',
    Order: 'Order',
    PaymentAttempt: 'PaymentAttempt',
    Refund: 'Refund',
    ProviderCustomer: 'ProviderCustomer',
    OrderStatus: 'OrderStatus',
    OrderTracking: 'OrderTracking',
    OrderItem: 'OrderItem',
    PreferredPaymentSettings: 'PreferredPaymentSettings',
    PaymentMethod: 'PaymentMethod',
    Rating: 'Rating',
    CartEvent: 'CartEvent'
};
exports.TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
exports.UserScalarFieldEnum = {
    userId: 'userId',
    userName: 'userName',
    userPassword: 'userPassword',
    userEmail: 'userEmail',
    isActive: 'isActive',
    isConfirmed: 'isConfirmed',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    isAdmin: 'isAdmin',
    roles: 'roles'
};
exports.RoleScalarFieldEnum = {
    roleId: 'roleId',
    roleName: 'roleName',
    roleDesc: 'roleDesc',
    roleKey: 'roleKey',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.UserTokenScalarFieldEnum = {
    userTokenId: 'userTokenId',
    userId: 'userId',
    token: 'token',
    expiresAt: 'expiresAt',
    tokenType: 'tokenType',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.CustomerScalarFieldEnum = {
    customerId: 'customerId',
    userId: 'userId',
    customerPhone: 'customerPhone',
    customerAvatar: 'customerAvatar',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deactivatedAt: 'deactivatedAt',
    addresses: 'addresses',
    createdById: 'createdById',
    updatedById: 'updatedById'
};
exports.RestaurantScalarFieldEnum = {
    restaurantId: 'restaurantId',
    managerId: 'managerId',
    restaurantName: 'restaurantName',
    restaurantBio: 'restaurantBio',
    restaurantLogo: 'restaurantLogo',
    isAvailable: 'isAvailable',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    averageRating: 'averageRating',
    ratingCount: 'ratingCount',
    addresses: 'addresses'
};
exports.CartScalarFieldEnum = {
    cartId: 'cartId',
    customerId: 'customerId',
    isLocked: 'isLocked',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.CartItemScalarFieldEnum = {
    cartItemId: 'cartItemId',
    cartId: 'cartId',
    menuItemId: 'menuItemId',
    quantity: 'quantity',
    price: 'price',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.MenuScalarFieldEnum = {
    menuId: 'menuId',
    restaurantId: 'restaurantId',
    menuDesc: 'menuDesc',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.MenuCategoryScalarFieldEnum = {
    menuCategoryId: 'menuCategoryId',
    menuId: 'menuId',
    menuCategoryName: 'menuCategoryName',
    menuCategoryImageUrl: 'menuCategoryImageUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.MenuItemScalarFieldEnum = {
    menuItemId: 'menuItemId',
    menuCategoryId: 'menuCategoryId',
    menuItemName: 'menuItemName',
    menuItemDesc: 'menuItemDesc',
    menuItemImageUrl: 'menuItemImageUrl',
    price: 'price',
    stockQuantity: 'stockQuantity',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.OrderScalarFieldEnum = {
    orderId: 'orderId',
    customerId: 'customerId',
    restaurantId: 'restaurantId',
    totalAmount: 'totalAmount',
    orderStatus: 'orderStatus',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.PaymentAttemptScalarFieldEnum = {
    idempotencyKey: 'idempotencyKey',
    orderId: 'orderId',
    status: 'status',
    provider: 'provider',
    transactionId: 'transactionId',
    responseData: 'responseData',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.RefundScalarFieldEnum = {
    refundId: 'refundId',
    orderId: 'orderId',
    paymentAttemptId: 'paymentAttemptId',
    refundTransactionId: 'refundTransactionId',
    amount: 'amount',
    status: 'status',
    provider: 'provider',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.ProviderCustomerScalarFieldEnum = {
    providerCustomerId: 'providerCustomerId',
    customerId: 'customerId',
    provider: 'provider',
    externalCustomerId: 'externalCustomerId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.OrderStatusScalarFieldEnum = {
    orderStatusId: 'orderStatusId',
    orderStatusName: 'orderStatusName',
    orderStatusKey: 'orderStatusKey',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.OrderTrackingScalarFieldEnum = {
    orderTrackingId: 'orderTrackingId',
    orderId: 'orderId',
    customerId: 'customerId',
    trackingStatus: 'trackingStatus',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.OrderItemScalarFieldEnum = {
    orderItemId: 'orderItemId',
    orderId: 'orderId',
    menuItemId: 'menuItemId',
    quantity: 'quantity',
    price: 'price',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.PreferredPaymentSettingsScalarFieldEnum = {
    preferredPaymentSettingsId: 'preferredPaymentSettingsId',
    customerId: 'customerId',
    paymentMethodId: 'paymentMethodId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.PaymentMethodScalarFieldEnum = {
    paymentMethodId: 'paymentMethodId',
    paymentMethodName: 'paymentMethodName',
    paymentMethodData: 'paymentMethodData',
    preferredPaymentSettingsId: 'preferredPaymentSettingsId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.RatingScalarFieldEnum = {
    ratingId: 'ratingId',
    customerId: 'customerId',
    restaurantId: 'restaurantId',
    ratingScore: 'ratingScore',
    review: 'review',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.CartEventScalarFieldEnum = {
    id: 'id',
    customerId: 'customerId',
    eventType: 'eventType',
    eventDate: 'eventDate',
    menuItemId: 'menuItemId',
    itemName: 'itemName',
    quantity: 'quantity',
    price: 'price'
};
exports.SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
exports.JsonNullValueInput = {
    JsonNull: exports.JsonNull
};
exports.NullableJsonNullValueInput = {
    DbNull: exports.DbNull,
    JsonNull: exports.JsonNull
};
exports.QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
exports.JsonNullValueFilter = {
    DbNull: exports.DbNull,
    JsonNull: exports.JsonNull,
    AnyNull: exports.AnyNull
};
exports.NullsOrder = {
    first: 'first',
    last: 'last'
};
exports.defineExtension = runtime.Extensions.defineExtension;
//# sourceMappingURL=prismaNamespace.js.map