import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type PaymentMethodModel = runtime.Types.Result.DefaultSelection<Prisma.$PaymentMethodPayload>;
export type AggregatePaymentMethod = {
    _count: PaymentMethodCountAggregateOutputType | null;
    _min: PaymentMethodMinAggregateOutputType | null;
    _max: PaymentMethodMaxAggregateOutputType | null;
};
export type PaymentMethodMinAggregateOutputType = {
    paymentMethodId: string | null;
    paymentMethodName: string | null;
    preferredPaymentSettingsId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type PaymentMethodMaxAggregateOutputType = {
    paymentMethodId: string | null;
    paymentMethodName: string | null;
    preferredPaymentSettingsId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type PaymentMethodCountAggregateOutputType = {
    paymentMethodId: number;
    paymentMethodName: number;
    paymentMethodData: number;
    preferredPaymentSettingsId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type PaymentMethodMinAggregateInputType = {
    paymentMethodId?: true;
    paymentMethodName?: true;
    preferredPaymentSettingsId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type PaymentMethodMaxAggregateInputType = {
    paymentMethodId?: true;
    paymentMethodName?: true;
    preferredPaymentSettingsId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type PaymentMethodCountAggregateInputType = {
    paymentMethodId?: true;
    paymentMethodName?: true;
    paymentMethodData?: true;
    preferredPaymentSettingsId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type PaymentMethodAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PaymentMethodWhereInput;
    orderBy?: Prisma.PaymentMethodOrderByWithRelationInput | Prisma.PaymentMethodOrderByWithRelationInput[];
    cursor?: Prisma.PaymentMethodWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PaymentMethodCountAggregateInputType;
    _min?: PaymentMethodMinAggregateInputType;
    _max?: PaymentMethodMaxAggregateInputType;
};
export type GetPaymentMethodAggregateType<T extends PaymentMethodAggregateArgs> = {
    [P in keyof T & keyof AggregatePaymentMethod]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePaymentMethod[P]> : Prisma.GetScalarType<T[P], AggregatePaymentMethod[P]>;
};
export type PaymentMethodGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PaymentMethodWhereInput;
    orderBy?: Prisma.PaymentMethodOrderByWithAggregationInput | Prisma.PaymentMethodOrderByWithAggregationInput[];
    by: Prisma.PaymentMethodScalarFieldEnum[] | Prisma.PaymentMethodScalarFieldEnum;
    having?: Prisma.PaymentMethodScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PaymentMethodCountAggregateInputType | true;
    _min?: PaymentMethodMinAggregateInputType;
    _max?: PaymentMethodMaxAggregateInputType;
};
export type PaymentMethodGroupByOutputType = {
    paymentMethodId: string;
    paymentMethodName: string;
    paymentMethodData: runtime.JsonValue;
    preferredPaymentSettingsId: string;
    createdAt: Date;
    updatedAt: Date;
    _count: PaymentMethodCountAggregateOutputType | null;
    _min: PaymentMethodMinAggregateOutputType | null;
    _max: PaymentMethodMaxAggregateOutputType | null;
};
export type GetPaymentMethodGroupByPayload<T extends PaymentMethodGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PaymentMethodGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PaymentMethodGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PaymentMethodGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PaymentMethodGroupByOutputType[P]>;
}>>;
export type PaymentMethodWhereInput = {
    AND?: Prisma.PaymentMethodWhereInput | Prisma.PaymentMethodWhereInput[];
    OR?: Prisma.PaymentMethodWhereInput[];
    NOT?: Prisma.PaymentMethodWhereInput | Prisma.PaymentMethodWhereInput[];
    paymentMethodId?: Prisma.StringFilter<"PaymentMethod"> | string;
    paymentMethodName?: Prisma.StringFilter<"PaymentMethod"> | string;
    paymentMethodData?: Prisma.JsonFilter<"PaymentMethod">;
    preferredPaymentSettingsId?: Prisma.StringFilter<"PaymentMethod"> | string;
    createdAt?: Prisma.DateTimeFilter<"PaymentMethod"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"PaymentMethod"> | Date | string;
    preferredPaymentSettings?: Prisma.XOR<Prisma.PreferredPaymentSettingsScalarRelationFilter, Prisma.PreferredPaymentSettingsWhereInput>;
};
export type PaymentMethodOrderByWithRelationInput = {
    paymentMethodId?: Prisma.SortOrder;
    paymentMethodName?: Prisma.SortOrder;
    paymentMethodData?: Prisma.SortOrder;
    preferredPaymentSettingsId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    preferredPaymentSettings?: Prisma.PreferredPaymentSettingsOrderByWithRelationInput;
};
export type PaymentMethodWhereUniqueInput = Prisma.AtLeast<{
    paymentMethodId?: string;
    AND?: Prisma.PaymentMethodWhereInput | Prisma.PaymentMethodWhereInput[];
    OR?: Prisma.PaymentMethodWhereInput[];
    NOT?: Prisma.PaymentMethodWhereInput | Prisma.PaymentMethodWhereInput[];
    paymentMethodName?: Prisma.StringFilter<"PaymentMethod"> | string;
    paymentMethodData?: Prisma.JsonFilter<"PaymentMethod">;
    preferredPaymentSettingsId?: Prisma.StringFilter<"PaymentMethod"> | string;
    createdAt?: Prisma.DateTimeFilter<"PaymentMethod"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"PaymentMethod"> | Date | string;
    preferredPaymentSettings?: Prisma.XOR<Prisma.PreferredPaymentSettingsScalarRelationFilter, Prisma.PreferredPaymentSettingsWhereInput>;
}, "paymentMethodId">;
export type PaymentMethodOrderByWithAggregationInput = {
    paymentMethodId?: Prisma.SortOrder;
    paymentMethodName?: Prisma.SortOrder;
    paymentMethodData?: Prisma.SortOrder;
    preferredPaymentSettingsId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.PaymentMethodCountOrderByAggregateInput;
    _max?: Prisma.PaymentMethodMaxOrderByAggregateInput;
    _min?: Prisma.PaymentMethodMinOrderByAggregateInput;
};
export type PaymentMethodScalarWhereWithAggregatesInput = {
    AND?: Prisma.PaymentMethodScalarWhereWithAggregatesInput | Prisma.PaymentMethodScalarWhereWithAggregatesInput[];
    OR?: Prisma.PaymentMethodScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PaymentMethodScalarWhereWithAggregatesInput | Prisma.PaymentMethodScalarWhereWithAggregatesInput[];
    paymentMethodId?: Prisma.StringWithAggregatesFilter<"PaymentMethod"> | string;
    paymentMethodName?: Prisma.StringWithAggregatesFilter<"PaymentMethod"> | string;
    paymentMethodData?: Prisma.JsonWithAggregatesFilter<"PaymentMethod">;
    preferredPaymentSettingsId?: Prisma.StringWithAggregatesFilter<"PaymentMethod"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"PaymentMethod"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"PaymentMethod"> | Date | string;
};
export type PaymentMethodCreateInput = {
    paymentMethodId?: string;
    paymentMethodName: string;
    paymentMethodData: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    preferredPaymentSettings: Prisma.PreferredPaymentSettingsCreateNestedOneWithoutPaymentMethodsInput;
};
export type PaymentMethodUncheckedCreateInput = {
    paymentMethodId?: string;
    paymentMethodName: string;
    paymentMethodData: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    preferredPaymentSettingsId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PaymentMethodUpdateInput = {
    paymentMethodId?: Prisma.StringFieldUpdateOperationsInput | string;
    paymentMethodName?: Prisma.StringFieldUpdateOperationsInput | string;
    paymentMethodData?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    preferredPaymentSettings?: Prisma.PreferredPaymentSettingsUpdateOneRequiredWithoutPaymentMethodsNestedInput;
};
export type PaymentMethodUncheckedUpdateInput = {
    paymentMethodId?: Prisma.StringFieldUpdateOperationsInput | string;
    paymentMethodName?: Prisma.StringFieldUpdateOperationsInput | string;
    paymentMethodData?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    preferredPaymentSettingsId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PaymentMethodCreateManyInput = {
    paymentMethodId?: string;
    paymentMethodName: string;
    paymentMethodData: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    preferredPaymentSettingsId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PaymentMethodUpdateManyMutationInput = {
    paymentMethodId?: Prisma.StringFieldUpdateOperationsInput | string;
    paymentMethodName?: Prisma.StringFieldUpdateOperationsInput | string;
    paymentMethodData?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PaymentMethodUncheckedUpdateManyInput = {
    paymentMethodId?: Prisma.StringFieldUpdateOperationsInput | string;
    paymentMethodName?: Prisma.StringFieldUpdateOperationsInput | string;
    paymentMethodData?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    preferredPaymentSettingsId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PaymentMethodListRelationFilter = {
    every?: Prisma.PaymentMethodWhereInput;
    some?: Prisma.PaymentMethodWhereInput;
    none?: Prisma.PaymentMethodWhereInput;
};
export type PaymentMethodOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PaymentMethodCountOrderByAggregateInput = {
    paymentMethodId?: Prisma.SortOrder;
    paymentMethodName?: Prisma.SortOrder;
    paymentMethodData?: Prisma.SortOrder;
    preferredPaymentSettingsId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PaymentMethodMaxOrderByAggregateInput = {
    paymentMethodId?: Prisma.SortOrder;
    paymentMethodName?: Prisma.SortOrder;
    preferredPaymentSettingsId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PaymentMethodMinOrderByAggregateInput = {
    paymentMethodId?: Prisma.SortOrder;
    paymentMethodName?: Prisma.SortOrder;
    preferredPaymentSettingsId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PaymentMethodCreateNestedManyWithoutPreferredPaymentSettingsInput = {
    create?: Prisma.XOR<Prisma.PaymentMethodCreateWithoutPreferredPaymentSettingsInput, Prisma.PaymentMethodUncheckedCreateWithoutPreferredPaymentSettingsInput> | Prisma.PaymentMethodCreateWithoutPreferredPaymentSettingsInput[] | Prisma.PaymentMethodUncheckedCreateWithoutPreferredPaymentSettingsInput[];
    connectOrCreate?: Prisma.PaymentMethodCreateOrConnectWithoutPreferredPaymentSettingsInput | Prisma.PaymentMethodCreateOrConnectWithoutPreferredPaymentSettingsInput[];
    createMany?: Prisma.PaymentMethodCreateManyPreferredPaymentSettingsInputEnvelope;
    connect?: Prisma.PaymentMethodWhereUniqueInput | Prisma.PaymentMethodWhereUniqueInput[];
};
export type PaymentMethodUncheckedCreateNestedManyWithoutPreferredPaymentSettingsInput = {
    create?: Prisma.XOR<Prisma.PaymentMethodCreateWithoutPreferredPaymentSettingsInput, Prisma.PaymentMethodUncheckedCreateWithoutPreferredPaymentSettingsInput> | Prisma.PaymentMethodCreateWithoutPreferredPaymentSettingsInput[] | Prisma.PaymentMethodUncheckedCreateWithoutPreferredPaymentSettingsInput[];
    connectOrCreate?: Prisma.PaymentMethodCreateOrConnectWithoutPreferredPaymentSettingsInput | Prisma.PaymentMethodCreateOrConnectWithoutPreferredPaymentSettingsInput[];
    createMany?: Prisma.PaymentMethodCreateManyPreferredPaymentSettingsInputEnvelope;
    connect?: Prisma.PaymentMethodWhereUniqueInput | Prisma.PaymentMethodWhereUniqueInput[];
};
export type PaymentMethodUpdateManyWithoutPreferredPaymentSettingsNestedInput = {
    create?: Prisma.XOR<Prisma.PaymentMethodCreateWithoutPreferredPaymentSettingsInput, Prisma.PaymentMethodUncheckedCreateWithoutPreferredPaymentSettingsInput> | Prisma.PaymentMethodCreateWithoutPreferredPaymentSettingsInput[] | Prisma.PaymentMethodUncheckedCreateWithoutPreferredPaymentSettingsInput[];
    connectOrCreate?: Prisma.PaymentMethodCreateOrConnectWithoutPreferredPaymentSettingsInput | Prisma.PaymentMethodCreateOrConnectWithoutPreferredPaymentSettingsInput[];
    upsert?: Prisma.PaymentMethodUpsertWithWhereUniqueWithoutPreferredPaymentSettingsInput | Prisma.PaymentMethodUpsertWithWhereUniqueWithoutPreferredPaymentSettingsInput[];
    createMany?: Prisma.PaymentMethodCreateManyPreferredPaymentSettingsInputEnvelope;
    set?: Prisma.PaymentMethodWhereUniqueInput | Prisma.PaymentMethodWhereUniqueInput[];
    disconnect?: Prisma.PaymentMethodWhereUniqueInput | Prisma.PaymentMethodWhereUniqueInput[];
    delete?: Prisma.PaymentMethodWhereUniqueInput | Prisma.PaymentMethodWhereUniqueInput[];
    connect?: Prisma.PaymentMethodWhereUniqueInput | Prisma.PaymentMethodWhereUniqueInput[];
    update?: Prisma.PaymentMethodUpdateWithWhereUniqueWithoutPreferredPaymentSettingsInput | Prisma.PaymentMethodUpdateWithWhereUniqueWithoutPreferredPaymentSettingsInput[];
    updateMany?: Prisma.PaymentMethodUpdateManyWithWhereWithoutPreferredPaymentSettingsInput | Prisma.PaymentMethodUpdateManyWithWhereWithoutPreferredPaymentSettingsInput[];
    deleteMany?: Prisma.PaymentMethodScalarWhereInput | Prisma.PaymentMethodScalarWhereInput[];
};
export type PaymentMethodUncheckedUpdateManyWithoutPreferredPaymentSettingsNestedInput = {
    create?: Prisma.XOR<Prisma.PaymentMethodCreateWithoutPreferredPaymentSettingsInput, Prisma.PaymentMethodUncheckedCreateWithoutPreferredPaymentSettingsInput> | Prisma.PaymentMethodCreateWithoutPreferredPaymentSettingsInput[] | Prisma.PaymentMethodUncheckedCreateWithoutPreferredPaymentSettingsInput[];
    connectOrCreate?: Prisma.PaymentMethodCreateOrConnectWithoutPreferredPaymentSettingsInput | Prisma.PaymentMethodCreateOrConnectWithoutPreferredPaymentSettingsInput[];
    upsert?: Prisma.PaymentMethodUpsertWithWhereUniqueWithoutPreferredPaymentSettingsInput | Prisma.PaymentMethodUpsertWithWhereUniqueWithoutPreferredPaymentSettingsInput[];
    createMany?: Prisma.PaymentMethodCreateManyPreferredPaymentSettingsInputEnvelope;
    set?: Prisma.PaymentMethodWhereUniqueInput | Prisma.PaymentMethodWhereUniqueInput[];
    disconnect?: Prisma.PaymentMethodWhereUniqueInput | Prisma.PaymentMethodWhereUniqueInput[];
    delete?: Prisma.PaymentMethodWhereUniqueInput | Prisma.PaymentMethodWhereUniqueInput[];
    connect?: Prisma.PaymentMethodWhereUniqueInput | Prisma.PaymentMethodWhereUniqueInput[];
    update?: Prisma.PaymentMethodUpdateWithWhereUniqueWithoutPreferredPaymentSettingsInput | Prisma.PaymentMethodUpdateWithWhereUniqueWithoutPreferredPaymentSettingsInput[];
    updateMany?: Prisma.PaymentMethodUpdateManyWithWhereWithoutPreferredPaymentSettingsInput | Prisma.PaymentMethodUpdateManyWithWhereWithoutPreferredPaymentSettingsInput[];
    deleteMany?: Prisma.PaymentMethodScalarWhereInput | Prisma.PaymentMethodScalarWhereInput[];
};
export type PaymentMethodCreateWithoutPreferredPaymentSettingsInput = {
    paymentMethodId?: string;
    paymentMethodName: string;
    paymentMethodData: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PaymentMethodUncheckedCreateWithoutPreferredPaymentSettingsInput = {
    paymentMethodId?: string;
    paymentMethodName: string;
    paymentMethodData: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PaymentMethodCreateOrConnectWithoutPreferredPaymentSettingsInput = {
    where: Prisma.PaymentMethodWhereUniqueInput;
    create: Prisma.XOR<Prisma.PaymentMethodCreateWithoutPreferredPaymentSettingsInput, Prisma.PaymentMethodUncheckedCreateWithoutPreferredPaymentSettingsInput>;
};
export type PaymentMethodCreateManyPreferredPaymentSettingsInputEnvelope = {
    data: Prisma.PaymentMethodCreateManyPreferredPaymentSettingsInput | Prisma.PaymentMethodCreateManyPreferredPaymentSettingsInput[];
    skipDuplicates?: boolean;
};
export type PaymentMethodUpsertWithWhereUniqueWithoutPreferredPaymentSettingsInput = {
    where: Prisma.PaymentMethodWhereUniqueInput;
    update: Prisma.XOR<Prisma.PaymentMethodUpdateWithoutPreferredPaymentSettingsInput, Prisma.PaymentMethodUncheckedUpdateWithoutPreferredPaymentSettingsInput>;
    create: Prisma.XOR<Prisma.PaymentMethodCreateWithoutPreferredPaymentSettingsInput, Prisma.PaymentMethodUncheckedCreateWithoutPreferredPaymentSettingsInput>;
};
export type PaymentMethodUpdateWithWhereUniqueWithoutPreferredPaymentSettingsInput = {
    where: Prisma.PaymentMethodWhereUniqueInput;
    data: Prisma.XOR<Prisma.PaymentMethodUpdateWithoutPreferredPaymentSettingsInput, Prisma.PaymentMethodUncheckedUpdateWithoutPreferredPaymentSettingsInput>;
};
export type PaymentMethodUpdateManyWithWhereWithoutPreferredPaymentSettingsInput = {
    where: Prisma.PaymentMethodScalarWhereInput;
    data: Prisma.XOR<Prisma.PaymentMethodUpdateManyMutationInput, Prisma.PaymentMethodUncheckedUpdateManyWithoutPreferredPaymentSettingsInput>;
};
export type PaymentMethodScalarWhereInput = {
    AND?: Prisma.PaymentMethodScalarWhereInput | Prisma.PaymentMethodScalarWhereInput[];
    OR?: Prisma.PaymentMethodScalarWhereInput[];
    NOT?: Prisma.PaymentMethodScalarWhereInput | Prisma.PaymentMethodScalarWhereInput[];
    paymentMethodId?: Prisma.StringFilter<"PaymentMethod"> | string;
    paymentMethodName?: Prisma.StringFilter<"PaymentMethod"> | string;
    paymentMethodData?: Prisma.JsonFilter<"PaymentMethod">;
    preferredPaymentSettingsId?: Prisma.StringFilter<"PaymentMethod"> | string;
    createdAt?: Prisma.DateTimeFilter<"PaymentMethod"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"PaymentMethod"> | Date | string;
};
export type PaymentMethodCreateManyPreferredPaymentSettingsInput = {
    paymentMethodId?: string;
    paymentMethodName: string;
    paymentMethodData: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PaymentMethodUpdateWithoutPreferredPaymentSettingsInput = {
    paymentMethodId?: Prisma.StringFieldUpdateOperationsInput | string;
    paymentMethodName?: Prisma.StringFieldUpdateOperationsInput | string;
    paymentMethodData?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PaymentMethodUncheckedUpdateWithoutPreferredPaymentSettingsInput = {
    paymentMethodId?: Prisma.StringFieldUpdateOperationsInput | string;
    paymentMethodName?: Prisma.StringFieldUpdateOperationsInput | string;
    paymentMethodData?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PaymentMethodUncheckedUpdateManyWithoutPreferredPaymentSettingsInput = {
    paymentMethodId?: Prisma.StringFieldUpdateOperationsInput | string;
    paymentMethodName?: Prisma.StringFieldUpdateOperationsInput | string;
    paymentMethodData?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PaymentMethodSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    paymentMethodId?: boolean;
    paymentMethodName?: boolean;
    paymentMethodData?: boolean;
    preferredPaymentSettingsId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    preferredPaymentSettings?: boolean | Prisma.PreferredPaymentSettingsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["paymentMethod"]>;
export type PaymentMethodSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    paymentMethodId?: boolean;
    paymentMethodName?: boolean;
    paymentMethodData?: boolean;
    preferredPaymentSettingsId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    preferredPaymentSettings?: boolean | Prisma.PreferredPaymentSettingsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["paymentMethod"]>;
export type PaymentMethodSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    paymentMethodId?: boolean;
    paymentMethodName?: boolean;
    paymentMethodData?: boolean;
    preferredPaymentSettingsId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    preferredPaymentSettings?: boolean | Prisma.PreferredPaymentSettingsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["paymentMethod"]>;
export type PaymentMethodSelectScalar = {
    paymentMethodId?: boolean;
    paymentMethodName?: boolean;
    paymentMethodData?: boolean;
    preferredPaymentSettingsId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type PaymentMethodOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"paymentMethodId" | "paymentMethodName" | "paymentMethodData" | "preferredPaymentSettingsId" | "createdAt" | "updatedAt", ExtArgs["result"]["paymentMethod"]>;
export type PaymentMethodInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    preferredPaymentSettings?: boolean | Prisma.PreferredPaymentSettingsDefaultArgs<ExtArgs>;
};
export type PaymentMethodIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    preferredPaymentSettings?: boolean | Prisma.PreferredPaymentSettingsDefaultArgs<ExtArgs>;
};
export type PaymentMethodIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    preferredPaymentSettings?: boolean | Prisma.PreferredPaymentSettingsDefaultArgs<ExtArgs>;
};
export type $PaymentMethodPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PaymentMethod";
    objects: {
        preferredPaymentSettings: Prisma.$PreferredPaymentSettingsPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        paymentMethodId: string;
        paymentMethodName: string;
        paymentMethodData: runtime.JsonValue;
        preferredPaymentSettingsId: string;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["paymentMethod"]>;
    composites: {};
};
export type PaymentMethodGetPayload<S extends boolean | null | undefined | PaymentMethodDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PaymentMethodPayload, S>;
export type PaymentMethodCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PaymentMethodFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PaymentMethodCountAggregateInputType | true;
};
export interface PaymentMethodDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['PaymentMethod'];
        meta: {
            name: 'PaymentMethod';
        };
    };
    findUnique<T extends PaymentMethodFindUniqueArgs>(args: Prisma.SelectSubset<T, PaymentMethodFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PaymentMethodClient<runtime.Types.Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PaymentMethodFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PaymentMethodFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PaymentMethodClient<runtime.Types.Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PaymentMethodFindFirstArgs>(args?: Prisma.SelectSubset<T, PaymentMethodFindFirstArgs<ExtArgs>>): Prisma.Prisma__PaymentMethodClient<runtime.Types.Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PaymentMethodFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PaymentMethodFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PaymentMethodClient<runtime.Types.Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PaymentMethodFindManyArgs>(args?: Prisma.SelectSubset<T, PaymentMethodFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PaymentMethodCreateArgs>(args: Prisma.SelectSubset<T, PaymentMethodCreateArgs<ExtArgs>>): Prisma.Prisma__PaymentMethodClient<runtime.Types.Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PaymentMethodCreateManyArgs>(args?: Prisma.SelectSubset<T, PaymentMethodCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PaymentMethodCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PaymentMethodCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PaymentMethodDeleteArgs>(args: Prisma.SelectSubset<T, PaymentMethodDeleteArgs<ExtArgs>>): Prisma.Prisma__PaymentMethodClient<runtime.Types.Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PaymentMethodUpdateArgs>(args: Prisma.SelectSubset<T, PaymentMethodUpdateArgs<ExtArgs>>): Prisma.Prisma__PaymentMethodClient<runtime.Types.Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PaymentMethodDeleteManyArgs>(args?: Prisma.SelectSubset<T, PaymentMethodDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PaymentMethodUpdateManyArgs>(args: Prisma.SelectSubset<T, PaymentMethodUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PaymentMethodUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PaymentMethodUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PaymentMethodUpsertArgs>(args: Prisma.SelectSubset<T, PaymentMethodUpsertArgs<ExtArgs>>): Prisma.Prisma__PaymentMethodClient<runtime.Types.Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PaymentMethodCountArgs>(args?: Prisma.Subset<T, PaymentMethodCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PaymentMethodCountAggregateOutputType> : number>;
    aggregate<T extends PaymentMethodAggregateArgs>(args: Prisma.Subset<T, PaymentMethodAggregateArgs>): Prisma.PrismaPromise<GetPaymentMethodAggregateType<T>>;
    groupBy<T extends PaymentMethodGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PaymentMethodGroupByArgs['orderBy'];
    } : {
        orderBy?: PaymentMethodGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PaymentMethodGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentMethodGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PaymentMethodFieldRefs;
}
export interface Prisma__PaymentMethodClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    preferredPaymentSettings<T extends Prisma.PreferredPaymentSettingsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PreferredPaymentSettingsDefaultArgs<ExtArgs>>): Prisma.Prisma__PreferredPaymentSettingsClient<runtime.Types.Result.GetResult<Prisma.$PreferredPaymentSettingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PaymentMethodFieldRefs {
    readonly paymentMethodId: Prisma.FieldRef<"PaymentMethod", 'String'>;
    readonly paymentMethodName: Prisma.FieldRef<"PaymentMethod", 'String'>;
    readonly paymentMethodData: Prisma.FieldRef<"PaymentMethod", 'Json'>;
    readonly preferredPaymentSettingsId: Prisma.FieldRef<"PaymentMethod", 'String'>;
    readonly createdAt: Prisma.FieldRef<"PaymentMethod", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"PaymentMethod", 'DateTime'>;
}
export type PaymentMethodFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentMethodSelect<ExtArgs> | null;
    omit?: Prisma.PaymentMethodOmit<ExtArgs> | null;
    include?: Prisma.PaymentMethodInclude<ExtArgs> | null;
    where: Prisma.PaymentMethodWhereUniqueInput;
};
export type PaymentMethodFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentMethodSelect<ExtArgs> | null;
    omit?: Prisma.PaymentMethodOmit<ExtArgs> | null;
    include?: Prisma.PaymentMethodInclude<ExtArgs> | null;
    where: Prisma.PaymentMethodWhereUniqueInput;
};
export type PaymentMethodFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentMethodSelect<ExtArgs> | null;
    omit?: Prisma.PaymentMethodOmit<ExtArgs> | null;
    include?: Prisma.PaymentMethodInclude<ExtArgs> | null;
    where?: Prisma.PaymentMethodWhereInput;
    orderBy?: Prisma.PaymentMethodOrderByWithRelationInput | Prisma.PaymentMethodOrderByWithRelationInput[];
    cursor?: Prisma.PaymentMethodWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PaymentMethodScalarFieldEnum | Prisma.PaymentMethodScalarFieldEnum[];
};
export type PaymentMethodFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentMethodSelect<ExtArgs> | null;
    omit?: Prisma.PaymentMethodOmit<ExtArgs> | null;
    include?: Prisma.PaymentMethodInclude<ExtArgs> | null;
    where?: Prisma.PaymentMethodWhereInput;
    orderBy?: Prisma.PaymentMethodOrderByWithRelationInput | Prisma.PaymentMethodOrderByWithRelationInput[];
    cursor?: Prisma.PaymentMethodWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PaymentMethodScalarFieldEnum | Prisma.PaymentMethodScalarFieldEnum[];
};
export type PaymentMethodFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentMethodSelect<ExtArgs> | null;
    omit?: Prisma.PaymentMethodOmit<ExtArgs> | null;
    include?: Prisma.PaymentMethodInclude<ExtArgs> | null;
    where?: Prisma.PaymentMethodWhereInput;
    orderBy?: Prisma.PaymentMethodOrderByWithRelationInput | Prisma.PaymentMethodOrderByWithRelationInput[];
    cursor?: Prisma.PaymentMethodWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PaymentMethodScalarFieldEnum | Prisma.PaymentMethodScalarFieldEnum[];
};
export type PaymentMethodCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentMethodSelect<ExtArgs> | null;
    omit?: Prisma.PaymentMethodOmit<ExtArgs> | null;
    include?: Prisma.PaymentMethodInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PaymentMethodCreateInput, Prisma.PaymentMethodUncheckedCreateInput>;
};
export type PaymentMethodCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PaymentMethodCreateManyInput | Prisma.PaymentMethodCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PaymentMethodCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentMethodSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PaymentMethodOmit<ExtArgs> | null;
    data: Prisma.PaymentMethodCreateManyInput | Prisma.PaymentMethodCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.PaymentMethodIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type PaymentMethodUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentMethodSelect<ExtArgs> | null;
    omit?: Prisma.PaymentMethodOmit<ExtArgs> | null;
    include?: Prisma.PaymentMethodInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PaymentMethodUpdateInput, Prisma.PaymentMethodUncheckedUpdateInput>;
    where: Prisma.PaymentMethodWhereUniqueInput;
};
export type PaymentMethodUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PaymentMethodUpdateManyMutationInput, Prisma.PaymentMethodUncheckedUpdateManyInput>;
    where?: Prisma.PaymentMethodWhereInput;
    limit?: number;
};
export type PaymentMethodUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentMethodSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PaymentMethodOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PaymentMethodUpdateManyMutationInput, Prisma.PaymentMethodUncheckedUpdateManyInput>;
    where?: Prisma.PaymentMethodWhereInput;
    limit?: number;
    include?: Prisma.PaymentMethodIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type PaymentMethodUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentMethodSelect<ExtArgs> | null;
    omit?: Prisma.PaymentMethodOmit<ExtArgs> | null;
    include?: Prisma.PaymentMethodInclude<ExtArgs> | null;
    where: Prisma.PaymentMethodWhereUniqueInput;
    create: Prisma.XOR<Prisma.PaymentMethodCreateInput, Prisma.PaymentMethodUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PaymentMethodUpdateInput, Prisma.PaymentMethodUncheckedUpdateInput>;
};
export type PaymentMethodDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentMethodSelect<ExtArgs> | null;
    omit?: Prisma.PaymentMethodOmit<ExtArgs> | null;
    include?: Prisma.PaymentMethodInclude<ExtArgs> | null;
    where: Prisma.PaymentMethodWhereUniqueInput;
};
export type PaymentMethodDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PaymentMethodWhereInput;
    limit?: number;
};
export type PaymentMethodDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentMethodSelect<ExtArgs> | null;
    omit?: Prisma.PaymentMethodOmit<ExtArgs> | null;
    include?: Prisma.PaymentMethodInclude<ExtArgs> | null;
};
