import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type CartEventModel = runtime.Types.Result.DefaultSelection<Prisma.$CartEventPayload>;
export type AggregateCartEvent = {
    _count: CartEventCountAggregateOutputType | null;
    _avg: CartEventAvgAggregateOutputType | null;
    _sum: CartEventSumAggregateOutputType | null;
    _min: CartEventMinAggregateOutputType | null;
    _max: CartEventMaxAggregateOutputType | null;
};
export type CartEventAvgAggregateOutputType = {
    quantity: number | null;
    price: number | null;
};
export type CartEventSumAggregateOutputType = {
    quantity: number | null;
    price: number | null;
};
export type CartEventMinAggregateOutputType = {
    id: string | null;
    customerId: string | null;
    eventType: $Enums.CartEventType | null;
    eventDate: Date | null;
    menuItemId: string | null;
    itemName: string | null;
    quantity: number | null;
    price: number | null;
};
export type CartEventMaxAggregateOutputType = {
    id: string | null;
    customerId: string | null;
    eventType: $Enums.CartEventType | null;
    eventDate: Date | null;
    menuItemId: string | null;
    itemName: string | null;
    quantity: number | null;
    price: number | null;
};
export type CartEventCountAggregateOutputType = {
    id: number;
    customerId: number;
    eventType: number;
    eventDate: number;
    menuItemId: number;
    itemName: number;
    quantity: number;
    price: number;
    _all: number;
};
export type CartEventAvgAggregateInputType = {
    quantity?: true;
    price?: true;
};
export type CartEventSumAggregateInputType = {
    quantity?: true;
    price?: true;
};
export type CartEventMinAggregateInputType = {
    id?: true;
    customerId?: true;
    eventType?: true;
    eventDate?: true;
    menuItemId?: true;
    itemName?: true;
    quantity?: true;
    price?: true;
};
export type CartEventMaxAggregateInputType = {
    id?: true;
    customerId?: true;
    eventType?: true;
    eventDate?: true;
    menuItemId?: true;
    itemName?: true;
    quantity?: true;
    price?: true;
};
export type CartEventCountAggregateInputType = {
    id?: true;
    customerId?: true;
    eventType?: true;
    eventDate?: true;
    menuItemId?: true;
    itemName?: true;
    quantity?: true;
    price?: true;
    _all?: true;
};
export type CartEventAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CartEventWhereInput;
    orderBy?: Prisma.CartEventOrderByWithRelationInput | Prisma.CartEventOrderByWithRelationInput[];
    cursor?: Prisma.CartEventWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CartEventCountAggregateInputType;
    _avg?: CartEventAvgAggregateInputType;
    _sum?: CartEventSumAggregateInputType;
    _min?: CartEventMinAggregateInputType;
    _max?: CartEventMaxAggregateInputType;
};
export type GetCartEventAggregateType<T extends CartEventAggregateArgs> = {
    [P in keyof T & keyof AggregateCartEvent]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCartEvent[P]> : Prisma.GetScalarType<T[P], AggregateCartEvent[P]>;
};
export type CartEventGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CartEventWhereInput;
    orderBy?: Prisma.CartEventOrderByWithAggregationInput | Prisma.CartEventOrderByWithAggregationInput[];
    by: Prisma.CartEventScalarFieldEnum[] | Prisma.CartEventScalarFieldEnum;
    having?: Prisma.CartEventScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CartEventCountAggregateInputType | true;
    _avg?: CartEventAvgAggregateInputType;
    _sum?: CartEventSumAggregateInputType;
    _min?: CartEventMinAggregateInputType;
    _max?: CartEventMaxAggregateInputType;
};
export type CartEventGroupByOutputType = {
    id: string;
    customerId: string;
    eventType: $Enums.CartEventType;
    eventDate: Date;
    menuItemId: string | null;
    itemName: string | null;
    quantity: number | null;
    price: number | null;
    _count: CartEventCountAggregateOutputType | null;
    _avg: CartEventAvgAggregateOutputType | null;
    _sum: CartEventSumAggregateOutputType | null;
    _min: CartEventMinAggregateOutputType | null;
    _max: CartEventMaxAggregateOutputType | null;
};
export type GetCartEventGroupByPayload<T extends CartEventGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CartEventGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CartEventGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CartEventGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CartEventGroupByOutputType[P]>;
}>>;
export type CartEventWhereInput = {
    AND?: Prisma.CartEventWhereInput | Prisma.CartEventWhereInput[];
    OR?: Prisma.CartEventWhereInput[];
    NOT?: Prisma.CartEventWhereInput | Prisma.CartEventWhereInput[];
    id?: Prisma.StringFilter<"CartEvent"> | string;
    customerId?: Prisma.StringFilter<"CartEvent"> | string;
    eventType?: Prisma.EnumCartEventTypeFilter<"CartEvent"> | $Enums.CartEventType;
    eventDate?: Prisma.DateTimeFilter<"CartEvent"> | Date | string;
    menuItemId?: Prisma.StringNullableFilter<"CartEvent"> | string | null;
    itemName?: Prisma.StringNullableFilter<"CartEvent"> | string | null;
    quantity?: Prisma.IntNullableFilter<"CartEvent"> | number | null;
    price?: Prisma.IntNullableFilter<"CartEvent"> | number | null;
};
export type CartEventOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    eventType?: Prisma.SortOrder;
    eventDate?: Prisma.SortOrder;
    menuItemId?: Prisma.SortOrderInput | Prisma.SortOrder;
    itemName?: Prisma.SortOrderInput | Prisma.SortOrder;
    quantity?: Prisma.SortOrderInput | Prisma.SortOrder;
    price?: Prisma.SortOrderInput | Prisma.SortOrder;
};
export type CartEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.CartEventWhereInput | Prisma.CartEventWhereInput[];
    OR?: Prisma.CartEventWhereInput[];
    NOT?: Prisma.CartEventWhereInput | Prisma.CartEventWhereInput[];
    customerId?: Prisma.StringFilter<"CartEvent"> | string;
    eventType?: Prisma.EnumCartEventTypeFilter<"CartEvent"> | $Enums.CartEventType;
    eventDate?: Prisma.DateTimeFilter<"CartEvent"> | Date | string;
    menuItemId?: Prisma.StringNullableFilter<"CartEvent"> | string | null;
    itemName?: Prisma.StringNullableFilter<"CartEvent"> | string | null;
    quantity?: Prisma.IntNullableFilter<"CartEvent"> | number | null;
    price?: Prisma.IntNullableFilter<"CartEvent"> | number | null;
}, "id">;
export type CartEventOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    eventType?: Prisma.SortOrder;
    eventDate?: Prisma.SortOrder;
    menuItemId?: Prisma.SortOrderInput | Prisma.SortOrder;
    itemName?: Prisma.SortOrderInput | Prisma.SortOrder;
    quantity?: Prisma.SortOrderInput | Prisma.SortOrder;
    price?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.CartEventCountOrderByAggregateInput;
    _avg?: Prisma.CartEventAvgOrderByAggregateInput;
    _max?: Prisma.CartEventMaxOrderByAggregateInput;
    _min?: Prisma.CartEventMinOrderByAggregateInput;
    _sum?: Prisma.CartEventSumOrderByAggregateInput;
};
export type CartEventScalarWhereWithAggregatesInput = {
    AND?: Prisma.CartEventScalarWhereWithAggregatesInput | Prisma.CartEventScalarWhereWithAggregatesInput[];
    OR?: Prisma.CartEventScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CartEventScalarWhereWithAggregatesInput | Prisma.CartEventScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"CartEvent"> | string;
    customerId?: Prisma.StringWithAggregatesFilter<"CartEvent"> | string;
    eventType?: Prisma.EnumCartEventTypeWithAggregatesFilter<"CartEvent"> | $Enums.CartEventType;
    eventDate?: Prisma.DateTimeWithAggregatesFilter<"CartEvent"> | Date | string;
    menuItemId?: Prisma.StringNullableWithAggregatesFilter<"CartEvent"> | string | null;
    itemName?: Prisma.StringNullableWithAggregatesFilter<"CartEvent"> | string | null;
    quantity?: Prisma.IntNullableWithAggregatesFilter<"CartEvent"> | number | null;
    price?: Prisma.IntNullableWithAggregatesFilter<"CartEvent"> | number | null;
};
export type CartEventCreateInput = {
    id?: string;
    customerId: string;
    eventType: $Enums.CartEventType;
    eventDate?: Date | string;
    menuItemId?: string | null;
    itemName?: string | null;
    quantity?: number | null;
    price?: number | null;
};
export type CartEventUncheckedCreateInput = {
    id?: string;
    customerId: string;
    eventType: $Enums.CartEventType;
    eventDate?: Date | string;
    menuItemId?: string | null;
    itemName?: string | null;
    quantity?: number | null;
    price?: number | null;
};
export type CartEventUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    eventType?: Prisma.EnumCartEventTypeFieldUpdateOperationsInput | $Enums.CartEventType;
    eventDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    menuItemId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    itemName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    price?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type CartEventUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    eventType?: Prisma.EnumCartEventTypeFieldUpdateOperationsInput | $Enums.CartEventType;
    eventDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    menuItemId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    itemName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    price?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type CartEventCreateManyInput = {
    id?: string;
    customerId: string;
    eventType: $Enums.CartEventType;
    eventDate?: Date | string;
    menuItemId?: string | null;
    itemName?: string | null;
    quantity?: number | null;
    price?: number | null;
};
export type CartEventUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    eventType?: Prisma.EnumCartEventTypeFieldUpdateOperationsInput | $Enums.CartEventType;
    eventDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    menuItemId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    itemName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    price?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type CartEventUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    eventType?: Prisma.EnumCartEventTypeFieldUpdateOperationsInput | $Enums.CartEventType;
    eventDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    menuItemId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    itemName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    price?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type CartEventCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    eventType?: Prisma.SortOrder;
    eventDate?: Prisma.SortOrder;
    menuItemId?: Prisma.SortOrder;
    itemName?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
};
export type CartEventAvgOrderByAggregateInput = {
    quantity?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
};
export type CartEventMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    eventType?: Prisma.SortOrder;
    eventDate?: Prisma.SortOrder;
    menuItemId?: Prisma.SortOrder;
    itemName?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
};
export type CartEventMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    eventType?: Prisma.SortOrder;
    eventDate?: Prisma.SortOrder;
    menuItemId?: Prisma.SortOrder;
    itemName?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
};
export type CartEventSumOrderByAggregateInput = {
    quantity?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
};
export type EnumCartEventTypeFieldUpdateOperationsInput = {
    set?: $Enums.CartEventType;
};
export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type CartEventSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    customerId?: boolean;
    eventType?: boolean;
    eventDate?: boolean;
    menuItemId?: boolean;
    itemName?: boolean;
    quantity?: boolean;
    price?: boolean;
}, ExtArgs["result"]["cartEvent"]>;
export type CartEventSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    customerId?: boolean;
    eventType?: boolean;
    eventDate?: boolean;
    menuItemId?: boolean;
    itemName?: boolean;
    quantity?: boolean;
    price?: boolean;
}, ExtArgs["result"]["cartEvent"]>;
export type CartEventSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    customerId?: boolean;
    eventType?: boolean;
    eventDate?: boolean;
    menuItemId?: boolean;
    itemName?: boolean;
    quantity?: boolean;
    price?: boolean;
}, ExtArgs["result"]["cartEvent"]>;
export type CartEventSelectScalar = {
    id?: boolean;
    customerId?: boolean;
    eventType?: boolean;
    eventDate?: boolean;
    menuItemId?: boolean;
    itemName?: boolean;
    quantity?: boolean;
    price?: boolean;
};
export type CartEventOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "customerId" | "eventType" | "eventDate" | "menuItemId" | "itemName" | "quantity" | "price", ExtArgs["result"]["cartEvent"]>;
export type $CartEventPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "CartEvent";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        customerId: string;
        eventType: $Enums.CartEventType;
        eventDate: Date;
        menuItemId: string | null;
        itemName: string | null;
        quantity: number | null;
        price: number | null;
    }, ExtArgs["result"]["cartEvent"]>;
    composites: {};
};
export type CartEventGetPayload<S extends boolean | null | undefined | CartEventDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CartEventPayload, S>;
export type CartEventCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CartEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CartEventCountAggregateInputType | true;
};
export interface CartEventDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['CartEvent'];
        meta: {
            name: 'CartEvent';
        };
    };
    findUnique<T extends CartEventFindUniqueArgs>(args: Prisma.SelectSubset<T, CartEventFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CartEventClient<runtime.Types.Result.GetResult<Prisma.$CartEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends CartEventFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CartEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CartEventClient<runtime.Types.Result.GetResult<Prisma.$CartEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends CartEventFindFirstArgs>(args?: Prisma.SelectSubset<T, CartEventFindFirstArgs<ExtArgs>>): Prisma.Prisma__CartEventClient<runtime.Types.Result.GetResult<Prisma.$CartEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends CartEventFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CartEventFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CartEventClient<runtime.Types.Result.GetResult<Prisma.$CartEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends CartEventFindManyArgs>(args?: Prisma.SelectSubset<T, CartEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CartEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends CartEventCreateArgs>(args: Prisma.SelectSubset<T, CartEventCreateArgs<ExtArgs>>): Prisma.Prisma__CartEventClient<runtime.Types.Result.GetResult<Prisma.$CartEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends CartEventCreateManyArgs>(args?: Prisma.SelectSubset<T, CartEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends CartEventCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CartEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CartEventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends CartEventDeleteArgs>(args: Prisma.SelectSubset<T, CartEventDeleteArgs<ExtArgs>>): Prisma.Prisma__CartEventClient<runtime.Types.Result.GetResult<Prisma.$CartEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends CartEventUpdateArgs>(args: Prisma.SelectSubset<T, CartEventUpdateArgs<ExtArgs>>): Prisma.Prisma__CartEventClient<runtime.Types.Result.GetResult<Prisma.$CartEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends CartEventDeleteManyArgs>(args?: Prisma.SelectSubset<T, CartEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends CartEventUpdateManyArgs>(args: Prisma.SelectSubset<T, CartEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends CartEventUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CartEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CartEventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends CartEventUpsertArgs>(args: Prisma.SelectSubset<T, CartEventUpsertArgs<ExtArgs>>): Prisma.Prisma__CartEventClient<runtime.Types.Result.GetResult<Prisma.$CartEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends CartEventCountArgs>(args?: Prisma.Subset<T, CartEventCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CartEventCountAggregateOutputType> : number>;
    aggregate<T extends CartEventAggregateArgs>(args: Prisma.Subset<T, CartEventAggregateArgs>): Prisma.PrismaPromise<GetCartEventAggregateType<T>>;
    groupBy<T extends CartEventGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CartEventGroupByArgs['orderBy'];
    } : {
        orderBy?: CartEventGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CartEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCartEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: CartEventFieldRefs;
}
export interface Prisma__CartEventClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface CartEventFieldRefs {
    readonly id: Prisma.FieldRef<"CartEvent", 'String'>;
    readonly customerId: Prisma.FieldRef<"CartEvent", 'String'>;
    readonly eventType: Prisma.FieldRef<"CartEvent", 'CartEventType'>;
    readonly eventDate: Prisma.FieldRef<"CartEvent", 'DateTime'>;
    readonly menuItemId: Prisma.FieldRef<"CartEvent", 'String'>;
    readonly itemName: Prisma.FieldRef<"CartEvent", 'String'>;
    readonly quantity: Prisma.FieldRef<"CartEvent", 'Int'>;
    readonly price: Prisma.FieldRef<"CartEvent", 'Int'>;
}
export type CartEventFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CartEventSelect<ExtArgs> | null;
    omit?: Prisma.CartEventOmit<ExtArgs> | null;
    where: Prisma.CartEventWhereUniqueInput;
};
export type CartEventFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CartEventSelect<ExtArgs> | null;
    omit?: Prisma.CartEventOmit<ExtArgs> | null;
    where: Prisma.CartEventWhereUniqueInput;
};
export type CartEventFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CartEventSelect<ExtArgs> | null;
    omit?: Prisma.CartEventOmit<ExtArgs> | null;
    where?: Prisma.CartEventWhereInput;
    orderBy?: Prisma.CartEventOrderByWithRelationInput | Prisma.CartEventOrderByWithRelationInput[];
    cursor?: Prisma.CartEventWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CartEventScalarFieldEnum | Prisma.CartEventScalarFieldEnum[];
};
export type CartEventFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CartEventSelect<ExtArgs> | null;
    omit?: Prisma.CartEventOmit<ExtArgs> | null;
    where?: Prisma.CartEventWhereInput;
    orderBy?: Prisma.CartEventOrderByWithRelationInput | Prisma.CartEventOrderByWithRelationInput[];
    cursor?: Prisma.CartEventWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CartEventScalarFieldEnum | Prisma.CartEventScalarFieldEnum[];
};
export type CartEventFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CartEventSelect<ExtArgs> | null;
    omit?: Prisma.CartEventOmit<ExtArgs> | null;
    where?: Prisma.CartEventWhereInput;
    orderBy?: Prisma.CartEventOrderByWithRelationInput | Prisma.CartEventOrderByWithRelationInput[];
    cursor?: Prisma.CartEventWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CartEventScalarFieldEnum | Prisma.CartEventScalarFieldEnum[];
};
export type CartEventCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CartEventSelect<ExtArgs> | null;
    omit?: Prisma.CartEventOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CartEventCreateInput, Prisma.CartEventUncheckedCreateInput>;
};
export type CartEventCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.CartEventCreateManyInput | Prisma.CartEventCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CartEventCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CartEventSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CartEventOmit<ExtArgs> | null;
    data: Prisma.CartEventCreateManyInput | Prisma.CartEventCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CartEventUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CartEventSelect<ExtArgs> | null;
    omit?: Prisma.CartEventOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CartEventUpdateInput, Prisma.CartEventUncheckedUpdateInput>;
    where: Prisma.CartEventWhereUniqueInput;
};
export type CartEventUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.CartEventUpdateManyMutationInput, Prisma.CartEventUncheckedUpdateManyInput>;
    where?: Prisma.CartEventWhereInput;
    limit?: number;
};
export type CartEventUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CartEventSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CartEventOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CartEventUpdateManyMutationInput, Prisma.CartEventUncheckedUpdateManyInput>;
    where?: Prisma.CartEventWhereInput;
    limit?: number;
};
export type CartEventUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CartEventSelect<ExtArgs> | null;
    omit?: Prisma.CartEventOmit<ExtArgs> | null;
    where: Prisma.CartEventWhereUniqueInput;
    create: Prisma.XOR<Prisma.CartEventCreateInput, Prisma.CartEventUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.CartEventUpdateInput, Prisma.CartEventUncheckedUpdateInput>;
};
export type CartEventDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CartEventSelect<ExtArgs> | null;
    omit?: Prisma.CartEventOmit<ExtArgs> | null;
    where: Prisma.CartEventWhereUniqueInput;
};
export type CartEventDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CartEventWhereInput;
    limit?: number;
};
export type CartEventDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CartEventSelect<ExtArgs> | null;
    omit?: Prisma.CartEventOmit<ExtArgs> | null;
};
