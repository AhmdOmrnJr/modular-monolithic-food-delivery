import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type OrderTrackingModel = runtime.Types.Result.DefaultSelection<Prisma.$OrderTrackingPayload>;
export type AggregateOrderTracking = {
    _count: OrderTrackingCountAggregateOutputType | null;
    _min: OrderTrackingMinAggregateOutputType | null;
    _max: OrderTrackingMaxAggregateOutputType | null;
};
export type OrderTrackingMinAggregateOutputType = {
    orderTrackingId: string | null;
    orderId: string | null;
    customerId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type OrderTrackingMaxAggregateOutputType = {
    orderTrackingId: string | null;
    orderId: string | null;
    customerId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type OrderTrackingCountAggregateOutputType = {
    orderTrackingId: number;
    orderId: number;
    customerId: number;
    trackingStatus: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type OrderTrackingMinAggregateInputType = {
    orderTrackingId?: true;
    orderId?: true;
    customerId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type OrderTrackingMaxAggregateInputType = {
    orderTrackingId?: true;
    orderId?: true;
    customerId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type OrderTrackingCountAggregateInputType = {
    orderTrackingId?: true;
    orderId?: true;
    customerId?: true;
    trackingStatus?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type OrderTrackingAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderTrackingWhereInput;
    orderBy?: Prisma.OrderTrackingOrderByWithRelationInput | Prisma.OrderTrackingOrderByWithRelationInput[];
    cursor?: Prisma.OrderTrackingWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | OrderTrackingCountAggregateInputType;
    _min?: OrderTrackingMinAggregateInputType;
    _max?: OrderTrackingMaxAggregateInputType;
};
export type GetOrderTrackingAggregateType<T extends OrderTrackingAggregateArgs> = {
    [P in keyof T & keyof AggregateOrderTracking]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateOrderTracking[P]> : Prisma.GetScalarType<T[P], AggregateOrderTracking[P]>;
};
export type OrderTrackingGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderTrackingWhereInput;
    orderBy?: Prisma.OrderTrackingOrderByWithAggregationInput | Prisma.OrderTrackingOrderByWithAggregationInput[];
    by: Prisma.OrderTrackingScalarFieldEnum[] | Prisma.OrderTrackingScalarFieldEnum;
    having?: Prisma.OrderTrackingScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: OrderTrackingCountAggregateInputType | true;
    _min?: OrderTrackingMinAggregateInputType;
    _max?: OrderTrackingMaxAggregateInputType;
};
export type OrderTrackingGroupByOutputType = {
    orderTrackingId: string;
    orderId: string;
    customerId: string;
    trackingStatus: runtime.JsonValue;
    createdAt: Date;
    updatedAt: Date;
    _count: OrderTrackingCountAggregateOutputType | null;
    _min: OrderTrackingMinAggregateOutputType | null;
    _max: OrderTrackingMaxAggregateOutputType | null;
};
export type GetOrderTrackingGroupByPayload<T extends OrderTrackingGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<OrderTrackingGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof OrderTrackingGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], OrderTrackingGroupByOutputType[P]> : Prisma.GetScalarType<T[P], OrderTrackingGroupByOutputType[P]>;
}>>;
export type OrderTrackingWhereInput = {
    AND?: Prisma.OrderTrackingWhereInput | Prisma.OrderTrackingWhereInput[];
    OR?: Prisma.OrderTrackingWhereInput[];
    NOT?: Prisma.OrderTrackingWhereInput | Prisma.OrderTrackingWhereInput[];
    orderTrackingId?: Prisma.StringFilter<"OrderTracking"> | string;
    orderId?: Prisma.StringFilter<"OrderTracking"> | string;
    customerId?: Prisma.StringFilter<"OrderTracking"> | string;
    trackingStatus?: Prisma.JsonFilter<"OrderTracking">;
    createdAt?: Prisma.DateTimeFilter<"OrderTracking"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"OrderTracking"> | Date | string;
    customer?: Prisma.XOR<Prisma.CustomerScalarRelationFilter, Prisma.CustomerWhereInput>;
    order?: Prisma.XOR<Prisma.OrderScalarRelationFilter, Prisma.OrderWhereInput>;
};
export type OrderTrackingOrderByWithRelationInput = {
    orderTrackingId?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    trackingStatus?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    customer?: Prisma.CustomerOrderByWithRelationInput;
    order?: Prisma.OrderOrderByWithRelationInput;
};
export type OrderTrackingWhereUniqueInput = Prisma.AtLeast<{
    orderTrackingId?: string;
    orderId_customerId?: Prisma.OrderTrackingOrderIdCustomerIdCompoundUniqueInput;
    AND?: Prisma.OrderTrackingWhereInput | Prisma.OrderTrackingWhereInput[];
    OR?: Prisma.OrderTrackingWhereInput[];
    NOT?: Prisma.OrderTrackingWhereInput | Prisma.OrderTrackingWhereInput[];
    orderId?: Prisma.StringFilter<"OrderTracking"> | string;
    customerId?: Prisma.StringFilter<"OrderTracking"> | string;
    trackingStatus?: Prisma.JsonFilter<"OrderTracking">;
    createdAt?: Prisma.DateTimeFilter<"OrderTracking"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"OrderTracking"> | Date | string;
    customer?: Prisma.XOR<Prisma.CustomerScalarRelationFilter, Prisma.CustomerWhereInput>;
    order?: Prisma.XOR<Prisma.OrderScalarRelationFilter, Prisma.OrderWhereInput>;
}, "orderTrackingId" | "orderId_customerId">;
export type OrderTrackingOrderByWithAggregationInput = {
    orderTrackingId?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    trackingStatus?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.OrderTrackingCountOrderByAggregateInput;
    _max?: Prisma.OrderTrackingMaxOrderByAggregateInput;
    _min?: Prisma.OrderTrackingMinOrderByAggregateInput;
};
export type OrderTrackingScalarWhereWithAggregatesInput = {
    AND?: Prisma.OrderTrackingScalarWhereWithAggregatesInput | Prisma.OrderTrackingScalarWhereWithAggregatesInput[];
    OR?: Prisma.OrderTrackingScalarWhereWithAggregatesInput[];
    NOT?: Prisma.OrderTrackingScalarWhereWithAggregatesInput | Prisma.OrderTrackingScalarWhereWithAggregatesInput[];
    orderTrackingId?: Prisma.StringWithAggregatesFilter<"OrderTracking"> | string;
    orderId?: Prisma.StringWithAggregatesFilter<"OrderTracking"> | string;
    customerId?: Prisma.StringWithAggregatesFilter<"OrderTracking"> | string;
    trackingStatus?: Prisma.JsonWithAggregatesFilter<"OrderTracking">;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"OrderTracking"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"OrderTracking"> | Date | string;
};
export type OrderTrackingCreateInput = {
    orderTrackingId?: string;
    trackingStatus: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    customer: Prisma.CustomerCreateNestedOneWithoutOrderTrackingInput;
    order: Prisma.OrderCreateNestedOneWithoutOrderTrackingInput;
};
export type OrderTrackingUncheckedCreateInput = {
    orderTrackingId?: string;
    orderId: string;
    customerId: string;
    trackingStatus: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type OrderTrackingUpdateInput = {
    orderTrackingId?: Prisma.StringFieldUpdateOperationsInput | string;
    trackingStatus?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: Prisma.CustomerUpdateOneRequiredWithoutOrderTrackingNestedInput;
    order?: Prisma.OrderUpdateOneRequiredWithoutOrderTrackingNestedInput;
};
export type OrderTrackingUncheckedUpdateInput = {
    orderTrackingId?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    trackingStatus?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OrderTrackingCreateManyInput = {
    orderTrackingId?: string;
    orderId: string;
    customerId: string;
    trackingStatus: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type OrderTrackingUpdateManyMutationInput = {
    orderTrackingId?: Prisma.StringFieldUpdateOperationsInput | string;
    trackingStatus?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OrderTrackingUncheckedUpdateManyInput = {
    orderTrackingId?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    trackingStatus?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OrderTrackingListRelationFilter = {
    every?: Prisma.OrderTrackingWhereInput;
    some?: Prisma.OrderTrackingWhereInput;
    none?: Prisma.OrderTrackingWhereInput;
};
export type OrderTrackingOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type OrderTrackingOrderIdCustomerIdCompoundUniqueInput = {
    orderId: string;
    customerId: string;
};
export type OrderTrackingCountOrderByAggregateInput = {
    orderTrackingId?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    trackingStatus?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type OrderTrackingMaxOrderByAggregateInput = {
    orderTrackingId?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type OrderTrackingMinOrderByAggregateInput = {
    orderTrackingId?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type OrderTrackingCreateNestedManyWithoutCustomerInput = {
    create?: Prisma.XOR<Prisma.OrderTrackingCreateWithoutCustomerInput, Prisma.OrderTrackingUncheckedCreateWithoutCustomerInput> | Prisma.OrderTrackingCreateWithoutCustomerInput[] | Prisma.OrderTrackingUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.OrderTrackingCreateOrConnectWithoutCustomerInput | Prisma.OrderTrackingCreateOrConnectWithoutCustomerInput[];
    createMany?: Prisma.OrderTrackingCreateManyCustomerInputEnvelope;
    connect?: Prisma.OrderTrackingWhereUniqueInput | Prisma.OrderTrackingWhereUniqueInput[];
};
export type OrderTrackingUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: Prisma.XOR<Prisma.OrderTrackingCreateWithoutCustomerInput, Prisma.OrderTrackingUncheckedCreateWithoutCustomerInput> | Prisma.OrderTrackingCreateWithoutCustomerInput[] | Prisma.OrderTrackingUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.OrderTrackingCreateOrConnectWithoutCustomerInput | Prisma.OrderTrackingCreateOrConnectWithoutCustomerInput[];
    createMany?: Prisma.OrderTrackingCreateManyCustomerInputEnvelope;
    connect?: Prisma.OrderTrackingWhereUniqueInput | Prisma.OrderTrackingWhereUniqueInput[];
};
export type OrderTrackingUpdateManyWithoutCustomerNestedInput = {
    create?: Prisma.XOR<Prisma.OrderTrackingCreateWithoutCustomerInput, Prisma.OrderTrackingUncheckedCreateWithoutCustomerInput> | Prisma.OrderTrackingCreateWithoutCustomerInput[] | Prisma.OrderTrackingUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.OrderTrackingCreateOrConnectWithoutCustomerInput | Prisma.OrderTrackingCreateOrConnectWithoutCustomerInput[];
    upsert?: Prisma.OrderTrackingUpsertWithWhereUniqueWithoutCustomerInput | Prisma.OrderTrackingUpsertWithWhereUniqueWithoutCustomerInput[];
    createMany?: Prisma.OrderTrackingCreateManyCustomerInputEnvelope;
    set?: Prisma.OrderTrackingWhereUniqueInput | Prisma.OrderTrackingWhereUniqueInput[];
    disconnect?: Prisma.OrderTrackingWhereUniqueInput | Prisma.OrderTrackingWhereUniqueInput[];
    delete?: Prisma.OrderTrackingWhereUniqueInput | Prisma.OrderTrackingWhereUniqueInput[];
    connect?: Prisma.OrderTrackingWhereUniqueInput | Prisma.OrderTrackingWhereUniqueInput[];
    update?: Prisma.OrderTrackingUpdateWithWhereUniqueWithoutCustomerInput | Prisma.OrderTrackingUpdateWithWhereUniqueWithoutCustomerInput[];
    updateMany?: Prisma.OrderTrackingUpdateManyWithWhereWithoutCustomerInput | Prisma.OrderTrackingUpdateManyWithWhereWithoutCustomerInput[];
    deleteMany?: Prisma.OrderTrackingScalarWhereInput | Prisma.OrderTrackingScalarWhereInput[];
};
export type OrderTrackingUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: Prisma.XOR<Prisma.OrderTrackingCreateWithoutCustomerInput, Prisma.OrderTrackingUncheckedCreateWithoutCustomerInput> | Prisma.OrderTrackingCreateWithoutCustomerInput[] | Prisma.OrderTrackingUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.OrderTrackingCreateOrConnectWithoutCustomerInput | Prisma.OrderTrackingCreateOrConnectWithoutCustomerInput[];
    upsert?: Prisma.OrderTrackingUpsertWithWhereUniqueWithoutCustomerInput | Prisma.OrderTrackingUpsertWithWhereUniqueWithoutCustomerInput[];
    createMany?: Prisma.OrderTrackingCreateManyCustomerInputEnvelope;
    set?: Prisma.OrderTrackingWhereUniqueInput | Prisma.OrderTrackingWhereUniqueInput[];
    disconnect?: Prisma.OrderTrackingWhereUniqueInput | Prisma.OrderTrackingWhereUniqueInput[];
    delete?: Prisma.OrderTrackingWhereUniqueInput | Prisma.OrderTrackingWhereUniqueInput[];
    connect?: Prisma.OrderTrackingWhereUniqueInput | Prisma.OrderTrackingWhereUniqueInput[];
    update?: Prisma.OrderTrackingUpdateWithWhereUniqueWithoutCustomerInput | Prisma.OrderTrackingUpdateWithWhereUniqueWithoutCustomerInput[];
    updateMany?: Prisma.OrderTrackingUpdateManyWithWhereWithoutCustomerInput | Prisma.OrderTrackingUpdateManyWithWhereWithoutCustomerInput[];
    deleteMany?: Prisma.OrderTrackingScalarWhereInput | Prisma.OrderTrackingScalarWhereInput[];
};
export type OrderTrackingCreateNestedManyWithoutOrderInput = {
    create?: Prisma.XOR<Prisma.OrderTrackingCreateWithoutOrderInput, Prisma.OrderTrackingUncheckedCreateWithoutOrderInput> | Prisma.OrderTrackingCreateWithoutOrderInput[] | Prisma.OrderTrackingUncheckedCreateWithoutOrderInput[];
    connectOrCreate?: Prisma.OrderTrackingCreateOrConnectWithoutOrderInput | Prisma.OrderTrackingCreateOrConnectWithoutOrderInput[];
    createMany?: Prisma.OrderTrackingCreateManyOrderInputEnvelope;
    connect?: Prisma.OrderTrackingWhereUniqueInput | Prisma.OrderTrackingWhereUniqueInput[];
};
export type OrderTrackingUncheckedCreateNestedManyWithoutOrderInput = {
    create?: Prisma.XOR<Prisma.OrderTrackingCreateWithoutOrderInput, Prisma.OrderTrackingUncheckedCreateWithoutOrderInput> | Prisma.OrderTrackingCreateWithoutOrderInput[] | Prisma.OrderTrackingUncheckedCreateWithoutOrderInput[];
    connectOrCreate?: Prisma.OrderTrackingCreateOrConnectWithoutOrderInput | Prisma.OrderTrackingCreateOrConnectWithoutOrderInput[];
    createMany?: Prisma.OrderTrackingCreateManyOrderInputEnvelope;
    connect?: Prisma.OrderTrackingWhereUniqueInput | Prisma.OrderTrackingWhereUniqueInput[];
};
export type OrderTrackingUpdateManyWithoutOrderNestedInput = {
    create?: Prisma.XOR<Prisma.OrderTrackingCreateWithoutOrderInput, Prisma.OrderTrackingUncheckedCreateWithoutOrderInput> | Prisma.OrderTrackingCreateWithoutOrderInput[] | Prisma.OrderTrackingUncheckedCreateWithoutOrderInput[];
    connectOrCreate?: Prisma.OrderTrackingCreateOrConnectWithoutOrderInput | Prisma.OrderTrackingCreateOrConnectWithoutOrderInput[];
    upsert?: Prisma.OrderTrackingUpsertWithWhereUniqueWithoutOrderInput | Prisma.OrderTrackingUpsertWithWhereUniqueWithoutOrderInput[];
    createMany?: Prisma.OrderTrackingCreateManyOrderInputEnvelope;
    set?: Prisma.OrderTrackingWhereUniqueInput | Prisma.OrderTrackingWhereUniqueInput[];
    disconnect?: Prisma.OrderTrackingWhereUniqueInput | Prisma.OrderTrackingWhereUniqueInput[];
    delete?: Prisma.OrderTrackingWhereUniqueInput | Prisma.OrderTrackingWhereUniqueInput[];
    connect?: Prisma.OrderTrackingWhereUniqueInput | Prisma.OrderTrackingWhereUniqueInput[];
    update?: Prisma.OrderTrackingUpdateWithWhereUniqueWithoutOrderInput | Prisma.OrderTrackingUpdateWithWhereUniqueWithoutOrderInput[];
    updateMany?: Prisma.OrderTrackingUpdateManyWithWhereWithoutOrderInput | Prisma.OrderTrackingUpdateManyWithWhereWithoutOrderInput[];
    deleteMany?: Prisma.OrderTrackingScalarWhereInput | Prisma.OrderTrackingScalarWhereInput[];
};
export type OrderTrackingUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: Prisma.XOR<Prisma.OrderTrackingCreateWithoutOrderInput, Prisma.OrderTrackingUncheckedCreateWithoutOrderInput> | Prisma.OrderTrackingCreateWithoutOrderInput[] | Prisma.OrderTrackingUncheckedCreateWithoutOrderInput[];
    connectOrCreate?: Prisma.OrderTrackingCreateOrConnectWithoutOrderInput | Prisma.OrderTrackingCreateOrConnectWithoutOrderInput[];
    upsert?: Prisma.OrderTrackingUpsertWithWhereUniqueWithoutOrderInput | Prisma.OrderTrackingUpsertWithWhereUniqueWithoutOrderInput[];
    createMany?: Prisma.OrderTrackingCreateManyOrderInputEnvelope;
    set?: Prisma.OrderTrackingWhereUniqueInput | Prisma.OrderTrackingWhereUniqueInput[];
    disconnect?: Prisma.OrderTrackingWhereUniqueInput | Prisma.OrderTrackingWhereUniqueInput[];
    delete?: Prisma.OrderTrackingWhereUniqueInput | Prisma.OrderTrackingWhereUniqueInput[];
    connect?: Prisma.OrderTrackingWhereUniqueInput | Prisma.OrderTrackingWhereUniqueInput[];
    update?: Prisma.OrderTrackingUpdateWithWhereUniqueWithoutOrderInput | Prisma.OrderTrackingUpdateWithWhereUniqueWithoutOrderInput[];
    updateMany?: Prisma.OrderTrackingUpdateManyWithWhereWithoutOrderInput | Prisma.OrderTrackingUpdateManyWithWhereWithoutOrderInput[];
    deleteMany?: Prisma.OrderTrackingScalarWhereInput | Prisma.OrderTrackingScalarWhereInput[];
};
export type OrderTrackingCreateWithoutCustomerInput = {
    orderTrackingId?: string;
    trackingStatus: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    order: Prisma.OrderCreateNestedOneWithoutOrderTrackingInput;
};
export type OrderTrackingUncheckedCreateWithoutCustomerInput = {
    orderTrackingId?: string;
    orderId: string;
    trackingStatus: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type OrderTrackingCreateOrConnectWithoutCustomerInput = {
    where: Prisma.OrderTrackingWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrderTrackingCreateWithoutCustomerInput, Prisma.OrderTrackingUncheckedCreateWithoutCustomerInput>;
};
export type OrderTrackingCreateManyCustomerInputEnvelope = {
    data: Prisma.OrderTrackingCreateManyCustomerInput | Prisma.OrderTrackingCreateManyCustomerInput[];
    skipDuplicates?: boolean;
};
export type OrderTrackingUpsertWithWhereUniqueWithoutCustomerInput = {
    where: Prisma.OrderTrackingWhereUniqueInput;
    update: Prisma.XOR<Prisma.OrderTrackingUpdateWithoutCustomerInput, Prisma.OrderTrackingUncheckedUpdateWithoutCustomerInput>;
    create: Prisma.XOR<Prisma.OrderTrackingCreateWithoutCustomerInput, Prisma.OrderTrackingUncheckedCreateWithoutCustomerInput>;
};
export type OrderTrackingUpdateWithWhereUniqueWithoutCustomerInput = {
    where: Prisma.OrderTrackingWhereUniqueInput;
    data: Prisma.XOR<Prisma.OrderTrackingUpdateWithoutCustomerInput, Prisma.OrderTrackingUncheckedUpdateWithoutCustomerInput>;
};
export type OrderTrackingUpdateManyWithWhereWithoutCustomerInput = {
    where: Prisma.OrderTrackingScalarWhereInput;
    data: Prisma.XOR<Prisma.OrderTrackingUpdateManyMutationInput, Prisma.OrderTrackingUncheckedUpdateManyWithoutCustomerInput>;
};
export type OrderTrackingScalarWhereInput = {
    AND?: Prisma.OrderTrackingScalarWhereInput | Prisma.OrderTrackingScalarWhereInput[];
    OR?: Prisma.OrderTrackingScalarWhereInput[];
    NOT?: Prisma.OrderTrackingScalarWhereInput | Prisma.OrderTrackingScalarWhereInput[];
    orderTrackingId?: Prisma.StringFilter<"OrderTracking"> | string;
    orderId?: Prisma.StringFilter<"OrderTracking"> | string;
    customerId?: Prisma.StringFilter<"OrderTracking"> | string;
    trackingStatus?: Prisma.JsonFilter<"OrderTracking">;
    createdAt?: Prisma.DateTimeFilter<"OrderTracking"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"OrderTracking"> | Date | string;
};
export type OrderTrackingCreateWithoutOrderInput = {
    orderTrackingId?: string;
    trackingStatus: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    customer: Prisma.CustomerCreateNestedOneWithoutOrderTrackingInput;
};
export type OrderTrackingUncheckedCreateWithoutOrderInput = {
    orderTrackingId?: string;
    customerId: string;
    trackingStatus: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type OrderTrackingCreateOrConnectWithoutOrderInput = {
    where: Prisma.OrderTrackingWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrderTrackingCreateWithoutOrderInput, Prisma.OrderTrackingUncheckedCreateWithoutOrderInput>;
};
export type OrderTrackingCreateManyOrderInputEnvelope = {
    data: Prisma.OrderTrackingCreateManyOrderInput | Prisma.OrderTrackingCreateManyOrderInput[];
    skipDuplicates?: boolean;
};
export type OrderTrackingUpsertWithWhereUniqueWithoutOrderInput = {
    where: Prisma.OrderTrackingWhereUniqueInput;
    update: Prisma.XOR<Prisma.OrderTrackingUpdateWithoutOrderInput, Prisma.OrderTrackingUncheckedUpdateWithoutOrderInput>;
    create: Prisma.XOR<Prisma.OrderTrackingCreateWithoutOrderInput, Prisma.OrderTrackingUncheckedCreateWithoutOrderInput>;
};
export type OrderTrackingUpdateWithWhereUniqueWithoutOrderInput = {
    where: Prisma.OrderTrackingWhereUniqueInput;
    data: Prisma.XOR<Prisma.OrderTrackingUpdateWithoutOrderInput, Prisma.OrderTrackingUncheckedUpdateWithoutOrderInput>;
};
export type OrderTrackingUpdateManyWithWhereWithoutOrderInput = {
    where: Prisma.OrderTrackingScalarWhereInput;
    data: Prisma.XOR<Prisma.OrderTrackingUpdateManyMutationInput, Prisma.OrderTrackingUncheckedUpdateManyWithoutOrderInput>;
};
export type OrderTrackingCreateManyCustomerInput = {
    orderTrackingId?: string;
    orderId: string;
    trackingStatus: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type OrderTrackingUpdateWithoutCustomerInput = {
    orderTrackingId?: Prisma.StringFieldUpdateOperationsInput | string;
    trackingStatus?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    order?: Prisma.OrderUpdateOneRequiredWithoutOrderTrackingNestedInput;
};
export type OrderTrackingUncheckedUpdateWithoutCustomerInput = {
    orderTrackingId?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    trackingStatus?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OrderTrackingUncheckedUpdateManyWithoutCustomerInput = {
    orderTrackingId?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    trackingStatus?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OrderTrackingCreateManyOrderInput = {
    orderTrackingId?: string;
    customerId: string;
    trackingStatus: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type OrderTrackingUpdateWithoutOrderInput = {
    orderTrackingId?: Prisma.StringFieldUpdateOperationsInput | string;
    trackingStatus?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: Prisma.CustomerUpdateOneRequiredWithoutOrderTrackingNestedInput;
};
export type OrderTrackingUncheckedUpdateWithoutOrderInput = {
    orderTrackingId?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    trackingStatus?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OrderTrackingUncheckedUpdateManyWithoutOrderInput = {
    orderTrackingId?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    trackingStatus?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OrderTrackingSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    orderTrackingId?: boolean;
    orderId?: boolean;
    customerId?: boolean;
    trackingStatus?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    order?: boolean | Prisma.OrderDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["orderTracking"]>;
export type OrderTrackingSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    orderTrackingId?: boolean;
    orderId?: boolean;
    customerId?: boolean;
    trackingStatus?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    order?: boolean | Prisma.OrderDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["orderTracking"]>;
export type OrderTrackingSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    orderTrackingId?: boolean;
    orderId?: boolean;
    customerId?: boolean;
    trackingStatus?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    order?: boolean | Prisma.OrderDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["orderTracking"]>;
export type OrderTrackingSelectScalar = {
    orderTrackingId?: boolean;
    orderId?: boolean;
    customerId?: boolean;
    trackingStatus?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type OrderTrackingOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"orderTrackingId" | "orderId" | "customerId" | "trackingStatus" | "createdAt" | "updatedAt", ExtArgs["result"]["orderTracking"]>;
export type OrderTrackingInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    order?: boolean | Prisma.OrderDefaultArgs<ExtArgs>;
};
export type OrderTrackingIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    order?: boolean | Prisma.OrderDefaultArgs<ExtArgs>;
};
export type OrderTrackingIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    order?: boolean | Prisma.OrderDefaultArgs<ExtArgs>;
};
export type $OrderTrackingPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "OrderTracking";
    objects: {
        customer: Prisma.$CustomerPayload<ExtArgs>;
        order: Prisma.$OrderPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        orderTrackingId: string;
        orderId: string;
        customerId: string;
        trackingStatus: runtime.JsonValue;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["orderTracking"]>;
    composites: {};
};
export type OrderTrackingGetPayload<S extends boolean | null | undefined | OrderTrackingDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$OrderTrackingPayload, S>;
export type OrderTrackingCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<OrderTrackingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: OrderTrackingCountAggregateInputType | true;
};
export interface OrderTrackingDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['OrderTracking'];
        meta: {
            name: 'OrderTracking';
        };
    };
    findUnique<T extends OrderTrackingFindUniqueArgs>(args: Prisma.SelectSubset<T, OrderTrackingFindUniqueArgs<ExtArgs>>): Prisma.Prisma__OrderTrackingClient<runtime.Types.Result.GetResult<Prisma.$OrderTrackingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends OrderTrackingFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, OrderTrackingFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__OrderTrackingClient<runtime.Types.Result.GetResult<Prisma.$OrderTrackingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends OrderTrackingFindFirstArgs>(args?: Prisma.SelectSubset<T, OrderTrackingFindFirstArgs<ExtArgs>>): Prisma.Prisma__OrderTrackingClient<runtime.Types.Result.GetResult<Prisma.$OrderTrackingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends OrderTrackingFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, OrderTrackingFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__OrderTrackingClient<runtime.Types.Result.GetResult<Prisma.$OrderTrackingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends OrderTrackingFindManyArgs>(args?: Prisma.SelectSubset<T, OrderTrackingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderTrackingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends OrderTrackingCreateArgs>(args: Prisma.SelectSubset<T, OrderTrackingCreateArgs<ExtArgs>>): Prisma.Prisma__OrderTrackingClient<runtime.Types.Result.GetResult<Prisma.$OrderTrackingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends OrderTrackingCreateManyArgs>(args?: Prisma.SelectSubset<T, OrderTrackingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends OrderTrackingCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, OrderTrackingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderTrackingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends OrderTrackingDeleteArgs>(args: Prisma.SelectSubset<T, OrderTrackingDeleteArgs<ExtArgs>>): Prisma.Prisma__OrderTrackingClient<runtime.Types.Result.GetResult<Prisma.$OrderTrackingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends OrderTrackingUpdateArgs>(args: Prisma.SelectSubset<T, OrderTrackingUpdateArgs<ExtArgs>>): Prisma.Prisma__OrderTrackingClient<runtime.Types.Result.GetResult<Prisma.$OrderTrackingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends OrderTrackingDeleteManyArgs>(args?: Prisma.SelectSubset<T, OrderTrackingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends OrderTrackingUpdateManyArgs>(args: Prisma.SelectSubset<T, OrderTrackingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends OrderTrackingUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, OrderTrackingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderTrackingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends OrderTrackingUpsertArgs>(args: Prisma.SelectSubset<T, OrderTrackingUpsertArgs<ExtArgs>>): Prisma.Prisma__OrderTrackingClient<runtime.Types.Result.GetResult<Prisma.$OrderTrackingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends OrderTrackingCountArgs>(args?: Prisma.Subset<T, OrderTrackingCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], OrderTrackingCountAggregateOutputType> : number>;
    aggregate<T extends OrderTrackingAggregateArgs>(args: Prisma.Subset<T, OrderTrackingAggregateArgs>): Prisma.PrismaPromise<GetOrderTrackingAggregateType<T>>;
    groupBy<T extends OrderTrackingGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: OrderTrackingGroupByArgs['orderBy'];
    } : {
        orderBy?: OrderTrackingGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, OrderTrackingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderTrackingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: OrderTrackingFieldRefs;
}
export interface Prisma__OrderTrackingClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    customer<T extends Prisma.CustomerDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CustomerDefaultArgs<ExtArgs>>): Prisma.Prisma__CustomerClient<runtime.Types.Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    order<T extends Prisma.OrderDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OrderDefaultArgs<ExtArgs>>): Prisma.Prisma__OrderClient<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface OrderTrackingFieldRefs {
    readonly orderTrackingId: Prisma.FieldRef<"OrderTracking", 'String'>;
    readonly orderId: Prisma.FieldRef<"OrderTracking", 'String'>;
    readonly customerId: Prisma.FieldRef<"OrderTracking", 'String'>;
    readonly trackingStatus: Prisma.FieldRef<"OrderTracking", 'Json'>;
    readonly createdAt: Prisma.FieldRef<"OrderTracking", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"OrderTracking", 'DateTime'>;
}
export type OrderTrackingFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderTrackingSelect<ExtArgs> | null;
    omit?: Prisma.OrderTrackingOmit<ExtArgs> | null;
    include?: Prisma.OrderTrackingInclude<ExtArgs> | null;
    where: Prisma.OrderTrackingWhereUniqueInput;
};
export type OrderTrackingFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderTrackingSelect<ExtArgs> | null;
    omit?: Prisma.OrderTrackingOmit<ExtArgs> | null;
    include?: Prisma.OrderTrackingInclude<ExtArgs> | null;
    where: Prisma.OrderTrackingWhereUniqueInput;
};
export type OrderTrackingFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type OrderTrackingFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type OrderTrackingFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type OrderTrackingCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderTrackingSelect<ExtArgs> | null;
    omit?: Prisma.OrderTrackingOmit<ExtArgs> | null;
    include?: Prisma.OrderTrackingInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OrderTrackingCreateInput, Prisma.OrderTrackingUncheckedCreateInput>;
};
export type OrderTrackingCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.OrderTrackingCreateManyInput | Prisma.OrderTrackingCreateManyInput[];
    skipDuplicates?: boolean;
};
export type OrderTrackingCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderTrackingSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.OrderTrackingOmit<ExtArgs> | null;
    data: Prisma.OrderTrackingCreateManyInput | Prisma.OrderTrackingCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.OrderTrackingIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type OrderTrackingUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderTrackingSelect<ExtArgs> | null;
    omit?: Prisma.OrderTrackingOmit<ExtArgs> | null;
    include?: Prisma.OrderTrackingInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OrderTrackingUpdateInput, Prisma.OrderTrackingUncheckedUpdateInput>;
    where: Prisma.OrderTrackingWhereUniqueInput;
};
export type OrderTrackingUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.OrderTrackingUpdateManyMutationInput, Prisma.OrderTrackingUncheckedUpdateManyInput>;
    where?: Prisma.OrderTrackingWhereInput;
    limit?: number;
};
export type OrderTrackingUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderTrackingSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.OrderTrackingOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OrderTrackingUpdateManyMutationInput, Prisma.OrderTrackingUncheckedUpdateManyInput>;
    where?: Prisma.OrderTrackingWhereInput;
    limit?: number;
    include?: Prisma.OrderTrackingIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type OrderTrackingUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderTrackingSelect<ExtArgs> | null;
    omit?: Prisma.OrderTrackingOmit<ExtArgs> | null;
    include?: Prisma.OrderTrackingInclude<ExtArgs> | null;
    where: Prisma.OrderTrackingWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrderTrackingCreateInput, Prisma.OrderTrackingUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.OrderTrackingUpdateInput, Prisma.OrderTrackingUncheckedUpdateInput>;
};
export type OrderTrackingDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderTrackingSelect<ExtArgs> | null;
    omit?: Prisma.OrderTrackingOmit<ExtArgs> | null;
    include?: Prisma.OrderTrackingInclude<ExtArgs> | null;
    where: Prisma.OrderTrackingWhereUniqueInput;
};
export type OrderTrackingDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderTrackingWhereInput;
    limit?: number;
};
export type OrderTrackingDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderTrackingSelect<ExtArgs> | null;
    omit?: Prisma.OrderTrackingOmit<ExtArgs> | null;
    include?: Prisma.OrderTrackingInclude<ExtArgs> | null;
};
