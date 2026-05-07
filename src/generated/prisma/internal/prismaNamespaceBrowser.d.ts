import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly User: "User";
    readonly Role: "Role";
    readonly UserToken: "UserToken";
    readonly Customer: "Customer";
    readonly Restaurant: "Restaurant";
    readonly Cart: "Cart";
    readonly CartItem: "CartItem";
    readonly Menu: "Menu";
    readonly MenuCategory: "MenuCategory";
    readonly MenuItem: "MenuItem";
    readonly Order: "Order";
    readonly PaymentAttempt: "PaymentAttempt";
    readonly Refund: "Refund";
    readonly ProviderCustomer: "ProviderCustomer";
    readonly OrderStatus: "OrderStatus";
    readonly OrderTracking: "OrderTracking";
    readonly OrderItem: "OrderItem";
    readonly PreferredPaymentSettings: "PreferredPaymentSettings";
    readonly PaymentMethod: "PaymentMethod";
    readonly Rating: "Rating";
    readonly CartEvent: "CartEvent";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const UserScalarFieldEnum: {
    readonly userId: "userId";
    readonly userName: "userName";
    readonly userPassword: "userPassword";
    readonly userEmail: "userEmail";
    readonly isActive: "isActive";
    readonly isConfirmed: "isConfirmed";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly isAdmin: "isAdmin";
    readonly roles: "roles";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const RoleScalarFieldEnum: {
    readonly roleId: "roleId";
    readonly roleName: "roleName";
    readonly roleDesc: "roleDesc";
    readonly roleKey: "roleKey";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum];
export declare const UserTokenScalarFieldEnum: {
    readonly userTokenId: "userTokenId";
    readonly userId: "userId";
    readonly token: "token";
    readonly expiresAt: "expiresAt";
    readonly tokenType: "tokenType";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type UserTokenScalarFieldEnum = (typeof UserTokenScalarFieldEnum)[keyof typeof UserTokenScalarFieldEnum];
export declare const CustomerScalarFieldEnum: {
    readonly customerId: "customerId";
    readonly userId: "userId";
    readonly customerPhone: "customerPhone";
    readonly customerAvatar: "customerAvatar";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly deactivatedAt: "deactivatedAt";
    readonly addresses: "addresses";
    readonly createdById: "createdById";
    readonly updatedById: "updatedById";
};
export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum];
export declare const RestaurantScalarFieldEnum: {
    readonly restaurantId: "restaurantId";
    readonly managerId: "managerId";
    readonly restaurantName: "restaurantName";
    readonly restaurantBio: "restaurantBio";
    readonly restaurantLogo: "restaurantLogo";
    readonly isAvailable: "isAvailable";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly averageRating: "averageRating";
    readonly ratingCount: "ratingCount";
    readonly addresses: "addresses";
};
export type RestaurantScalarFieldEnum = (typeof RestaurantScalarFieldEnum)[keyof typeof RestaurantScalarFieldEnum];
export declare const CartScalarFieldEnum: {
    readonly cartId: "cartId";
    readonly customerId: "customerId";
    readonly isLocked: "isLocked";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type CartScalarFieldEnum = (typeof CartScalarFieldEnum)[keyof typeof CartScalarFieldEnum];
export declare const CartItemScalarFieldEnum: {
    readonly cartItemId: "cartItemId";
    readonly cartId: "cartId";
    readonly menuItemId: "menuItemId";
    readonly quantity: "quantity";
    readonly price: "price";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type CartItemScalarFieldEnum = (typeof CartItemScalarFieldEnum)[keyof typeof CartItemScalarFieldEnum];
export declare const MenuScalarFieldEnum: {
    readonly menuId: "menuId";
    readonly restaurantId: "restaurantId";
    readonly menuDesc: "menuDesc";
    readonly isActive: "isActive";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type MenuScalarFieldEnum = (typeof MenuScalarFieldEnum)[keyof typeof MenuScalarFieldEnum];
export declare const MenuCategoryScalarFieldEnum: {
    readonly menuCategoryId: "menuCategoryId";
    readonly menuId: "menuId";
    readonly menuCategoryName: "menuCategoryName";
    readonly menuCategoryImageUrl: "menuCategoryImageUrl";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type MenuCategoryScalarFieldEnum = (typeof MenuCategoryScalarFieldEnum)[keyof typeof MenuCategoryScalarFieldEnum];
export declare const MenuItemScalarFieldEnum: {
    readonly menuItemId: "menuItemId";
    readonly menuCategoryId: "menuCategoryId";
    readonly menuItemName: "menuItemName";
    readonly menuItemDesc: "menuItemDesc";
    readonly menuItemImageUrl: "menuItemImageUrl";
    readonly price: "price";
    readonly stockQuantity: "stockQuantity";
    readonly isActive: "isActive";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type MenuItemScalarFieldEnum = (typeof MenuItemScalarFieldEnum)[keyof typeof MenuItemScalarFieldEnum];
export declare const OrderScalarFieldEnum: {
    readonly orderId: "orderId";
    readonly customerId: "customerId";
    readonly restaurantId: "restaurantId";
    readonly totalAmount: "totalAmount";
    readonly orderStatus: "orderStatus";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum];
export declare const PaymentAttemptScalarFieldEnum: {
    readonly idempotencyKey: "idempotencyKey";
    readonly orderId: "orderId";
    readonly status: "status";
    readonly provider: "provider";
    readonly transactionId: "transactionId";
    readonly responseData: "responseData";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type PaymentAttemptScalarFieldEnum = (typeof PaymentAttemptScalarFieldEnum)[keyof typeof PaymentAttemptScalarFieldEnum];
export declare const RefundScalarFieldEnum: {
    readonly refundId: "refundId";
    readonly orderId: "orderId";
    readonly paymentAttemptId: "paymentAttemptId";
    readonly refundTransactionId: "refundTransactionId";
    readonly amount: "amount";
    readonly status: "status";
    readonly provider: "provider";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type RefundScalarFieldEnum = (typeof RefundScalarFieldEnum)[keyof typeof RefundScalarFieldEnum];
export declare const ProviderCustomerScalarFieldEnum: {
    readonly providerCustomerId: "providerCustomerId";
    readonly customerId: "customerId";
    readonly provider: "provider";
    readonly externalCustomerId: "externalCustomerId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ProviderCustomerScalarFieldEnum = (typeof ProviderCustomerScalarFieldEnum)[keyof typeof ProviderCustomerScalarFieldEnum];
export declare const OrderStatusScalarFieldEnum: {
    readonly orderStatusId: "orderStatusId";
    readonly orderStatusName: "orderStatusName";
    readonly orderStatusKey: "orderStatusKey";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type OrderStatusScalarFieldEnum = (typeof OrderStatusScalarFieldEnum)[keyof typeof OrderStatusScalarFieldEnum];
export declare const OrderTrackingScalarFieldEnum: {
    readonly orderTrackingId: "orderTrackingId";
    readonly orderId: "orderId";
    readonly customerId: "customerId";
    readonly trackingStatus: "trackingStatus";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type OrderTrackingScalarFieldEnum = (typeof OrderTrackingScalarFieldEnum)[keyof typeof OrderTrackingScalarFieldEnum];
export declare const OrderItemScalarFieldEnum: {
    readonly orderItemId: "orderItemId";
    readonly orderId: "orderId";
    readonly menuItemId: "menuItemId";
    readonly quantity: "quantity";
    readonly price: "price";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type OrderItemScalarFieldEnum = (typeof OrderItemScalarFieldEnum)[keyof typeof OrderItemScalarFieldEnum];
export declare const PreferredPaymentSettingsScalarFieldEnum: {
    readonly preferredPaymentSettingsId: "preferredPaymentSettingsId";
    readonly customerId: "customerId";
    readonly paymentMethodId: "paymentMethodId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type PreferredPaymentSettingsScalarFieldEnum = (typeof PreferredPaymentSettingsScalarFieldEnum)[keyof typeof PreferredPaymentSettingsScalarFieldEnum];
export declare const PaymentMethodScalarFieldEnum: {
    readonly paymentMethodId: "paymentMethodId";
    readonly paymentMethodName: "paymentMethodName";
    readonly paymentMethodData: "paymentMethodData";
    readonly preferredPaymentSettingsId: "preferredPaymentSettingsId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type PaymentMethodScalarFieldEnum = (typeof PaymentMethodScalarFieldEnum)[keyof typeof PaymentMethodScalarFieldEnum];
export declare const RatingScalarFieldEnum: {
    readonly ratingId: "ratingId";
    readonly customerId: "customerId";
    readonly restaurantId: "restaurantId";
    readonly ratingScore: "ratingScore";
    readonly review: "review";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type RatingScalarFieldEnum = (typeof RatingScalarFieldEnum)[keyof typeof RatingScalarFieldEnum];
export declare const CartEventScalarFieldEnum: {
    readonly id: "id";
    readonly customerId: "customerId";
    readonly eventType: "eventType";
    readonly eventDate: "eventDate";
    readonly menuItemId: "menuItemId";
    readonly itemName: "itemName";
    readonly quantity: "quantity";
    readonly price: "price";
};
export type CartEventScalarFieldEnum = (typeof CartEventScalarFieldEnum)[keyof typeof CartEventScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const JsonNullValueInput: {
    readonly JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
};
export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput];
export declare const NullableJsonNullValueInput: {
    readonly DbNull: import("@prisma/client-runtime-utils").DbNullClass;
    readonly JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
};
export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const JsonNullValueFilter: {
    readonly DbNull: import("@prisma/client-runtime-utils").DbNullClass;
    readonly JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
    readonly AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
};
export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
