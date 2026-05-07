import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type OrderStatusModel = runtime.Types.Result.DefaultSelection<Prisma.$OrderStatusPayload>;
export type AggregateOrderStatus = {
    _count: OrderStatusCountAggregateOutputType | null;
    _min: OrderStatusMinAggregateOutputType | null;
    _max: OrderStatusMaxAggregateOutputType | null;
};
export type OrderStatusMinAggregateOutputType = {
    orderStatusId: string | null;
    orderStatusName: string | null;
    orderStatusKey: $Enums.OrderStatusKey | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type OrderStatusMaxAggregateOutputType = {
    orderStatusId: string | null;
    orderStatusName: string | null;
    orderStatusKey: $Enums.OrderStatusKey | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type OrderStatusCountAggregateOutputType = {
    orderStatusId: number;
    orderStatusName: number;
    orderStatusKey: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type OrderStatusMinAggregateInputType = {
    orderStatusId?: true;
    orderStatusName?: true;
    orderStatusKey?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type OrderStatusMaxAggregateInputType = {
    orderStatusId?: true;
    orderStatusName?: true;
    orderStatusKey?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type OrderStatusCountAggregateInputType = {
    orderStatusId?: true;
    orderStatusName?: true;
    orderStatusKey?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type OrderStatusAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderStatusWhereInput;
    orderBy?: Prisma.OrderStatusOrderByWithRelationInput | Prisma.OrderStatusOrderByWithRelationInput[];
    cursor?: Prisma.OrderStatusWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | OrderStatusCountAggregateInputType;
    _min?: OrderStatusMinAggregateInputType;
    _max?: OrderStatusMaxAggregateInputType;
};
export type GetOrderStatusAggregateType<T extends OrderStatusAggregateArgs> = {
    [P in keyof T & keyof AggregateOrderStatus]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateOrderStatus[P]> : Prisma.GetScalarType<T[P], AggregateOrderStatus[P]>;
};
export type OrderStatusGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderStatusWhereInput;
    orderBy?: Prisma.OrderStatusOrderByWithAggregationInput | Prisma.OrderStatusOrderByWithAggregationInput[];
    by: Prisma.OrderStatusScalarFieldEnum[] | Prisma.OrderStatusScalarFieldEnum;
    having?: Prisma.OrderStatusScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: OrderStatusCountAggregateInputType | true;
    _min?: OrderStatusMinAggregateInputType;
    _max?: OrderStatusMaxAggregateInputType;
};
export type OrderStatusGroupByOutputType = {
    orderStatusId: string;
    orderStatusName: string;
    orderStatusKey: $Enums.OrderStatusKey;
    createdAt: Date;
    updatedAt: Date;
    _count: OrderStatusCountAggregateOutputType | null;
    _min: OrderStatusMinAggregateOutputType | null;
    _max: OrderStatusMaxAggregateOutputType | null;
};
export type GetOrderStatusGroupByPayload<T extends OrderStatusGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<OrderStatusGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof OrderStatusGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], OrderStatusGroupByOutputType[P]> : Prisma.GetScalarType<T[P], OrderStatusGroupByOutputType[P]>;
}>>;
export type OrderStatusWhereInput = {
    AND?: Prisma.OrderStatusWhereInput | Prisma.OrderStatusWhereInput[];
    OR?: Prisma.OrderStatusWhereInput[];
    NOT?: Prisma.OrderStatusWhereInput | Prisma.OrderStatusWhereInput[];
    orderStatusId?: Prisma.StringFilter<"OrderStatus"> | string;
    orderStatusName?: Prisma.StringFilter<"OrderStatus"> | string;
    orderStatusKey?: Prisma.EnumOrderStatusKeyFilter<"OrderStatus"> | $Enums.OrderStatusKey;
    createdAt?: Prisma.DateTimeFilter<"OrderStatus"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"OrderStatus"> | Date | string;
    orders?: Prisma.OrderListRelationFilter;
};
export type OrderStatusOrderByWithRelationInput = {
    orderStatusId?: Prisma.SortOrder;
    orderStatusName?: Prisma.SortOrder;
    orderStatusKey?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    orders?: Prisma.OrderOrderByRelationAggregateInput;
};
export type OrderStatusWhereUniqueInput = Prisma.AtLeast<{
    orderStatusId?: string;
    orderStatusKey?: $Enums.OrderStatusKey;
    AND?: Prisma.OrderStatusWhereInput | Prisma.OrderStatusWhereInput[];
    OR?: Prisma.OrderStatusWhereInput[];
    NOT?: Prisma.OrderStatusWhereInput | Prisma.OrderStatusWhereInput[];
    orderStatusName?: Prisma.StringFilter<"OrderStatus"> | string;
    createdAt?: Prisma.DateTimeFilter<"OrderStatus"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"OrderStatus"> | Date | string;
    orders?: Prisma.OrderListRelationFilter;
}, "orderStatusId" | "orderStatusKey">;
export type OrderStatusOrderByWithAggregationInput = {
    orderStatusId?: Prisma.SortOrder;
    orderStatusName?: Prisma.SortOrder;
    orderStatusKey?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.OrderStatusCountOrderByAggregateInput;
    _max?: Prisma.OrderStatusMaxOrderByAggregateInput;
    _min?: Prisma.OrderStatusMinOrderByAggregateInput;
};
export type OrderStatusScalarWhereWithAggregatesInput = {
    AND?: Prisma.OrderStatusScalarWhereWithAggregatesInput | Prisma.OrderStatusScalarWhereWithAggregatesInput[];
    OR?: Prisma.OrderStatusScalarWhereWithAggregatesInput[];
    NOT?: Prisma.OrderStatusScalarWhereWithAggregatesInput | Prisma.OrderStatusScalarWhereWithAggregatesInput[];
    orderStatusId?: Prisma.StringWithAggregatesFilter<"OrderStatus"> | string;
    orderStatusName?: Prisma.StringWithAggregatesFilter<"OrderStatus"> | string;
    orderStatusKey?: Prisma.EnumOrderStatusKeyWithAggregatesFilter<"OrderStatus"> | $Enums.OrderStatusKey;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"OrderStatus"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"OrderStatus"> | Date | string;
};
export type OrderStatusCreateInput = {
    orderStatusId?: string;
    orderStatusName: string;
    orderStatusKey: $Enums.OrderStatusKey;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    orders?: Prisma.OrderCreateNestedManyWithoutOrderStatusDetailsInput;
};
export type OrderStatusUncheckedCreateInput = {
    orderStatusId?: string;
    orderStatusName: string;
    orderStatusKey: $Enums.OrderStatusKey;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    orders?: Prisma.OrderUncheckedCreateNestedManyWithoutOrderStatusDetailsInput;
};
export type OrderStatusUpdateInput = {
    orderStatusId?: Prisma.StringFieldUpdateOperationsInput | string;
    orderStatusName?: Prisma.StringFieldUpdateOperationsInput | string;
    orderStatusKey?: Prisma.EnumOrderStatusKeyFieldUpdateOperationsInput | $Enums.OrderStatusKey;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    orders?: Prisma.OrderUpdateManyWithoutOrderStatusDetailsNestedInput;
};
export type OrderStatusUncheckedUpdateInput = {
    orderStatusId?: Prisma.StringFieldUpdateOperationsInput | string;
    orderStatusName?: Prisma.StringFieldUpdateOperationsInput | string;
    orderStatusKey?: Prisma.EnumOrderStatusKeyFieldUpdateOperationsInput | $Enums.OrderStatusKey;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    orders?: Prisma.OrderUncheckedUpdateManyWithoutOrderStatusDetailsNestedInput;
};
export type OrderStatusCreateManyInput = {
    orderStatusId?: string;
    orderStatusName: string;
    orderStatusKey: $Enums.OrderStatusKey;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type OrderStatusUpdateManyMutationInput = {
    orderStatusId?: Prisma.StringFieldUpdateOperationsInput | string;
    orderStatusName?: Prisma.StringFieldUpdateOperationsInput | string;
    orderStatusKey?: Prisma.EnumOrderStatusKeyFieldUpdateOperationsInput | $Enums.OrderStatusKey;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OrderStatusUncheckedUpdateManyInput = {
    orderStatusId?: Prisma.StringFieldUpdateOperationsInput | string;
    orderStatusName?: Prisma.StringFieldUpdateOperationsInput | string;
    orderStatusKey?: Prisma.EnumOrderStatusKeyFieldUpdateOperationsInput | $Enums.OrderStatusKey;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OrderStatusScalarRelationFilter = {
    is?: Prisma.OrderStatusWhereInput;
    isNot?: Prisma.OrderStatusWhereInput;
};
export type OrderStatusCountOrderByAggregateInput = {
    orderStatusId?: Prisma.SortOrder;
    orderStatusName?: Prisma.SortOrder;
    orderStatusKey?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type OrderStatusMaxOrderByAggregateInput = {
    orderStatusId?: Prisma.SortOrder;
    orderStatusName?: Prisma.SortOrder;
    orderStatusKey?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type OrderStatusMinOrderByAggregateInput = {
    orderStatusId?: Prisma.SortOrder;
    orderStatusName?: Prisma.SortOrder;
    orderStatusKey?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type OrderStatusCreateNestedOneWithoutOrdersInput = {
    create?: Prisma.XOR<Prisma.OrderStatusCreateWithoutOrdersInput, Prisma.OrderStatusUncheckedCreateWithoutOrdersInput>;
    connectOrCreate?: Prisma.OrderStatusCreateOrConnectWithoutOrdersInput;
    connect?: Prisma.OrderStatusWhereUniqueInput;
};
export type OrderStatusUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: Prisma.XOR<Prisma.OrderStatusCreateWithoutOrdersInput, Prisma.OrderStatusUncheckedCreateWithoutOrdersInput>;
    connectOrCreate?: Prisma.OrderStatusCreateOrConnectWithoutOrdersInput;
    upsert?: Prisma.OrderStatusUpsertWithoutOrdersInput;
    connect?: Prisma.OrderStatusWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.OrderStatusUpdateToOneWithWhereWithoutOrdersInput, Prisma.OrderStatusUpdateWithoutOrdersInput>, Prisma.OrderStatusUncheckedUpdateWithoutOrdersInput>;
};
export type OrderStatusCreateWithoutOrdersInput = {
    orderStatusId?: string;
    orderStatusName: string;
    orderStatusKey: $Enums.OrderStatusKey;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type OrderStatusUncheckedCreateWithoutOrdersInput = {
    orderStatusId?: string;
    orderStatusName: string;
    orderStatusKey: $Enums.OrderStatusKey;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type OrderStatusCreateOrConnectWithoutOrdersInput = {
    where: Prisma.OrderStatusWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrderStatusCreateWithoutOrdersInput, Prisma.OrderStatusUncheckedCreateWithoutOrdersInput>;
};
export type OrderStatusUpsertWithoutOrdersInput = {
    update: Prisma.XOR<Prisma.OrderStatusUpdateWithoutOrdersInput, Prisma.OrderStatusUncheckedUpdateWithoutOrdersInput>;
    create: Prisma.XOR<Prisma.OrderStatusCreateWithoutOrdersInput, Prisma.OrderStatusUncheckedCreateWithoutOrdersInput>;
    where?: Prisma.OrderStatusWhereInput;
};
export type OrderStatusUpdateToOneWithWhereWithoutOrdersInput = {
    where?: Prisma.OrderStatusWhereInput;
    data: Prisma.XOR<Prisma.OrderStatusUpdateWithoutOrdersInput, Prisma.OrderStatusUncheckedUpdateWithoutOrdersInput>;
};
export type OrderStatusUpdateWithoutOrdersInput = {
    orderStatusId?: Prisma.StringFieldUpdateOperationsInput | string;
    orderStatusName?: Prisma.StringFieldUpdateOperationsInput | string;
    orderStatusKey?: Prisma.EnumOrderStatusKeyFieldUpdateOperationsInput | $Enums.OrderStatusKey;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OrderStatusUncheckedUpdateWithoutOrdersInput = {
    orderStatusId?: Prisma.StringFieldUpdateOperationsInput | string;
    orderStatusName?: Prisma.StringFieldUpdateOperationsInput | string;
    orderStatusKey?: Prisma.EnumOrderStatusKeyFieldUpdateOperationsInput | $Enums.OrderStatusKey;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OrderStatusCountOutputType = {
    orders: number;
};
export type OrderStatusCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    orders?: boolean | OrderStatusCountOutputTypeCountOrdersArgs;
};
export type OrderStatusCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderStatusCountOutputTypeSelect<ExtArgs> | null;
};
export type OrderStatusCountOutputTypeCountOrdersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderWhereInput;
};
export type OrderStatusSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    orderStatusId?: boolean;
    orderStatusName?: boolean;
    orderStatusKey?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    orders?: boolean | Prisma.OrderStatus$ordersArgs<ExtArgs>;
    _count?: boolean | Prisma.OrderStatusCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["orderStatus"]>;
export type OrderStatusSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    orderStatusId?: boolean;
    orderStatusName?: boolean;
    orderStatusKey?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["orderStatus"]>;
export type OrderStatusSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    orderStatusId?: boolean;
    orderStatusName?: boolean;
    orderStatusKey?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["orderStatus"]>;
export type OrderStatusSelectScalar = {
    orderStatusId?: boolean;
    orderStatusName?: boolean;
    orderStatusKey?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type OrderStatusOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"orderStatusId" | "orderStatusName" | "orderStatusKey" | "createdAt" | "updatedAt", ExtArgs["result"]["orderStatus"]>;
export type OrderStatusInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    orders?: boolean | Prisma.OrderStatus$ordersArgs<ExtArgs>;
    _count?: boolean | Prisma.OrderStatusCountOutputTypeDefaultArgs<ExtArgs>;
};
export type OrderStatusIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type OrderStatusIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $OrderStatusPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "OrderStatus";
    objects: {
        orders: Prisma.$OrderPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        orderStatusId: string;
        orderStatusName: string;
        orderStatusKey: $Enums.OrderStatusKey;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["orderStatus"]>;
    composites: {};
};
export type OrderStatusGetPayload<S extends boolean | null | undefined | OrderStatusDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$OrderStatusPayload, S>;
export type OrderStatusCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<OrderStatusFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: OrderStatusCountAggregateInputType | true;
};
export interface OrderStatusDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['OrderStatus'];
        meta: {
            name: 'OrderStatus';
        };
    };
    findUnique<T extends OrderStatusFindUniqueArgs>(args: Prisma.SelectSubset<T, OrderStatusFindUniqueArgs<ExtArgs>>): Prisma.Prisma__OrderStatusClient<runtime.Types.Result.GetResult<Prisma.$OrderStatusPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends OrderStatusFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, OrderStatusFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__OrderStatusClient<runtime.Types.Result.GetResult<Prisma.$OrderStatusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends OrderStatusFindFirstArgs>(args?: Prisma.SelectSubset<T, OrderStatusFindFirstArgs<ExtArgs>>): Prisma.Prisma__OrderStatusClient<runtime.Types.Result.GetResult<Prisma.$OrderStatusPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends OrderStatusFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, OrderStatusFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__OrderStatusClient<runtime.Types.Result.GetResult<Prisma.$OrderStatusPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends OrderStatusFindManyArgs>(args?: Prisma.SelectSubset<T, OrderStatusFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderStatusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends OrderStatusCreateArgs>(args: Prisma.SelectSubset<T, OrderStatusCreateArgs<ExtArgs>>): Prisma.Prisma__OrderStatusClient<runtime.Types.Result.GetResult<Prisma.$OrderStatusPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends OrderStatusCreateManyArgs>(args?: Prisma.SelectSubset<T, OrderStatusCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends OrderStatusCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, OrderStatusCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderStatusPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends OrderStatusDeleteArgs>(args: Prisma.SelectSubset<T, OrderStatusDeleteArgs<ExtArgs>>): Prisma.Prisma__OrderStatusClient<runtime.Types.Result.GetResult<Prisma.$OrderStatusPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends OrderStatusUpdateArgs>(args: Prisma.SelectSubset<T, OrderStatusUpdateArgs<ExtArgs>>): Prisma.Prisma__OrderStatusClient<runtime.Types.Result.GetResult<Prisma.$OrderStatusPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends OrderStatusDeleteManyArgs>(args?: Prisma.SelectSubset<T, OrderStatusDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends OrderStatusUpdateManyArgs>(args: Prisma.SelectSubset<T, OrderStatusUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends OrderStatusUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, OrderStatusUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderStatusPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends OrderStatusUpsertArgs>(args: Prisma.SelectSubset<T, OrderStatusUpsertArgs<ExtArgs>>): Prisma.Prisma__OrderStatusClient<runtime.Types.Result.GetResult<Prisma.$OrderStatusPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends OrderStatusCountArgs>(args?: Prisma.Subset<T, OrderStatusCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], OrderStatusCountAggregateOutputType> : number>;
    aggregate<T extends OrderStatusAggregateArgs>(args: Prisma.Subset<T, OrderStatusAggregateArgs>): Prisma.PrismaPromise<GetOrderStatusAggregateType<T>>;
    groupBy<T extends OrderStatusGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: OrderStatusGroupByArgs['orderBy'];
    } : {
        orderBy?: OrderStatusGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, OrderStatusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderStatusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: OrderStatusFieldRefs;
}
export interface Prisma__OrderStatusClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    orders<T extends Prisma.OrderStatus$ordersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OrderStatus$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface OrderStatusFieldRefs {
    readonly orderStatusId: Prisma.FieldRef<"OrderStatus", 'String'>;
    readonly orderStatusName: Prisma.FieldRef<"OrderStatus", 'String'>;
    readonly orderStatusKey: Prisma.FieldRef<"OrderStatus", 'OrderStatusKey'>;
    readonly createdAt: Prisma.FieldRef<"OrderStatus", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"OrderStatus", 'DateTime'>;
}
export type OrderStatusFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderStatusSelect<ExtArgs> | null;
    omit?: Prisma.OrderStatusOmit<ExtArgs> | null;
    include?: Prisma.OrderStatusInclude<ExtArgs> | null;
    where: Prisma.OrderStatusWhereUniqueInput;
};
export type OrderStatusFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderStatusSelect<ExtArgs> | null;
    omit?: Prisma.OrderStatusOmit<ExtArgs> | null;
    include?: Prisma.OrderStatusInclude<ExtArgs> | null;
    where: Prisma.OrderStatusWhereUniqueInput;
};
export type OrderStatusFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderStatusSelect<ExtArgs> | null;
    omit?: Prisma.OrderStatusOmit<ExtArgs> | null;
    include?: Prisma.OrderStatusInclude<ExtArgs> | null;
    where?: Prisma.OrderStatusWhereInput;
    orderBy?: Prisma.OrderStatusOrderByWithRelationInput | Prisma.OrderStatusOrderByWithRelationInput[];
    cursor?: Prisma.OrderStatusWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrderStatusScalarFieldEnum | Prisma.OrderStatusScalarFieldEnum[];
};
export type OrderStatusFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderStatusSelect<ExtArgs> | null;
    omit?: Prisma.OrderStatusOmit<ExtArgs> | null;
    include?: Prisma.OrderStatusInclude<ExtArgs> | null;
    where?: Prisma.OrderStatusWhereInput;
    orderBy?: Prisma.OrderStatusOrderByWithRelationInput | Prisma.OrderStatusOrderByWithRelationInput[];
    cursor?: Prisma.OrderStatusWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrderStatusScalarFieldEnum | Prisma.OrderStatusScalarFieldEnum[];
};
export type OrderStatusFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderStatusSelect<ExtArgs> | null;
    omit?: Prisma.OrderStatusOmit<ExtArgs> | null;
    include?: Prisma.OrderStatusInclude<ExtArgs> | null;
    where?: Prisma.OrderStatusWhereInput;
    orderBy?: Prisma.OrderStatusOrderByWithRelationInput | Prisma.OrderStatusOrderByWithRelationInput[];
    cursor?: Prisma.OrderStatusWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrderStatusScalarFieldEnum | Prisma.OrderStatusScalarFieldEnum[];
};
export type OrderStatusCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderStatusSelect<ExtArgs> | null;
    omit?: Prisma.OrderStatusOmit<ExtArgs> | null;
    include?: Prisma.OrderStatusInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OrderStatusCreateInput, Prisma.OrderStatusUncheckedCreateInput>;
};
export type OrderStatusCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.OrderStatusCreateManyInput | Prisma.OrderStatusCreateManyInput[];
    skipDuplicates?: boolean;
};
export type OrderStatusCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderStatusSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.OrderStatusOmit<ExtArgs> | null;
    data: Prisma.OrderStatusCreateManyInput | Prisma.OrderStatusCreateManyInput[];
    skipDuplicates?: boolean;
};
export type OrderStatusUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderStatusSelect<ExtArgs> | null;
    omit?: Prisma.OrderStatusOmit<ExtArgs> | null;
    include?: Prisma.OrderStatusInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OrderStatusUpdateInput, Prisma.OrderStatusUncheckedUpdateInput>;
    where: Prisma.OrderStatusWhereUniqueInput;
};
export type OrderStatusUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.OrderStatusUpdateManyMutationInput, Prisma.OrderStatusUncheckedUpdateManyInput>;
    where?: Prisma.OrderStatusWhereInput;
    limit?: number;
};
export type OrderStatusUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderStatusSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.OrderStatusOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OrderStatusUpdateManyMutationInput, Prisma.OrderStatusUncheckedUpdateManyInput>;
    where?: Prisma.OrderStatusWhereInput;
    limit?: number;
};
export type OrderStatusUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderStatusSelect<ExtArgs> | null;
    omit?: Prisma.OrderStatusOmit<ExtArgs> | null;
    include?: Prisma.OrderStatusInclude<ExtArgs> | null;
    where: Prisma.OrderStatusWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrderStatusCreateInput, Prisma.OrderStatusUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.OrderStatusUpdateInput, Prisma.OrderStatusUncheckedUpdateInput>;
};
export type OrderStatusDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderStatusSelect<ExtArgs> | null;
    omit?: Prisma.OrderStatusOmit<ExtArgs> | null;
    include?: Prisma.OrderStatusInclude<ExtArgs> | null;
    where: Prisma.OrderStatusWhereUniqueInput;
};
export type OrderStatusDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderStatusWhereInput;
    limit?: number;
};
export type OrderStatus$ordersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type OrderStatusDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderStatusSelect<ExtArgs> | null;
    omit?: Prisma.OrderStatusOmit<ExtArgs> | null;
    include?: Prisma.OrderStatusInclude<ExtArgs> | null;
};
