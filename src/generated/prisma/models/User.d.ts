import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type UserModel = runtime.Types.Result.DefaultSelection<Prisma.$UserPayload>;
export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
export type UserMinAggregateOutputType = {
    userId: string | null;
    userName: string | null;
    userPassword: string | null;
    userEmail: string | null;
    isActive: boolean | null;
    isConfirmed: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    isAdmin: boolean | null;
};
export type UserMaxAggregateOutputType = {
    userId: string | null;
    userName: string | null;
    userPassword: string | null;
    userEmail: string | null;
    isActive: boolean | null;
    isConfirmed: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    isAdmin: boolean | null;
};
export type UserCountAggregateOutputType = {
    userId: number;
    userName: number;
    userPassword: number;
    userEmail: number;
    isActive: number;
    isConfirmed: number;
    createdAt: number;
    updatedAt: number;
    isAdmin: number;
    roles: number;
    _all: number;
};
export type UserMinAggregateInputType = {
    userId?: true;
    userName?: true;
    userPassword?: true;
    userEmail?: true;
    isActive?: true;
    isConfirmed?: true;
    createdAt?: true;
    updatedAt?: true;
    isAdmin?: true;
};
export type UserMaxAggregateInputType = {
    userId?: true;
    userName?: true;
    userPassword?: true;
    userEmail?: true;
    isActive?: true;
    isConfirmed?: true;
    createdAt?: true;
    updatedAt?: true;
    isAdmin?: true;
};
export type UserCountAggregateInputType = {
    userId?: true;
    userName?: true;
    userPassword?: true;
    userEmail?: true;
    isActive?: true;
    isConfirmed?: true;
    createdAt?: true;
    updatedAt?: true;
    isAdmin?: true;
    roles?: true;
    _all?: true;
};
export type UserAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | UserCountAggregateInputType;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
};
export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUser[P]> : Prisma.GetScalarType<T[P], AggregateUser[P]>;
};
export type UserGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithAggregationInput | Prisma.UserOrderByWithAggregationInput[];
    by: Prisma.UserScalarFieldEnum[] | Prisma.UserScalarFieldEnum;
    having?: Prisma.UserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
};
export type UserGroupByOutputType = {
    userId: string;
    userName: string;
    userPassword: string;
    userEmail: string;
    isActive: boolean;
    isConfirmed: boolean;
    createdAt: Date;
    updatedAt: Date;
    isAdmin: boolean;
    roles: runtime.JsonValue;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
export type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UserGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]>;
}>>;
export type UserWhereInput = {
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    userId?: Prisma.StringFilter<"User"> | string;
    userName?: Prisma.StringFilter<"User"> | string;
    userPassword?: Prisma.StringFilter<"User"> | string;
    userEmail?: Prisma.StringFilter<"User"> | string;
    isActive?: Prisma.BoolFilter<"User"> | boolean;
    isConfirmed?: Prisma.BoolFilter<"User"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    isAdmin?: Prisma.BoolFilter<"User"> | boolean;
    roles?: Prisma.JsonFilter<"User">;
    customer?: Prisma.XOR<Prisma.CustomerNullableScalarRelationFilter, Prisma.CustomerWhereInput> | null;
    restaurant?: Prisma.XOR<Prisma.RestaurantNullableScalarRelationFilter, Prisma.RestaurantWhereInput> | null;
    userToken?: Prisma.UserTokenListRelationFilter;
    createdCustomers?: Prisma.CustomerListRelationFilter;
    updatedCustomers?: Prisma.CustomerListRelationFilter;
};
export type UserOrderByWithRelationInput = {
    userId?: Prisma.SortOrder;
    userName?: Prisma.SortOrder;
    userPassword?: Prisma.SortOrder;
    userEmail?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    isConfirmed?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    isAdmin?: Prisma.SortOrder;
    roles?: Prisma.SortOrder;
    customer?: Prisma.CustomerOrderByWithRelationInput;
    restaurant?: Prisma.RestaurantOrderByWithRelationInput;
    userToken?: Prisma.UserTokenOrderByRelationAggregateInput;
    createdCustomers?: Prisma.CustomerOrderByRelationAggregateInput;
    updatedCustomers?: Prisma.CustomerOrderByRelationAggregateInput;
};
export type UserWhereUniqueInput = Prisma.AtLeast<{
    userId?: string;
    userEmail?: string;
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    userName?: Prisma.StringFilter<"User"> | string;
    userPassword?: Prisma.StringFilter<"User"> | string;
    isActive?: Prisma.BoolFilter<"User"> | boolean;
    isConfirmed?: Prisma.BoolFilter<"User"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    isAdmin?: Prisma.BoolFilter<"User"> | boolean;
    roles?: Prisma.JsonFilter<"User">;
    customer?: Prisma.XOR<Prisma.CustomerNullableScalarRelationFilter, Prisma.CustomerWhereInput> | null;
    restaurant?: Prisma.XOR<Prisma.RestaurantNullableScalarRelationFilter, Prisma.RestaurantWhereInput> | null;
    userToken?: Prisma.UserTokenListRelationFilter;
    createdCustomers?: Prisma.CustomerListRelationFilter;
    updatedCustomers?: Prisma.CustomerListRelationFilter;
}, "userId" | "userEmail">;
export type UserOrderByWithAggregationInput = {
    userId?: Prisma.SortOrder;
    userName?: Prisma.SortOrder;
    userPassword?: Prisma.SortOrder;
    userEmail?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    isConfirmed?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    isAdmin?: Prisma.SortOrder;
    roles?: Prisma.SortOrder;
    _count?: Prisma.UserCountOrderByAggregateInput;
    _max?: Prisma.UserMaxOrderByAggregateInput;
    _min?: Prisma.UserMinOrderByAggregateInput;
};
export type UserScalarWhereWithAggregatesInput = {
    AND?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    OR?: Prisma.UserScalarWhereWithAggregatesInput[];
    NOT?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    userId?: Prisma.StringWithAggregatesFilter<"User"> | string;
    userName?: Prisma.StringWithAggregatesFilter<"User"> | string;
    userPassword?: Prisma.StringWithAggregatesFilter<"User"> | string;
    userEmail?: Prisma.StringWithAggregatesFilter<"User"> | string;
    isActive?: Prisma.BoolWithAggregatesFilter<"User"> | boolean;
    isConfirmed?: Prisma.BoolWithAggregatesFilter<"User"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"User"> | Date | string;
    isAdmin?: Prisma.BoolWithAggregatesFilter<"User"> | boolean;
    roles?: Prisma.JsonWithAggregatesFilter<"User">;
};
export type UserCreateInput = {
    userId?: string;
    userName: string;
    userPassword: string;
    userEmail: string;
    isActive?: boolean;
    isConfirmed?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    isAdmin?: boolean;
    roles?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    customer?: Prisma.CustomerCreateNestedOneWithoutUserInput;
    restaurant?: Prisma.RestaurantCreateNestedOneWithoutManagerInput;
    userToken?: Prisma.UserTokenCreateNestedManyWithoutUserInput;
    createdCustomers?: Prisma.CustomerCreateNestedManyWithoutCreatedByInput;
    updatedCustomers?: Prisma.CustomerCreateNestedManyWithoutUpdatedByInput;
};
export type UserUncheckedCreateInput = {
    userId?: string;
    userName: string;
    userPassword: string;
    userEmail: string;
    isActive?: boolean;
    isConfirmed?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    isAdmin?: boolean;
    roles?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    customer?: Prisma.CustomerUncheckedCreateNestedOneWithoutUserInput;
    restaurant?: Prisma.RestaurantUncheckedCreateNestedOneWithoutManagerInput;
    userToken?: Prisma.UserTokenUncheckedCreateNestedManyWithoutUserInput;
    createdCustomers?: Prisma.CustomerUncheckedCreateNestedManyWithoutCreatedByInput;
    updatedCustomers?: Prisma.CustomerUncheckedCreateNestedManyWithoutUpdatedByInput;
};
export type UserUpdateInput = {
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    userName?: Prisma.StringFieldUpdateOperationsInput | string;
    userPassword?: Prisma.StringFieldUpdateOperationsInput | string;
    userEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isConfirmed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isAdmin?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    roles?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    customer?: Prisma.CustomerUpdateOneWithoutUserNestedInput;
    restaurant?: Prisma.RestaurantUpdateOneWithoutManagerNestedInput;
    userToken?: Prisma.UserTokenUpdateManyWithoutUserNestedInput;
    createdCustomers?: Prisma.CustomerUpdateManyWithoutCreatedByNestedInput;
    updatedCustomers?: Prisma.CustomerUpdateManyWithoutUpdatedByNestedInput;
};
export type UserUncheckedUpdateInput = {
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    userName?: Prisma.StringFieldUpdateOperationsInput | string;
    userPassword?: Prisma.StringFieldUpdateOperationsInput | string;
    userEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isConfirmed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isAdmin?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    roles?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    customer?: Prisma.CustomerUncheckedUpdateOneWithoutUserNestedInput;
    restaurant?: Prisma.RestaurantUncheckedUpdateOneWithoutManagerNestedInput;
    userToken?: Prisma.UserTokenUncheckedUpdateManyWithoutUserNestedInput;
    createdCustomers?: Prisma.CustomerUncheckedUpdateManyWithoutCreatedByNestedInput;
    updatedCustomers?: Prisma.CustomerUncheckedUpdateManyWithoutUpdatedByNestedInput;
};
export type UserCreateManyInput = {
    userId?: string;
    userName: string;
    userPassword: string;
    userEmail: string;
    isActive?: boolean;
    isConfirmed?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    isAdmin?: boolean;
    roles?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
};
export type UserUpdateManyMutationInput = {
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    userName?: Prisma.StringFieldUpdateOperationsInput | string;
    userPassword?: Prisma.StringFieldUpdateOperationsInput | string;
    userEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isConfirmed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isAdmin?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    roles?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
};
export type UserUncheckedUpdateManyInput = {
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    userName?: Prisma.StringFieldUpdateOperationsInput | string;
    userPassword?: Prisma.StringFieldUpdateOperationsInput | string;
    userEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isConfirmed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isAdmin?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    roles?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
};
export type UserCountOrderByAggregateInput = {
    userId?: Prisma.SortOrder;
    userName?: Prisma.SortOrder;
    userPassword?: Prisma.SortOrder;
    userEmail?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    isConfirmed?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    isAdmin?: Prisma.SortOrder;
    roles?: Prisma.SortOrder;
};
export type UserMaxOrderByAggregateInput = {
    userId?: Prisma.SortOrder;
    userName?: Prisma.SortOrder;
    userPassword?: Prisma.SortOrder;
    userEmail?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    isConfirmed?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    isAdmin?: Prisma.SortOrder;
};
export type UserMinOrderByAggregateInput = {
    userId?: Prisma.SortOrder;
    userName?: Prisma.SortOrder;
    userPassword?: Prisma.SortOrder;
    userEmail?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    isConfirmed?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    isAdmin?: Prisma.SortOrder;
};
export type UserScalarRelationFilter = {
    is?: Prisma.UserWhereInput;
    isNot?: Prisma.UserWhereInput;
};
export type UserNullableScalarRelationFilter = {
    is?: Prisma.UserWhereInput | null;
    isNot?: Prisma.UserWhereInput | null;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type UserCreateNestedOneWithoutUserTokenInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutUserTokenInput, Prisma.UserUncheckedCreateWithoutUserTokenInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutUserTokenInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutUserTokenNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutUserTokenInput, Prisma.UserUncheckedCreateWithoutUserTokenInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutUserTokenInput;
    upsert?: Prisma.UserUpsertWithoutUserTokenInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutUserTokenInput, Prisma.UserUpdateWithoutUserTokenInput>, Prisma.UserUncheckedUpdateWithoutUserTokenInput>;
};
export type UserCreateNestedOneWithoutCustomerInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutCustomerInput, Prisma.UserUncheckedCreateWithoutCustomerInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutCustomerInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserCreateNestedOneWithoutCreatedCustomersInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutCreatedCustomersInput, Prisma.UserUncheckedCreateWithoutCreatedCustomersInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutCreatedCustomersInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserCreateNestedOneWithoutUpdatedCustomersInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutUpdatedCustomersInput, Prisma.UserUncheckedCreateWithoutUpdatedCustomersInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutUpdatedCustomersInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutCustomerNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutCustomerInput, Prisma.UserUncheckedCreateWithoutCustomerInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutCustomerInput;
    upsert?: Prisma.UserUpsertWithoutCustomerInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutCustomerInput, Prisma.UserUpdateWithoutCustomerInput>, Prisma.UserUncheckedUpdateWithoutCustomerInput>;
};
export type UserUpdateOneWithoutCreatedCustomersNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutCreatedCustomersInput, Prisma.UserUncheckedCreateWithoutCreatedCustomersInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutCreatedCustomersInput;
    upsert?: Prisma.UserUpsertWithoutCreatedCustomersInput;
    disconnect?: Prisma.UserWhereInput | boolean;
    delete?: Prisma.UserWhereInput | boolean;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutCreatedCustomersInput, Prisma.UserUpdateWithoutCreatedCustomersInput>, Prisma.UserUncheckedUpdateWithoutCreatedCustomersInput>;
};
export type UserUpdateOneWithoutUpdatedCustomersNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutUpdatedCustomersInput, Prisma.UserUncheckedCreateWithoutUpdatedCustomersInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutUpdatedCustomersInput;
    upsert?: Prisma.UserUpsertWithoutUpdatedCustomersInput;
    disconnect?: Prisma.UserWhereInput | boolean;
    delete?: Prisma.UserWhereInput | boolean;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutUpdatedCustomersInput, Prisma.UserUpdateWithoutUpdatedCustomersInput>, Prisma.UserUncheckedUpdateWithoutUpdatedCustomersInput>;
};
export type UserCreateNestedOneWithoutRestaurantInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutRestaurantInput, Prisma.UserUncheckedCreateWithoutRestaurantInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutRestaurantInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutRestaurantNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutRestaurantInput, Prisma.UserUncheckedCreateWithoutRestaurantInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutRestaurantInput;
    upsert?: Prisma.UserUpsertWithoutRestaurantInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutRestaurantInput, Prisma.UserUpdateWithoutRestaurantInput>, Prisma.UserUncheckedUpdateWithoutRestaurantInput>;
};
export type UserCreateWithoutUserTokenInput = {
    userId?: string;
    userName: string;
    userPassword: string;
    userEmail: string;
    isActive?: boolean;
    isConfirmed?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    isAdmin?: boolean;
    roles?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    customer?: Prisma.CustomerCreateNestedOneWithoutUserInput;
    restaurant?: Prisma.RestaurantCreateNestedOneWithoutManagerInput;
    createdCustomers?: Prisma.CustomerCreateNestedManyWithoutCreatedByInput;
    updatedCustomers?: Prisma.CustomerCreateNestedManyWithoutUpdatedByInput;
};
export type UserUncheckedCreateWithoutUserTokenInput = {
    userId?: string;
    userName: string;
    userPassword: string;
    userEmail: string;
    isActive?: boolean;
    isConfirmed?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    isAdmin?: boolean;
    roles?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    customer?: Prisma.CustomerUncheckedCreateNestedOneWithoutUserInput;
    restaurant?: Prisma.RestaurantUncheckedCreateNestedOneWithoutManagerInput;
    createdCustomers?: Prisma.CustomerUncheckedCreateNestedManyWithoutCreatedByInput;
    updatedCustomers?: Prisma.CustomerUncheckedCreateNestedManyWithoutUpdatedByInput;
};
export type UserCreateOrConnectWithoutUserTokenInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutUserTokenInput, Prisma.UserUncheckedCreateWithoutUserTokenInput>;
};
export type UserUpsertWithoutUserTokenInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutUserTokenInput, Prisma.UserUncheckedUpdateWithoutUserTokenInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutUserTokenInput, Prisma.UserUncheckedCreateWithoutUserTokenInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutUserTokenInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutUserTokenInput, Prisma.UserUncheckedUpdateWithoutUserTokenInput>;
};
export type UserUpdateWithoutUserTokenInput = {
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    userName?: Prisma.StringFieldUpdateOperationsInput | string;
    userPassword?: Prisma.StringFieldUpdateOperationsInput | string;
    userEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isConfirmed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isAdmin?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    roles?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    customer?: Prisma.CustomerUpdateOneWithoutUserNestedInput;
    restaurant?: Prisma.RestaurantUpdateOneWithoutManagerNestedInput;
    createdCustomers?: Prisma.CustomerUpdateManyWithoutCreatedByNestedInput;
    updatedCustomers?: Prisma.CustomerUpdateManyWithoutUpdatedByNestedInput;
};
export type UserUncheckedUpdateWithoutUserTokenInput = {
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    userName?: Prisma.StringFieldUpdateOperationsInput | string;
    userPassword?: Prisma.StringFieldUpdateOperationsInput | string;
    userEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isConfirmed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isAdmin?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    roles?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    customer?: Prisma.CustomerUncheckedUpdateOneWithoutUserNestedInput;
    restaurant?: Prisma.RestaurantUncheckedUpdateOneWithoutManagerNestedInput;
    createdCustomers?: Prisma.CustomerUncheckedUpdateManyWithoutCreatedByNestedInput;
    updatedCustomers?: Prisma.CustomerUncheckedUpdateManyWithoutUpdatedByNestedInput;
};
export type UserCreateWithoutCustomerInput = {
    userId?: string;
    userName: string;
    userPassword: string;
    userEmail: string;
    isActive?: boolean;
    isConfirmed?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    isAdmin?: boolean;
    roles?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    restaurant?: Prisma.RestaurantCreateNestedOneWithoutManagerInput;
    userToken?: Prisma.UserTokenCreateNestedManyWithoutUserInput;
    createdCustomers?: Prisma.CustomerCreateNestedManyWithoutCreatedByInput;
    updatedCustomers?: Prisma.CustomerCreateNestedManyWithoutUpdatedByInput;
};
export type UserUncheckedCreateWithoutCustomerInput = {
    userId?: string;
    userName: string;
    userPassword: string;
    userEmail: string;
    isActive?: boolean;
    isConfirmed?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    isAdmin?: boolean;
    roles?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    restaurant?: Prisma.RestaurantUncheckedCreateNestedOneWithoutManagerInput;
    userToken?: Prisma.UserTokenUncheckedCreateNestedManyWithoutUserInput;
    createdCustomers?: Prisma.CustomerUncheckedCreateNestedManyWithoutCreatedByInput;
    updatedCustomers?: Prisma.CustomerUncheckedCreateNestedManyWithoutUpdatedByInput;
};
export type UserCreateOrConnectWithoutCustomerInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutCustomerInput, Prisma.UserUncheckedCreateWithoutCustomerInput>;
};
export type UserCreateWithoutCreatedCustomersInput = {
    userId?: string;
    userName: string;
    userPassword: string;
    userEmail: string;
    isActive?: boolean;
    isConfirmed?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    isAdmin?: boolean;
    roles?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    customer?: Prisma.CustomerCreateNestedOneWithoutUserInput;
    restaurant?: Prisma.RestaurantCreateNestedOneWithoutManagerInput;
    userToken?: Prisma.UserTokenCreateNestedManyWithoutUserInput;
    updatedCustomers?: Prisma.CustomerCreateNestedManyWithoutUpdatedByInput;
};
export type UserUncheckedCreateWithoutCreatedCustomersInput = {
    userId?: string;
    userName: string;
    userPassword: string;
    userEmail: string;
    isActive?: boolean;
    isConfirmed?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    isAdmin?: boolean;
    roles?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    customer?: Prisma.CustomerUncheckedCreateNestedOneWithoutUserInput;
    restaurant?: Prisma.RestaurantUncheckedCreateNestedOneWithoutManagerInput;
    userToken?: Prisma.UserTokenUncheckedCreateNestedManyWithoutUserInput;
    updatedCustomers?: Prisma.CustomerUncheckedCreateNestedManyWithoutUpdatedByInput;
};
export type UserCreateOrConnectWithoutCreatedCustomersInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutCreatedCustomersInput, Prisma.UserUncheckedCreateWithoutCreatedCustomersInput>;
};
export type UserCreateWithoutUpdatedCustomersInput = {
    userId?: string;
    userName: string;
    userPassword: string;
    userEmail: string;
    isActive?: boolean;
    isConfirmed?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    isAdmin?: boolean;
    roles?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    customer?: Prisma.CustomerCreateNestedOneWithoutUserInput;
    restaurant?: Prisma.RestaurantCreateNestedOneWithoutManagerInput;
    userToken?: Prisma.UserTokenCreateNestedManyWithoutUserInput;
    createdCustomers?: Prisma.CustomerCreateNestedManyWithoutCreatedByInput;
};
export type UserUncheckedCreateWithoutUpdatedCustomersInput = {
    userId?: string;
    userName: string;
    userPassword: string;
    userEmail: string;
    isActive?: boolean;
    isConfirmed?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    isAdmin?: boolean;
    roles?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    customer?: Prisma.CustomerUncheckedCreateNestedOneWithoutUserInput;
    restaurant?: Prisma.RestaurantUncheckedCreateNestedOneWithoutManagerInput;
    userToken?: Prisma.UserTokenUncheckedCreateNestedManyWithoutUserInput;
    createdCustomers?: Prisma.CustomerUncheckedCreateNestedManyWithoutCreatedByInput;
};
export type UserCreateOrConnectWithoutUpdatedCustomersInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutUpdatedCustomersInput, Prisma.UserUncheckedCreateWithoutUpdatedCustomersInput>;
};
export type UserUpsertWithoutCustomerInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutCustomerInput, Prisma.UserUncheckedUpdateWithoutCustomerInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutCustomerInput, Prisma.UserUncheckedCreateWithoutCustomerInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutCustomerInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutCustomerInput, Prisma.UserUncheckedUpdateWithoutCustomerInput>;
};
export type UserUpdateWithoutCustomerInput = {
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    userName?: Prisma.StringFieldUpdateOperationsInput | string;
    userPassword?: Prisma.StringFieldUpdateOperationsInput | string;
    userEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isConfirmed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isAdmin?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    roles?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    restaurant?: Prisma.RestaurantUpdateOneWithoutManagerNestedInput;
    userToken?: Prisma.UserTokenUpdateManyWithoutUserNestedInput;
    createdCustomers?: Prisma.CustomerUpdateManyWithoutCreatedByNestedInput;
    updatedCustomers?: Prisma.CustomerUpdateManyWithoutUpdatedByNestedInput;
};
export type UserUncheckedUpdateWithoutCustomerInput = {
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    userName?: Prisma.StringFieldUpdateOperationsInput | string;
    userPassword?: Prisma.StringFieldUpdateOperationsInput | string;
    userEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isConfirmed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isAdmin?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    roles?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    restaurant?: Prisma.RestaurantUncheckedUpdateOneWithoutManagerNestedInput;
    userToken?: Prisma.UserTokenUncheckedUpdateManyWithoutUserNestedInput;
    createdCustomers?: Prisma.CustomerUncheckedUpdateManyWithoutCreatedByNestedInput;
    updatedCustomers?: Prisma.CustomerUncheckedUpdateManyWithoutUpdatedByNestedInput;
};
export type UserUpsertWithoutCreatedCustomersInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutCreatedCustomersInput, Prisma.UserUncheckedUpdateWithoutCreatedCustomersInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutCreatedCustomersInput, Prisma.UserUncheckedCreateWithoutCreatedCustomersInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutCreatedCustomersInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutCreatedCustomersInput, Prisma.UserUncheckedUpdateWithoutCreatedCustomersInput>;
};
export type UserUpdateWithoutCreatedCustomersInput = {
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    userName?: Prisma.StringFieldUpdateOperationsInput | string;
    userPassword?: Prisma.StringFieldUpdateOperationsInput | string;
    userEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isConfirmed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isAdmin?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    roles?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    customer?: Prisma.CustomerUpdateOneWithoutUserNestedInput;
    restaurant?: Prisma.RestaurantUpdateOneWithoutManagerNestedInput;
    userToken?: Prisma.UserTokenUpdateManyWithoutUserNestedInput;
    updatedCustomers?: Prisma.CustomerUpdateManyWithoutUpdatedByNestedInput;
};
export type UserUncheckedUpdateWithoutCreatedCustomersInput = {
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    userName?: Prisma.StringFieldUpdateOperationsInput | string;
    userPassword?: Prisma.StringFieldUpdateOperationsInput | string;
    userEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isConfirmed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isAdmin?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    roles?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    customer?: Prisma.CustomerUncheckedUpdateOneWithoutUserNestedInput;
    restaurant?: Prisma.RestaurantUncheckedUpdateOneWithoutManagerNestedInput;
    userToken?: Prisma.UserTokenUncheckedUpdateManyWithoutUserNestedInput;
    updatedCustomers?: Prisma.CustomerUncheckedUpdateManyWithoutUpdatedByNestedInput;
};
export type UserUpsertWithoutUpdatedCustomersInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutUpdatedCustomersInput, Prisma.UserUncheckedUpdateWithoutUpdatedCustomersInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutUpdatedCustomersInput, Prisma.UserUncheckedCreateWithoutUpdatedCustomersInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutUpdatedCustomersInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutUpdatedCustomersInput, Prisma.UserUncheckedUpdateWithoutUpdatedCustomersInput>;
};
export type UserUpdateWithoutUpdatedCustomersInput = {
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    userName?: Prisma.StringFieldUpdateOperationsInput | string;
    userPassword?: Prisma.StringFieldUpdateOperationsInput | string;
    userEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isConfirmed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isAdmin?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    roles?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    customer?: Prisma.CustomerUpdateOneWithoutUserNestedInput;
    restaurant?: Prisma.RestaurantUpdateOneWithoutManagerNestedInput;
    userToken?: Prisma.UserTokenUpdateManyWithoutUserNestedInput;
    createdCustomers?: Prisma.CustomerUpdateManyWithoutCreatedByNestedInput;
};
export type UserUncheckedUpdateWithoutUpdatedCustomersInput = {
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    userName?: Prisma.StringFieldUpdateOperationsInput | string;
    userPassword?: Prisma.StringFieldUpdateOperationsInput | string;
    userEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isConfirmed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isAdmin?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    roles?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    customer?: Prisma.CustomerUncheckedUpdateOneWithoutUserNestedInput;
    restaurant?: Prisma.RestaurantUncheckedUpdateOneWithoutManagerNestedInput;
    userToken?: Prisma.UserTokenUncheckedUpdateManyWithoutUserNestedInput;
    createdCustomers?: Prisma.CustomerUncheckedUpdateManyWithoutCreatedByNestedInput;
};
export type UserCreateWithoutRestaurantInput = {
    userId?: string;
    userName: string;
    userPassword: string;
    userEmail: string;
    isActive?: boolean;
    isConfirmed?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    isAdmin?: boolean;
    roles?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    customer?: Prisma.CustomerCreateNestedOneWithoutUserInput;
    userToken?: Prisma.UserTokenCreateNestedManyWithoutUserInput;
    createdCustomers?: Prisma.CustomerCreateNestedManyWithoutCreatedByInput;
    updatedCustomers?: Prisma.CustomerCreateNestedManyWithoutUpdatedByInput;
};
export type UserUncheckedCreateWithoutRestaurantInput = {
    userId?: string;
    userName: string;
    userPassword: string;
    userEmail: string;
    isActive?: boolean;
    isConfirmed?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    isAdmin?: boolean;
    roles?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    customer?: Prisma.CustomerUncheckedCreateNestedOneWithoutUserInput;
    userToken?: Prisma.UserTokenUncheckedCreateNestedManyWithoutUserInput;
    createdCustomers?: Prisma.CustomerUncheckedCreateNestedManyWithoutCreatedByInput;
    updatedCustomers?: Prisma.CustomerUncheckedCreateNestedManyWithoutUpdatedByInput;
};
export type UserCreateOrConnectWithoutRestaurantInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutRestaurantInput, Prisma.UserUncheckedCreateWithoutRestaurantInput>;
};
export type UserUpsertWithoutRestaurantInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutRestaurantInput, Prisma.UserUncheckedUpdateWithoutRestaurantInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutRestaurantInput, Prisma.UserUncheckedCreateWithoutRestaurantInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutRestaurantInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutRestaurantInput, Prisma.UserUncheckedUpdateWithoutRestaurantInput>;
};
export type UserUpdateWithoutRestaurantInput = {
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    userName?: Prisma.StringFieldUpdateOperationsInput | string;
    userPassword?: Prisma.StringFieldUpdateOperationsInput | string;
    userEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isConfirmed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isAdmin?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    roles?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    customer?: Prisma.CustomerUpdateOneWithoutUserNestedInput;
    userToken?: Prisma.UserTokenUpdateManyWithoutUserNestedInput;
    createdCustomers?: Prisma.CustomerUpdateManyWithoutCreatedByNestedInput;
    updatedCustomers?: Prisma.CustomerUpdateManyWithoutUpdatedByNestedInput;
};
export type UserUncheckedUpdateWithoutRestaurantInput = {
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    userName?: Prisma.StringFieldUpdateOperationsInput | string;
    userPassword?: Prisma.StringFieldUpdateOperationsInput | string;
    userEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isConfirmed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isAdmin?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    roles?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    customer?: Prisma.CustomerUncheckedUpdateOneWithoutUserNestedInput;
    userToken?: Prisma.UserTokenUncheckedUpdateManyWithoutUserNestedInput;
    createdCustomers?: Prisma.CustomerUncheckedUpdateManyWithoutCreatedByNestedInput;
    updatedCustomers?: Prisma.CustomerUncheckedUpdateManyWithoutUpdatedByNestedInput;
};
export type UserCountOutputType = {
    userToken: number;
    createdCustomers: number;
    updatedCustomers: number;
};
export type UserCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    userToken?: boolean | UserCountOutputTypeCountUserTokenArgs;
    createdCustomers?: boolean | UserCountOutputTypeCountCreatedCustomersArgs;
    updatedCustomers?: boolean | UserCountOutputTypeCountUpdatedCustomersArgs;
};
export type UserCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserCountOutputTypeSelect<ExtArgs> | null;
};
export type UserCountOutputTypeCountUserTokenArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserTokenWhereInput;
};
export type UserCountOutputTypeCountCreatedCustomersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CustomerWhereInput;
};
export type UserCountOutputTypeCountUpdatedCustomersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CustomerWhereInput;
};
export type UserSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    userId?: boolean;
    userName?: boolean;
    userPassword?: boolean;
    userEmail?: boolean;
    isActive?: boolean;
    isConfirmed?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    isAdmin?: boolean;
    roles?: boolean;
    customer?: boolean | Prisma.User$customerArgs<ExtArgs>;
    restaurant?: boolean | Prisma.User$restaurantArgs<ExtArgs>;
    userToken?: boolean | Prisma.User$userTokenArgs<ExtArgs>;
    createdCustomers?: boolean | Prisma.User$createdCustomersArgs<ExtArgs>;
    updatedCustomers?: boolean | Prisma.User$updatedCustomersArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["user"]>;
export type UserSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    userId?: boolean;
    userName?: boolean;
    userPassword?: boolean;
    userEmail?: boolean;
    isActive?: boolean;
    isConfirmed?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    isAdmin?: boolean;
    roles?: boolean;
}, ExtArgs["result"]["user"]>;
export type UserSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    userId?: boolean;
    userName?: boolean;
    userPassword?: boolean;
    userEmail?: boolean;
    isActive?: boolean;
    isConfirmed?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    isAdmin?: boolean;
    roles?: boolean;
}, ExtArgs["result"]["user"]>;
export type UserSelectScalar = {
    userId?: boolean;
    userName?: boolean;
    userPassword?: boolean;
    userEmail?: boolean;
    isActive?: boolean;
    isConfirmed?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    isAdmin?: boolean;
    roles?: boolean;
};
export type UserOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"userId" | "userName" | "userPassword" | "userEmail" | "isActive" | "isConfirmed" | "createdAt" | "updatedAt" | "isAdmin" | "roles", ExtArgs["result"]["user"]>;
export type UserInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customer?: boolean | Prisma.User$customerArgs<ExtArgs>;
    restaurant?: boolean | Prisma.User$restaurantArgs<ExtArgs>;
    userToken?: boolean | Prisma.User$userTokenArgs<ExtArgs>;
    createdCustomers?: boolean | Prisma.User$createdCustomersArgs<ExtArgs>;
    updatedCustomers?: boolean | Prisma.User$updatedCustomersArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
};
export type UserIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type UserIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $UserPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "User";
    objects: {
        customer: Prisma.$CustomerPayload<ExtArgs> | null;
        restaurant: Prisma.$RestaurantPayload<ExtArgs> | null;
        userToken: Prisma.$UserTokenPayload<ExtArgs>[];
        createdCustomers: Prisma.$CustomerPayload<ExtArgs>[];
        updatedCustomers: Prisma.$CustomerPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        userId: string;
        userName: string;
        userPassword: string;
        userEmail: string;
        isActive: boolean;
        isConfirmed: boolean;
        createdAt: Date;
        updatedAt: Date;
        isAdmin: boolean;
        roles: runtime.JsonValue;
    }, ExtArgs["result"]["user"]>;
    composites: {};
};
export type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$UserPayload, S>;
export type UserCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserCountAggregateInputType | true;
};
export interface UserDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['User'];
        meta: {
            name: 'User';
        };
    };
    findUnique<T extends UserFindUniqueArgs>(args: Prisma.SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends UserFindFirstArgs>(args?: Prisma.SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends UserFindManyArgs>(args?: Prisma.SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends UserCreateArgs>(args: Prisma.SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends UserCreateManyArgs>(args?: Prisma.SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends UserDeleteArgs>(args: Prisma.SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends UserUpdateArgs>(args: Prisma.SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends UserDeleteManyArgs>(args?: Prisma.SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends UserUpdateManyArgs>(args: Prisma.SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends UserUpsertArgs>(args: Prisma.SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends UserCountArgs>(args?: Prisma.Subset<T, UserCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UserCountAggregateOutputType> : number>;
    aggregate<T extends UserAggregateArgs>(args: Prisma.Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>;
    groupBy<T extends UserGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: UserGroupByArgs['orderBy'];
    } : {
        orderBy?: UserGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: UserFieldRefs;
}
export interface Prisma__UserClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    customer<T extends Prisma.User$customerArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$customerArgs<ExtArgs>>): Prisma.Prisma__CustomerClient<runtime.Types.Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    restaurant<T extends Prisma.User$restaurantArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$restaurantArgs<ExtArgs>>): Prisma.Prisma__RestaurantClient<runtime.Types.Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    userToken<T extends Prisma.User$userTokenArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$userTokenArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    createdCustomers<T extends Prisma.User$createdCustomersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$createdCustomersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    updatedCustomers<T extends Prisma.User$updatedCustomersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$updatedCustomersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface UserFieldRefs {
    readonly userId: Prisma.FieldRef<"User", 'String'>;
    readonly userName: Prisma.FieldRef<"User", 'String'>;
    readonly userPassword: Prisma.FieldRef<"User", 'String'>;
    readonly userEmail: Prisma.FieldRef<"User", 'String'>;
    readonly isActive: Prisma.FieldRef<"User", 'Boolean'>;
    readonly isConfirmed: Prisma.FieldRef<"User", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"User", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"User", 'DateTime'>;
    readonly isAdmin: Prisma.FieldRef<"User", 'Boolean'>;
    readonly roles: Prisma.FieldRef<"User", 'Json'>;
}
export type UserFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
};
export type UserFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
};
export type UserFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type UserFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type UserFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type UserCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
};
export type UserCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
    skipDuplicates?: boolean;
};
export type UserCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
    skipDuplicates?: boolean;
};
export type UserUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
    where: Prisma.UserWhereUniqueInput;
};
export type UserUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
    where?: Prisma.UserWhereInput;
    limit?: number;
};
export type UserUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
    where?: Prisma.UserWhereInput;
    limit?: number;
};
export type UserUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
};
export type UserDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
};
export type UserDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    limit?: number;
};
export type User$customerArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerSelect<ExtArgs> | null;
    omit?: Prisma.CustomerOmit<ExtArgs> | null;
    include?: Prisma.CustomerInclude<ExtArgs> | null;
    where?: Prisma.CustomerWhereInput;
};
export type User$restaurantArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RestaurantSelect<ExtArgs> | null;
    omit?: Prisma.RestaurantOmit<ExtArgs> | null;
    include?: Prisma.RestaurantInclude<ExtArgs> | null;
    where?: Prisma.RestaurantWhereInput;
};
export type User$userTokenArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserTokenSelect<ExtArgs> | null;
    omit?: Prisma.UserTokenOmit<ExtArgs> | null;
    include?: Prisma.UserTokenInclude<ExtArgs> | null;
    where?: Prisma.UserTokenWhereInput;
    orderBy?: Prisma.UserTokenOrderByWithRelationInput | Prisma.UserTokenOrderByWithRelationInput[];
    cursor?: Prisma.UserTokenWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserTokenScalarFieldEnum | Prisma.UserTokenScalarFieldEnum[];
};
export type User$createdCustomersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerSelect<ExtArgs> | null;
    omit?: Prisma.CustomerOmit<ExtArgs> | null;
    include?: Prisma.CustomerInclude<ExtArgs> | null;
    where?: Prisma.CustomerWhereInput;
    orderBy?: Prisma.CustomerOrderByWithRelationInput | Prisma.CustomerOrderByWithRelationInput[];
    cursor?: Prisma.CustomerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CustomerScalarFieldEnum | Prisma.CustomerScalarFieldEnum[];
};
export type User$updatedCustomersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerSelect<ExtArgs> | null;
    omit?: Prisma.CustomerOmit<ExtArgs> | null;
    include?: Prisma.CustomerInclude<ExtArgs> | null;
    where?: Prisma.CustomerWhereInput;
    orderBy?: Prisma.CustomerOrderByWithRelationInput | Prisma.CustomerOrderByWithRelationInput[];
    cursor?: Prisma.CustomerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CustomerScalarFieldEnum | Prisma.CustomerScalarFieldEnum[];
};
export type UserDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
};
