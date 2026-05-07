import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type RefundModel = runtime.Types.Result.DefaultSelection<Prisma.$RefundPayload>;
export type AggregateRefund = {
    _count: RefundCountAggregateOutputType | null;
    _avg: RefundAvgAggregateOutputType | null;
    _sum: RefundSumAggregateOutputType | null;
    _min: RefundMinAggregateOutputType | null;
    _max: RefundMaxAggregateOutputType | null;
};
export type RefundAvgAggregateOutputType = {
    amount: runtime.Decimal | null;
};
export type RefundSumAggregateOutputType = {
    amount: runtime.Decimal | null;
};
export type RefundMinAggregateOutputType = {
    refundId: string | null;
    orderId: string | null;
    paymentAttemptId: string | null;
    refundTransactionId: string | null;
    amount: runtime.Decimal | null;
    status: $Enums.RefundStatus | null;
    provider: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type RefundMaxAggregateOutputType = {
    refundId: string | null;
    orderId: string | null;
    paymentAttemptId: string | null;
    refundTransactionId: string | null;
    amount: runtime.Decimal | null;
    status: $Enums.RefundStatus | null;
    provider: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type RefundCountAggregateOutputType = {
    refundId: number;
    orderId: number;
    paymentAttemptId: number;
    refundTransactionId: number;
    amount: number;
    status: number;
    provider: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type RefundAvgAggregateInputType = {
    amount?: true;
};
export type RefundSumAggregateInputType = {
    amount?: true;
};
export type RefundMinAggregateInputType = {
    refundId?: true;
    orderId?: true;
    paymentAttemptId?: true;
    refundTransactionId?: true;
    amount?: true;
    status?: true;
    provider?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type RefundMaxAggregateInputType = {
    refundId?: true;
    orderId?: true;
    paymentAttemptId?: true;
    refundTransactionId?: true;
    amount?: true;
    status?: true;
    provider?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type RefundCountAggregateInputType = {
    refundId?: true;
    orderId?: true;
    paymentAttemptId?: true;
    refundTransactionId?: true;
    amount?: true;
    status?: true;
    provider?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type RefundAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RefundWhereInput;
    orderBy?: Prisma.RefundOrderByWithRelationInput | Prisma.RefundOrderByWithRelationInput[];
    cursor?: Prisma.RefundWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | RefundCountAggregateInputType;
    _avg?: RefundAvgAggregateInputType;
    _sum?: RefundSumAggregateInputType;
    _min?: RefundMinAggregateInputType;
    _max?: RefundMaxAggregateInputType;
};
export type GetRefundAggregateType<T extends RefundAggregateArgs> = {
    [P in keyof T & keyof AggregateRefund]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateRefund[P]> : Prisma.GetScalarType<T[P], AggregateRefund[P]>;
};
export type RefundGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RefundWhereInput;
    orderBy?: Prisma.RefundOrderByWithAggregationInput | Prisma.RefundOrderByWithAggregationInput[];
    by: Prisma.RefundScalarFieldEnum[] | Prisma.RefundScalarFieldEnum;
    having?: Prisma.RefundScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RefundCountAggregateInputType | true;
    _avg?: RefundAvgAggregateInputType;
    _sum?: RefundSumAggregateInputType;
    _min?: RefundMinAggregateInputType;
    _max?: RefundMaxAggregateInputType;
};
export type RefundGroupByOutputType = {
    refundId: string;
    orderId: string;
    paymentAttemptId: string;
    refundTransactionId: string;
    amount: runtime.Decimal;
    status: $Enums.RefundStatus;
    provider: string;
    createdAt: Date;
    updatedAt: Date;
    _count: RefundCountAggregateOutputType | null;
    _avg: RefundAvgAggregateOutputType | null;
    _sum: RefundSumAggregateOutputType | null;
    _min: RefundMinAggregateOutputType | null;
    _max: RefundMaxAggregateOutputType | null;
};
export type GetRefundGroupByPayload<T extends RefundGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<RefundGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof RefundGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], RefundGroupByOutputType[P]> : Prisma.GetScalarType<T[P], RefundGroupByOutputType[P]>;
}>>;
export type RefundWhereInput = {
    AND?: Prisma.RefundWhereInput | Prisma.RefundWhereInput[];
    OR?: Prisma.RefundWhereInput[];
    NOT?: Prisma.RefundWhereInput | Prisma.RefundWhereInput[];
    refundId?: Prisma.StringFilter<"Refund"> | string;
    orderId?: Prisma.StringFilter<"Refund"> | string;
    paymentAttemptId?: Prisma.StringFilter<"Refund"> | string;
    refundTransactionId?: Prisma.StringFilter<"Refund"> | string;
    amount?: Prisma.DecimalFilter<"Refund"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumRefundStatusFilter<"Refund"> | $Enums.RefundStatus;
    provider?: Prisma.StringFilter<"Refund"> | string;
    createdAt?: Prisma.DateTimeFilter<"Refund"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Refund"> | Date | string;
};
export type RefundOrderByWithRelationInput = {
    refundId?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    paymentAttemptId?: Prisma.SortOrder;
    refundTransactionId?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    provider?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type RefundWhereUniqueInput = Prisma.AtLeast<{
    refundId?: string;
    AND?: Prisma.RefundWhereInput | Prisma.RefundWhereInput[];
    OR?: Prisma.RefundWhereInput[];
    NOT?: Prisma.RefundWhereInput | Prisma.RefundWhereInput[];
    orderId?: Prisma.StringFilter<"Refund"> | string;
    paymentAttemptId?: Prisma.StringFilter<"Refund"> | string;
    refundTransactionId?: Prisma.StringFilter<"Refund"> | string;
    amount?: Prisma.DecimalFilter<"Refund"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumRefundStatusFilter<"Refund"> | $Enums.RefundStatus;
    provider?: Prisma.StringFilter<"Refund"> | string;
    createdAt?: Prisma.DateTimeFilter<"Refund"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Refund"> | Date | string;
}, "refundId">;
export type RefundOrderByWithAggregationInput = {
    refundId?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    paymentAttemptId?: Prisma.SortOrder;
    refundTransactionId?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    provider?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.RefundCountOrderByAggregateInput;
    _avg?: Prisma.RefundAvgOrderByAggregateInput;
    _max?: Prisma.RefundMaxOrderByAggregateInput;
    _min?: Prisma.RefundMinOrderByAggregateInput;
    _sum?: Prisma.RefundSumOrderByAggregateInput;
};
export type RefundScalarWhereWithAggregatesInput = {
    AND?: Prisma.RefundScalarWhereWithAggregatesInput | Prisma.RefundScalarWhereWithAggregatesInput[];
    OR?: Prisma.RefundScalarWhereWithAggregatesInput[];
    NOT?: Prisma.RefundScalarWhereWithAggregatesInput | Prisma.RefundScalarWhereWithAggregatesInput[];
    refundId?: Prisma.StringWithAggregatesFilter<"Refund"> | string;
    orderId?: Prisma.StringWithAggregatesFilter<"Refund"> | string;
    paymentAttemptId?: Prisma.StringWithAggregatesFilter<"Refund"> | string;
    refundTransactionId?: Prisma.StringWithAggregatesFilter<"Refund"> | string;
    amount?: Prisma.DecimalWithAggregatesFilter<"Refund"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumRefundStatusWithAggregatesFilter<"Refund"> | $Enums.RefundStatus;
    provider?: Prisma.StringWithAggregatesFilter<"Refund"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Refund"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Refund"> | Date | string;
};
export type RefundCreateInput = {
    refundId?: string;
    orderId: string;
    paymentAttemptId: string;
    refundTransactionId: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status: $Enums.RefundStatus;
    provider: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type RefundUncheckedCreateInput = {
    refundId?: string;
    orderId: string;
    paymentAttemptId: string;
    refundTransactionId: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status: $Enums.RefundStatus;
    provider: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type RefundUpdateInput = {
    refundId?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    paymentAttemptId?: Prisma.StringFieldUpdateOperationsInput | string;
    refundTransactionId?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumRefundStatusFieldUpdateOperationsInput | $Enums.RefundStatus;
    provider?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RefundUncheckedUpdateInput = {
    refundId?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    paymentAttemptId?: Prisma.StringFieldUpdateOperationsInput | string;
    refundTransactionId?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumRefundStatusFieldUpdateOperationsInput | $Enums.RefundStatus;
    provider?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RefundCreateManyInput = {
    refundId?: string;
    orderId: string;
    paymentAttemptId: string;
    refundTransactionId: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status: $Enums.RefundStatus;
    provider: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type RefundUpdateManyMutationInput = {
    refundId?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    paymentAttemptId?: Prisma.StringFieldUpdateOperationsInput | string;
    refundTransactionId?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumRefundStatusFieldUpdateOperationsInput | $Enums.RefundStatus;
    provider?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RefundUncheckedUpdateManyInput = {
    refundId?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    paymentAttemptId?: Prisma.StringFieldUpdateOperationsInput | string;
    refundTransactionId?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumRefundStatusFieldUpdateOperationsInput | $Enums.RefundStatus;
    provider?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RefundCountOrderByAggregateInput = {
    refundId?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    paymentAttemptId?: Prisma.SortOrder;
    refundTransactionId?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    provider?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type RefundAvgOrderByAggregateInput = {
    amount?: Prisma.SortOrder;
};
export type RefundMaxOrderByAggregateInput = {
    refundId?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    paymentAttemptId?: Prisma.SortOrder;
    refundTransactionId?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    provider?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type RefundMinOrderByAggregateInput = {
    refundId?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    paymentAttemptId?: Prisma.SortOrder;
    refundTransactionId?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    provider?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type RefundSumOrderByAggregateInput = {
    amount?: Prisma.SortOrder;
};
export type DecimalFieldUpdateOperationsInput = {
    set?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    increment?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    decrement?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    multiply?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    divide?: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type EnumRefundStatusFieldUpdateOperationsInput = {
    set?: $Enums.RefundStatus;
};
export type RefundSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    refundId?: boolean;
    orderId?: boolean;
    paymentAttemptId?: boolean;
    refundTransactionId?: boolean;
    amount?: boolean;
    status?: boolean;
    provider?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["refund"]>;
export type RefundSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    refundId?: boolean;
    orderId?: boolean;
    paymentAttemptId?: boolean;
    refundTransactionId?: boolean;
    amount?: boolean;
    status?: boolean;
    provider?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["refund"]>;
export type RefundSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    refundId?: boolean;
    orderId?: boolean;
    paymentAttemptId?: boolean;
    refundTransactionId?: boolean;
    amount?: boolean;
    status?: boolean;
    provider?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["refund"]>;
export type RefundSelectScalar = {
    refundId?: boolean;
    orderId?: boolean;
    paymentAttemptId?: boolean;
    refundTransactionId?: boolean;
    amount?: boolean;
    status?: boolean;
    provider?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type RefundOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"refundId" | "orderId" | "paymentAttemptId" | "refundTransactionId" | "amount" | "status" | "provider" | "createdAt" | "updatedAt", ExtArgs["result"]["refund"]>;
export type $RefundPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Refund";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        refundId: string;
        orderId: string;
        paymentAttemptId: string;
        refundTransactionId: string;
        amount: runtime.Decimal;
        status: $Enums.RefundStatus;
        provider: string;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["refund"]>;
    composites: {};
};
export type RefundGetPayload<S extends boolean | null | undefined | RefundDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$RefundPayload, S>;
export type RefundCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<RefundFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: RefundCountAggregateInputType | true;
};
export interface RefundDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Refund'];
        meta: {
            name: 'Refund';
        };
    };
    findUnique<T extends RefundFindUniqueArgs>(args: Prisma.SelectSubset<T, RefundFindUniqueArgs<ExtArgs>>): Prisma.Prisma__RefundClient<runtime.Types.Result.GetResult<Prisma.$RefundPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends RefundFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, RefundFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__RefundClient<runtime.Types.Result.GetResult<Prisma.$RefundPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends RefundFindFirstArgs>(args?: Prisma.SelectSubset<T, RefundFindFirstArgs<ExtArgs>>): Prisma.Prisma__RefundClient<runtime.Types.Result.GetResult<Prisma.$RefundPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends RefundFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, RefundFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__RefundClient<runtime.Types.Result.GetResult<Prisma.$RefundPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends RefundFindManyArgs>(args?: Prisma.SelectSubset<T, RefundFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RefundPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends RefundCreateArgs>(args: Prisma.SelectSubset<T, RefundCreateArgs<ExtArgs>>): Prisma.Prisma__RefundClient<runtime.Types.Result.GetResult<Prisma.$RefundPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends RefundCreateManyArgs>(args?: Prisma.SelectSubset<T, RefundCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends RefundCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, RefundCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RefundPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends RefundDeleteArgs>(args: Prisma.SelectSubset<T, RefundDeleteArgs<ExtArgs>>): Prisma.Prisma__RefundClient<runtime.Types.Result.GetResult<Prisma.$RefundPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends RefundUpdateArgs>(args: Prisma.SelectSubset<T, RefundUpdateArgs<ExtArgs>>): Prisma.Prisma__RefundClient<runtime.Types.Result.GetResult<Prisma.$RefundPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends RefundDeleteManyArgs>(args?: Prisma.SelectSubset<T, RefundDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends RefundUpdateManyArgs>(args: Prisma.SelectSubset<T, RefundUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends RefundUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, RefundUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RefundPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends RefundUpsertArgs>(args: Prisma.SelectSubset<T, RefundUpsertArgs<ExtArgs>>): Prisma.Prisma__RefundClient<runtime.Types.Result.GetResult<Prisma.$RefundPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends RefundCountArgs>(args?: Prisma.Subset<T, RefundCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], RefundCountAggregateOutputType> : number>;
    aggregate<T extends RefundAggregateArgs>(args: Prisma.Subset<T, RefundAggregateArgs>): Prisma.PrismaPromise<GetRefundAggregateType<T>>;
    groupBy<T extends RefundGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: RefundGroupByArgs['orderBy'];
    } : {
        orderBy?: RefundGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, RefundGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRefundGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: RefundFieldRefs;
}
export interface Prisma__RefundClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface RefundFieldRefs {
    readonly refundId: Prisma.FieldRef<"Refund", 'String'>;
    readonly orderId: Prisma.FieldRef<"Refund", 'String'>;
    readonly paymentAttemptId: Prisma.FieldRef<"Refund", 'String'>;
    readonly refundTransactionId: Prisma.FieldRef<"Refund", 'String'>;
    readonly amount: Prisma.FieldRef<"Refund", 'Decimal'>;
    readonly status: Prisma.FieldRef<"Refund", 'RefundStatus'>;
    readonly provider: Prisma.FieldRef<"Refund", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Refund", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Refund", 'DateTime'>;
}
export type RefundFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RefundSelect<ExtArgs> | null;
    omit?: Prisma.RefundOmit<ExtArgs> | null;
    where: Prisma.RefundWhereUniqueInput;
};
export type RefundFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RefundSelect<ExtArgs> | null;
    omit?: Prisma.RefundOmit<ExtArgs> | null;
    where: Prisma.RefundWhereUniqueInput;
};
export type RefundFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RefundSelect<ExtArgs> | null;
    omit?: Prisma.RefundOmit<ExtArgs> | null;
    where?: Prisma.RefundWhereInput;
    orderBy?: Prisma.RefundOrderByWithRelationInput | Prisma.RefundOrderByWithRelationInput[];
    cursor?: Prisma.RefundWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RefundScalarFieldEnum | Prisma.RefundScalarFieldEnum[];
};
export type RefundFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RefundSelect<ExtArgs> | null;
    omit?: Prisma.RefundOmit<ExtArgs> | null;
    where?: Prisma.RefundWhereInput;
    orderBy?: Prisma.RefundOrderByWithRelationInput | Prisma.RefundOrderByWithRelationInput[];
    cursor?: Prisma.RefundWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RefundScalarFieldEnum | Prisma.RefundScalarFieldEnum[];
};
export type RefundFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RefundSelect<ExtArgs> | null;
    omit?: Prisma.RefundOmit<ExtArgs> | null;
    where?: Prisma.RefundWhereInput;
    orderBy?: Prisma.RefundOrderByWithRelationInput | Prisma.RefundOrderByWithRelationInput[];
    cursor?: Prisma.RefundWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RefundScalarFieldEnum | Prisma.RefundScalarFieldEnum[];
};
export type RefundCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RefundSelect<ExtArgs> | null;
    omit?: Prisma.RefundOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RefundCreateInput, Prisma.RefundUncheckedCreateInput>;
};
export type RefundCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.RefundCreateManyInput | Prisma.RefundCreateManyInput[];
    skipDuplicates?: boolean;
};
export type RefundCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RefundSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RefundOmit<ExtArgs> | null;
    data: Prisma.RefundCreateManyInput | Prisma.RefundCreateManyInput[];
    skipDuplicates?: boolean;
};
export type RefundUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RefundSelect<ExtArgs> | null;
    omit?: Prisma.RefundOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RefundUpdateInput, Prisma.RefundUncheckedUpdateInput>;
    where: Prisma.RefundWhereUniqueInput;
};
export type RefundUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.RefundUpdateManyMutationInput, Prisma.RefundUncheckedUpdateManyInput>;
    where?: Prisma.RefundWhereInput;
    limit?: number;
};
export type RefundUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RefundSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RefundOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RefundUpdateManyMutationInput, Prisma.RefundUncheckedUpdateManyInput>;
    where?: Prisma.RefundWhereInput;
    limit?: number;
};
export type RefundUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RefundSelect<ExtArgs> | null;
    omit?: Prisma.RefundOmit<ExtArgs> | null;
    where: Prisma.RefundWhereUniqueInput;
    create: Prisma.XOR<Prisma.RefundCreateInput, Prisma.RefundUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.RefundUpdateInput, Prisma.RefundUncheckedUpdateInput>;
};
export type RefundDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RefundSelect<ExtArgs> | null;
    omit?: Prisma.RefundOmit<ExtArgs> | null;
    where: Prisma.RefundWhereUniqueInput;
};
export type RefundDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RefundWhereInput;
    limit?: number;
};
export type RefundDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RefundSelect<ExtArgs> | null;
    omit?: Prisma.RefundOmit<ExtArgs> | null;
};
