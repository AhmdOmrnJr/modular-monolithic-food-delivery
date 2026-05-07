import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type OrderModel = runtime.Types.Result.DefaultSelection<Prisma.$OrderPayload>;
export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null;
    _avg: OrderAvgAggregateOutputType | null;
    _sum: OrderSumAggregateOutputType | null;
    _min: OrderMinAggregateOutputType | null;
    _max: OrderMaxAggregateOutputType | null;
};
export type OrderAvgAggregateOutputType = {
    totalAmount: number | null;
};
export type OrderSumAggregateOutputType = {
    totalAmount: number | null;
};
export type OrderMinAggregateOutputType = {
    orderId: string | null;
    customerId: string | null;
    restaurantId: string | null;
    totalAmount: number | null;
    orderStatus: $Enums.OrderStatusKey | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type OrderMaxAggregateOutputType = {
    orderId: string | null;
    customerId: string | null;
    restaurantId: string | null;
    totalAmount: number | null;
    orderStatus: $Enums.OrderStatusKey | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type OrderCountAggregateOutputType = {
    orderId: number;
    customerId: number;
    restaurantId: number;
    totalAmount: number;
    orderStatus: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type OrderAvgAggregateInputType = {
    totalAmount?: true;
};
export type OrderSumAggregateInputType = {
    totalAmount?: true;
};
export type OrderMinAggregateInputType = {
    orderId?: true;
    customerId?: true;
    restaurantId?: true;
    totalAmount?: true;
    orderStatus?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type OrderMaxAggregateInputType = {
    orderId?: true;
    customerId?: true;
    restaurantId?: true;
    totalAmount?: true;
    orderStatus?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type OrderCountAggregateInputType = {
    orderId?: true;
    customerId?: true;
    restaurantId?: true;
    totalAmount?: true;
    orderStatus?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type OrderAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderWhereInput;
    orderBy?: Prisma.OrderOrderByWithRelationInput | Prisma.OrderOrderByWithRelationInput[];
    cursor?: Prisma.OrderWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | OrderCountAggregateInputType;
    _avg?: OrderAvgAggregateInputType;
    _sum?: OrderSumAggregateInputType;
    _min?: OrderMinAggregateInputType;
    _max?: OrderMaxAggregateInputType;
};
export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
    [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateOrder[P]> : Prisma.GetScalarType<T[P], AggregateOrder[P]>;
};
export type OrderGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderWhereInput;
    orderBy?: Prisma.OrderOrderByWithAggregationInput | Prisma.OrderOrderByWithAggregationInput[];
    by: Prisma.OrderScalarFieldEnum[] | Prisma.OrderScalarFieldEnum;
    having?: Prisma.OrderScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: OrderCountAggregateInputType | true;
    _avg?: OrderAvgAggregateInputType;
    _sum?: OrderSumAggregateInputType;
    _min?: OrderMinAggregateInputType;
    _max?: OrderMaxAggregateInputType;
};
export type OrderGroupByOutputType = {
    orderId: string;
    customerId: string;
    restaurantId: string;
    totalAmount: number;
    orderStatus: $Enums.OrderStatusKey;
    createdAt: Date;
    updatedAt: Date;
    _count: OrderCountAggregateOutputType | null;
    _avg: OrderAvgAggregateOutputType | null;
    _sum: OrderSumAggregateOutputType | null;
    _min: OrderMinAggregateOutputType | null;
    _max: OrderMaxAggregateOutputType | null;
};
export type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<OrderGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], OrderGroupByOutputType[P]> : Prisma.GetScalarType<T[P], OrderGroupByOutputType[P]>;
}>>;
export type OrderWhereInput = {
    AND?: Prisma.OrderWhereInput | Prisma.OrderWhereInput[];
    OR?: Prisma.OrderWhereInput[];
    NOT?: Prisma.OrderWhereInput | Prisma.OrderWhereInput[];
    orderId?: Prisma.StringFilter<"Order"> | string;
    customerId?: Prisma.StringFilter<"Order"> | string;
    restaurantId?: Prisma.StringFilter<"Order"> | string;
    totalAmount?: Prisma.IntFilter<"Order"> | number;
    orderStatus?: Prisma.EnumOrderStatusKeyFilter<"Order"> | $Enums.OrderStatusKey;
    createdAt?: Prisma.DateTimeFilter<"Order"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Order"> | Date | string;
    customer?: Prisma.XOR<Prisma.CustomerScalarRelationFilter, Prisma.CustomerWhereInput>;
    restaurant?: Prisma.XOR<Prisma.RestaurantScalarRelationFilter, Prisma.RestaurantWhereInput>;
    orderStatusDetails?: Prisma.XOR<Prisma.OrderStatusScalarRelationFilter, Prisma.OrderStatusWhereInput>;
    orderTracking?: Prisma.OrderTrackingListRelationFilter;
    orderItems?: Prisma.OrderItemListRelationFilter;
};
export type OrderOrderByWithRelationInput = {
    orderId?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    restaurantId?: Prisma.SortOrder;
    totalAmount?: Prisma.SortOrder;
    orderStatus?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    customer?: Prisma.CustomerOrderByWithRelationInput;
    restaurant?: Prisma.RestaurantOrderByWithRelationInput;
    orderStatusDetails?: Prisma.OrderStatusOrderByWithRelationInput;
    orderTracking?: Prisma.OrderTrackingOrderByRelationAggregateInput;
    orderItems?: Prisma.OrderItemOrderByRelationAggregateInput;
};
export type OrderWhereUniqueInput = Prisma.AtLeast<{
    orderId?: string;
    AND?: Prisma.OrderWhereInput | Prisma.OrderWhereInput[];
    OR?: Prisma.OrderWhereInput[];
    NOT?: Prisma.OrderWhereInput | Prisma.OrderWhereInput[];
    customerId?: Prisma.StringFilter<"Order"> | string;
    restaurantId?: Prisma.StringFilter<"Order"> | string;
    totalAmount?: Prisma.IntFilter<"Order"> | number;
    orderStatus?: Prisma.EnumOrderStatusKeyFilter<"Order"> | $Enums.OrderStatusKey;
    createdAt?: Prisma.DateTimeFilter<"Order"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Order"> | Date | string;
    customer?: Prisma.XOR<Prisma.CustomerScalarRelationFilter, Prisma.CustomerWhereInput>;
    restaurant?: Prisma.XOR<Prisma.RestaurantScalarRelationFilter, Prisma.RestaurantWhereInput>;
    orderStatusDetails?: Prisma.XOR<Prisma.OrderStatusScalarRelationFilter, Prisma.OrderStatusWhereInput>;
    orderTracking?: Prisma.OrderTrackingListRelationFilter;
    orderItems?: Prisma.OrderItemListRelationFilter;
}, "orderId">;
export type OrderOrderByWithAggregationInput = {
    orderId?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    restaurantId?: Prisma.SortOrder;
    totalAmount?: Prisma.SortOrder;
    orderStatus?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.OrderCountOrderByAggregateInput;
    _avg?: Prisma.OrderAvgOrderByAggregateInput;
    _max?: Prisma.OrderMaxOrderByAggregateInput;
    _min?: Prisma.OrderMinOrderByAggregateInput;
    _sum?: Prisma.OrderSumOrderByAggregateInput;
};
export type OrderScalarWhereWithAggregatesInput = {
    AND?: Prisma.OrderScalarWhereWithAggregatesInput | Prisma.OrderScalarWhereWithAggregatesInput[];
    OR?: Prisma.OrderScalarWhereWithAggregatesInput[];
    NOT?: Prisma.OrderScalarWhereWithAggregatesInput | Prisma.OrderScalarWhereWithAggregatesInput[];
    orderId?: Prisma.StringWithAggregatesFilter<"Order"> | string;
    customerId?: Prisma.StringWithAggregatesFilter<"Order"> | string;
    restaurantId?: Prisma.StringWithAggregatesFilter<"Order"> | string;
    totalAmount?: Prisma.IntWithAggregatesFilter<"Order"> | number;
    orderStatus?: Prisma.EnumOrderStatusKeyWithAggregatesFilter<"Order"> | $Enums.OrderStatusKey;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Order"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Order"> | Date | string;
};
export type OrderCreateInput = {
    orderId?: string;
    totalAmount: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    customer: Prisma.CustomerCreateNestedOneWithoutOrdersInput;
    restaurant: Prisma.RestaurantCreateNestedOneWithoutOrdersInput;
    orderStatusDetails: Prisma.OrderStatusCreateNestedOneWithoutOrdersInput;
    orderTracking?: Prisma.OrderTrackingCreateNestedManyWithoutOrderInput;
    orderItems?: Prisma.OrderItemCreateNestedManyWithoutOrderInput;
};
export type OrderUncheckedCreateInput = {
    orderId?: string;
    customerId: string;
    restaurantId: string;
    totalAmount: number;
    orderStatus: $Enums.OrderStatusKey;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    orderTracking?: Prisma.OrderTrackingUncheckedCreateNestedManyWithoutOrderInput;
    orderItems?: Prisma.OrderItemUncheckedCreateNestedManyWithoutOrderInput;
};
export type OrderUpdateInput = {
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    totalAmount?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: Prisma.CustomerUpdateOneRequiredWithoutOrdersNestedInput;
    restaurant?: Prisma.RestaurantUpdateOneRequiredWithoutOrdersNestedInput;
    orderStatusDetails?: Prisma.OrderStatusUpdateOneRequiredWithoutOrdersNestedInput;
    orderTracking?: Prisma.OrderTrackingUpdateManyWithoutOrderNestedInput;
    orderItems?: Prisma.OrderItemUpdateManyWithoutOrderNestedInput;
};
export type OrderUncheckedUpdateInput = {
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    restaurantId?: Prisma.StringFieldUpdateOperationsInput | string;
    totalAmount?: Prisma.IntFieldUpdateOperationsInput | number;
    orderStatus?: Prisma.EnumOrderStatusKeyFieldUpdateOperationsInput | $Enums.OrderStatusKey;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    orderTracking?: Prisma.OrderTrackingUncheckedUpdateManyWithoutOrderNestedInput;
    orderItems?: Prisma.OrderItemUncheckedUpdateManyWithoutOrderNestedInput;
};
export type OrderCreateManyInput = {
    orderId?: string;
    customerId: string;
    restaurantId: string;
    totalAmount: number;
    orderStatus: $Enums.OrderStatusKey;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type OrderUpdateManyMutationInput = {
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    totalAmount?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OrderUncheckedUpdateManyInput = {
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    restaurantId?: Prisma.StringFieldUpdateOperationsInput | string;
    totalAmount?: Prisma.IntFieldUpdateOperationsInput | number;
    orderStatus?: Prisma.EnumOrderStatusKeyFieldUpdateOperationsInput | $Enums.OrderStatusKey;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OrderListRelationFilter = {
    every?: Prisma.OrderWhereInput;
    some?: Prisma.OrderWhereInput;
    none?: Prisma.OrderWhereInput;
};
export type OrderOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type OrderCountOrderByAggregateInput = {
    orderId?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    restaurantId?: Prisma.SortOrder;
    totalAmount?: Prisma.SortOrder;
    orderStatus?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type OrderAvgOrderByAggregateInput = {
    totalAmount?: Prisma.SortOrder;
};
export type OrderMaxOrderByAggregateInput = {
    orderId?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    restaurantId?: Prisma.SortOrder;
    totalAmount?: Prisma.SortOrder;
    orderStatus?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type OrderMinOrderByAggregateInput = {
    orderId?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    restaurantId?: Prisma.SortOrder;
    totalAmount?: Prisma.SortOrder;
    orderStatus?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type OrderSumOrderByAggregateInput = {
    totalAmount?: Prisma.SortOrder;
};
export type OrderScalarRelationFilter = {
    is?: Prisma.OrderWhereInput;
    isNot?: Prisma.OrderWhereInput;
};
export type OrderCreateNestedManyWithoutCustomerInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutCustomerInput, Prisma.OrderUncheckedCreateWithoutCustomerInput> | Prisma.OrderCreateWithoutCustomerInput[] | Prisma.OrderUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutCustomerInput | Prisma.OrderCreateOrConnectWithoutCustomerInput[];
    createMany?: Prisma.OrderCreateManyCustomerInputEnvelope;
    connect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
};
export type OrderUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutCustomerInput, Prisma.OrderUncheckedCreateWithoutCustomerInput> | Prisma.OrderCreateWithoutCustomerInput[] | Prisma.OrderUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutCustomerInput | Prisma.OrderCreateOrConnectWithoutCustomerInput[];
    createMany?: Prisma.OrderCreateManyCustomerInputEnvelope;
    connect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
};
export type OrderUpdateManyWithoutCustomerNestedInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutCustomerInput, Prisma.OrderUncheckedCreateWithoutCustomerInput> | Prisma.OrderCreateWithoutCustomerInput[] | Prisma.OrderUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutCustomerInput | Prisma.OrderCreateOrConnectWithoutCustomerInput[];
    upsert?: Prisma.OrderUpsertWithWhereUniqueWithoutCustomerInput | Prisma.OrderUpsertWithWhereUniqueWithoutCustomerInput[];
    createMany?: Prisma.OrderCreateManyCustomerInputEnvelope;
    set?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    disconnect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    delete?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    connect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    update?: Prisma.OrderUpdateWithWhereUniqueWithoutCustomerInput | Prisma.OrderUpdateWithWhereUniqueWithoutCustomerInput[];
    updateMany?: Prisma.OrderUpdateManyWithWhereWithoutCustomerInput | Prisma.OrderUpdateManyWithWhereWithoutCustomerInput[];
    deleteMany?: Prisma.OrderScalarWhereInput | Prisma.OrderScalarWhereInput[];
};
export type OrderUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutCustomerInput, Prisma.OrderUncheckedCreateWithoutCustomerInput> | Prisma.OrderCreateWithoutCustomerInput[] | Prisma.OrderUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutCustomerInput | Prisma.OrderCreateOrConnectWithoutCustomerInput[];
    upsert?: Prisma.OrderUpsertWithWhereUniqueWithoutCustomerInput | Prisma.OrderUpsertWithWhereUniqueWithoutCustomerInput[];
    createMany?: Prisma.OrderCreateManyCustomerInputEnvelope;
    set?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    disconnect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    delete?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    connect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    update?: Prisma.OrderUpdateWithWhereUniqueWithoutCustomerInput | Prisma.OrderUpdateWithWhereUniqueWithoutCustomerInput[];
    updateMany?: Prisma.OrderUpdateManyWithWhereWithoutCustomerInput | Prisma.OrderUpdateManyWithWhereWithoutCustomerInput[];
    deleteMany?: Prisma.OrderScalarWhereInput | Prisma.OrderScalarWhereInput[];
};
export type OrderCreateNestedManyWithoutRestaurantInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutRestaurantInput, Prisma.OrderUncheckedCreateWithoutRestaurantInput> | Prisma.OrderCreateWithoutRestaurantInput[] | Prisma.OrderUncheckedCreateWithoutRestaurantInput[];
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutRestaurantInput | Prisma.OrderCreateOrConnectWithoutRestaurantInput[];
    createMany?: Prisma.OrderCreateManyRestaurantInputEnvelope;
    connect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
};
export type OrderUncheckedCreateNestedManyWithoutRestaurantInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutRestaurantInput, Prisma.OrderUncheckedCreateWithoutRestaurantInput> | Prisma.OrderCreateWithoutRestaurantInput[] | Prisma.OrderUncheckedCreateWithoutRestaurantInput[];
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutRestaurantInput | Prisma.OrderCreateOrConnectWithoutRestaurantInput[];
    createMany?: Prisma.OrderCreateManyRestaurantInputEnvelope;
    connect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
};
export type OrderUpdateManyWithoutRestaurantNestedInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutRestaurantInput, Prisma.OrderUncheckedCreateWithoutRestaurantInput> | Prisma.OrderCreateWithoutRestaurantInput[] | Prisma.OrderUncheckedCreateWithoutRestaurantInput[];
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutRestaurantInput | Prisma.OrderCreateOrConnectWithoutRestaurantInput[];
    upsert?: Prisma.OrderUpsertWithWhereUniqueWithoutRestaurantInput | Prisma.OrderUpsertWithWhereUniqueWithoutRestaurantInput[];
    createMany?: Prisma.OrderCreateManyRestaurantInputEnvelope;
    set?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    disconnect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    delete?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    connect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    update?: Prisma.OrderUpdateWithWhereUniqueWithoutRestaurantInput | Prisma.OrderUpdateWithWhereUniqueWithoutRestaurantInput[];
    updateMany?: Prisma.OrderUpdateManyWithWhereWithoutRestaurantInput | Prisma.OrderUpdateManyWithWhereWithoutRestaurantInput[];
    deleteMany?: Prisma.OrderScalarWhereInput | Prisma.OrderScalarWhereInput[];
};
export type OrderUncheckedUpdateManyWithoutRestaurantNestedInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutRestaurantInput, Prisma.OrderUncheckedCreateWithoutRestaurantInput> | Prisma.OrderCreateWithoutRestaurantInput[] | Prisma.OrderUncheckedCreateWithoutRestaurantInput[];
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutRestaurantInput | Prisma.OrderCreateOrConnectWithoutRestaurantInput[];
    upsert?: Prisma.OrderUpsertWithWhereUniqueWithoutRestaurantInput | Prisma.OrderUpsertWithWhereUniqueWithoutRestaurantInput[];
    createMany?: Prisma.OrderCreateManyRestaurantInputEnvelope;
    set?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    disconnect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    delete?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    connect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    update?: Prisma.OrderUpdateWithWhereUniqueWithoutRestaurantInput | Prisma.OrderUpdateWithWhereUniqueWithoutRestaurantInput[];
    updateMany?: Prisma.OrderUpdateManyWithWhereWithoutRestaurantInput | Prisma.OrderUpdateManyWithWhereWithoutRestaurantInput[];
    deleteMany?: Prisma.OrderScalarWhereInput | Prisma.OrderScalarWhereInput[];
};
export type EnumOrderStatusKeyFieldUpdateOperationsInput = {
    set?: $Enums.OrderStatusKey;
};
export type OrderCreateNestedManyWithoutOrderStatusDetailsInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutOrderStatusDetailsInput, Prisma.OrderUncheckedCreateWithoutOrderStatusDetailsInput> | Prisma.OrderCreateWithoutOrderStatusDetailsInput[] | Prisma.OrderUncheckedCreateWithoutOrderStatusDetailsInput[];
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutOrderStatusDetailsInput | Prisma.OrderCreateOrConnectWithoutOrderStatusDetailsInput[];
    createMany?: Prisma.OrderCreateManyOrderStatusDetailsInputEnvelope;
    connect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
};
export type OrderUncheckedCreateNestedManyWithoutOrderStatusDetailsInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutOrderStatusDetailsInput, Prisma.OrderUncheckedCreateWithoutOrderStatusDetailsInput> | Prisma.OrderCreateWithoutOrderStatusDetailsInput[] | Prisma.OrderUncheckedCreateWithoutOrderStatusDetailsInput[];
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutOrderStatusDetailsInput | Prisma.OrderCreateOrConnectWithoutOrderStatusDetailsInput[];
    createMany?: Prisma.OrderCreateManyOrderStatusDetailsInputEnvelope;
    connect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
};
export type OrderUpdateManyWithoutOrderStatusDetailsNestedInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutOrderStatusDetailsInput, Prisma.OrderUncheckedCreateWithoutOrderStatusDetailsInput> | Prisma.OrderCreateWithoutOrderStatusDetailsInput[] | Prisma.OrderUncheckedCreateWithoutOrderStatusDetailsInput[];
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutOrderStatusDetailsInput | Prisma.OrderCreateOrConnectWithoutOrderStatusDetailsInput[];
    upsert?: Prisma.OrderUpsertWithWhereUniqueWithoutOrderStatusDetailsInput | Prisma.OrderUpsertWithWhereUniqueWithoutOrderStatusDetailsInput[];
    createMany?: Prisma.OrderCreateManyOrderStatusDetailsInputEnvelope;
    set?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    disconnect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    delete?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    connect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    update?: Prisma.OrderUpdateWithWhereUniqueWithoutOrderStatusDetailsInput | Prisma.OrderUpdateWithWhereUniqueWithoutOrderStatusDetailsInput[];
    updateMany?: Prisma.OrderUpdateManyWithWhereWithoutOrderStatusDetailsInput | Prisma.OrderUpdateManyWithWhereWithoutOrderStatusDetailsInput[];
    deleteMany?: Prisma.OrderScalarWhereInput | Prisma.OrderScalarWhereInput[];
};
export type OrderUncheckedUpdateManyWithoutOrderStatusDetailsNestedInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutOrderStatusDetailsInput, Prisma.OrderUncheckedCreateWithoutOrderStatusDetailsInput> | Prisma.OrderCreateWithoutOrderStatusDetailsInput[] | Prisma.OrderUncheckedCreateWithoutOrderStatusDetailsInput[];
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutOrderStatusDetailsInput | Prisma.OrderCreateOrConnectWithoutOrderStatusDetailsInput[];
    upsert?: Prisma.OrderUpsertWithWhereUniqueWithoutOrderStatusDetailsInput | Prisma.OrderUpsertWithWhereUniqueWithoutOrderStatusDetailsInput[];
    createMany?: Prisma.OrderCreateManyOrderStatusDetailsInputEnvelope;
    set?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    disconnect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    delete?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    connect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    update?: Prisma.OrderUpdateWithWhereUniqueWithoutOrderStatusDetailsInput | Prisma.OrderUpdateWithWhereUniqueWithoutOrderStatusDetailsInput[];
    updateMany?: Prisma.OrderUpdateManyWithWhereWithoutOrderStatusDetailsInput | Prisma.OrderUpdateManyWithWhereWithoutOrderStatusDetailsInput[];
    deleteMany?: Prisma.OrderScalarWhereInput | Prisma.OrderScalarWhereInput[];
};
export type OrderCreateNestedOneWithoutOrderTrackingInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutOrderTrackingInput, Prisma.OrderUncheckedCreateWithoutOrderTrackingInput>;
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutOrderTrackingInput;
    connect?: Prisma.OrderWhereUniqueInput;
};
export type OrderUpdateOneRequiredWithoutOrderTrackingNestedInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutOrderTrackingInput, Prisma.OrderUncheckedCreateWithoutOrderTrackingInput>;
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutOrderTrackingInput;
    upsert?: Prisma.OrderUpsertWithoutOrderTrackingInput;
    connect?: Prisma.OrderWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.OrderUpdateToOneWithWhereWithoutOrderTrackingInput, Prisma.OrderUpdateWithoutOrderTrackingInput>, Prisma.OrderUncheckedUpdateWithoutOrderTrackingInput>;
};
export type OrderCreateNestedOneWithoutOrderItemsInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutOrderItemsInput, Prisma.OrderUncheckedCreateWithoutOrderItemsInput>;
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutOrderItemsInput;
    connect?: Prisma.OrderWhereUniqueInput;
};
export type OrderUpdateOneRequiredWithoutOrderItemsNestedInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutOrderItemsInput, Prisma.OrderUncheckedCreateWithoutOrderItemsInput>;
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutOrderItemsInput;
    upsert?: Prisma.OrderUpsertWithoutOrderItemsInput;
    connect?: Prisma.OrderWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.OrderUpdateToOneWithWhereWithoutOrderItemsInput, Prisma.OrderUpdateWithoutOrderItemsInput>, Prisma.OrderUncheckedUpdateWithoutOrderItemsInput>;
};
export type OrderCreateWithoutCustomerInput = {
    orderId?: string;
    totalAmount: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    restaurant: Prisma.RestaurantCreateNestedOneWithoutOrdersInput;
    orderStatusDetails: Prisma.OrderStatusCreateNestedOneWithoutOrdersInput;
    orderTracking?: Prisma.OrderTrackingCreateNestedManyWithoutOrderInput;
    orderItems?: Prisma.OrderItemCreateNestedManyWithoutOrderInput;
};
export type OrderUncheckedCreateWithoutCustomerInput = {
    orderId?: string;
    restaurantId: string;
    totalAmount: number;
    orderStatus: $Enums.OrderStatusKey;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    orderTracking?: Prisma.OrderTrackingUncheckedCreateNestedManyWithoutOrderInput;
    orderItems?: Prisma.OrderItemUncheckedCreateNestedManyWithoutOrderInput;
};
export type OrderCreateOrConnectWithoutCustomerInput = {
    where: Prisma.OrderWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrderCreateWithoutCustomerInput, Prisma.OrderUncheckedCreateWithoutCustomerInput>;
};
export type OrderCreateManyCustomerInputEnvelope = {
    data: Prisma.OrderCreateManyCustomerInput | Prisma.OrderCreateManyCustomerInput[];
    skipDuplicates?: boolean;
};
export type OrderUpsertWithWhereUniqueWithoutCustomerInput = {
    where: Prisma.OrderWhereUniqueInput;
    update: Prisma.XOR<Prisma.OrderUpdateWithoutCustomerInput, Prisma.OrderUncheckedUpdateWithoutCustomerInput>;
    create: Prisma.XOR<Prisma.OrderCreateWithoutCustomerInput, Prisma.OrderUncheckedCreateWithoutCustomerInput>;
};
export type OrderUpdateWithWhereUniqueWithoutCustomerInput = {
    where: Prisma.OrderWhereUniqueInput;
    data: Prisma.XOR<Prisma.OrderUpdateWithoutCustomerInput, Prisma.OrderUncheckedUpdateWithoutCustomerInput>;
};
export type OrderUpdateManyWithWhereWithoutCustomerInput = {
    where: Prisma.OrderScalarWhereInput;
    data: Prisma.XOR<Prisma.OrderUpdateManyMutationInput, Prisma.OrderUncheckedUpdateManyWithoutCustomerInput>;
};
export type OrderScalarWhereInput = {
    AND?: Prisma.OrderScalarWhereInput | Prisma.OrderScalarWhereInput[];
    OR?: Prisma.OrderScalarWhereInput[];
    NOT?: Prisma.OrderScalarWhereInput | Prisma.OrderScalarWhereInput[];
    orderId?: Prisma.StringFilter<"Order"> | string;
    customerId?: Prisma.StringFilter<"Order"> | string;
    restaurantId?: Prisma.StringFilter<"Order"> | string;
    totalAmount?: Prisma.IntFilter<"Order"> | number;
    orderStatus?: Prisma.EnumOrderStatusKeyFilter<"Order"> | $Enums.OrderStatusKey;
    createdAt?: Prisma.DateTimeFilter<"Order"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Order"> | Date | string;
};
export type OrderCreateWithoutRestaurantInput = {
    orderId?: string;
    totalAmount: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    customer: Prisma.CustomerCreateNestedOneWithoutOrdersInput;
    orderStatusDetails: Prisma.OrderStatusCreateNestedOneWithoutOrdersInput;
    orderTracking?: Prisma.OrderTrackingCreateNestedManyWithoutOrderInput;
    orderItems?: Prisma.OrderItemCreateNestedManyWithoutOrderInput;
};
export type OrderUncheckedCreateWithoutRestaurantInput = {
    orderId?: string;
    customerId: string;
    totalAmount: number;
    orderStatus: $Enums.OrderStatusKey;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    orderTracking?: Prisma.OrderTrackingUncheckedCreateNestedManyWithoutOrderInput;
    orderItems?: Prisma.OrderItemUncheckedCreateNestedManyWithoutOrderInput;
};
export type OrderCreateOrConnectWithoutRestaurantInput = {
    where: Prisma.OrderWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrderCreateWithoutRestaurantInput, Prisma.OrderUncheckedCreateWithoutRestaurantInput>;
};
export type OrderCreateManyRestaurantInputEnvelope = {
    data: Prisma.OrderCreateManyRestaurantInput | Prisma.OrderCreateManyRestaurantInput[];
    skipDuplicates?: boolean;
};
export type OrderUpsertWithWhereUniqueWithoutRestaurantInput = {
    where: Prisma.OrderWhereUniqueInput;
    update: Prisma.XOR<Prisma.OrderUpdateWithoutRestaurantInput, Prisma.OrderUncheckedUpdateWithoutRestaurantInput>;
    create: Prisma.XOR<Prisma.OrderCreateWithoutRestaurantInput, Prisma.OrderUncheckedCreateWithoutRestaurantInput>;
};
export type OrderUpdateWithWhereUniqueWithoutRestaurantInput = {
    where: Prisma.OrderWhereUniqueInput;
    data: Prisma.XOR<Prisma.OrderUpdateWithoutRestaurantInput, Prisma.OrderUncheckedUpdateWithoutRestaurantInput>;
};
export type OrderUpdateManyWithWhereWithoutRestaurantInput = {
    where: Prisma.OrderScalarWhereInput;
    data: Prisma.XOR<Prisma.OrderUpdateManyMutationInput, Prisma.OrderUncheckedUpdateManyWithoutRestaurantInput>;
};
export type OrderCreateWithoutOrderStatusDetailsInput = {
    orderId?: string;
    totalAmount: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    customer: Prisma.CustomerCreateNestedOneWithoutOrdersInput;
    restaurant: Prisma.RestaurantCreateNestedOneWithoutOrdersInput;
    orderTracking?: Prisma.OrderTrackingCreateNestedManyWithoutOrderInput;
    orderItems?: Prisma.OrderItemCreateNestedManyWithoutOrderInput;
};
export type OrderUncheckedCreateWithoutOrderStatusDetailsInput = {
    orderId?: string;
    customerId: string;
    restaurantId: string;
    totalAmount: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    orderTracking?: Prisma.OrderTrackingUncheckedCreateNestedManyWithoutOrderInput;
    orderItems?: Prisma.OrderItemUncheckedCreateNestedManyWithoutOrderInput;
};
export type OrderCreateOrConnectWithoutOrderStatusDetailsInput = {
    where: Prisma.OrderWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrderCreateWithoutOrderStatusDetailsInput, Prisma.OrderUncheckedCreateWithoutOrderStatusDetailsInput>;
};
export type OrderCreateManyOrderStatusDetailsInputEnvelope = {
    data: Prisma.OrderCreateManyOrderStatusDetailsInput | Prisma.OrderCreateManyOrderStatusDetailsInput[];
    skipDuplicates?: boolean;
};
export type OrderUpsertWithWhereUniqueWithoutOrderStatusDetailsInput = {
    where: Prisma.OrderWhereUniqueInput;
    update: Prisma.XOR<Prisma.OrderUpdateWithoutOrderStatusDetailsInput, Prisma.OrderUncheckedUpdateWithoutOrderStatusDetailsInput>;
    create: Prisma.XOR<Prisma.OrderCreateWithoutOrderStatusDetailsInput, Prisma.OrderUncheckedCreateWithoutOrderStatusDetailsInput>;
};
export type OrderUpdateWithWhereUniqueWithoutOrderStatusDetailsInput = {
    where: Prisma.OrderWhereUniqueInput;
    data: Prisma.XOR<Prisma.OrderUpdateWithoutOrderStatusDetailsInput, Prisma.OrderUncheckedUpdateWithoutOrderStatusDetailsInput>;
};
export type OrderUpdateManyWithWhereWithoutOrderStatusDetailsInput = {
    where: Prisma.OrderScalarWhereInput;
    data: Prisma.XOR<Prisma.OrderUpdateManyMutationInput, Prisma.OrderUncheckedUpdateManyWithoutOrderStatusDetailsInput>;
};
export type OrderCreateWithoutOrderTrackingInput = {
    orderId?: string;
    totalAmount: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    customer: Prisma.CustomerCreateNestedOneWithoutOrdersInput;
    restaurant: Prisma.RestaurantCreateNestedOneWithoutOrdersInput;
    orderStatusDetails: Prisma.OrderStatusCreateNestedOneWithoutOrdersInput;
    orderItems?: Prisma.OrderItemCreateNestedManyWithoutOrderInput;
};
export type OrderUncheckedCreateWithoutOrderTrackingInput = {
    orderId?: string;
    customerId: string;
    restaurantId: string;
    totalAmount: number;
    orderStatus: $Enums.OrderStatusKey;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    orderItems?: Prisma.OrderItemUncheckedCreateNestedManyWithoutOrderInput;
};
export type OrderCreateOrConnectWithoutOrderTrackingInput = {
    where: Prisma.OrderWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrderCreateWithoutOrderTrackingInput, Prisma.OrderUncheckedCreateWithoutOrderTrackingInput>;
};
export type OrderUpsertWithoutOrderTrackingInput = {
    update: Prisma.XOR<Prisma.OrderUpdateWithoutOrderTrackingInput, Prisma.OrderUncheckedUpdateWithoutOrderTrackingInput>;
    create: Prisma.XOR<Prisma.OrderCreateWithoutOrderTrackingInput, Prisma.OrderUncheckedCreateWithoutOrderTrackingInput>;
    where?: Prisma.OrderWhereInput;
};
export type OrderUpdateToOneWithWhereWithoutOrderTrackingInput = {
    where?: Prisma.OrderWhereInput;
    data: Prisma.XOR<Prisma.OrderUpdateWithoutOrderTrackingInput, Prisma.OrderUncheckedUpdateWithoutOrderTrackingInput>;
};
export type OrderUpdateWithoutOrderTrackingInput = {
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    totalAmount?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: Prisma.CustomerUpdateOneRequiredWithoutOrdersNestedInput;
    restaurant?: Prisma.RestaurantUpdateOneRequiredWithoutOrdersNestedInput;
    orderStatusDetails?: Prisma.OrderStatusUpdateOneRequiredWithoutOrdersNestedInput;
    orderItems?: Prisma.OrderItemUpdateManyWithoutOrderNestedInput;
};
export type OrderUncheckedUpdateWithoutOrderTrackingInput = {
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    restaurantId?: Prisma.StringFieldUpdateOperationsInput | string;
    totalAmount?: Prisma.IntFieldUpdateOperationsInput | number;
    orderStatus?: Prisma.EnumOrderStatusKeyFieldUpdateOperationsInput | $Enums.OrderStatusKey;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    orderItems?: Prisma.OrderItemUncheckedUpdateManyWithoutOrderNestedInput;
};
export type OrderCreateWithoutOrderItemsInput = {
    orderId?: string;
    totalAmount: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    customer: Prisma.CustomerCreateNestedOneWithoutOrdersInput;
    restaurant: Prisma.RestaurantCreateNestedOneWithoutOrdersInput;
    orderStatusDetails: Prisma.OrderStatusCreateNestedOneWithoutOrdersInput;
    orderTracking?: Prisma.OrderTrackingCreateNestedManyWithoutOrderInput;
};
export type OrderUncheckedCreateWithoutOrderItemsInput = {
    orderId?: string;
    customerId: string;
    restaurantId: string;
    totalAmount: number;
    orderStatus: $Enums.OrderStatusKey;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    orderTracking?: Prisma.OrderTrackingUncheckedCreateNestedManyWithoutOrderInput;
};
export type OrderCreateOrConnectWithoutOrderItemsInput = {
    where: Prisma.OrderWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrderCreateWithoutOrderItemsInput, Prisma.OrderUncheckedCreateWithoutOrderItemsInput>;
};
export type OrderUpsertWithoutOrderItemsInput = {
    update: Prisma.XOR<Prisma.OrderUpdateWithoutOrderItemsInput, Prisma.OrderUncheckedUpdateWithoutOrderItemsInput>;
    create: Prisma.XOR<Prisma.OrderCreateWithoutOrderItemsInput, Prisma.OrderUncheckedCreateWithoutOrderItemsInput>;
    where?: Prisma.OrderWhereInput;
};
export type OrderUpdateToOneWithWhereWithoutOrderItemsInput = {
    where?: Prisma.OrderWhereInput;
    data: Prisma.XOR<Prisma.OrderUpdateWithoutOrderItemsInput, Prisma.OrderUncheckedUpdateWithoutOrderItemsInput>;
};
export type OrderUpdateWithoutOrderItemsInput = {
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    totalAmount?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: Prisma.CustomerUpdateOneRequiredWithoutOrdersNestedInput;
    restaurant?: Prisma.RestaurantUpdateOneRequiredWithoutOrdersNestedInput;
    orderStatusDetails?: Prisma.OrderStatusUpdateOneRequiredWithoutOrdersNestedInput;
    orderTracking?: Prisma.OrderTrackingUpdateManyWithoutOrderNestedInput;
};
export type OrderUncheckedUpdateWithoutOrderItemsInput = {
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    restaurantId?: Prisma.StringFieldUpdateOperationsInput | string;
    totalAmount?: Prisma.IntFieldUpdateOperationsInput | number;
    orderStatus?: Prisma.EnumOrderStatusKeyFieldUpdateOperationsInput | $Enums.OrderStatusKey;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    orderTracking?: Prisma.OrderTrackingUncheckedUpdateManyWithoutOrderNestedInput;
};
export type OrderCreateManyCustomerInput = {
    orderId?: string;
    restaurantId: string;
    totalAmount: number;
    orderStatus: $Enums.OrderStatusKey;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type OrderUpdateWithoutCustomerInput = {
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    totalAmount?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    restaurant?: Prisma.RestaurantUpdateOneRequiredWithoutOrdersNestedInput;
    orderStatusDetails?: Prisma.OrderStatusUpdateOneRequiredWithoutOrdersNestedInput;
    orderTracking?: Prisma.OrderTrackingUpdateManyWithoutOrderNestedInput;
    orderItems?: Prisma.OrderItemUpdateManyWithoutOrderNestedInput;
};
export type OrderUncheckedUpdateWithoutCustomerInput = {
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    restaurantId?: Prisma.StringFieldUpdateOperationsInput | string;
    totalAmount?: Prisma.IntFieldUpdateOperationsInput | number;
    orderStatus?: Prisma.EnumOrderStatusKeyFieldUpdateOperationsInput | $Enums.OrderStatusKey;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    orderTracking?: Prisma.OrderTrackingUncheckedUpdateManyWithoutOrderNestedInput;
    orderItems?: Prisma.OrderItemUncheckedUpdateManyWithoutOrderNestedInput;
};
export type OrderUncheckedUpdateManyWithoutCustomerInput = {
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    restaurantId?: Prisma.StringFieldUpdateOperationsInput | string;
    totalAmount?: Prisma.IntFieldUpdateOperationsInput | number;
    orderStatus?: Prisma.EnumOrderStatusKeyFieldUpdateOperationsInput | $Enums.OrderStatusKey;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OrderCreateManyRestaurantInput = {
    orderId?: string;
    customerId: string;
    totalAmount: number;
    orderStatus: $Enums.OrderStatusKey;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type OrderUpdateWithoutRestaurantInput = {
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    totalAmount?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: Prisma.CustomerUpdateOneRequiredWithoutOrdersNestedInput;
    orderStatusDetails?: Prisma.OrderStatusUpdateOneRequiredWithoutOrdersNestedInput;
    orderTracking?: Prisma.OrderTrackingUpdateManyWithoutOrderNestedInput;
    orderItems?: Prisma.OrderItemUpdateManyWithoutOrderNestedInput;
};
export type OrderUncheckedUpdateWithoutRestaurantInput = {
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    totalAmount?: Prisma.IntFieldUpdateOperationsInput | number;
    orderStatus?: Prisma.EnumOrderStatusKeyFieldUpdateOperationsInput | $Enums.OrderStatusKey;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    orderTracking?: Prisma.OrderTrackingUncheckedUpdateManyWithoutOrderNestedInput;
    orderItems?: Prisma.OrderItemUncheckedUpdateManyWithoutOrderNestedInput;
};
export type OrderUncheckedUpdateManyWithoutRestaurantInput = {
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    totalAmount?: Prisma.IntFieldUpdateOperationsInput | number;
    orderStatus?: Prisma.EnumOrderStatusKeyFieldUpdateOperationsInput | $Enums.OrderStatusKey;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OrderCreateManyOrderStatusDetailsInput = {
    orderId?: string;
    customerId: string;
    restaurantId: string;
    totalAmount: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type OrderUpdateWithoutOrderStatusDetailsInput = {
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    totalAmount?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: Prisma.CustomerUpdateOneRequiredWithoutOrdersNestedInput;
    restaurant?: Prisma.RestaurantUpdateOneRequiredWithoutOrdersNestedInput;
    orderTracking?: Prisma.OrderTrackingUpdateManyWithoutOrderNestedInput;
    orderItems?: Prisma.OrderItemUpdateManyWithoutOrderNestedInput;
};
export type OrderUncheckedUpdateWithoutOrderStatusDetailsInput = {
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    restaurantId?: Prisma.StringFieldUpdateOperationsInput | string;
    totalAmount?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    orderTracking?: Prisma.OrderTrackingUncheckedUpdateManyWithoutOrderNestedInput;
    orderItems?: Prisma.OrderItemUncheckedUpdateManyWithoutOrderNestedInput;
};
export type OrderUncheckedUpdateManyWithoutOrderStatusDetailsInput = {
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    restaurantId?: Prisma.StringFieldUpdateOperationsInput | string;
    totalAmount?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OrderCountOutputType = {
    orderTracking: number;
    orderItems: number;
};
export type OrderCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    orderTracking?: boolean | OrderCountOutputTypeCountOrderTrackingArgs;
    orderItems?: boolean | OrderCountOutputTypeCountOrderItemsArgs;
};
export type OrderCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderCountOutputTypeSelect<ExtArgs> | null;
};
export type OrderCountOutputTypeCountOrderTrackingArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderTrackingWhereInput;
};
export type OrderCountOutputTypeCountOrderItemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderItemWhereInput;
};
export type OrderSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    orderId?: boolean;
    customerId?: boolean;
    restaurantId?: boolean;
    totalAmount?: boolean;
    orderStatus?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    restaurant?: boolean | Prisma.RestaurantDefaultArgs<ExtArgs>;
    orderStatusDetails?: boolean | Prisma.OrderStatusDefaultArgs<ExtArgs>;
    orderTracking?: boolean | Prisma.Order$orderTrackingArgs<ExtArgs>;
    orderItems?: boolean | Prisma.Order$orderItemsArgs<ExtArgs>;
    _count?: boolean | Prisma.OrderCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["order"]>;
export type OrderSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    orderId?: boolean;
    customerId?: boolean;
    restaurantId?: boolean;
    totalAmount?: boolean;
    orderStatus?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    restaurant?: boolean | Prisma.RestaurantDefaultArgs<ExtArgs>;
    orderStatusDetails?: boolean | Prisma.OrderStatusDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["order"]>;
export type OrderSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    orderId?: boolean;
    customerId?: boolean;
    restaurantId?: boolean;
    totalAmount?: boolean;
    orderStatus?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    restaurant?: boolean | Prisma.RestaurantDefaultArgs<ExtArgs>;
    orderStatusDetails?: boolean | Prisma.OrderStatusDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["order"]>;
export type OrderSelectScalar = {
    orderId?: boolean;
    customerId?: boolean;
    restaurantId?: boolean;
    totalAmount?: boolean;
    orderStatus?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type OrderOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"orderId" | "customerId" | "restaurantId" | "totalAmount" | "orderStatus" | "createdAt" | "updatedAt", ExtArgs["result"]["order"]>;
export type OrderInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    restaurant?: boolean | Prisma.RestaurantDefaultArgs<ExtArgs>;
    orderStatusDetails?: boolean | Prisma.OrderStatusDefaultArgs<ExtArgs>;
    orderTracking?: boolean | Prisma.Order$orderTrackingArgs<ExtArgs>;
    orderItems?: boolean | Prisma.Order$orderItemsArgs<ExtArgs>;
    _count?: boolean | Prisma.OrderCountOutputTypeDefaultArgs<ExtArgs>;
};
export type OrderIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    restaurant?: boolean | Prisma.RestaurantDefaultArgs<ExtArgs>;
    orderStatusDetails?: boolean | Prisma.OrderStatusDefaultArgs<ExtArgs>;
};
export type OrderIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    restaurant?: boolean | Prisma.RestaurantDefaultArgs<ExtArgs>;
    orderStatusDetails?: boolean | Prisma.OrderStatusDefaultArgs<ExtArgs>;
};
export type $OrderPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Order";
    objects: {
        customer: Prisma.$CustomerPayload<ExtArgs>;
        restaurant: Prisma.$RestaurantPayload<ExtArgs>;
        orderStatusDetails: Prisma.$OrderStatusPayload<ExtArgs>;
        orderTracking: Prisma.$OrderTrackingPayload<ExtArgs>[];
        orderItems: Prisma.$OrderItemPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        orderId: string;
        customerId: string;
        restaurantId: string;
        totalAmount: number;
        orderStatus: $Enums.OrderStatusKey;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["order"]>;
    composites: {};
};
export type OrderGetPayload<S extends boolean | null | undefined | OrderDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$OrderPayload, S>;
export type OrderCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<OrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: OrderCountAggregateInputType | true;
};
export interface OrderDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Order'];
        meta: {
            name: 'Order';
        };
    };
    findUnique<T extends OrderFindUniqueArgs>(args: Prisma.SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>): Prisma.Prisma__OrderClient<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__OrderClient<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends OrderFindFirstArgs>(args?: Prisma.SelectSubset<T, OrderFindFirstArgs<ExtArgs>>): Prisma.Prisma__OrderClient<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__OrderClient<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends OrderFindManyArgs>(args?: Prisma.SelectSubset<T, OrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends OrderCreateArgs>(args: Prisma.SelectSubset<T, OrderCreateArgs<ExtArgs>>): Prisma.Prisma__OrderClient<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends OrderCreateManyArgs>(args?: Prisma.SelectSubset<T, OrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends OrderCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, OrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends OrderDeleteArgs>(args: Prisma.SelectSubset<T, OrderDeleteArgs<ExtArgs>>): Prisma.Prisma__OrderClient<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends OrderUpdateArgs>(args: Prisma.SelectSubset<T, OrderUpdateArgs<ExtArgs>>): Prisma.Prisma__OrderClient<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends OrderDeleteManyArgs>(args?: Prisma.SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends OrderUpdateManyArgs>(args: Prisma.SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends OrderUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, OrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends OrderUpsertArgs>(args: Prisma.SelectSubset<T, OrderUpsertArgs<ExtArgs>>): Prisma.Prisma__OrderClient<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends OrderCountArgs>(args?: Prisma.Subset<T, OrderCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], OrderCountAggregateOutputType> : number>;
    aggregate<T extends OrderAggregateArgs>(args: Prisma.Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>;
    groupBy<T extends OrderGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: OrderGroupByArgs['orderBy'];
    } : {
        orderBy?: OrderGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: OrderFieldRefs;
}
export interface Prisma__OrderClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    customer<T extends Prisma.CustomerDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CustomerDefaultArgs<ExtArgs>>): Prisma.Prisma__CustomerClient<runtime.Types.Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    restaurant<T extends Prisma.RestaurantDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.RestaurantDefaultArgs<ExtArgs>>): Prisma.Prisma__RestaurantClient<runtime.Types.Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    orderStatusDetails<T extends Prisma.OrderStatusDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OrderStatusDefaultArgs<ExtArgs>>): Prisma.Prisma__OrderStatusClient<runtime.Types.Result.GetResult<Prisma.$OrderStatusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    orderTracking<T extends Prisma.Order$orderTrackingArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Order$orderTrackingArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderTrackingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    orderItems<T extends Prisma.Order$orderItemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Order$orderItemsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface OrderFieldRefs {
    readonly orderId: Prisma.FieldRef<"Order", 'String'>;
    readonly customerId: Prisma.FieldRef<"Order", 'String'>;
    readonly restaurantId: Prisma.FieldRef<"Order", 'String'>;
    readonly totalAmount: Prisma.FieldRef<"Order", 'Int'>;
    readonly orderStatus: Prisma.FieldRef<"Order", 'OrderStatusKey'>;
    readonly createdAt: Prisma.FieldRef<"Order", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Order", 'DateTime'>;
}
export type OrderFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSelect<ExtArgs> | null;
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    include?: Prisma.OrderInclude<ExtArgs> | null;
    where: Prisma.OrderWhereUniqueInput;
};
export type OrderFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSelect<ExtArgs> | null;
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    include?: Prisma.OrderInclude<ExtArgs> | null;
    where: Prisma.OrderWhereUniqueInput;
};
export type OrderFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type OrderFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type OrderFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type OrderCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSelect<ExtArgs> | null;
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    include?: Prisma.OrderInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OrderCreateInput, Prisma.OrderUncheckedCreateInput>;
};
export type OrderCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.OrderCreateManyInput | Prisma.OrderCreateManyInput[];
    skipDuplicates?: boolean;
};
export type OrderCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    data: Prisma.OrderCreateManyInput | Prisma.OrderCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.OrderIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type OrderUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSelect<ExtArgs> | null;
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    include?: Prisma.OrderInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OrderUpdateInput, Prisma.OrderUncheckedUpdateInput>;
    where: Prisma.OrderWhereUniqueInput;
};
export type OrderUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.OrderUpdateManyMutationInput, Prisma.OrderUncheckedUpdateManyInput>;
    where?: Prisma.OrderWhereInput;
    limit?: number;
};
export type OrderUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OrderUpdateManyMutationInput, Prisma.OrderUncheckedUpdateManyInput>;
    where?: Prisma.OrderWhereInput;
    limit?: number;
    include?: Prisma.OrderIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type OrderUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSelect<ExtArgs> | null;
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    include?: Prisma.OrderInclude<ExtArgs> | null;
    where: Prisma.OrderWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrderCreateInput, Prisma.OrderUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.OrderUpdateInput, Prisma.OrderUncheckedUpdateInput>;
};
export type OrderDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSelect<ExtArgs> | null;
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    include?: Prisma.OrderInclude<ExtArgs> | null;
    where: Prisma.OrderWhereUniqueInput;
};
export type OrderDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderWhereInput;
    limit?: number;
};
export type Order$orderTrackingArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Order$orderItemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderItemSelect<ExtArgs> | null;
    omit?: Prisma.OrderItemOmit<ExtArgs> | null;
    include?: Prisma.OrderItemInclude<ExtArgs> | null;
    where?: Prisma.OrderItemWhereInput;
    orderBy?: Prisma.OrderItemOrderByWithRelationInput | Prisma.OrderItemOrderByWithRelationInput[];
    cursor?: Prisma.OrderItemWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrderItemScalarFieldEnum | Prisma.OrderItemScalarFieldEnum[];
};
export type OrderDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSelect<ExtArgs> | null;
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    include?: Prisma.OrderInclude<ExtArgs> | null;
};
