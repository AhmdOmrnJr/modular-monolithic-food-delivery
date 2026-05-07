import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type PaymentAttemptModel = runtime.Types.Result.DefaultSelection<Prisma.$PaymentAttemptPayload>;
export type AggregatePaymentAttempt = {
    _count: PaymentAttemptCountAggregateOutputType | null;
    _min: PaymentAttemptMinAggregateOutputType | null;
    _max: PaymentAttemptMaxAggregateOutputType | null;
};
export type PaymentAttemptMinAggregateOutputType = {
    idempotencyKey: string | null;
    orderId: string | null;
    status: $Enums.PaymentAttemptStatus | null;
    provider: string | null;
    transactionId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type PaymentAttemptMaxAggregateOutputType = {
    idempotencyKey: string | null;
    orderId: string | null;
    status: $Enums.PaymentAttemptStatus | null;
    provider: string | null;
    transactionId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type PaymentAttemptCountAggregateOutputType = {
    idempotencyKey: number;
    orderId: number;
    status: number;
    provider: number;
    transactionId: number;
    responseData: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type PaymentAttemptMinAggregateInputType = {
    idempotencyKey?: true;
    orderId?: true;
    status?: true;
    provider?: true;
    transactionId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type PaymentAttemptMaxAggregateInputType = {
    idempotencyKey?: true;
    orderId?: true;
    status?: true;
    provider?: true;
    transactionId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type PaymentAttemptCountAggregateInputType = {
    idempotencyKey?: true;
    orderId?: true;
    status?: true;
    provider?: true;
    transactionId?: true;
    responseData?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type PaymentAttemptAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PaymentAttemptWhereInput;
    orderBy?: Prisma.PaymentAttemptOrderByWithRelationInput | Prisma.PaymentAttemptOrderByWithRelationInput[];
    cursor?: Prisma.PaymentAttemptWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PaymentAttemptCountAggregateInputType;
    _min?: PaymentAttemptMinAggregateInputType;
    _max?: PaymentAttemptMaxAggregateInputType;
};
export type GetPaymentAttemptAggregateType<T extends PaymentAttemptAggregateArgs> = {
    [P in keyof T & keyof AggregatePaymentAttempt]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePaymentAttempt[P]> : Prisma.GetScalarType<T[P], AggregatePaymentAttempt[P]>;
};
export type PaymentAttemptGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PaymentAttemptWhereInput;
    orderBy?: Prisma.PaymentAttemptOrderByWithAggregationInput | Prisma.PaymentAttemptOrderByWithAggregationInput[];
    by: Prisma.PaymentAttemptScalarFieldEnum[] | Prisma.PaymentAttemptScalarFieldEnum;
    having?: Prisma.PaymentAttemptScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PaymentAttemptCountAggregateInputType | true;
    _min?: PaymentAttemptMinAggregateInputType;
    _max?: PaymentAttemptMaxAggregateInputType;
};
export type PaymentAttemptGroupByOutputType = {
    idempotencyKey: string;
    orderId: string | null;
    status: $Enums.PaymentAttemptStatus;
    provider: string;
    transactionId: string | null;
    responseData: runtime.JsonValue | null;
    createdAt: Date;
    updatedAt: Date;
    _count: PaymentAttemptCountAggregateOutputType | null;
    _min: PaymentAttemptMinAggregateOutputType | null;
    _max: PaymentAttemptMaxAggregateOutputType | null;
};
export type GetPaymentAttemptGroupByPayload<T extends PaymentAttemptGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PaymentAttemptGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PaymentAttemptGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PaymentAttemptGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PaymentAttemptGroupByOutputType[P]>;
}>>;
export type PaymentAttemptWhereInput = {
    AND?: Prisma.PaymentAttemptWhereInput | Prisma.PaymentAttemptWhereInput[];
    OR?: Prisma.PaymentAttemptWhereInput[];
    NOT?: Prisma.PaymentAttemptWhereInput | Prisma.PaymentAttemptWhereInput[];
    idempotencyKey?: Prisma.StringFilter<"PaymentAttempt"> | string;
    orderId?: Prisma.StringNullableFilter<"PaymentAttempt"> | string | null;
    status?: Prisma.EnumPaymentAttemptStatusFilter<"PaymentAttempt"> | $Enums.PaymentAttemptStatus;
    provider?: Prisma.StringFilter<"PaymentAttempt"> | string;
    transactionId?: Prisma.StringNullableFilter<"PaymentAttempt"> | string | null;
    responseData?: Prisma.JsonNullableFilter<"PaymentAttempt">;
    createdAt?: Prisma.DateTimeFilter<"PaymentAttempt"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"PaymentAttempt"> | Date | string;
};
export type PaymentAttemptOrderByWithRelationInput = {
    idempotencyKey?: Prisma.SortOrder;
    orderId?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    provider?: Prisma.SortOrder;
    transactionId?: Prisma.SortOrderInput | Prisma.SortOrder;
    responseData?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PaymentAttemptWhereUniqueInput = Prisma.AtLeast<{
    idempotencyKey?: string;
    AND?: Prisma.PaymentAttemptWhereInput | Prisma.PaymentAttemptWhereInput[];
    OR?: Prisma.PaymentAttemptWhereInput[];
    NOT?: Prisma.PaymentAttemptWhereInput | Prisma.PaymentAttemptWhereInput[];
    orderId?: Prisma.StringNullableFilter<"PaymentAttempt"> | string | null;
    status?: Prisma.EnumPaymentAttemptStatusFilter<"PaymentAttempt"> | $Enums.PaymentAttemptStatus;
    provider?: Prisma.StringFilter<"PaymentAttempt"> | string;
    transactionId?: Prisma.StringNullableFilter<"PaymentAttempt"> | string | null;
    responseData?: Prisma.JsonNullableFilter<"PaymentAttempt">;
    createdAt?: Prisma.DateTimeFilter<"PaymentAttempt"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"PaymentAttempt"> | Date | string;
}, "idempotencyKey">;
export type PaymentAttemptOrderByWithAggregationInput = {
    idempotencyKey?: Prisma.SortOrder;
    orderId?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    provider?: Prisma.SortOrder;
    transactionId?: Prisma.SortOrderInput | Prisma.SortOrder;
    responseData?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.PaymentAttemptCountOrderByAggregateInput;
    _max?: Prisma.PaymentAttemptMaxOrderByAggregateInput;
    _min?: Prisma.PaymentAttemptMinOrderByAggregateInput;
};
export type PaymentAttemptScalarWhereWithAggregatesInput = {
    AND?: Prisma.PaymentAttemptScalarWhereWithAggregatesInput | Prisma.PaymentAttemptScalarWhereWithAggregatesInput[];
    OR?: Prisma.PaymentAttemptScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PaymentAttemptScalarWhereWithAggregatesInput | Prisma.PaymentAttemptScalarWhereWithAggregatesInput[];
    idempotencyKey?: Prisma.StringWithAggregatesFilter<"PaymentAttempt"> | string;
    orderId?: Prisma.StringNullableWithAggregatesFilter<"PaymentAttempt"> | string | null;
    status?: Prisma.EnumPaymentAttemptStatusWithAggregatesFilter<"PaymentAttempt"> | $Enums.PaymentAttemptStatus;
    provider?: Prisma.StringWithAggregatesFilter<"PaymentAttempt"> | string;
    transactionId?: Prisma.StringNullableWithAggregatesFilter<"PaymentAttempt"> | string | null;
    responseData?: Prisma.JsonNullableWithAggregatesFilter<"PaymentAttempt">;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"PaymentAttempt"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"PaymentAttempt"> | Date | string;
};
export type PaymentAttemptCreateInput = {
    idempotencyKey: string;
    orderId?: string | null;
    status: $Enums.PaymentAttemptStatus;
    provider: string;
    transactionId?: string | null;
    responseData?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PaymentAttemptUncheckedCreateInput = {
    idempotencyKey: string;
    orderId?: string | null;
    status: $Enums.PaymentAttemptStatus;
    provider: string;
    transactionId?: string | null;
    responseData?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PaymentAttemptUpdateInput = {
    idempotencyKey?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumPaymentAttemptStatusFieldUpdateOperationsInput | $Enums.PaymentAttemptStatus;
    provider?: Prisma.StringFieldUpdateOperationsInput | string;
    transactionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    responseData?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PaymentAttemptUncheckedUpdateInput = {
    idempotencyKey?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumPaymentAttemptStatusFieldUpdateOperationsInput | $Enums.PaymentAttemptStatus;
    provider?: Prisma.StringFieldUpdateOperationsInput | string;
    transactionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    responseData?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PaymentAttemptCreateManyInput = {
    idempotencyKey: string;
    orderId?: string | null;
    status: $Enums.PaymentAttemptStatus;
    provider: string;
    transactionId?: string | null;
    responseData?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PaymentAttemptUpdateManyMutationInput = {
    idempotencyKey?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumPaymentAttemptStatusFieldUpdateOperationsInput | $Enums.PaymentAttemptStatus;
    provider?: Prisma.StringFieldUpdateOperationsInput | string;
    transactionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    responseData?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PaymentAttemptUncheckedUpdateManyInput = {
    idempotencyKey?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumPaymentAttemptStatusFieldUpdateOperationsInput | $Enums.PaymentAttemptStatus;
    provider?: Prisma.StringFieldUpdateOperationsInput | string;
    transactionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    responseData?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PaymentAttemptCountOrderByAggregateInput = {
    idempotencyKey?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    provider?: Prisma.SortOrder;
    transactionId?: Prisma.SortOrder;
    responseData?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PaymentAttemptMaxOrderByAggregateInput = {
    idempotencyKey?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    provider?: Prisma.SortOrder;
    transactionId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PaymentAttemptMinOrderByAggregateInput = {
    idempotencyKey?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    provider?: Prisma.SortOrder;
    transactionId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type EnumPaymentAttemptStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentAttemptStatus;
};
export type PaymentAttemptSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    idempotencyKey?: boolean;
    orderId?: boolean;
    status?: boolean;
    provider?: boolean;
    transactionId?: boolean;
    responseData?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["paymentAttempt"]>;
export type PaymentAttemptSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    idempotencyKey?: boolean;
    orderId?: boolean;
    status?: boolean;
    provider?: boolean;
    transactionId?: boolean;
    responseData?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["paymentAttempt"]>;
export type PaymentAttemptSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    idempotencyKey?: boolean;
    orderId?: boolean;
    status?: boolean;
    provider?: boolean;
    transactionId?: boolean;
    responseData?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["paymentAttempt"]>;
export type PaymentAttemptSelectScalar = {
    idempotencyKey?: boolean;
    orderId?: boolean;
    status?: boolean;
    provider?: boolean;
    transactionId?: boolean;
    responseData?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type PaymentAttemptOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"idempotencyKey" | "orderId" | "status" | "provider" | "transactionId" | "responseData" | "createdAt" | "updatedAt", ExtArgs["result"]["paymentAttempt"]>;
export type $PaymentAttemptPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PaymentAttempt";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        idempotencyKey: string;
        orderId: string | null;
        status: $Enums.PaymentAttemptStatus;
        provider: string;
        transactionId: string | null;
        responseData: runtime.JsonValue | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["paymentAttempt"]>;
    composites: {};
};
export type PaymentAttemptGetPayload<S extends boolean | null | undefined | PaymentAttemptDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PaymentAttemptPayload, S>;
export type PaymentAttemptCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PaymentAttemptFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PaymentAttemptCountAggregateInputType | true;
};
export interface PaymentAttemptDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['PaymentAttempt'];
        meta: {
            name: 'PaymentAttempt';
        };
    };
    findUnique<T extends PaymentAttemptFindUniqueArgs>(args: Prisma.SelectSubset<T, PaymentAttemptFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PaymentAttemptClient<runtime.Types.Result.GetResult<Prisma.$PaymentAttemptPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PaymentAttemptFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PaymentAttemptFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PaymentAttemptClient<runtime.Types.Result.GetResult<Prisma.$PaymentAttemptPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PaymentAttemptFindFirstArgs>(args?: Prisma.SelectSubset<T, PaymentAttemptFindFirstArgs<ExtArgs>>): Prisma.Prisma__PaymentAttemptClient<runtime.Types.Result.GetResult<Prisma.$PaymentAttemptPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PaymentAttemptFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PaymentAttemptFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PaymentAttemptClient<runtime.Types.Result.GetResult<Prisma.$PaymentAttemptPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PaymentAttemptFindManyArgs>(args?: Prisma.SelectSubset<T, PaymentAttemptFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PaymentAttemptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PaymentAttemptCreateArgs>(args: Prisma.SelectSubset<T, PaymentAttemptCreateArgs<ExtArgs>>): Prisma.Prisma__PaymentAttemptClient<runtime.Types.Result.GetResult<Prisma.$PaymentAttemptPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PaymentAttemptCreateManyArgs>(args?: Prisma.SelectSubset<T, PaymentAttemptCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PaymentAttemptCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PaymentAttemptCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PaymentAttemptPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PaymentAttemptDeleteArgs>(args: Prisma.SelectSubset<T, PaymentAttemptDeleteArgs<ExtArgs>>): Prisma.Prisma__PaymentAttemptClient<runtime.Types.Result.GetResult<Prisma.$PaymentAttemptPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PaymentAttemptUpdateArgs>(args: Prisma.SelectSubset<T, PaymentAttemptUpdateArgs<ExtArgs>>): Prisma.Prisma__PaymentAttemptClient<runtime.Types.Result.GetResult<Prisma.$PaymentAttemptPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PaymentAttemptDeleteManyArgs>(args?: Prisma.SelectSubset<T, PaymentAttemptDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PaymentAttemptUpdateManyArgs>(args: Prisma.SelectSubset<T, PaymentAttemptUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PaymentAttemptUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PaymentAttemptUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PaymentAttemptPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PaymentAttemptUpsertArgs>(args: Prisma.SelectSubset<T, PaymentAttemptUpsertArgs<ExtArgs>>): Prisma.Prisma__PaymentAttemptClient<runtime.Types.Result.GetResult<Prisma.$PaymentAttemptPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PaymentAttemptCountArgs>(args?: Prisma.Subset<T, PaymentAttemptCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PaymentAttemptCountAggregateOutputType> : number>;
    aggregate<T extends PaymentAttemptAggregateArgs>(args: Prisma.Subset<T, PaymentAttemptAggregateArgs>): Prisma.PrismaPromise<GetPaymentAttemptAggregateType<T>>;
    groupBy<T extends PaymentAttemptGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PaymentAttemptGroupByArgs['orderBy'];
    } : {
        orderBy?: PaymentAttemptGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PaymentAttemptGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentAttemptGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PaymentAttemptFieldRefs;
}
export interface Prisma__PaymentAttemptClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PaymentAttemptFieldRefs {
    readonly idempotencyKey: Prisma.FieldRef<"PaymentAttempt", 'String'>;
    readonly orderId: Prisma.FieldRef<"PaymentAttempt", 'String'>;
    readonly status: Prisma.FieldRef<"PaymentAttempt", 'PaymentAttemptStatus'>;
    readonly provider: Prisma.FieldRef<"PaymentAttempt", 'String'>;
    readonly transactionId: Prisma.FieldRef<"PaymentAttempt", 'String'>;
    readonly responseData: Prisma.FieldRef<"PaymentAttempt", 'Json'>;
    readonly createdAt: Prisma.FieldRef<"PaymentAttempt", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"PaymentAttempt", 'DateTime'>;
}
export type PaymentAttemptFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentAttemptSelect<ExtArgs> | null;
    omit?: Prisma.PaymentAttemptOmit<ExtArgs> | null;
    where: Prisma.PaymentAttemptWhereUniqueInput;
};
export type PaymentAttemptFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentAttemptSelect<ExtArgs> | null;
    omit?: Prisma.PaymentAttemptOmit<ExtArgs> | null;
    where: Prisma.PaymentAttemptWhereUniqueInput;
};
export type PaymentAttemptFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentAttemptSelect<ExtArgs> | null;
    omit?: Prisma.PaymentAttemptOmit<ExtArgs> | null;
    where?: Prisma.PaymentAttemptWhereInput;
    orderBy?: Prisma.PaymentAttemptOrderByWithRelationInput | Prisma.PaymentAttemptOrderByWithRelationInput[];
    cursor?: Prisma.PaymentAttemptWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PaymentAttemptScalarFieldEnum | Prisma.PaymentAttemptScalarFieldEnum[];
};
export type PaymentAttemptFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentAttemptSelect<ExtArgs> | null;
    omit?: Prisma.PaymentAttemptOmit<ExtArgs> | null;
    where?: Prisma.PaymentAttemptWhereInput;
    orderBy?: Prisma.PaymentAttemptOrderByWithRelationInput | Prisma.PaymentAttemptOrderByWithRelationInput[];
    cursor?: Prisma.PaymentAttemptWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PaymentAttemptScalarFieldEnum | Prisma.PaymentAttemptScalarFieldEnum[];
};
export type PaymentAttemptFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentAttemptSelect<ExtArgs> | null;
    omit?: Prisma.PaymentAttemptOmit<ExtArgs> | null;
    where?: Prisma.PaymentAttemptWhereInput;
    orderBy?: Prisma.PaymentAttemptOrderByWithRelationInput | Prisma.PaymentAttemptOrderByWithRelationInput[];
    cursor?: Prisma.PaymentAttemptWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PaymentAttemptScalarFieldEnum | Prisma.PaymentAttemptScalarFieldEnum[];
};
export type PaymentAttemptCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentAttemptSelect<ExtArgs> | null;
    omit?: Prisma.PaymentAttemptOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PaymentAttemptCreateInput, Prisma.PaymentAttemptUncheckedCreateInput>;
};
export type PaymentAttemptCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PaymentAttemptCreateManyInput | Prisma.PaymentAttemptCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PaymentAttemptCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentAttemptSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PaymentAttemptOmit<ExtArgs> | null;
    data: Prisma.PaymentAttemptCreateManyInput | Prisma.PaymentAttemptCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PaymentAttemptUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentAttemptSelect<ExtArgs> | null;
    omit?: Prisma.PaymentAttemptOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PaymentAttemptUpdateInput, Prisma.PaymentAttemptUncheckedUpdateInput>;
    where: Prisma.PaymentAttemptWhereUniqueInput;
};
export type PaymentAttemptUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PaymentAttemptUpdateManyMutationInput, Prisma.PaymentAttemptUncheckedUpdateManyInput>;
    where?: Prisma.PaymentAttemptWhereInput;
    limit?: number;
};
export type PaymentAttemptUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentAttemptSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PaymentAttemptOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PaymentAttemptUpdateManyMutationInput, Prisma.PaymentAttemptUncheckedUpdateManyInput>;
    where?: Prisma.PaymentAttemptWhereInput;
    limit?: number;
};
export type PaymentAttemptUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentAttemptSelect<ExtArgs> | null;
    omit?: Prisma.PaymentAttemptOmit<ExtArgs> | null;
    where: Prisma.PaymentAttemptWhereUniqueInput;
    create: Prisma.XOR<Prisma.PaymentAttemptCreateInput, Prisma.PaymentAttemptUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PaymentAttemptUpdateInput, Prisma.PaymentAttemptUncheckedUpdateInput>;
};
export type PaymentAttemptDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentAttemptSelect<ExtArgs> | null;
    omit?: Prisma.PaymentAttemptOmit<ExtArgs> | null;
    where: Prisma.PaymentAttemptWhereUniqueInput;
};
export type PaymentAttemptDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PaymentAttemptWhereInput;
    limit?: number;
};
export type PaymentAttemptDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentAttemptSelect<ExtArgs> | null;
    omit?: Prisma.PaymentAttemptOmit<ExtArgs> | null;
};
