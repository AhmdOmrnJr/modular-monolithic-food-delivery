import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type CustomerModel = runtime.Types.Result.DefaultSelection<Prisma.$CustomerPayload>;
export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null;
    _min: CustomerMinAggregateOutputType | null;
    _max: CustomerMaxAggregateOutputType | null;
};
export type CustomerMinAggregateOutputType = {
    customerId: string | null;
    userId: string | null;
    customerPhone: string | null;
    customerAvatar: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    deactivatedAt: Date | null;
    createdById: string | null;
    updatedById: string | null;
};
export type CustomerMaxAggregateOutputType = {
    customerId: string | null;
    userId: string | null;
    customerPhone: string | null;
    customerAvatar: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    deactivatedAt: Date | null;
    createdById: string | null;
    updatedById: string | null;
};
export type CustomerCountAggregateOutputType = {
    customerId: number;
    userId: number;
    customerPhone: number;
    customerAvatar: number;
    createdAt: number;
    updatedAt: number;
    deactivatedAt: number;
    addresses: number;
    createdById: number;
    updatedById: number;
    _all: number;
};
export type CustomerMinAggregateInputType = {
    customerId?: true;
    userId?: true;
    customerPhone?: true;
    customerAvatar?: true;
    createdAt?: true;
    updatedAt?: true;
    deactivatedAt?: true;
    createdById?: true;
    updatedById?: true;
};
export type CustomerMaxAggregateInputType = {
    customerId?: true;
    userId?: true;
    customerPhone?: true;
    customerAvatar?: true;
    createdAt?: true;
    updatedAt?: true;
    deactivatedAt?: true;
    createdById?: true;
    updatedById?: true;
};
export type CustomerCountAggregateInputType = {
    customerId?: true;
    userId?: true;
    customerPhone?: true;
    customerAvatar?: true;
    createdAt?: true;
    updatedAt?: true;
    deactivatedAt?: true;
    addresses?: true;
    createdById?: true;
    updatedById?: true;
    _all?: true;
};
export type CustomerAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CustomerWhereInput;
    orderBy?: Prisma.CustomerOrderByWithRelationInput | Prisma.CustomerOrderByWithRelationInput[];
    cursor?: Prisma.CustomerWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CustomerCountAggregateInputType;
    _min?: CustomerMinAggregateInputType;
    _max?: CustomerMaxAggregateInputType;
};
export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
    [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCustomer[P]> : Prisma.GetScalarType<T[P], AggregateCustomer[P]>;
};
export type CustomerGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CustomerWhereInput;
    orderBy?: Prisma.CustomerOrderByWithAggregationInput | Prisma.CustomerOrderByWithAggregationInput[];
    by: Prisma.CustomerScalarFieldEnum[] | Prisma.CustomerScalarFieldEnum;
    having?: Prisma.CustomerScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CustomerCountAggregateInputType | true;
    _min?: CustomerMinAggregateInputType;
    _max?: CustomerMaxAggregateInputType;
};
export type CustomerGroupByOutputType = {
    customerId: string;
    userId: string;
    customerPhone: string;
    customerAvatar: string | null;
    createdAt: Date;
    updatedAt: Date;
    deactivatedAt: Date | null;
    addresses: runtime.JsonValue | null;
    createdById: string;
    updatedById: string;
    _count: CustomerCountAggregateOutputType | null;
    _min: CustomerMinAggregateOutputType | null;
    _max: CustomerMaxAggregateOutputType | null;
};
export type GetCustomerGroupByPayload<T extends CustomerGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CustomerGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CustomerGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CustomerGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CustomerGroupByOutputType[P]>;
}>>;
export type CustomerWhereInput = {
    AND?: Prisma.CustomerWhereInput | Prisma.CustomerWhereInput[];
    OR?: Prisma.CustomerWhereInput[];
    NOT?: Prisma.CustomerWhereInput | Prisma.CustomerWhereInput[];
    customerId?: Prisma.StringFilter<"Customer"> | string;
    userId?: Prisma.StringFilter<"Customer"> | string;
    customerPhone?: Prisma.StringFilter<"Customer"> | string;
    customerAvatar?: Prisma.StringNullableFilter<"Customer"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Customer"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Customer"> | Date | string;
    deactivatedAt?: Prisma.DateTimeNullableFilter<"Customer"> | Date | string | null;
    addresses?: Prisma.JsonNullableFilter<"Customer">;
    createdById?: Prisma.StringFilter<"Customer"> | string;
    updatedById?: Prisma.StringFilter<"Customer"> | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    cart?: Prisma.XOR<Prisma.CartNullableScalarRelationFilter, Prisma.CartWhereInput> | null;
    orders?: Prisma.OrderListRelationFilter;
    rating?: Prisma.RatingListRelationFilter;
    orderTracking?: Prisma.OrderTrackingListRelationFilter;
    preferredPaymentSettings?: Prisma.XOR<Prisma.PreferredPaymentSettingsNullableScalarRelationFilter, Prisma.PreferredPaymentSettingsWhereInput> | null;
    providerCustomers?: Prisma.ProviderCustomerListRelationFilter;
    createdBy?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
    updatedBy?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
};
export type CustomerOrderByWithRelationInput = {
    customerId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    customerPhone?: Prisma.SortOrder;
    customerAvatar?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deactivatedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    addresses?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    updatedById?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    cart?: Prisma.CartOrderByWithRelationInput;
    orders?: Prisma.OrderOrderByRelationAggregateInput;
    rating?: Prisma.RatingOrderByRelationAggregateInput;
    orderTracking?: Prisma.OrderTrackingOrderByRelationAggregateInput;
    preferredPaymentSettings?: Prisma.PreferredPaymentSettingsOrderByWithRelationInput;
    providerCustomers?: Prisma.ProviderCustomerOrderByRelationAggregateInput;
    createdBy?: Prisma.UserOrderByWithRelationInput;
    updatedBy?: Prisma.UserOrderByWithRelationInput;
};
export type CustomerWhereUniqueInput = Prisma.AtLeast<{
    customerId?: string;
    userId?: string;
    AND?: Prisma.CustomerWhereInput | Prisma.CustomerWhereInput[];
    OR?: Prisma.CustomerWhereInput[];
    NOT?: Prisma.CustomerWhereInput | Prisma.CustomerWhereInput[];
    customerPhone?: Prisma.StringFilter<"Customer"> | string;
    customerAvatar?: Prisma.StringNullableFilter<"Customer"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Customer"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Customer"> | Date | string;
    deactivatedAt?: Prisma.DateTimeNullableFilter<"Customer"> | Date | string | null;
    addresses?: Prisma.JsonNullableFilter<"Customer">;
    createdById?: Prisma.StringFilter<"Customer"> | string;
    updatedById?: Prisma.StringFilter<"Customer"> | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    cart?: Prisma.XOR<Prisma.CartNullableScalarRelationFilter, Prisma.CartWhereInput> | null;
    orders?: Prisma.OrderListRelationFilter;
    rating?: Prisma.RatingListRelationFilter;
    orderTracking?: Prisma.OrderTrackingListRelationFilter;
    preferredPaymentSettings?: Prisma.XOR<Prisma.PreferredPaymentSettingsNullableScalarRelationFilter, Prisma.PreferredPaymentSettingsWhereInput> | null;
    providerCustomers?: Prisma.ProviderCustomerListRelationFilter;
    createdBy?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
    updatedBy?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
}, "customerId" | "userId">;
export type CustomerOrderByWithAggregationInput = {
    customerId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    customerPhone?: Prisma.SortOrder;
    customerAvatar?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deactivatedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    addresses?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    updatedById?: Prisma.SortOrder;
    _count?: Prisma.CustomerCountOrderByAggregateInput;
    _max?: Prisma.CustomerMaxOrderByAggregateInput;
    _min?: Prisma.CustomerMinOrderByAggregateInput;
};
export type CustomerScalarWhereWithAggregatesInput = {
    AND?: Prisma.CustomerScalarWhereWithAggregatesInput | Prisma.CustomerScalarWhereWithAggregatesInput[];
    OR?: Prisma.CustomerScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CustomerScalarWhereWithAggregatesInput | Prisma.CustomerScalarWhereWithAggregatesInput[];
    customerId?: Prisma.StringWithAggregatesFilter<"Customer"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"Customer"> | string;
    customerPhone?: Prisma.StringWithAggregatesFilter<"Customer"> | string;
    customerAvatar?: Prisma.StringNullableWithAggregatesFilter<"Customer"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Customer"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Customer"> | Date | string;
    deactivatedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Customer"> | Date | string | null;
    addresses?: Prisma.JsonNullableWithAggregatesFilter<"Customer">;
    createdById?: Prisma.StringWithAggregatesFilter<"Customer"> | string;
    updatedById?: Prisma.StringWithAggregatesFilter<"Customer"> | string;
};
export type CustomerCreateInput = {
    customerId?: string;
    customerPhone: string;
    customerAvatar?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deactivatedAt?: Date | string | null;
    addresses?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    user: Prisma.UserCreateNestedOneWithoutCustomerInput;
    cart?: Prisma.CartCreateNestedOneWithoutCustomerInput;
    orders?: Prisma.OrderCreateNestedManyWithoutCustomerInput;
    rating?: Prisma.RatingCreateNestedManyWithoutCustomerInput;
    orderTracking?: Prisma.OrderTrackingCreateNestedManyWithoutCustomerInput;
    preferredPaymentSettings?: Prisma.PreferredPaymentSettingsCreateNestedOneWithoutCustomerInput;
    providerCustomers?: Prisma.ProviderCustomerCreateNestedManyWithoutCustomerInput;
    createdBy?: Prisma.UserCreateNestedOneWithoutCreatedCustomersInput;
    updatedBy?: Prisma.UserCreateNestedOneWithoutUpdatedCustomersInput;
};
export type CustomerUncheckedCreateInput = {
    customerId?: string;
    userId: string;
    customerPhone: string;
    customerAvatar?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deactivatedAt?: Date | string | null;
    addresses?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdById: string;
    updatedById: string;
    cart?: Prisma.CartUncheckedCreateNestedOneWithoutCustomerInput;
    orders?: Prisma.OrderUncheckedCreateNestedManyWithoutCustomerInput;
    rating?: Prisma.RatingUncheckedCreateNestedManyWithoutCustomerInput;
    orderTracking?: Prisma.OrderTrackingUncheckedCreateNestedManyWithoutCustomerInput;
    preferredPaymentSettings?: Prisma.PreferredPaymentSettingsUncheckedCreateNestedOneWithoutCustomerInput;
    providerCustomers?: Prisma.ProviderCustomerUncheckedCreateNestedManyWithoutCustomerInput;
};
export type CustomerUpdateInput = {
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    customerPhone?: Prisma.StringFieldUpdateOperationsInput | string;
    customerAvatar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deactivatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    addresses?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    user?: Prisma.UserUpdateOneRequiredWithoutCustomerNestedInput;
    cart?: Prisma.CartUpdateOneWithoutCustomerNestedInput;
    orders?: Prisma.OrderUpdateManyWithoutCustomerNestedInput;
    rating?: Prisma.RatingUpdateManyWithoutCustomerNestedInput;
    orderTracking?: Prisma.OrderTrackingUpdateManyWithoutCustomerNestedInput;
    preferredPaymentSettings?: Prisma.PreferredPaymentSettingsUpdateOneWithoutCustomerNestedInput;
    providerCustomers?: Prisma.ProviderCustomerUpdateManyWithoutCustomerNestedInput;
    createdBy?: Prisma.UserUpdateOneWithoutCreatedCustomersNestedInput;
    updatedBy?: Prisma.UserUpdateOneWithoutUpdatedCustomersNestedInput;
};
export type CustomerUncheckedUpdateInput = {
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    customerPhone?: Prisma.StringFieldUpdateOperationsInput | string;
    customerAvatar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deactivatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    addresses?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdById?: Prisma.StringFieldUpdateOperationsInput | string;
    updatedById?: Prisma.StringFieldUpdateOperationsInput | string;
    cart?: Prisma.CartUncheckedUpdateOneWithoutCustomerNestedInput;
    orders?: Prisma.OrderUncheckedUpdateManyWithoutCustomerNestedInput;
    rating?: Prisma.RatingUncheckedUpdateManyWithoutCustomerNestedInput;
    orderTracking?: Prisma.OrderTrackingUncheckedUpdateManyWithoutCustomerNestedInput;
    preferredPaymentSettings?: Prisma.PreferredPaymentSettingsUncheckedUpdateOneWithoutCustomerNestedInput;
    providerCustomers?: Prisma.ProviderCustomerUncheckedUpdateManyWithoutCustomerNestedInput;
};
export type CustomerCreateManyInput = {
    customerId?: string;
    userId: string;
    customerPhone: string;
    customerAvatar?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deactivatedAt?: Date | string | null;
    addresses?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdById: string;
    updatedById: string;
};
export type CustomerUpdateManyMutationInput = {
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    customerPhone?: Prisma.StringFieldUpdateOperationsInput | string;
    customerAvatar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deactivatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    addresses?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
};
export type CustomerUncheckedUpdateManyInput = {
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    customerPhone?: Prisma.StringFieldUpdateOperationsInput | string;
    customerAvatar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deactivatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    addresses?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdById?: Prisma.StringFieldUpdateOperationsInput | string;
    updatedById?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type CustomerNullableScalarRelationFilter = {
    is?: Prisma.CustomerWhereInput | null;
    isNot?: Prisma.CustomerWhereInput | null;
};
export type CustomerListRelationFilter = {
    every?: Prisma.CustomerWhereInput;
    some?: Prisma.CustomerWhereInput;
    none?: Prisma.CustomerWhereInput;
};
export type CustomerOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type CustomerCountOrderByAggregateInput = {
    customerId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    customerPhone?: Prisma.SortOrder;
    customerAvatar?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deactivatedAt?: Prisma.SortOrder;
    addresses?: Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    updatedById?: Prisma.SortOrder;
};
export type CustomerMaxOrderByAggregateInput = {
    customerId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    customerPhone?: Prisma.SortOrder;
    customerAvatar?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deactivatedAt?: Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    updatedById?: Prisma.SortOrder;
};
export type CustomerMinOrderByAggregateInput = {
    customerId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    customerPhone?: Prisma.SortOrder;
    customerAvatar?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deactivatedAt?: Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    updatedById?: Prisma.SortOrder;
};
export type CustomerScalarRelationFilter = {
    is?: Prisma.CustomerWhereInput;
    isNot?: Prisma.CustomerWhereInput;
};
export type CustomerCreateNestedOneWithoutUserInput = {
    create?: Prisma.XOR<Prisma.CustomerCreateWithoutUserInput, Prisma.CustomerUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.CustomerCreateOrConnectWithoutUserInput;
    connect?: Prisma.CustomerWhereUniqueInput;
};
export type CustomerCreateNestedManyWithoutCreatedByInput = {
    create?: Prisma.XOR<Prisma.CustomerCreateWithoutCreatedByInput, Prisma.CustomerUncheckedCreateWithoutCreatedByInput> | Prisma.CustomerCreateWithoutCreatedByInput[] | Prisma.CustomerUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.CustomerCreateOrConnectWithoutCreatedByInput | Prisma.CustomerCreateOrConnectWithoutCreatedByInput[];
    createMany?: Prisma.CustomerCreateManyCreatedByInputEnvelope;
    connect?: Prisma.CustomerWhereUniqueInput | Prisma.CustomerWhereUniqueInput[];
};
export type CustomerCreateNestedManyWithoutUpdatedByInput = {
    create?: Prisma.XOR<Prisma.CustomerCreateWithoutUpdatedByInput, Prisma.CustomerUncheckedCreateWithoutUpdatedByInput> | Prisma.CustomerCreateWithoutUpdatedByInput[] | Prisma.CustomerUncheckedCreateWithoutUpdatedByInput[];
    connectOrCreate?: Prisma.CustomerCreateOrConnectWithoutUpdatedByInput | Prisma.CustomerCreateOrConnectWithoutUpdatedByInput[];
    createMany?: Prisma.CustomerCreateManyUpdatedByInputEnvelope;
    connect?: Prisma.CustomerWhereUniqueInput | Prisma.CustomerWhereUniqueInput[];
};
export type CustomerUncheckedCreateNestedOneWithoutUserInput = {
    create?: Prisma.XOR<Prisma.CustomerCreateWithoutUserInput, Prisma.CustomerUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.CustomerCreateOrConnectWithoutUserInput;
    connect?: Prisma.CustomerWhereUniqueInput;
};
export type CustomerUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: Prisma.XOR<Prisma.CustomerCreateWithoutCreatedByInput, Prisma.CustomerUncheckedCreateWithoutCreatedByInput> | Prisma.CustomerCreateWithoutCreatedByInput[] | Prisma.CustomerUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.CustomerCreateOrConnectWithoutCreatedByInput | Prisma.CustomerCreateOrConnectWithoutCreatedByInput[];
    createMany?: Prisma.CustomerCreateManyCreatedByInputEnvelope;
    connect?: Prisma.CustomerWhereUniqueInput | Prisma.CustomerWhereUniqueInput[];
};
export type CustomerUncheckedCreateNestedManyWithoutUpdatedByInput = {
    create?: Prisma.XOR<Prisma.CustomerCreateWithoutUpdatedByInput, Prisma.CustomerUncheckedCreateWithoutUpdatedByInput> | Prisma.CustomerCreateWithoutUpdatedByInput[] | Prisma.CustomerUncheckedCreateWithoutUpdatedByInput[];
    connectOrCreate?: Prisma.CustomerCreateOrConnectWithoutUpdatedByInput | Prisma.CustomerCreateOrConnectWithoutUpdatedByInput[];
    createMany?: Prisma.CustomerCreateManyUpdatedByInputEnvelope;
    connect?: Prisma.CustomerWhereUniqueInput | Prisma.CustomerWhereUniqueInput[];
};
export type CustomerUpdateOneWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.CustomerCreateWithoutUserInput, Prisma.CustomerUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.CustomerCreateOrConnectWithoutUserInput;
    upsert?: Prisma.CustomerUpsertWithoutUserInput;
    disconnect?: Prisma.CustomerWhereInput | boolean;
    delete?: Prisma.CustomerWhereInput | boolean;
    connect?: Prisma.CustomerWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CustomerUpdateToOneWithWhereWithoutUserInput, Prisma.CustomerUpdateWithoutUserInput>, Prisma.CustomerUncheckedUpdateWithoutUserInput>;
};
export type CustomerUpdateManyWithoutCreatedByNestedInput = {
    create?: Prisma.XOR<Prisma.CustomerCreateWithoutCreatedByInput, Prisma.CustomerUncheckedCreateWithoutCreatedByInput> | Prisma.CustomerCreateWithoutCreatedByInput[] | Prisma.CustomerUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.CustomerCreateOrConnectWithoutCreatedByInput | Prisma.CustomerCreateOrConnectWithoutCreatedByInput[];
    upsert?: Prisma.CustomerUpsertWithWhereUniqueWithoutCreatedByInput | Prisma.CustomerUpsertWithWhereUniqueWithoutCreatedByInput[];
    createMany?: Prisma.CustomerCreateManyCreatedByInputEnvelope;
    set?: Prisma.CustomerWhereUniqueInput | Prisma.CustomerWhereUniqueInput[];
    disconnect?: Prisma.CustomerWhereUniqueInput | Prisma.CustomerWhereUniqueInput[];
    delete?: Prisma.CustomerWhereUniqueInput | Prisma.CustomerWhereUniqueInput[];
    connect?: Prisma.CustomerWhereUniqueInput | Prisma.CustomerWhereUniqueInput[];
    update?: Prisma.CustomerUpdateWithWhereUniqueWithoutCreatedByInput | Prisma.CustomerUpdateWithWhereUniqueWithoutCreatedByInput[];
    updateMany?: Prisma.CustomerUpdateManyWithWhereWithoutCreatedByInput | Prisma.CustomerUpdateManyWithWhereWithoutCreatedByInput[];
    deleteMany?: Prisma.CustomerScalarWhereInput | Prisma.CustomerScalarWhereInput[];
};
export type CustomerUpdateManyWithoutUpdatedByNestedInput = {
    create?: Prisma.XOR<Prisma.CustomerCreateWithoutUpdatedByInput, Prisma.CustomerUncheckedCreateWithoutUpdatedByInput> | Prisma.CustomerCreateWithoutUpdatedByInput[] | Prisma.CustomerUncheckedCreateWithoutUpdatedByInput[];
    connectOrCreate?: Prisma.CustomerCreateOrConnectWithoutUpdatedByInput | Prisma.CustomerCreateOrConnectWithoutUpdatedByInput[];
    upsert?: Prisma.CustomerUpsertWithWhereUniqueWithoutUpdatedByInput | Prisma.CustomerUpsertWithWhereUniqueWithoutUpdatedByInput[];
    createMany?: Prisma.CustomerCreateManyUpdatedByInputEnvelope;
    set?: Prisma.CustomerWhereUniqueInput | Prisma.CustomerWhereUniqueInput[];
    disconnect?: Prisma.CustomerWhereUniqueInput | Prisma.CustomerWhereUniqueInput[];
    delete?: Prisma.CustomerWhereUniqueInput | Prisma.CustomerWhereUniqueInput[];
    connect?: Prisma.CustomerWhereUniqueInput | Prisma.CustomerWhereUniqueInput[];
    update?: Prisma.CustomerUpdateWithWhereUniqueWithoutUpdatedByInput | Prisma.CustomerUpdateWithWhereUniqueWithoutUpdatedByInput[];
    updateMany?: Prisma.CustomerUpdateManyWithWhereWithoutUpdatedByInput | Prisma.CustomerUpdateManyWithWhereWithoutUpdatedByInput[];
    deleteMany?: Prisma.CustomerScalarWhereInput | Prisma.CustomerScalarWhereInput[];
};
export type CustomerUncheckedUpdateOneWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.CustomerCreateWithoutUserInput, Prisma.CustomerUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.CustomerCreateOrConnectWithoutUserInput;
    upsert?: Prisma.CustomerUpsertWithoutUserInput;
    disconnect?: Prisma.CustomerWhereInput | boolean;
    delete?: Prisma.CustomerWhereInput | boolean;
    connect?: Prisma.CustomerWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CustomerUpdateToOneWithWhereWithoutUserInput, Prisma.CustomerUpdateWithoutUserInput>, Prisma.CustomerUncheckedUpdateWithoutUserInput>;
};
export type CustomerUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: Prisma.XOR<Prisma.CustomerCreateWithoutCreatedByInput, Prisma.CustomerUncheckedCreateWithoutCreatedByInput> | Prisma.CustomerCreateWithoutCreatedByInput[] | Prisma.CustomerUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.CustomerCreateOrConnectWithoutCreatedByInput | Prisma.CustomerCreateOrConnectWithoutCreatedByInput[];
    upsert?: Prisma.CustomerUpsertWithWhereUniqueWithoutCreatedByInput | Prisma.CustomerUpsertWithWhereUniqueWithoutCreatedByInput[];
    createMany?: Prisma.CustomerCreateManyCreatedByInputEnvelope;
    set?: Prisma.CustomerWhereUniqueInput | Prisma.CustomerWhereUniqueInput[];
    disconnect?: Prisma.CustomerWhereUniqueInput | Prisma.CustomerWhereUniqueInput[];
    delete?: Prisma.CustomerWhereUniqueInput | Prisma.CustomerWhereUniqueInput[];
    connect?: Prisma.CustomerWhereUniqueInput | Prisma.CustomerWhereUniqueInput[];
    update?: Prisma.CustomerUpdateWithWhereUniqueWithoutCreatedByInput | Prisma.CustomerUpdateWithWhereUniqueWithoutCreatedByInput[];
    updateMany?: Prisma.CustomerUpdateManyWithWhereWithoutCreatedByInput | Prisma.CustomerUpdateManyWithWhereWithoutCreatedByInput[];
    deleteMany?: Prisma.CustomerScalarWhereInput | Prisma.CustomerScalarWhereInput[];
};
export type CustomerUncheckedUpdateManyWithoutUpdatedByNestedInput = {
    create?: Prisma.XOR<Prisma.CustomerCreateWithoutUpdatedByInput, Prisma.CustomerUncheckedCreateWithoutUpdatedByInput> | Prisma.CustomerCreateWithoutUpdatedByInput[] | Prisma.CustomerUncheckedCreateWithoutUpdatedByInput[];
    connectOrCreate?: Prisma.CustomerCreateOrConnectWithoutUpdatedByInput | Prisma.CustomerCreateOrConnectWithoutUpdatedByInput[];
    upsert?: Prisma.CustomerUpsertWithWhereUniqueWithoutUpdatedByInput | Prisma.CustomerUpsertWithWhereUniqueWithoutUpdatedByInput[];
    createMany?: Prisma.CustomerCreateManyUpdatedByInputEnvelope;
    set?: Prisma.CustomerWhereUniqueInput | Prisma.CustomerWhereUniqueInput[];
    disconnect?: Prisma.CustomerWhereUniqueInput | Prisma.CustomerWhereUniqueInput[];
    delete?: Prisma.CustomerWhereUniqueInput | Prisma.CustomerWhereUniqueInput[];
    connect?: Prisma.CustomerWhereUniqueInput | Prisma.CustomerWhereUniqueInput[];
    update?: Prisma.CustomerUpdateWithWhereUniqueWithoutUpdatedByInput | Prisma.CustomerUpdateWithWhereUniqueWithoutUpdatedByInput[];
    updateMany?: Prisma.CustomerUpdateManyWithWhereWithoutUpdatedByInput | Prisma.CustomerUpdateManyWithWhereWithoutUpdatedByInput[];
    deleteMany?: Prisma.CustomerScalarWhereInput | Prisma.CustomerScalarWhereInput[];
};
export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
};
export type CustomerCreateNestedOneWithoutCartInput = {
    create?: Prisma.XOR<Prisma.CustomerCreateWithoutCartInput, Prisma.CustomerUncheckedCreateWithoutCartInput>;
    connectOrCreate?: Prisma.CustomerCreateOrConnectWithoutCartInput;
    connect?: Prisma.CustomerWhereUniqueInput;
};
export type CustomerUpdateOneRequiredWithoutCartNestedInput = {
    create?: Prisma.XOR<Prisma.CustomerCreateWithoutCartInput, Prisma.CustomerUncheckedCreateWithoutCartInput>;
    connectOrCreate?: Prisma.CustomerCreateOrConnectWithoutCartInput;
    upsert?: Prisma.CustomerUpsertWithoutCartInput;
    connect?: Prisma.CustomerWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CustomerUpdateToOneWithWhereWithoutCartInput, Prisma.CustomerUpdateWithoutCartInput>, Prisma.CustomerUncheckedUpdateWithoutCartInput>;
};
export type CustomerCreateNestedOneWithoutOrdersInput = {
    create?: Prisma.XOR<Prisma.CustomerCreateWithoutOrdersInput, Prisma.CustomerUncheckedCreateWithoutOrdersInput>;
    connectOrCreate?: Prisma.CustomerCreateOrConnectWithoutOrdersInput;
    connect?: Prisma.CustomerWhereUniqueInput;
};
export type CustomerUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: Prisma.XOR<Prisma.CustomerCreateWithoutOrdersInput, Prisma.CustomerUncheckedCreateWithoutOrdersInput>;
    connectOrCreate?: Prisma.CustomerCreateOrConnectWithoutOrdersInput;
    upsert?: Prisma.CustomerUpsertWithoutOrdersInput;
    connect?: Prisma.CustomerWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CustomerUpdateToOneWithWhereWithoutOrdersInput, Prisma.CustomerUpdateWithoutOrdersInput>, Prisma.CustomerUncheckedUpdateWithoutOrdersInput>;
};
export type CustomerCreateNestedOneWithoutProviderCustomersInput = {
    create?: Prisma.XOR<Prisma.CustomerCreateWithoutProviderCustomersInput, Prisma.CustomerUncheckedCreateWithoutProviderCustomersInput>;
    connectOrCreate?: Prisma.CustomerCreateOrConnectWithoutProviderCustomersInput;
    connect?: Prisma.CustomerWhereUniqueInput;
};
export type CustomerUpdateOneRequiredWithoutProviderCustomersNestedInput = {
    create?: Prisma.XOR<Prisma.CustomerCreateWithoutProviderCustomersInput, Prisma.CustomerUncheckedCreateWithoutProviderCustomersInput>;
    connectOrCreate?: Prisma.CustomerCreateOrConnectWithoutProviderCustomersInput;
    upsert?: Prisma.CustomerUpsertWithoutProviderCustomersInput;
    connect?: Prisma.CustomerWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CustomerUpdateToOneWithWhereWithoutProviderCustomersInput, Prisma.CustomerUpdateWithoutProviderCustomersInput>, Prisma.CustomerUncheckedUpdateWithoutProviderCustomersInput>;
};
export type CustomerCreateNestedOneWithoutOrderTrackingInput = {
    create?: Prisma.XOR<Prisma.CustomerCreateWithoutOrderTrackingInput, Prisma.CustomerUncheckedCreateWithoutOrderTrackingInput>;
    connectOrCreate?: Prisma.CustomerCreateOrConnectWithoutOrderTrackingInput;
    connect?: Prisma.CustomerWhereUniqueInput;
};
export type CustomerUpdateOneRequiredWithoutOrderTrackingNestedInput = {
    create?: Prisma.XOR<Prisma.CustomerCreateWithoutOrderTrackingInput, Prisma.CustomerUncheckedCreateWithoutOrderTrackingInput>;
    connectOrCreate?: Prisma.CustomerCreateOrConnectWithoutOrderTrackingInput;
    upsert?: Prisma.CustomerUpsertWithoutOrderTrackingInput;
    connect?: Prisma.CustomerWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CustomerUpdateToOneWithWhereWithoutOrderTrackingInput, Prisma.CustomerUpdateWithoutOrderTrackingInput>, Prisma.CustomerUncheckedUpdateWithoutOrderTrackingInput>;
};
export type CustomerCreateNestedOneWithoutPreferredPaymentSettingsInput = {
    create?: Prisma.XOR<Prisma.CustomerCreateWithoutPreferredPaymentSettingsInput, Prisma.CustomerUncheckedCreateWithoutPreferredPaymentSettingsInput>;
    connectOrCreate?: Prisma.CustomerCreateOrConnectWithoutPreferredPaymentSettingsInput;
    connect?: Prisma.CustomerWhereUniqueInput;
};
export type CustomerUpdateOneRequiredWithoutPreferredPaymentSettingsNestedInput = {
    create?: Prisma.XOR<Prisma.CustomerCreateWithoutPreferredPaymentSettingsInput, Prisma.CustomerUncheckedCreateWithoutPreferredPaymentSettingsInput>;
    connectOrCreate?: Prisma.CustomerCreateOrConnectWithoutPreferredPaymentSettingsInput;
    upsert?: Prisma.CustomerUpsertWithoutPreferredPaymentSettingsInput;
    connect?: Prisma.CustomerWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CustomerUpdateToOneWithWhereWithoutPreferredPaymentSettingsInput, Prisma.CustomerUpdateWithoutPreferredPaymentSettingsInput>, Prisma.CustomerUncheckedUpdateWithoutPreferredPaymentSettingsInput>;
};
export type CustomerCreateNestedOneWithoutRatingInput = {
    create?: Prisma.XOR<Prisma.CustomerCreateWithoutRatingInput, Prisma.CustomerUncheckedCreateWithoutRatingInput>;
    connectOrCreate?: Prisma.CustomerCreateOrConnectWithoutRatingInput;
    connect?: Prisma.CustomerWhereUniqueInput;
};
export type CustomerUpdateOneRequiredWithoutRatingNestedInput = {
    create?: Prisma.XOR<Prisma.CustomerCreateWithoutRatingInput, Prisma.CustomerUncheckedCreateWithoutRatingInput>;
    connectOrCreate?: Prisma.CustomerCreateOrConnectWithoutRatingInput;
    upsert?: Prisma.CustomerUpsertWithoutRatingInput;
    connect?: Prisma.CustomerWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CustomerUpdateToOneWithWhereWithoutRatingInput, Prisma.CustomerUpdateWithoutRatingInput>, Prisma.CustomerUncheckedUpdateWithoutRatingInput>;
};
export type CustomerCreateWithoutUserInput = {
    customerId?: string;
    customerPhone: string;
    customerAvatar?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deactivatedAt?: Date | string | null;
    addresses?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    cart?: Prisma.CartCreateNestedOneWithoutCustomerInput;
    orders?: Prisma.OrderCreateNestedManyWithoutCustomerInput;
    rating?: Prisma.RatingCreateNestedManyWithoutCustomerInput;
    orderTracking?: Prisma.OrderTrackingCreateNestedManyWithoutCustomerInput;
    preferredPaymentSettings?: Prisma.PreferredPaymentSettingsCreateNestedOneWithoutCustomerInput;
    providerCustomers?: Prisma.ProviderCustomerCreateNestedManyWithoutCustomerInput;
    createdBy?: Prisma.UserCreateNestedOneWithoutCreatedCustomersInput;
    updatedBy?: Prisma.UserCreateNestedOneWithoutUpdatedCustomersInput;
};
export type CustomerUncheckedCreateWithoutUserInput = {
    customerId?: string;
    customerPhone: string;
    customerAvatar?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deactivatedAt?: Date | string | null;
    addresses?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdById: string;
    updatedById: string;
    cart?: Prisma.CartUncheckedCreateNestedOneWithoutCustomerInput;
    orders?: Prisma.OrderUncheckedCreateNestedManyWithoutCustomerInput;
    rating?: Prisma.RatingUncheckedCreateNestedManyWithoutCustomerInput;
    orderTracking?: Prisma.OrderTrackingUncheckedCreateNestedManyWithoutCustomerInput;
    preferredPaymentSettings?: Prisma.PreferredPaymentSettingsUncheckedCreateNestedOneWithoutCustomerInput;
    providerCustomers?: Prisma.ProviderCustomerUncheckedCreateNestedManyWithoutCustomerInput;
};
export type CustomerCreateOrConnectWithoutUserInput = {
    where: Prisma.CustomerWhereUniqueInput;
    create: Prisma.XOR<Prisma.CustomerCreateWithoutUserInput, Prisma.CustomerUncheckedCreateWithoutUserInput>;
};
export type CustomerCreateWithoutCreatedByInput = {
    customerId?: string;
    customerPhone: string;
    customerAvatar?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deactivatedAt?: Date | string | null;
    addresses?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    user: Prisma.UserCreateNestedOneWithoutCustomerInput;
    cart?: Prisma.CartCreateNestedOneWithoutCustomerInput;
    orders?: Prisma.OrderCreateNestedManyWithoutCustomerInput;
    rating?: Prisma.RatingCreateNestedManyWithoutCustomerInput;
    orderTracking?: Prisma.OrderTrackingCreateNestedManyWithoutCustomerInput;
    preferredPaymentSettings?: Prisma.PreferredPaymentSettingsCreateNestedOneWithoutCustomerInput;
    providerCustomers?: Prisma.ProviderCustomerCreateNestedManyWithoutCustomerInput;
    updatedBy?: Prisma.UserCreateNestedOneWithoutUpdatedCustomersInput;
};
export type CustomerUncheckedCreateWithoutCreatedByInput = {
    customerId?: string;
    userId: string;
    customerPhone: string;
    customerAvatar?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deactivatedAt?: Date | string | null;
    addresses?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    updatedById: string;
    cart?: Prisma.CartUncheckedCreateNestedOneWithoutCustomerInput;
    orders?: Prisma.OrderUncheckedCreateNestedManyWithoutCustomerInput;
    rating?: Prisma.RatingUncheckedCreateNestedManyWithoutCustomerInput;
    orderTracking?: Prisma.OrderTrackingUncheckedCreateNestedManyWithoutCustomerInput;
    preferredPaymentSettings?: Prisma.PreferredPaymentSettingsUncheckedCreateNestedOneWithoutCustomerInput;
    providerCustomers?: Prisma.ProviderCustomerUncheckedCreateNestedManyWithoutCustomerInput;
};
export type CustomerCreateOrConnectWithoutCreatedByInput = {
    where: Prisma.CustomerWhereUniqueInput;
    create: Prisma.XOR<Prisma.CustomerCreateWithoutCreatedByInput, Prisma.CustomerUncheckedCreateWithoutCreatedByInput>;
};
export type CustomerCreateManyCreatedByInputEnvelope = {
    data: Prisma.CustomerCreateManyCreatedByInput | Prisma.CustomerCreateManyCreatedByInput[];
    skipDuplicates?: boolean;
};
export type CustomerCreateWithoutUpdatedByInput = {
    customerId?: string;
    customerPhone: string;
    customerAvatar?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deactivatedAt?: Date | string | null;
    addresses?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    user: Prisma.UserCreateNestedOneWithoutCustomerInput;
    cart?: Prisma.CartCreateNestedOneWithoutCustomerInput;
    orders?: Prisma.OrderCreateNestedManyWithoutCustomerInput;
    rating?: Prisma.RatingCreateNestedManyWithoutCustomerInput;
    orderTracking?: Prisma.OrderTrackingCreateNestedManyWithoutCustomerInput;
    preferredPaymentSettings?: Prisma.PreferredPaymentSettingsCreateNestedOneWithoutCustomerInput;
    providerCustomers?: Prisma.ProviderCustomerCreateNestedManyWithoutCustomerInput;
    createdBy?: Prisma.UserCreateNestedOneWithoutCreatedCustomersInput;
};
export type CustomerUncheckedCreateWithoutUpdatedByInput = {
    customerId?: string;
    userId: string;
    customerPhone: string;
    customerAvatar?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deactivatedAt?: Date | string | null;
    addresses?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdById: string;
    cart?: Prisma.CartUncheckedCreateNestedOneWithoutCustomerInput;
    orders?: Prisma.OrderUncheckedCreateNestedManyWithoutCustomerInput;
    rating?: Prisma.RatingUncheckedCreateNestedManyWithoutCustomerInput;
    orderTracking?: Prisma.OrderTrackingUncheckedCreateNestedManyWithoutCustomerInput;
    preferredPaymentSettings?: Prisma.PreferredPaymentSettingsUncheckedCreateNestedOneWithoutCustomerInput;
    providerCustomers?: Prisma.ProviderCustomerUncheckedCreateNestedManyWithoutCustomerInput;
};
export type CustomerCreateOrConnectWithoutUpdatedByInput = {
    where: Prisma.CustomerWhereUniqueInput;
    create: Prisma.XOR<Prisma.CustomerCreateWithoutUpdatedByInput, Prisma.CustomerUncheckedCreateWithoutUpdatedByInput>;
};
export type CustomerCreateManyUpdatedByInputEnvelope = {
    data: Prisma.CustomerCreateManyUpdatedByInput | Prisma.CustomerCreateManyUpdatedByInput[];
    skipDuplicates?: boolean;
};
export type CustomerUpsertWithoutUserInput = {
    update: Prisma.XOR<Prisma.CustomerUpdateWithoutUserInput, Prisma.CustomerUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.CustomerCreateWithoutUserInput, Prisma.CustomerUncheckedCreateWithoutUserInput>;
    where?: Prisma.CustomerWhereInput;
};
export type CustomerUpdateToOneWithWhereWithoutUserInput = {
    where?: Prisma.CustomerWhereInput;
    data: Prisma.XOR<Prisma.CustomerUpdateWithoutUserInput, Prisma.CustomerUncheckedUpdateWithoutUserInput>;
};
export type CustomerUpdateWithoutUserInput = {
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    customerPhone?: Prisma.StringFieldUpdateOperationsInput | string;
    customerAvatar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deactivatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    addresses?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    cart?: Prisma.CartUpdateOneWithoutCustomerNestedInput;
    orders?: Prisma.OrderUpdateManyWithoutCustomerNestedInput;
    rating?: Prisma.RatingUpdateManyWithoutCustomerNestedInput;
    orderTracking?: Prisma.OrderTrackingUpdateManyWithoutCustomerNestedInput;
    preferredPaymentSettings?: Prisma.PreferredPaymentSettingsUpdateOneWithoutCustomerNestedInput;
    providerCustomers?: Prisma.ProviderCustomerUpdateManyWithoutCustomerNestedInput;
    createdBy?: Prisma.UserUpdateOneWithoutCreatedCustomersNestedInput;
    updatedBy?: Prisma.UserUpdateOneWithoutUpdatedCustomersNestedInput;
};
export type CustomerUncheckedUpdateWithoutUserInput = {
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    customerPhone?: Prisma.StringFieldUpdateOperationsInput | string;
    customerAvatar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deactivatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    addresses?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdById?: Prisma.StringFieldUpdateOperationsInput | string;
    updatedById?: Prisma.StringFieldUpdateOperationsInput | string;
    cart?: Prisma.CartUncheckedUpdateOneWithoutCustomerNestedInput;
    orders?: Prisma.OrderUncheckedUpdateManyWithoutCustomerNestedInput;
    rating?: Prisma.RatingUncheckedUpdateManyWithoutCustomerNestedInput;
    orderTracking?: Prisma.OrderTrackingUncheckedUpdateManyWithoutCustomerNestedInput;
    preferredPaymentSettings?: Prisma.PreferredPaymentSettingsUncheckedUpdateOneWithoutCustomerNestedInput;
    providerCustomers?: Prisma.ProviderCustomerUncheckedUpdateManyWithoutCustomerNestedInput;
};
export type CustomerUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: Prisma.CustomerWhereUniqueInput;
    update: Prisma.XOR<Prisma.CustomerUpdateWithoutCreatedByInput, Prisma.CustomerUncheckedUpdateWithoutCreatedByInput>;
    create: Prisma.XOR<Prisma.CustomerCreateWithoutCreatedByInput, Prisma.CustomerUncheckedCreateWithoutCreatedByInput>;
};
export type CustomerUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: Prisma.CustomerWhereUniqueInput;
    data: Prisma.XOR<Prisma.CustomerUpdateWithoutCreatedByInput, Prisma.CustomerUncheckedUpdateWithoutCreatedByInput>;
};
export type CustomerUpdateManyWithWhereWithoutCreatedByInput = {
    where: Prisma.CustomerScalarWhereInput;
    data: Prisma.XOR<Prisma.CustomerUpdateManyMutationInput, Prisma.CustomerUncheckedUpdateManyWithoutCreatedByInput>;
};
export type CustomerScalarWhereInput = {
    AND?: Prisma.CustomerScalarWhereInput | Prisma.CustomerScalarWhereInput[];
    OR?: Prisma.CustomerScalarWhereInput[];
    NOT?: Prisma.CustomerScalarWhereInput | Prisma.CustomerScalarWhereInput[];
    customerId?: Prisma.StringFilter<"Customer"> | string;
    userId?: Prisma.StringFilter<"Customer"> | string;
    customerPhone?: Prisma.StringFilter<"Customer"> | string;
    customerAvatar?: Prisma.StringNullableFilter<"Customer"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Customer"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Customer"> | Date | string;
    deactivatedAt?: Prisma.DateTimeNullableFilter<"Customer"> | Date | string | null;
    addresses?: Prisma.JsonNullableFilter<"Customer">;
    createdById?: Prisma.StringFilter<"Customer"> | string;
    updatedById?: Prisma.StringFilter<"Customer"> | string;
};
export type CustomerUpsertWithWhereUniqueWithoutUpdatedByInput = {
    where: Prisma.CustomerWhereUniqueInput;
    update: Prisma.XOR<Prisma.CustomerUpdateWithoutUpdatedByInput, Prisma.CustomerUncheckedUpdateWithoutUpdatedByInput>;
    create: Prisma.XOR<Prisma.CustomerCreateWithoutUpdatedByInput, Prisma.CustomerUncheckedCreateWithoutUpdatedByInput>;
};
export type CustomerUpdateWithWhereUniqueWithoutUpdatedByInput = {
    where: Prisma.CustomerWhereUniqueInput;
    data: Prisma.XOR<Prisma.CustomerUpdateWithoutUpdatedByInput, Prisma.CustomerUncheckedUpdateWithoutUpdatedByInput>;
};
export type CustomerUpdateManyWithWhereWithoutUpdatedByInput = {
    where: Prisma.CustomerScalarWhereInput;
    data: Prisma.XOR<Prisma.CustomerUpdateManyMutationInput, Prisma.CustomerUncheckedUpdateManyWithoutUpdatedByInput>;
};
export type CustomerCreateWithoutCartInput = {
    customerId?: string;
    customerPhone: string;
    customerAvatar?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deactivatedAt?: Date | string | null;
    addresses?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    user: Prisma.UserCreateNestedOneWithoutCustomerInput;
    orders?: Prisma.OrderCreateNestedManyWithoutCustomerInput;
    rating?: Prisma.RatingCreateNestedManyWithoutCustomerInput;
    orderTracking?: Prisma.OrderTrackingCreateNestedManyWithoutCustomerInput;
    preferredPaymentSettings?: Prisma.PreferredPaymentSettingsCreateNestedOneWithoutCustomerInput;
    providerCustomers?: Prisma.ProviderCustomerCreateNestedManyWithoutCustomerInput;
    createdBy?: Prisma.UserCreateNestedOneWithoutCreatedCustomersInput;
    updatedBy?: Prisma.UserCreateNestedOneWithoutUpdatedCustomersInput;
};
export type CustomerUncheckedCreateWithoutCartInput = {
    customerId?: string;
    userId: string;
    customerPhone: string;
    customerAvatar?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deactivatedAt?: Date | string | null;
    addresses?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdById: string;
    updatedById: string;
    orders?: Prisma.OrderUncheckedCreateNestedManyWithoutCustomerInput;
    rating?: Prisma.RatingUncheckedCreateNestedManyWithoutCustomerInput;
    orderTracking?: Prisma.OrderTrackingUncheckedCreateNestedManyWithoutCustomerInput;
    preferredPaymentSettings?: Prisma.PreferredPaymentSettingsUncheckedCreateNestedOneWithoutCustomerInput;
    providerCustomers?: Prisma.ProviderCustomerUncheckedCreateNestedManyWithoutCustomerInput;
};
export type CustomerCreateOrConnectWithoutCartInput = {
    where: Prisma.CustomerWhereUniqueInput;
    create: Prisma.XOR<Prisma.CustomerCreateWithoutCartInput, Prisma.CustomerUncheckedCreateWithoutCartInput>;
};
export type CustomerUpsertWithoutCartInput = {
    update: Prisma.XOR<Prisma.CustomerUpdateWithoutCartInput, Prisma.CustomerUncheckedUpdateWithoutCartInput>;
    create: Prisma.XOR<Prisma.CustomerCreateWithoutCartInput, Prisma.CustomerUncheckedCreateWithoutCartInput>;
    where?: Prisma.CustomerWhereInput;
};
export type CustomerUpdateToOneWithWhereWithoutCartInput = {
    where?: Prisma.CustomerWhereInput;
    data: Prisma.XOR<Prisma.CustomerUpdateWithoutCartInput, Prisma.CustomerUncheckedUpdateWithoutCartInput>;
};
export type CustomerUpdateWithoutCartInput = {
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    customerPhone?: Prisma.StringFieldUpdateOperationsInput | string;
    customerAvatar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deactivatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    addresses?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    user?: Prisma.UserUpdateOneRequiredWithoutCustomerNestedInput;
    orders?: Prisma.OrderUpdateManyWithoutCustomerNestedInput;
    rating?: Prisma.RatingUpdateManyWithoutCustomerNestedInput;
    orderTracking?: Prisma.OrderTrackingUpdateManyWithoutCustomerNestedInput;
    preferredPaymentSettings?: Prisma.PreferredPaymentSettingsUpdateOneWithoutCustomerNestedInput;
    providerCustomers?: Prisma.ProviderCustomerUpdateManyWithoutCustomerNestedInput;
    createdBy?: Prisma.UserUpdateOneWithoutCreatedCustomersNestedInput;
    updatedBy?: Prisma.UserUpdateOneWithoutUpdatedCustomersNestedInput;
};
export type CustomerUncheckedUpdateWithoutCartInput = {
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    customerPhone?: Prisma.StringFieldUpdateOperationsInput | string;
    customerAvatar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deactivatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    addresses?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdById?: Prisma.StringFieldUpdateOperationsInput | string;
    updatedById?: Prisma.StringFieldUpdateOperationsInput | string;
    orders?: Prisma.OrderUncheckedUpdateManyWithoutCustomerNestedInput;
    rating?: Prisma.RatingUncheckedUpdateManyWithoutCustomerNestedInput;
    orderTracking?: Prisma.OrderTrackingUncheckedUpdateManyWithoutCustomerNestedInput;
    preferredPaymentSettings?: Prisma.PreferredPaymentSettingsUncheckedUpdateOneWithoutCustomerNestedInput;
    providerCustomers?: Prisma.ProviderCustomerUncheckedUpdateManyWithoutCustomerNestedInput;
};
export type CustomerCreateWithoutOrdersInput = {
    customerId?: string;
    customerPhone: string;
    customerAvatar?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deactivatedAt?: Date | string | null;
    addresses?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    user: Prisma.UserCreateNestedOneWithoutCustomerInput;
    cart?: Prisma.CartCreateNestedOneWithoutCustomerInput;
    rating?: Prisma.RatingCreateNestedManyWithoutCustomerInput;
    orderTracking?: Prisma.OrderTrackingCreateNestedManyWithoutCustomerInput;
    preferredPaymentSettings?: Prisma.PreferredPaymentSettingsCreateNestedOneWithoutCustomerInput;
    providerCustomers?: Prisma.ProviderCustomerCreateNestedManyWithoutCustomerInput;
    createdBy?: Prisma.UserCreateNestedOneWithoutCreatedCustomersInput;
    updatedBy?: Prisma.UserCreateNestedOneWithoutUpdatedCustomersInput;
};
export type CustomerUncheckedCreateWithoutOrdersInput = {
    customerId?: string;
    userId: string;
    customerPhone: string;
    customerAvatar?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deactivatedAt?: Date | string | null;
    addresses?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdById: string;
    updatedById: string;
    cart?: Prisma.CartUncheckedCreateNestedOneWithoutCustomerInput;
    rating?: Prisma.RatingUncheckedCreateNestedManyWithoutCustomerInput;
    orderTracking?: Prisma.OrderTrackingUncheckedCreateNestedManyWithoutCustomerInput;
    preferredPaymentSettings?: Prisma.PreferredPaymentSettingsUncheckedCreateNestedOneWithoutCustomerInput;
    providerCustomers?: Prisma.ProviderCustomerUncheckedCreateNestedManyWithoutCustomerInput;
};
export type CustomerCreateOrConnectWithoutOrdersInput = {
    where: Prisma.CustomerWhereUniqueInput;
    create: Prisma.XOR<Prisma.CustomerCreateWithoutOrdersInput, Prisma.CustomerUncheckedCreateWithoutOrdersInput>;
};
export type CustomerUpsertWithoutOrdersInput = {
    update: Prisma.XOR<Prisma.CustomerUpdateWithoutOrdersInput, Prisma.CustomerUncheckedUpdateWithoutOrdersInput>;
    create: Prisma.XOR<Prisma.CustomerCreateWithoutOrdersInput, Prisma.CustomerUncheckedCreateWithoutOrdersInput>;
    where?: Prisma.CustomerWhereInput;
};
export type CustomerUpdateToOneWithWhereWithoutOrdersInput = {
    where?: Prisma.CustomerWhereInput;
    data: Prisma.XOR<Prisma.CustomerUpdateWithoutOrdersInput, Prisma.CustomerUncheckedUpdateWithoutOrdersInput>;
};
export type CustomerUpdateWithoutOrdersInput = {
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    customerPhone?: Prisma.StringFieldUpdateOperationsInput | string;
    customerAvatar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deactivatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    addresses?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    user?: Prisma.UserUpdateOneRequiredWithoutCustomerNestedInput;
    cart?: Prisma.CartUpdateOneWithoutCustomerNestedInput;
    rating?: Prisma.RatingUpdateManyWithoutCustomerNestedInput;
    orderTracking?: Prisma.OrderTrackingUpdateManyWithoutCustomerNestedInput;
    preferredPaymentSettings?: Prisma.PreferredPaymentSettingsUpdateOneWithoutCustomerNestedInput;
    providerCustomers?: Prisma.ProviderCustomerUpdateManyWithoutCustomerNestedInput;
    createdBy?: Prisma.UserUpdateOneWithoutCreatedCustomersNestedInput;
    updatedBy?: Prisma.UserUpdateOneWithoutUpdatedCustomersNestedInput;
};
export type CustomerUncheckedUpdateWithoutOrdersInput = {
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    customerPhone?: Prisma.StringFieldUpdateOperationsInput | string;
    customerAvatar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deactivatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    addresses?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdById?: Prisma.StringFieldUpdateOperationsInput | string;
    updatedById?: Prisma.StringFieldUpdateOperationsInput | string;
    cart?: Prisma.CartUncheckedUpdateOneWithoutCustomerNestedInput;
    rating?: Prisma.RatingUncheckedUpdateManyWithoutCustomerNestedInput;
    orderTracking?: Prisma.OrderTrackingUncheckedUpdateManyWithoutCustomerNestedInput;
    preferredPaymentSettings?: Prisma.PreferredPaymentSettingsUncheckedUpdateOneWithoutCustomerNestedInput;
    providerCustomers?: Prisma.ProviderCustomerUncheckedUpdateManyWithoutCustomerNestedInput;
};
export type CustomerCreateWithoutProviderCustomersInput = {
    customerId?: string;
    customerPhone: string;
    customerAvatar?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deactivatedAt?: Date | string | null;
    addresses?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    user: Prisma.UserCreateNestedOneWithoutCustomerInput;
    cart?: Prisma.CartCreateNestedOneWithoutCustomerInput;
    orders?: Prisma.OrderCreateNestedManyWithoutCustomerInput;
    rating?: Prisma.RatingCreateNestedManyWithoutCustomerInput;
    orderTracking?: Prisma.OrderTrackingCreateNestedManyWithoutCustomerInput;
    preferredPaymentSettings?: Prisma.PreferredPaymentSettingsCreateNestedOneWithoutCustomerInput;
    createdBy?: Prisma.UserCreateNestedOneWithoutCreatedCustomersInput;
    updatedBy?: Prisma.UserCreateNestedOneWithoutUpdatedCustomersInput;
};
export type CustomerUncheckedCreateWithoutProviderCustomersInput = {
    customerId?: string;
    userId: string;
    customerPhone: string;
    customerAvatar?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deactivatedAt?: Date | string | null;
    addresses?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdById: string;
    updatedById: string;
    cart?: Prisma.CartUncheckedCreateNestedOneWithoutCustomerInput;
    orders?: Prisma.OrderUncheckedCreateNestedManyWithoutCustomerInput;
    rating?: Prisma.RatingUncheckedCreateNestedManyWithoutCustomerInput;
    orderTracking?: Prisma.OrderTrackingUncheckedCreateNestedManyWithoutCustomerInput;
    preferredPaymentSettings?: Prisma.PreferredPaymentSettingsUncheckedCreateNestedOneWithoutCustomerInput;
};
export type CustomerCreateOrConnectWithoutProviderCustomersInput = {
    where: Prisma.CustomerWhereUniqueInput;
    create: Prisma.XOR<Prisma.CustomerCreateWithoutProviderCustomersInput, Prisma.CustomerUncheckedCreateWithoutProviderCustomersInput>;
};
export type CustomerUpsertWithoutProviderCustomersInput = {
    update: Prisma.XOR<Prisma.CustomerUpdateWithoutProviderCustomersInput, Prisma.CustomerUncheckedUpdateWithoutProviderCustomersInput>;
    create: Prisma.XOR<Prisma.CustomerCreateWithoutProviderCustomersInput, Prisma.CustomerUncheckedCreateWithoutProviderCustomersInput>;
    where?: Prisma.CustomerWhereInput;
};
export type CustomerUpdateToOneWithWhereWithoutProviderCustomersInput = {
    where?: Prisma.CustomerWhereInput;
    data: Prisma.XOR<Prisma.CustomerUpdateWithoutProviderCustomersInput, Prisma.CustomerUncheckedUpdateWithoutProviderCustomersInput>;
};
export type CustomerUpdateWithoutProviderCustomersInput = {
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    customerPhone?: Prisma.StringFieldUpdateOperationsInput | string;
    customerAvatar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deactivatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    addresses?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    user?: Prisma.UserUpdateOneRequiredWithoutCustomerNestedInput;
    cart?: Prisma.CartUpdateOneWithoutCustomerNestedInput;
    orders?: Prisma.OrderUpdateManyWithoutCustomerNestedInput;
    rating?: Prisma.RatingUpdateManyWithoutCustomerNestedInput;
    orderTracking?: Prisma.OrderTrackingUpdateManyWithoutCustomerNestedInput;
    preferredPaymentSettings?: Prisma.PreferredPaymentSettingsUpdateOneWithoutCustomerNestedInput;
    createdBy?: Prisma.UserUpdateOneWithoutCreatedCustomersNestedInput;
    updatedBy?: Prisma.UserUpdateOneWithoutUpdatedCustomersNestedInput;
};
export type CustomerUncheckedUpdateWithoutProviderCustomersInput = {
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    customerPhone?: Prisma.StringFieldUpdateOperationsInput | string;
    customerAvatar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deactivatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    addresses?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdById?: Prisma.StringFieldUpdateOperationsInput | string;
    updatedById?: Prisma.StringFieldUpdateOperationsInput | string;
    cart?: Prisma.CartUncheckedUpdateOneWithoutCustomerNestedInput;
    orders?: Prisma.OrderUncheckedUpdateManyWithoutCustomerNestedInput;
    rating?: Prisma.RatingUncheckedUpdateManyWithoutCustomerNestedInput;
    orderTracking?: Prisma.OrderTrackingUncheckedUpdateManyWithoutCustomerNestedInput;
    preferredPaymentSettings?: Prisma.PreferredPaymentSettingsUncheckedUpdateOneWithoutCustomerNestedInput;
};
export type CustomerCreateWithoutOrderTrackingInput = {
    customerId?: string;
    customerPhone: string;
    customerAvatar?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deactivatedAt?: Date | string | null;
    addresses?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    user: Prisma.UserCreateNestedOneWithoutCustomerInput;
    cart?: Prisma.CartCreateNestedOneWithoutCustomerInput;
    orders?: Prisma.OrderCreateNestedManyWithoutCustomerInput;
    rating?: Prisma.RatingCreateNestedManyWithoutCustomerInput;
    preferredPaymentSettings?: Prisma.PreferredPaymentSettingsCreateNestedOneWithoutCustomerInput;
    providerCustomers?: Prisma.ProviderCustomerCreateNestedManyWithoutCustomerInput;
    createdBy?: Prisma.UserCreateNestedOneWithoutCreatedCustomersInput;
    updatedBy?: Prisma.UserCreateNestedOneWithoutUpdatedCustomersInput;
};
export type CustomerUncheckedCreateWithoutOrderTrackingInput = {
    customerId?: string;
    userId: string;
    customerPhone: string;
    customerAvatar?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deactivatedAt?: Date | string | null;
    addresses?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdById: string;
    updatedById: string;
    cart?: Prisma.CartUncheckedCreateNestedOneWithoutCustomerInput;
    orders?: Prisma.OrderUncheckedCreateNestedManyWithoutCustomerInput;
    rating?: Prisma.RatingUncheckedCreateNestedManyWithoutCustomerInput;
    preferredPaymentSettings?: Prisma.PreferredPaymentSettingsUncheckedCreateNestedOneWithoutCustomerInput;
    providerCustomers?: Prisma.ProviderCustomerUncheckedCreateNestedManyWithoutCustomerInput;
};
export type CustomerCreateOrConnectWithoutOrderTrackingInput = {
    where: Prisma.CustomerWhereUniqueInput;
    create: Prisma.XOR<Prisma.CustomerCreateWithoutOrderTrackingInput, Prisma.CustomerUncheckedCreateWithoutOrderTrackingInput>;
};
export type CustomerUpsertWithoutOrderTrackingInput = {
    update: Prisma.XOR<Prisma.CustomerUpdateWithoutOrderTrackingInput, Prisma.CustomerUncheckedUpdateWithoutOrderTrackingInput>;
    create: Prisma.XOR<Prisma.CustomerCreateWithoutOrderTrackingInput, Prisma.CustomerUncheckedCreateWithoutOrderTrackingInput>;
    where?: Prisma.CustomerWhereInput;
};
export type CustomerUpdateToOneWithWhereWithoutOrderTrackingInput = {
    where?: Prisma.CustomerWhereInput;
    data: Prisma.XOR<Prisma.CustomerUpdateWithoutOrderTrackingInput, Prisma.CustomerUncheckedUpdateWithoutOrderTrackingInput>;
};
export type CustomerUpdateWithoutOrderTrackingInput = {
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    customerPhone?: Prisma.StringFieldUpdateOperationsInput | string;
    customerAvatar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deactivatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    addresses?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    user?: Prisma.UserUpdateOneRequiredWithoutCustomerNestedInput;
    cart?: Prisma.CartUpdateOneWithoutCustomerNestedInput;
    orders?: Prisma.OrderUpdateManyWithoutCustomerNestedInput;
    rating?: Prisma.RatingUpdateManyWithoutCustomerNestedInput;
    preferredPaymentSettings?: Prisma.PreferredPaymentSettingsUpdateOneWithoutCustomerNestedInput;
    providerCustomers?: Prisma.ProviderCustomerUpdateManyWithoutCustomerNestedInput;
    createdBy?: Prisma.UserUpdateOneWithoutCreatedCustomersNestedInput;
    updatedBy?: Prisma.UserUpdateOneWithoutUpdatedCustomersNestedInput;
};
export type CustomerUncheckedUpdateWithoutOrderTrackingInput = {
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    customerPhone?: Prisma.StringFieldUpdateOperationsInput | string;
    customerAvatar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deactivatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    addresses?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdById?: Prisma.StringFieldUpdateOperationsInput | string;
    updatedById?: Prisma.StringFieldUpdateOperationsInput | string;
    cart?: Prisma.CartUncheckedUpdateOneWithoutCustomerNestedInput;
    orders?: Prisma.OrderUncheckedUpdateManyWithoutCustomerNestedInput;
    rating?: Prisma.RatingUncheckedUpdateManyWithoutCustomerNestedInput;
    preferredPaymentSettings?: Prisma.PreferredPaymentSettingsUncheckedUpdateOneWithoutCustomerNestedInput;
    providerCustomers?: Prisma.ProviderCustomerUncheckedUpdateManyWithoutCustomerNestedInput;
};
export type CustomerCreateWithoutPreferredPaymentSettingsInput = {
    customerId?: string;
    customerPhone: string;
    customerAvatar?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deactivatedAt?: Date | string | null;
    addresses?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    user: Prisma.UserCreateNestedOneWithoutCustomerInput;
    cart?: Prisma.CartCreateNestedOneWithoutCustomerInput;
    orders?: Prisma.OrderCreateNestedManyWithoutCustomerInput;
    rating?: Prisma.RatingCreateNestedManyWithoutCustomerInput;
    orderTracking?: Prisma.OrderTrackingCreateNestedManyWithoutCustomerInput;
    providerCustomers?: Prisma.ProviderCustomerCreateNestedManyWithoutCustomerInput;
    createdBy?: Prisma.UserCreateNestedOneWithoutCreatedCustomersInput;
    updatedBy?: Prisma.UserCreateNestedOneWithoutUpdatedCustomersInput;
};
export type CustomerUncheckedCreateWithoutPreferredPaymentSettingsInput = {
    customerId?: string;
    userId: string;
    customerPhone: string;
    customerAvatar?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deactivatedAt?: Date | string | null;
    addresses?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdById: string;
    updatedById: string;
    cart?: Prisma.CartUncheckedCreateNestedOneWithoutCustomerInput;
    orders?: Prisma.OrderUncheckedCreateNestedManyWithoutCustomerInput;
    rating?: Prisma.RatingUncheckedCreateNestedManyWithoutCustomerInput;
    orderTracking?: Prisma.OrderTrackingUncheckedCreateNestedManyWithoutCustomerInput;
    providerCustomers?: Prisma.ProviderCustomerUncheckedCreateNestedManyWithoutCustomerInput;
};
export type CustomerCreateOrConnectWithoutPreferredPaymentSettingsInput = {
    where: Prisma.CustomerWhereUniqueInput;
    create: Prisma.XOR<Prisma.CustomerCreateWithoutPreferredPaymentSettingsInput, Prisma.CustomerUncheckedCreateWithoutPreferredPaymentSettingsInput>;
};
export type CustomerUpsertWithoutPreferredPaymentSettingsInput = {
    update: Prisma.XOR<Prisma.CustomerUpdateWithoutPreferredPaymentSettingsInput, Prisma.CustomerUncheckedUpdateWithoutPreferredPaymentSettingsInput>;
    create: Prisma.XOR<Prisma.CustomerCreateWithoutPreferredPaymentSettingsInput, Prisma.CustomerUncheckedCreateWithoutPreferredPaymentSettingsInput>;
    where?: Prisma.CustomerWhereInput;
};
export type CustomerUpdateToOneWithWhereWithoutPreferredPaymentSettingsInput = {
    where?: Prisma.CustomerWhereInput;
    data: Prisma.XOR<Prisma.CustomerUpdateWithoutPreferredPaymentSettingsInput, Prisma.CustomerUncheckedUpdateWithoutPreferredPaymentSettingsInput>;
};
export type CustomerUpdateWithoutPreferredPaymentSettingsInput = {
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    customerPhone?: Prisma.StringFieldUpdateOperationsInput | string;
    customerAvatar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deactivatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    addresses?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    user?: Prisma.UserUpdateOneRequiredWithoutCustomerNestedInput;
    cart?: Prisma.CartUpdateOneWithoutCustomerNestedInput;
    orders?: Prisma.OrderUpdateManyWithoutCustomerNestedInput;
    rating?: Prisma.RatingUpdateManyWithoutCustomerNestedInput;
    orderTracking?: Prisma.OrderTrackingUpdateManyWithoutCustomerNestedInput;
    providerCustomers?: Prisma.ProviderCustomerUpdateManyWithoutCustomerNestedInput;
    createdBy?: Prisma.UserUpdateOneWithoutCreatedCustomersNestedInput;
    updatedBy?: Prisma.UserUpdateOneWithoutUpdatedCustomersNestedInput;
};
export type CustomerUncheckedUpdateWithoutPreferredPaymentSettingsInput = {
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    customerPhone?: Prisma.StringFieldUpdateOperationsInput | string;
    customerAvatar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deactivatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    addresses?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdById?: Prisma.StringFieldUpdateOperationsInput | string;
    updatedById?: Prisma.StringFieldUpdateOperationsInput | string;
    cart?: Prisma.CartUncheckedUpdateOneWithoutCustomerNestedInput;
    orders?: Prisma.OrderUncheckedUpdateManyWithoutCustomerNestedInput;
    rating?: Prisma.RatingUncheckedUpdateManyWithoutCustomerNestedInput;
    orderTracking?: Prisma.OrderTrackingUncheckedUpdateManyWithoutCustomerNestedInput;
    providerCustomers?: Prisma.ProviderCustomerUncheckedUpdateManyWithoutCustomerNestedInput;
};
export type CustomerCreateWithoutRatingInput = {
    customerId?: string;
    customerPhone: string;
    customerAvatar?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deactivatedAt?: Date | string | null;
    addresses?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    user: Prisma.UserCreateNestedOneWithoutCustomerInput;
    cart?: Prisma.CartCreateNestedOneWithoutCustomerInput;
    orders?: Prisma.OrderCreateNestedManyWithoutCustomerInput;
    orderTracking?: Prisma.OrderTrackingCreateNestedManyWithoutCustomerInput;
    preferredPaymentSettings?: Prisma.PreferredPaymentSettingsCreateNestedOneWithoutCustomerInput;
    providerCustomers?: Prisma.ProviderCustomerCreateNestedManyWithoutCustomerInput;
    createdBy?: Prisma.UserCreateNestedOneWithoutCreatedCustomersInput;
    updatedBy?: Prisma.UserCreateNestedOneWithoutUpdatedCustomersInput;
};
export type CustomerUncheckedCreateWithoutRatingInput = {
    customerId?: string;
    userId: string;
    customerPhone: string;
    customerAvatar?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deactivatedAt?: Date | string | null;
    addresses?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdById: string;
    updatedById: string;
    cart?: Prisma.CartUncheckedCreateNestedOneWithoutCustomerInput;
    orders?: Prisma.OrderUncheckedCreateNestedManyWithoutCustomerInput;
    orderTracking?: Prisma.OrderTrackingUncheckedCreateNestedManyWithoutCustomerInput;
    preferredPaymentSettings?: Prisma.PreferredPaymentSettingsUncheckedCreateNestedOneWithoutCustomerInput;
    providerCustomers?: Prisma.ProviderCustomerUncheckedCreateNestedManyWithoutCustomerInput;
};
export type CustomerCreateOrConnectWithoutRatingInput = {
    where: Prisma.CustomerWhereUniqueInput;
    create: Prisma.XOR<Prisma.CustomerCreateWithoutRatingInput, Prisma.CustomerUncheckedCreateWithoutRatingInput>;
};
export type CustomerUpsertWithoutRatingInput = {
    update: Prisma.XOR<Prisma.CustomerUpdateWithoutRatingInput, Prisma.CustomerUncheckedUpdateWithoutRatingInput>;
    create: Prisma.XOR<Prisma.CustomerCreateWithoutRatingInput, Prisma.CustomerUncheckedCreateWithoutRatingInput>;
    where?: Prisma.CustomerWhereInput;
};
export type CustomerUpdateToOneWithWhereWithoutRatingInput = {
    where?: Prisma.CustomerWhereInput;
    data: Prisma.XOR<Prisma.CustomerUpdateWithoutRatingInput, Prisma.CustomerUncheckedUpdateWithoutRatingInput>;
};
export type CustomerUpdateWithoutRatingInput = {
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    customerPhone?: Prisma.StringFieldUpdateOperationsInput | string;
    customerAvatar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deactivatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    addresses?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    user?: Prisma.UserUpdateOneRequiredWithoutCustomerNestedInput;
    cart?: Prisma.CartUpdateOneWithoutCustomerNestedInput;
    orders?: Prisma.OrderUpdateManyWithoutCustomerNestedInput;
    orderTracking?: Prisma.OrderTrackingUpdateManyWithoutCustomerNestedInput;
    preferredPaymentSettings?: Prisma.PreferredPaymentSettingsUpdateOneWithoutCustomerNestedInput;
    providerCustomers?: Prisma.ProviderCustomerUpdateManyWithoutCustomerNestedInput;
    createdBy?: Prisma.UserUpdateOneWithoutCreatedCustomersNestedInput;
    updatedBy?: Prisma.UserUpdateOneWithoutUpdatedCustomersNestedInput;
};
export type CustomerUncheckedUpdateWithoutRatingInput = {
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    customerPhone?: Prisma.StringFieldUpdateOperationsInput | string;
    customerAvatar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deactivatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    addresses?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdById?: Prisma.StringFieldUpdateOperationsInput | string;
    updatedById?: Prisma.StringFieldUpdateOperationsInput | string;
    cart?: Prisma.CartUncheckedUpdateOneWithoutCustomerNestedInput;
    orders?: Prisma.OrderUncheckedUpdateManyWithoutCustomerNestedInput;
    orderTracking?: Prisma.OrderTrackingUncheckedUpdateManyWithoutCustomerNestedInput;
    preferredPaymentSettings?: Prisma.PreferredPaymentSettingsUncheckedUpdateOneWithoutCustomerNestedInput;
    providerCustomers?: Prisma.ProviderCustomerUncheckedUpdateManyWithoutCustomerNestedInput;
};
export type CustomerCreateManyCreatedByInput = {
    customerId?: string;
    userId: string;
    customerPhone: string;
    customerAvatar?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deactivatedAt?: Date | string | null;
    addresses?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    updatedById: string;
};
export type CustomerCreateManyUpdatedByInput = {
    customerId?: string;
    userId: string;
    customerPhone: string;
    customerAvatar?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deactivatedAt?: Date | string | null;
    addresses?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdById: string;
};
export type CustomerUpdateWithoutCreatedByInput = {
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    customerPhone?: Prisma.StringFieldUpdateOperationsInput | string;
    customerAvatar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deactivatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    addresses?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    user?: Prisma.UserUpdateOneRequiredWithoutCustomerNestedInput;
    cart?: Prisma.CartUpdateOneWithoutCustomerNestedInput;
    orders?: Prisma.OrderUpdateManyWithoutCustomerNestedInput;
    rating?: Prisma.RatingUpdateManyWithoutCustomerNestedInput;
    orderTracking?: Prisma.OrderTrackingUpdateManyWithoutCustomerNestedInput;
    preferredPaymentSettings?: Prisma.PreferredPaymentSettingsUpdateOneWithoutCustomerNestedInput;
    providerCustomers?: Prisma.ProviderCustomerUpdateManyWithoutCustomerNestedInput;
    updatedBy?: Prisma.UserUpdateOneWithoutUpdatedCustomersNestedInput;
};
export type CustomerUncheckedUpdateWithoutCreatedByInput = {
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    customerPhone?: Prisma.StringFieldUpdateOperationsInput | string;
    customerAvatar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deactivatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    addresses?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    updatedById?: Prisma.StringFieldUpdateOperationsInput | string;
    cart?: Prisma.CartUncheckedUpdateOneWithoutCustomerNestedInput;
    orders?: Prisma.OrderUncheckedUpdateManyWithoutCustomerNestedInput;
    rating?: Prisma.RatingUncheckedUpdateManyWithoutCustomerNestedInput;
    orderTracking?: Prisma.OrderTrackingUncheckedUpdateManyWithoutCustomerNestedInput;
    preferredPaymentSettings?: Prisma.PreferredPaymentSettingsUncheckedUpdateOneWithoutCustomerNestedInput;
    providerCustomers?: Prisma.ProviderCustomerUncheckedUpdateManyWithoutCustomerNestedInput;
};
export type CustomerUncheckedUpdateManyWithoutCreatedByInput = {
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    customerPhone?: Prisma.StringFieldUpdateOperationsInput | string;
    customerAvatar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deactivatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    addresses?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    updatedById?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type CustomerUpdateWithoutUpdatedByInput = {
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    customerPhone?: Prisma.StringFieldUpdateOperationsInput | string;
    customerAvatar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deactivatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    addresses?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    user?: Prisma.UserUpdateOneRequiredWithoutCustomerNestedInput;
    cart?: Prisma.CartUpdateOneWithoutCustomerNestedInput;
    orders?: Prisma.OrderUpdateManyWithoutCustomerNestedInput;
    rating?: Prisma.RatingUpdateManyWithoutCustomerNestedInput;
    orderTracking?: Prisma.OrderTrackingUpdateManyWithoutCustomerNestedInput;
    preferredPaymentSettings?: Prisma.PreferredPaymentSettingsUpdateOneWithoutCustomerNestedInput;
    providerCustomers?: Prisma.ProviderCustomerUpdateManyWithoutCustomerNestedInput;
    createdBy?: Prisma.UserUpdateOneWithoutCreatedCustomersNestedInput;
};
export type CustomerUncheckedUpdateWithoutUpdatedByInput = {
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    customerPhone?: Prisma.StringFieldUpdateOperationsInput | string;
    customerAvatar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deactivatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    addresses?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdById?: Prisma.StringFieldUpdateOperationsInput | string;
    cart?: Prisma.CartUncheckedUpdateOneWithoutCustomerNestedInput;
    orders?: Prisma.OrderUncheckedUpdateManyWithoutCustomerNestedInput;
    rating?: Prisma.RatingUncheckedUpdateManyWithoutCustomerNestedInput;
    orderTracking?: Prisma.OrderTrackingUncheckedUpdateManyWithoutCustomerNestedInput;
    preferredPaymentSettings?: Prisma.PreferredPaymentSettingsUncheckedUpdateOneWithoutCustomerNestedInput;
    providerCustomers?: Prisma.ProviderCustomerUncheckedUpdateManyWithoutCustomerNestedInput;
};
export type CustomerUncheckedUpdateManyWithoutUpdatedByInput = {
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    customerPhone?: Prisma.StringFieldUpdateOperationsInput | string;
    customerAvatar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deactivatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    addresses?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdById?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type CustomerCountOutputType = {
    orders: number;
    rating: number;
    orderTracking: number;
    providerCustomers: number;
};
export type CustomerCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    orders?: boolean | CustomerCountOutputTypeCountOrdersArgs;
    rating?: boolean | CustomerCountOutputTypeCountRatingArgs;
    orderTracking?: boolean | CustomerCountOutputTypeCountOrderTrackingArgs;
    providerCustomers?: boolean | CustomerCountOutputTypeCountProviderCustomersArgs;
};
export type CustomerCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerCountOutputTypeSelect<ExtArgs> | null;
};
export type CustomerCountOutputTypeCountOrdersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderWhereInput;
};
export type CustomerCountOutputTypeCountRatingArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RatingWhereInput;
};
export type CustomerCountOutputTypeCountOrderTrackingArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderTrackingWhereInput;
};
export type CustomerCountOutputTypeCountProviderCustomersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProviderCustomerWhereInput;
};
export type CustomerSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    customerId?: boolean;
    userId?: boolean;
    customerPhone?: boolean;
    customerAvatar?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deactivatedAt?: boolean;
    addresses?: boolean;
    createdById?: boolean;
    updatedById?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    cart?: boolean | Prisma.Customer$cartArgs<ExtArgs>;
    orders?: boolean | Prisma.Customer$ordersArgs<ExtArgs>;
    rating?: boolean | Prisma.Customer$ratingArgs<ExtArgs>;
    orderTracking?: boolean | Prisma.Customer$orderTrackingArgs<ExtArgs>;
    preferredPaymentSettings?: boolean | Prisma.Customer$preferredPaymentSettingsArgs<ExtArgs>;
    providerCustomers?: boolean | Prisma.Customer$providerCustomersArgs<ExtArgs>;
    createdBy?: boolean | Prisma.Customer$createdByArgs<ExtArgs>;
    updatedBy?: boolean | Prisma.Customer$updatedByArgs<ExtArgs>;
    _count?: boolean | Prisma.CustomerCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["customer"]>;
export type CustomerSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    customerId?: boolean;
    userId?: boolean;
    customerPhone?: boolean;
    customerAvatar?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deactivatedAt?: boolean;
    addresses?: boolean;
    createdById?: boolean;
    updatedById?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    createdBy?: boolean | Prisma.Customer$createdByArgs<ExtArgs>;
    updatedBy?: boolean | Prisma.Customer$updatedByArgs<ExtArgs>;
}, ExtArgs["result"]["customer"]>;
export type CustomerSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    customerId?: boolean;
    userId?: boolean;
    customerPhone?: boolean;
    customerAvatar?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deactivatedAt?: boolean;
    addresses?: boolean;
    createdById?: boolean;
    updatedById?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    createdBy?: boolean | Prisma.Customer$createdByArgs<ExtArgs>;
    updatedBy?: boolean | Prisma.Customer$updatedByArgs<ExtArgs>;
}, ExtArgs["result"]["customer"]>;
export type CustomerSelectScalar = {
    customerId?: boolean;
    userId?: boolean;
    customerPhone?: boolean;
    customerAvatar?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deactivatedAt?: boolean;
    addresses?: boolean;
    createdById?: boolean;
    updatedById?: boolean;
};
export type CustomerOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"customerId" | "userId" | "customerPhone" | "customerAvatar" | "createdAt" | "updatedAt" | "deactivatedAt" | "addresses" | "createdById" | "updatedById", ExtArgs["result"]["customer"]>;
export type CustomerInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    cart?: boolean | Prisma.Customer$cartArgs<ExtArgs>;
    orders?: boolean | Prisma.Customer$ordersArgs<ExtArgs>;
    rating?: boolean | Prisma.Customer$ratingArgs<ExtArgs>;
    orderTracking?: boolean | Prisma.Customer$orderTrackingArgs<ExtArgs>;
    preferredPaymentSettings?: boolean | Prisma.Customer$preferredPaymentSettingsArgs<ExtArgs>;
    providerCustomers?: boolean | Prisma.Customer$providerCustomersArgs<ExtArgs>;
    createdBy?: boolean | Prisma.Customer$createdByArgs<ExtArgs>;
    updatedBy?: boolean | Prisma.Customer$updatedByArgs<ExtArgs>;
    _count?: boolean | Prisma.CustomerCountOutputTypeDefaultArgs<ExtArgs>;
};
export type CustomerIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    createdBy?: boolean | Prisma.Customer$createdByArgs<ExtArgs>;
    updatedBy?: boolean | Prisma.Customer$updatedByArgs<ExtArgs>;
};
export type CustomerIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    createdBy?: boolean | Prisma.Customer$createdByArgs<ExtArgs>;
    updatedBy?: boolean | Prisma.Customer$updatedByArgs<ExtArgs>;
};
export type $CustomerPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Customer";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        cart: Prisma.$CartPayload<ExtArgs> | null;
        orders: Prisma.$OrderPayload<ExtArgs>[];
        rating: Prisma.$RatingPayload<ExtArgs>[];
        orderTracking: Prisma.$OrderTrackingPayload<ExtArgs>[];
        preferredPaymentSettings: Prisma.$PreferredPaymentSettingsPayload<ExtArgs> | null;
        providerCustomers: Prisma.$ProviderCustomerPayload<ExtArgs>[];
        createdBy: Prisma.$UserPayload<ExtArgs> | null;
        updatedBy: Prisma.$UserPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        customerId: string;
        userId: string;
        customerPhone: string;
        customerAvatar: string | null;
        createdAt: Date;
        updatedAt: Date;
        deactivatedAt: Date | null;
        addresses: runtime.JsonValue | null;
        createdById: string;
        updatedById: string;
    }, ExtArgs["result"]["customer"]>;
    composites: {};
};
export type CustomerGetPayload<S extends boolean | null | undefined | CustomerDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CustomerPayload, S>;
export type CustomerCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CustomerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CustomerCountAggregateInputType | true;
};
export interface CustomerDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Customer'];
        meta: {
            name: 'Customer';
        };
    };
    findUnique<T extends CustomerFindUniqueArgs>(args: Prisma.SelectSubset<T, CustomerFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CustomerClient<runtime.Types.Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends CustomerFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CustomerFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CustomerClient<runtime.Types.Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends CustomerFindFirstArgs>(args?: Prisma.SelectSubset<T, CustomerFindFirstArgs<ExtArgs>>): Prisma.Prisma__CustomerClient<runtime.Types.Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends CustomerFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CustomerFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CustomerClient<runtime.Types.Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends CustomerFindManyArgs>(args?: Prisma.SelectSubset<T, CustomerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends CustomerCreateArgs>(args: Prisma.SelectSubset<T, CustomerCreateArgs<ExtArgs>>): Prisma.Prisma__CustomerClient<runtime.Types.Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends CustomerCreateManyArgs>(args?: Prisma.SelectSubset<T, CustomerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends CustomerCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CustomerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends CustomerDeleteArgs>(args: Prisma.SelectSubset<T, CustomerDeleteArgs<ExtArgs>>): Prisma.Prisma__CustomerClient<runtime.Types.Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends CustomerUpdateArgs>(args: Prisma.SelectSubset<T, CustomerUpdateArgs<ExtArgs>>): Prisma.Prisma__CustomerClient<runtime.Types.Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends CustomerDeleteManyArgs>(args?: Prisma.SelectSubset<T, CustomerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends CustomerUpdateManyArgs>(args: Prisma.SelectSubset<T, CustomerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends CustomerUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CustomerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends CustomerUpsertArgs>(args: Prisma.SelectSubset<T, CustomerUpsertArgs<ExtArgs>>): Prisma.Prisma__CustomerClient<runtime.Types.Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends CustomerCountArgs>(args?: Prisma.Subset<T, CustomerCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CustomerCountAggregateOutputType> : number>;
    aggregate<T extends CustomerAggregateArgs>(args: Prisma.Subset<T, CustomerAggregateArgs>): Prisma.PrismaPromise<GetCustomerAggregateType<T>>;
    groupBy<T extends CustomerGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CustomerGroupByArgs['orderBy'];
    } : {
        orderBy?: CustomerGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CustomerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: CustomerFieldRefs;
}
export interface Prisma__CustomerClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    cart<T extends Prisma.Customer$cartArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Customer$cartArgs<ExtArgs>>): Prisma.Prisma__CartClient<runtime.Types.Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    orders<T extends Prisma.Customer$ordersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Customer$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    rating<T extends Prisma.Customer$ratingArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Customer$ratingArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    orderTracking<T extends Prisma.Customer$orderTrackingArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Customer$orderTrackingArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderTrackingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    preferredPaymentSettings<T extends Prisma.Customer$preferredPaymentSettingsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Customer$preferredPaymentSettingsArgs<ExtArgs>>): Prisma.Prisma__PreferredPaymentSettingsClient<runtime.Types.Result.GetResult<Prisma.$PreferredPaymentSettingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    providerCustomers<T extends Prisma.Customer$providerCustomersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Customer$providerCustomersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProviderCustomerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    createdBy<T extends Prisma.Customer$createdByArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Customer$createdByArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    updatedBy<T extends Prisma.Customer$updatedByArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Customer$updatedByArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface CustomerFieldRefs {
    readonly customerId: Prisma.FieldRef<"Customer", 'String'>;
    readonly userId: Prisma.FieldRef<"Customer", 'String'>;
    readonly customerPhone: Prisma.FieldRef<"Customer", 'String'>;
    readonly customerAvatar: Prisma.FieldRef<"Customer", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Customer", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Customer", 'DateTime'>;
    readonly deactivatedAt: Prisma.FieldRef<"Customer", 'DateTime'>;
    readonly addresses: Prisma.FieldRef<"Customer", 'Json'>;
    readonly createdById: Prisma.FieldRef<"Customer", 'String'>;
    readonly updatedById: Prisma.FieldRef<"Customer", 'String'>;
}
export type CustomerFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerSelect<ExtArgs> | null;
    omit?: Prisma.CustomerOmit<ExtArgs> | null;
    include?: Prisma.CustomerInclude<ExtArgs> | null;
    where: Prisma.CustomerWhereUniqueInput;
};
export type CustomerFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerSelect<ExtArgs> | null;
    omit?: Prisma.CustomerOmit<ExtArgs> | null;
    include?: Prisma.CustomerInclude<ExtArgs> | null;
    where: Prisma.CustomerWhereUniqueInput;
};
export type CustomerFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type CustomerFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type CustomerFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type CustomerCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerSelect<ExtArgs> | null;
    omit?: Prisma.CustomerOmit<ExtArgs> | null;
    include?: Prisma.CustomerInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CustomerCreateInput, Prisma.CustomerUncheckedCreateInput>;
};
export type CustomerCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.CustomerCreateManyInput | Prisma.CustomerCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CustomerCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CustomerOmit<ExtArgs> | null;
    data: Prisma.CustomerCreateManyInput | Prisma.CustomerCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.CustomerIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type CustomerUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerSelect<ExtArgs> | null;
    omit?: Prisma.CustomerOmit<ExtArgs> | null;
    include?: Prisma.CustomerInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CustomerUpdateInput, Prisma.CustomerUncheckedUpdateInput>;
    where: Prisma.CustomerWhereUniqueInput;
};
export type CustomerUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.CustomerUpdateManyMutationInput, Prisma.CustomerUncheckedUpdateManyInput>;
    where?: Prisma.CustomerWhereInput;
    limit?: number;
};
export type CustomerUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CustomerOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CustomerUpdateManyMutationInput, Prisma.CustomerUncheckedUpdateManyInput>;
    where?: Prisma.CustomerWhereInput;
    limit?: number;
    include?: Prisma.CustomerIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type CustomerUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerSelect<ExtArgs> | null;
    omit?: Prisma.CustomerOmit<ExtArgs> | null;
    include?: Prisma.CustomerInclude<ExtArgs> | null;
    where: Prisma.CustomerWhereUniqueInput;
    create: Prisma.XOR<Prisma.CustomerCreateInput, Prisma.CustomerUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.CustomerUpdateInput, Prisma.CustomerUncheckedUpdateInput>;
};
export type CustomerDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerSelect<ExtArgs> | null;
    omit?: Prisma.CustomerOmit<ExtArgs> | null;
    include?: Prisma.CustomerInclude<ExtArgs> | null;
    where: Prisma.CustomerWhereUniqueInput;
};
export type CustomerDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CustomerWhereInput;
    limit?: number;
};
export type Customer$cartArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CartSelect<ExtArgs> | null;
    omit?: Prisma.CartOmit<ExtArgs> | null;
    include?: Prisma.CartInclude<ExtArgs> | null;
    where?: Prisma.CartWhereInput;
};
export type Customer$ordersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSelect<ExtArgs> | null;
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    include?: Prisma.OrderInclude<ExtArgs> | null;
    where?: Prisma.OrderWhereInput;
    orderBy?: Prisma.OrderOrderByWithRelationInput | Prisma.OrderOrderByWithRelationInput[];
    cursor?: Prisma.OrderWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrderScalarFieldEnum | Prisma.OrderScalarFieldEnum[];
};
export type Customer$ratingArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RatingSelect<ExtArgs> | null;
    omit?: Prisma.RatingOmit<ExtArgs> | null;
    include?: Prisma.RatingInclude<ExtArgs> | null;
    where?: Prisma.RatingWhereInput;
    orderBy?: Prisma.RatingOrderByWithRelationInput | Prisma.RatingOrderByWithRelationInput[];
    cursor?: Prisma.RatingWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RatingScalarFieldEnum | Prisma.RatingScalarFieldEnum[];
};
export type Customer$orderTrackingArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderTrackingSelect<ExtArgs> | null;
    omit?: Prisma.OrderTrackingOmit<ExtArgs> | null;
    include?: Prisma.OrderTrackingInclude<ExtArgs> | null;
    where?: Prisma.OrderTrackingWhereInput;
    orderBy?: Prisma.OrderTrackingOrderByWithRelationInput | Prisma.OrderTrackingOrderByWithRelationInput[];
    cursor?: Prisma.OrderTrackingWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrderTrackingScalarFieldEnum | Prisma.OrderTrackingScalarFieldEnum[];
};
export type Customer$preferredPaymentSettingsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PreferredPaymentSettingsSelect<ExtArgs> | null;
    omit?: Prisma.PreferredPaymentSettingsOmit<ExtArgs> | null;
    include?: Prisma.PreferredPaymentSettingsInclude<ExtArgs> | null;
    where?: Prisma.PreferredPaymentSettingsWhereInput;
};
export type Customer$providerCustomersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProviderCustomerSelect<ExtArgs> | null;
    omit?: Prisma.ProviderCustomerOmit<ExtArgs> | null;
    include?: Prisma.ProviderCustomerInclude<ExtArgs> | null;
    where?: Prisma.ProviderCustomerWhereInput;
    orderBy?: Prisma.ProviderCustomerOrderByWithRelationInput | Prisma.ProviderCustomerOrderByWithRelationInput[];
    cursor?: Prisma.ProviderCustomerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProviderCustomerScalarFieldEnum | Prisma.ProviderCustomerScalarFieldEnum[];
};
export type Customer$createdByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
};
export type Customer$updatedByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
};
export type CustomerDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerSelect<ExtArgs> | null;
    omit?: Prisma.CustomerOmit<ExtArgs> | null;
    include?: Prisma.CustomerInclude<ExtArgs> | null;
};
