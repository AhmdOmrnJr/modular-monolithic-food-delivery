import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type PreferredPaymentSettingsModel = runtime.Types.Result.DefaultSelection<Prisma.$PreferredPaymentSettingsPayload>;
export type AggregatePreferredPaymentSettings = {
    _count: PreferredPaymentSettingsCountAggregateOutputType | null;
    _min: PreferredPaymentSettingsMinAggregateOutputType | null;
    _max: PreferredPaymentSettingsMaxAggregateOutputType | null;
};
export type PreferredPaymentSettingsMinAggregateOutputType = {
    preferredPaymentSettingsId: string | null;
    customerId: string | null;
    paymentMethodId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type PreferredPaymentSettingsMaxAggregateOutputType = {
    preferredPaymentSettingsId: string | null;
    customerId: string | null;
    paymentMethodId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type PreferredPaymentSettingsCountAggregateOutputType = {
    preferredPaymentSettingsId: number;
    customerId: number;
    paymentMethodId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type PreferredPaymentSettingsMinAggregateInputType = {
    preferredPaymentSettingsId?: true;
    customerId?: true;
    paymentMethodId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type PreferredPaymentSettingsMaxAggregateInputType = {
    preferredPaymentSettingsId?: true;
    customerId?: true;
    paymentMethodId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type PreferredPaymentSettingsCountAggregateInputType = {
    preferredPaymentSettingsId?: true;
    customerId?: true;
    paymentMethodId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type PreferredPaymentSettingsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PreferredPaymentSettingsWhereInput;
    orderBy?: Prisma.PreferredPaymentSettingsOrderByWithRelationInput | Prisma.PreferredPaymentSettingsOrderByWithRelationInput[];
    cursor?: Prisma.PreferredPaymentSettingsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PreferredPaymentSettingsCountAggregateInputType;
    _min?: PreferredPaymentSettingsMinAggregateInputType;
    _max?: PreferredPaymentSettingsMaxAggregateInputType;
};
export type GetPreferredPaymentSettingsAggregateType<T extends PreferredPaymentSettingsAggregateArgs> = {
    [P in keyof T & keyof AggregatePreferredPaymentSettings]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePreferredPaymentSettings[P]> : Prisma.GetScalarType<T[P], AggregatePreferredPaymentSettings[P]>;
};
export type PreferredPaymentSettingsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PreferredPaymentSettingsWhereInput;
    orderBy?: Prisma.PreferredPaymentSettingsOrderByWithAggregationInput | Prisma.PreferredPaymentSettingsOrderByWithAggregationInput[];
    by: Prisma.PreferredPaymentSettingsScalarFieldEnum[] | Prisma.PreferredPaymentSettingsScalarFieldEnum;
    having?: Prisma.PreferredPaymentSettingsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PreferredPaymentSettingsCountAggregateInputType | true;
    _min?: PreferredPaymentSettingsMinAggregateInputType;
    _max?: PreferredPaymentSettingsMaxAggregateInputType;
};
export type PreferredPaymentSettingsGroupByOutputType = {
    preferredPaymentSettingsId: string;
    customerId: string;
    paymentMethodId: string;
    createdAt: Date;
    updatedAt: Date;
    _count: PreferredPaymentSettingsCountAggregateOutputType | null;
    _min: PreferredPaymentSettingsMinAggregateOutputType | null;
    _max: PreferredPaymentSettingsMaxAggregateOutputType | null;
};
export type GetPreferredPaymentSettingsGroupByPayload<T extends PreferredPaymentSettingsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PreferredPaymentSettingsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PreferredPaymentSettingsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PreferredPaymentSettingsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PreferredPaymentSettingsGroupByOutputType[P]>;
}>>;
export type PreferredPaymentSettingsWhereInput = {
    AND?: Prisma.PreferredPaymentSettingsWhereInput | Prisma.PreferredPaymentSettingsWhereInput[];
    OR?: Prisma.PreferredPaymentSettingsWhereInput[];
    NOT?: Prisma.PreferredPaymentSettingsWhereInput | Prisma.PreferredPaymentSettingsWhereInput[];
    preferredPaymentSettingsId?: Prisma.StringFilter<"PreferredPaymentSettings"> | string;
    customerId?: Prisma.StringFilter<"PreferredPaymentSettings"> | string;
    paymentMethodId?: Prisma.StringFilter<"PreferredPaymentSettings"> | string;
    createdAt?: Prisma.DateTimeFilter<"PreferredPaymentSettings"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"PreferredPaymentSettings"> | Date | string;
    paymentMethods?: Prisma.PaymentMethodListRelationFilter;
    customer?: Prisma.XOR<Prisma.CustomerScalarRelationFilter, Prisma.CustomerWhereInput>;
};
export type PreferredPaymentSettingsOrderByWithRelationInput = {
    preferredPaymentSettingsId?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    paymentMethodId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    paymentMethods?: Prisma.PaymentMethodOrderByRelationAggregateInput;
    customer?: Prisma.CustomerOrderByWithRelationInput;
};
export type PreferredPaymentSettingsWhereUniqueInput = Prisma.AtLeast<{
    preferredPaymentSettingsId?: string;
    customerId?: string;
    AND?: Prisma.PreferredPaymentSettingsWhereInput | Prisma.PreferredPaymentSettingsWhereInput[];
    OR?: Prisma.PreferredPaymentSettingsWhereInput[];
    NOT?: Prisma.PreferredPaymentSettingsWhereInput | Prisma.PreferredPaymentSettingsWhereInput[];
    paymentMethodId?: Prisma.StringFilter<"PreferredPaymentSettings"> | string;
    createdAt?: Prisma.DateTimeFilter<"PreferredPaymentSettings"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"PreferredPaymentSettings"> | Date | string;
    paymentMethods?: Prisma.PaymentMethodListRelationFilter;
    customer?: Prisma.XOR<Prisma.CustomerScalarRelationFilter, Prisma.CustomerWhereInput>;
}, "preferredPaymentSettingsId" | "customerId">;
export type PreferredPaymentSettingsOrderByWithAggregationInput = {
    preferredPaymentSettingsId?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    paymentMethodId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.PreferredPaymentSettingsCountOrderByAggregateInput;
    _max?: Prisma.PreferredPaymentSettingsMaxOrderByAggregateInput;
    _min?: Prisma.PreferredPaymentSettingsMinOrderByAggregateInput;
};
export type PreferredPaymentSettingsScalarWhereWithAggregatesInput = {
    AND?: Prisma.PreferredPaymentSettingsScalarWhereWithAggregatesInput | Prisma.PreferredPaymentSettingsScalarWhereWithAggregatesInput[];
    OR?: Prisma.PreferredPaymentSettingsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PreferredPaymentSettingsScalarWhereWithAggregatesInput | Prisma.PreferredPaymentSettingsScalarWhereWithAggregatesInput[];
    preferredPaymentSettingsId?: Prisma.StringWithAggregatesFilter<"PreferredPaymentSettings"> | string;
    customerId?: Prisma.StringWithAggregatesFilter<"PreferredPaymentSettings"> | string;
    paymentMethodId?: Prisma.StringWithAggregatesFilter<"PreferredPaymentSettings"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"PreferredPaymentSettings"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"PreferredPaymentSettings"> | Date | string;
};
export type PreferredPaymentSettingsCreateInput = {
    preferredPaymentSettingsId?: string;
    paymentMethodId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    paymentMethods?: Prisma.PaymentMethodCreateNestedManyWithoutPreferredPaymentSettingsInput;
    customer: Prisma.CustomerCreateNestedOneWithoutPreferredPaymentSettingsInput;
};
export type PreferredPaymentSettingsUncheckedCreateInput = {
    preferredPaymentSettingsId?: string;
    customerId: string;
    paymentMethodId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    paymentMethods?: Prisma.PaymentMethodUncheckedCreateNestedManyWithoutPreferredPaymentSettingsInput;
};
export type PreferredPaymentSettingsUpdateInput = {
    preferredPaymentSettingsId?: Prisma.StringFieldUpdateOperationsInput | string;
    paymentMethodId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    paymentMethods?: Prisma.PaymentMethodUpdateManyWithoutPreferredPaymentSettingsNestedInput;
    customer?: Prisma.CustomerUpdateOneRequiredWithoutPreferredPaymentSettingsNestedInput;
};
export type PreferredPaymentSettingsUncheckedUpdateInput = {
    preferredPaymentSettingsId?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    paymentMethodId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    paymentMethods?: Prisma.PaymentMethodUncheckedUpdateManyWithoutPreferredPaymentSettingsNestedInput;
};
export type PreferredPaymentSettingsCreateManyInput = {
    preferredPaymentSettingsId?: string;
    customerId: string;
    paymentMethodId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PreferredPaymentSettingsUpdateManyMutationInput = {
    preferredPaymentSettingsId?: Prisma.StringFieldUpdateOperationsInput | string;
    paymentMethodId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PreferredPaymentSettingsUncheckedUpdateManyInput = {
    preferredPaymentSettingsId?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    paymentMethodId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PreferredPaymentSettingsNullableScalarRelationFilter = {
    is?: Prisma.PreferredPaymentSettingsWhereInput | null;
    isNot?: Prisma.PreferredPaymentSettingsWhereInput | null;
};
export type PreferredPaymentSettingsCountOrderByAggregateInput = {
    preferredPaymentSettingsId?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    paymentMethodId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PreferredPaymentSettingsMaxOrderByAggregateInput = {
    preferredPaymentSettingsId?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    paymentMethodId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PreferredPaymentSettingsMinOrderByAggregateInput = {
    preferredPaymentSettingsId?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    paymentMethodId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PreferredPaymentSettingsScalarRelationFilter = {
    is?: Prisma.PreferredPaymentSettingsWhereInput;
    isNot?: Prisma.PreferredPaymentSettingsWhereInput;
};
export type PreferredPaymentSettingsCreateNestedOneWithoutCustomerInput = {
    create?: Prisma.XOR<Prisma.PreferredPaymentSettingsCreateWithoutCustomerInput, Prisma.PreferredPaymentSettingsUncheckedCreateWithoutCustomerInput>;
    connectOrCreate?: Prisma.PreferredPaymentSettingsCreateOrConnectWithoutCustomerInput;
    connect?: Prisma.PreferredPaymentSettingsWhereUniqueInput;
};
export type PreferredPaymentSettingsUncheckedCreateNestedOneWithoutCustomerInput = {
    create?: Prisma.XOR<Prisma.PreferredPaymentSettingsCreateWithoutCustomerInput, Prisma.PreferredPaymentSettingsUncheckedCreateWithoutCustomerInput>;
    connectOrCreate?: Prisma.PreferredPaymentSettingsCreateOrConnectWithoutCustomerInput;
    connect?: Prisma.PreferredPaymentSettingsWhereUniqueInput;
};
export type PreferredPaymentSettingsUpdateOneWithoutCustomerNestedInput = {
    create?: Prisma.XOR<Prisma.PreferredPaymentSettingsCreateWithoutCustomerInput, Prisma.PreferredPaymentSettingsUncheckedCreateWithoutCustomerInput>;
    connectOrCreate?: Prisma.PreferredPaymentSettingsCreateOrConnectWithoutCustomerInput;
    upsert?: Prisma.PreferredPaymentSettingsUpsertWithoutCustomerInput;
    disconnect?: Prisma.PreferredPaymentSettingsWhereInput | boolean;
    delete?: Prisma.PreferredPaymentSettingsWhereInput | boolean;
    connect?: Prisma.PreferredPaymentSettingsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PreferredPaymentSettingsUpdateToOneWithWhereWithoutCustomerInput, Prisma.PreferredPaymentSettingsUpdateWithoutCustomerInput>, Prisma.PreferredPaymentSettingsUncheckedUpdateWithoutCustomerInput>;
};
export type PreferredPaymentSettingsUncheckedUpdateOneWithoutCustomerNestedInput = {
    create?: Prisma.XOR<Prisma.PreferredPaymentSettingsCreateWithoutCustomerInput, Prisma.PreferredPaymentSettingsUncheckedCreateWithoutCustomerInput>;
    connectOrCreate?: Prisma.PreferredPaymentSettingsCreateOrConnectWithoutCustomerInput;
    upsert?: Prisma.PreferredPaymentSettingsUpsertWithoutCustomerInput;
    disconnect?: Prisma.PreferredPaymentSettingsWhereInput | boolean;
    delete?: Prisma.PreferredPaymentSettingsWhereInput | boolean;
    connect?: Prisma.PreferredPaymentSettingsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PreferredPaymentSettingsUpdateToOneWithWhereWithoutCustomerInput, Prisma.PreferredPaymentSettingsUpdateWithoutCustomerInput>, Prisma.PreferredPaymentSettingsUncheckedUpdateWithoutCustomerInput>;
};
export type PreferredPaymentSettingsCreateNestedOneWithoutPaymentMethodsInput = {
    create?: Prisma.XOR<Prisma.PreferredPaymentSettingsCreateWithoutPaymentMethodsInput, Prisma.PreferredPaymentSettingsUncheckedCreateWithoutPaymentMethodsInput>;
    connectOrCreate?: Prisma.PreferredPaymentSettingsCreateOrConnectWithoutPaymentMethodsInput;
    connect?: Prisma.PreferredPaymentSettingsWhereUniqueInput;
};
export type PreferredPaymentSettingsUpdateOneRequiredWithoutPaymentMethodsNestedInput = {
    create?: Prisma.XOR<Prisma.PreferredPaymentSettingsCreateWithoutPaymentMethodsInput, Prisma.PreferredPaymentSettingsUncheckedCreateWithoutPaymentMethodsInput>;
    connectOrCreate?: Prisma.PreferredPaymentSettingsCreateOrConnectWithoutPaymentMethodsInput;
    upsert?: Prisma.PreferredPaymentSettingsUpsertWithoutPaymentMethodsInput;
    connect?: Prisma.PreferredPaymentSettingsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PreferredPaymentSettingsUpdateToOneWithWhereWithoutPaymentMethodsInput, Prisma.PreferredPaymentSettingsUpdateWithoutPaymentMethodsInput>, Prisma.PreferredPaymentSettingsUncheckedUpdateWithoutPaymentMethodsInput>;
};
export type PreferredPaymentSettingsCreateWithoutCustomerInput = {
    preferredPaymentSettingsId?: string;
    paymentMethodId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    paymentMethods?: Prisma.PaymentMethodCreateNestedManyWithoutPreferredPaymentSettingsInput;
};
export type PreferredPaymentSettingsUncheckedCreateWithoutCustomerInput = {
    preferredPaymentSettingsId?: string;
    paymentMethodId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    paymentMethods?: Prisma.PaymentMethodUncheckedCreateNestedManyWithoutPreferredPaymentSettingsInput;
};
export type PreferredPaymentSettingsCreateOrConnectWithoutCustomerInput = {
    where: Prisma.PreferredPaymentSettingsWhereUniqueInput;
    create: Prisma.XOR<Prisma.PreferredPaymentSettingsCreateWithoutCustomerInput, Prisma.PreferredPaymentSettingsUncheckedCreateWithoutCustomerInput>;
};
export type PreferredPaymentSettingsUpsertWithoutCustomerInput = {
    update: Prisma.XOR<Prisma.PreferredPaymentSettingsUpdateWithoutCustomerInput, Prisma.PreferredPaymentSettingsUncheckedUpdateWithoutCustomerInput>;
    create: Prisma.XOR<Prisma.PreferredPaymentSettingsCreateWithoutCustomerInput, Prisma.PreferredPaymentSettingsUncheckedCreateWithoutCustomerInput>;
    where?: Prisma.PreferredPaymentSettingsWhereInput;
};
export type PreferredPaymentSettingsUpdateToOneWithWhereWithoutCustomerInput = {
    where?: Prisma.PreferredPaymentSettingsWhereInput;
    data: Prisma.XOR<Prisma.PreferredPaymentSettingsUpdateWithoutCustomerInput, Prisma.PreferredPaymentSettingsUncheckedUpdateWithoutCustomerInput>;
};
export type PreferredPaymentSettingsUpdateWithoutCustomerInput = {
    preferredPaymentSettingsId?: Prisma.StringFieldUpdateOperationsInput | string;
    paymentMethodId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    paymentMethods?: Prisma.PaymentMethodUpdateManyWithoutPreferredPaymentSettingsNestedInput;
};
export type PreferredPaymentSettingsUncheckedUpdateWithoutCustomerInput = {
    preferredPaymentSettingsId?: Prisma.StringFieldUpdateOperationsInput | string;
    paymentMethodId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    paymentMethods?: Prisma.PaymentMethodUncheckedUpdateManyWithoutPreferredPaymentSettingsNestedInput;
};
export type PreferredPaymentSettingsCreateWithoutPaymentMethodsInput = {
    preferredPaymentSettingsId?: string;
    paymentMethodId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    customer: Prisma.CustomerCreateNestedOneWithoutPreferredPaymentSettingsInput;
};
export type PreferredPaymentSettingsUncheckedCreateWithoutPaymentMethodsInput = {
    preferredPaymentSettingsId?: string;
    customerId: string;
    paymentMethodId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PreferredPaymentSettingsCreateOrConnectWithoutPaymentMethodsInput = {
    where: Prisma.PreferredPaymentSettingsWhereUniqueInput;
    create: Prisma.XOR<Prisma.PreferredPaymentSettingsCreateWithoutPaymentMethodsInput, Prisma.PreferredPaymentSettingsUncheckedCreateWithoutPaymentMethodsInput>;
};
export type PreferredPaymentSettingsUpsertWithoutPaymentMethodsInput = {
    update: Prisma.XOR<Prisma.PreferredPaymentSettingsUpdateWithoutPaymentMethodsInput, Prisma.PreferredPaymentSettingsUncheckedUpdateWithoutPaymentMethodsInput>;
    create: Prisma.XOR<Prisma.PreferredPaymentSettingsCreateWithoutPaymentMethodsInput, Prisma.PreferredPaymentSettingsUncheckedCreateWithoutPaymentMethodsInput>;
    where?: Prisma.PreferredPaymentSettingsWhereInput;
};
export type PreferredPaymentSettingsUpdateToOneWithWhereWithoutPaymentMethodsInput = {
    where?: Prisma.PreferredPaymentSettingsWhereInput;
    data: Prisma.XOR<Prisma.PreferredPaymentSettingsUpdateWithoutPaymentMethodsInput, Prisma.PreferredPaymentSettingsUncheckedUpdateWithoutPaymentMethodsInput>;
};
export type PreferredPaymentSettingsUpdateWithoutPaymentMethodsInput = {
    preferredPaymentSettingsId?: Prisma.StringFieldUpdateOperationsInput | string;
    paymentMethodId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: Prisma.CustomerUpdateOneRequiredWithoutPreferredPaymentSettingsNestedInput;
};
export type PreferredPaymentSettingsUncheckedUpdateWithoutPaymentMethodsInput = {
    preferredPaymentSettingsId?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    paymentMethodId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PreferredPaymentSettingsCountOutputType = {
    paymentMethods: number;
};
export type PreferredPaymentSettingsCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    paymentMethods?: boolean | PreferredPaymentSettingsCountOutputTypeCountPaymentMethodsArgs;
};
export type PreferredPaymentSettingsCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PreferredPaymentSettingsCountOutputTypeSelect<ExtArgs> | null;
};
export type PreferredPaymentSettingsCountOutputTypeCountPaymentMethodsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PaymentMethodWhereInput;
};
export type PreferredPaymentSettingsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    preferredPaymentSettingsId?: boolean;
    customerId?: boolean;
    paymentMethodId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    paymentMethods?: boolean | Prisma.PreferredPaymentSettings$paymentMethodsArgs<ExtArgs>;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    _count?: boolean | Prisma.PreferredPaymentSettingsCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["preferredPaymentSettings"]>;
export type PreferredPaymentSettingsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    preferredPaymentSettingsId?: boolean;
    customerId?: boolean;
    paymentMethodId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["preferredPaymentSettings"]>;
export type PreferredPaymentSettingsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    preferredPaymentSettingsId?: boolean;
    customerId?: boolean;
    paymentMethodId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["preferredPaymentSettings"]>;
export type PreferredPaymentSettingsSelectScalar = {
    preferredPaymentSettingsId?: boolean;
    customerId?: boolean;
    paymentMethodId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type PreferredPaymentSettingsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"preferredPaymentSettingsId" | "customerId" | "paymentMethodId" | "createdAt" | "updatedAt", ExtArgs["result"]["preferredPaymentSettings"]>;
export type PreferredPaymentSettingsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    paymentMethods?: boolean | Prisma.PreferredPaymentSettings$paymentMethodsArgs<ExtArgs>;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    _count?: boolean | Prisma.PreferredPaymentSettingsCountOutputTypeDefaultArgs<ExtArgs>;
};
export type PreferredPaymentSettingsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
};
export type PreferredPaymentSettingsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
};
export type $PreferredPaymentSettingsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PreferredPaymentSettings";
    objects: {
        paymentMethods: Prisma.$PaymentMethodPayload<ExtArgs>[];
        customer: Prisma.$CustomerPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        preferredPaymentSettingsId: string;
        customerId: string;
        paymentMethodId: string;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["preferredPaymentSettings"]>;
    composites: {};
};
export type PreferredPaymentSettingsGetPayload<S extends boolean | null | undefined | PreferredPaymentSettingsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PreferredPaymentSettingsPayload, S>;
export type PreferredPaymentSettingsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PreferredPaymentSettingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PreferredPaymentSettingsCountAggregateInputType | true;
};
export interface PreferredPaymentSettingsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['PreferredPaymentSettings'];
        meta: {
            name: 'PreferredPaymentSettings';
        };
    };
    findUnique<T extends PreferredPaymentSettingsFindUniqueArgs>(args: Prisma.SelectSubset<T, PreferredPaymentSettingsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PreferredPaymentSettingsClient<runtime.Types.Result.GetResult<Prisma.$PreferredPaymentSettingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PreferredPaymentSettingsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PreferredPaymentSettingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PreferredPaymentSettingsClient<runtime.Types.Result.GetResult<Prisma.$PreferredPaymentSettingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PreferredPaymentSettingsFindFirstArgs>(args?: Prisma.SelectSubset<T, PreferredPaymentSettingsFindFirstArgs<ExtArgs>>): Prisma.Prisma__PreferredPaymentSettingsClient<runtime.Types.Result.GetResult<Prisma.$PreferredPaymentSettingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PreferredPaymentSettingsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PreferredPaymentSettingsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PreferredPaymentSettingsClient<runtime.Types.Result.GetResult<Prisma.$PreferredPaymentSettingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PreferredPaymentSettingsFindManyArgs>(args?: Prisma.SelectSubset<T, PreferredPaymentSettingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PreferredPaymentSettingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PreferredPaymentSettingsCreateArgs>(args: Prisma.SelectSubset<T, PreferredPaymentSettingsCreateArgs<ExtArgs>>): Prisma.Prisma__PreferredPaymentSettingsClient<runtime.Types.Result.GetResult<Prisma.$PreferredPaymentSettingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PreferredPaymentSettingsCreateManyArgs>(args?: Prisma.SelectSubset<T, PreferredPaymentSettingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PreferredPaymentSettingsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PreferredPaymentSettingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PreferredPaymentSettingsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PreferredPaymentSettingsDeleteArgs>(args: Prisma.SelectSubset<T, PreferredPaymentSettingsDeleteArgs<ExtArgs>>): Prisma.Prisma__PreferredPaymentSettingsClient<runtime.Types.Result.GetResult<Prisma.$PreferredPaymentSettingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PreferredPaymentSettingsUpdateArgs>(args: Prisma.SelectSubset<T, PreferredPaymentSettingsUpdateArgs<ExtArgs>>): Prisma.Prisma__PreferredPaymentSettingsClient<runtime.Types.Result.GetResult<Prisma.$PreferredPaymentSettingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PreferredPaymentSettingsDeleteManyArgs>(args?: Prisma.SelectSubset<T, PreferredPaymentSettingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PreferredPaymentSettingsUpdateManyArgs>(args: Prisma.SelectSubset<T, PreferredPaymentSettingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PreferredPaymentSettingsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PreferredPaymentSettingsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PreferredPaymentSettingsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PreferredPaymentSettingsUpsertArgs>(args: Prisma.SelectSubset<T, PreferredPaymentSettingsUpsertArgs<ExtArgs>>): Prisma.Prisma__PreferredPaymentSettingsClient<runtime.Types.Result.GetResult<Prisma.$PreferredPaymentSettingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PreferredPaymentSettingsCountArgs>(args?: Prisma.Subset<T, PreferredPaymentSettingsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PreferredPaymentSettingsCountAggregateOutputType> : number>;
    aggregate<T extends PreferredPaymentSettingsAggregateArgs>(args: Prisma.Subset<T, PreferredPaymentSettingsAggregateArgs>): Prisma.PrismaPromise<GetPreferredPaymentSettingsAggregateType<T>>;
    groupBy<T extends PreferredPaymentSettingsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PreferredPaymentSettingsGroupByArgs['orderBy'];
    } : {
        orderBy?: PreferredPaymentSettingsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PreferredPaymentSettingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPreferredPaymentSettingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PreferredPaymentSettingsFieldRefs;
}
export interface Prisma__PreferredPaymentSettingsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    paymentMethods<T extends Prisma.PreferredPaymentSettings$paymentMethodsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PreferredPaymentSettings$paymentMethodsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    customer<T extends Prisma.CustomerDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CustomerDefaultArgs<ExtArgs>>): Prisma.Prisma__CustomerClient<runtime.Types.Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PreferredPaymentSettingsFieldRefs {
    readonly preferredPaymentSettingsId: Prisma.FieldRef<"PreferredPaymentSettings", 'String'>;
    readonly customerId: Prisma.FieldRef<"PreferredPaymentSettings", 'String'>;
    readonly paymentMethodId: Prisma.FieldRef<"PreferredPaymentSettings", 'String'>;
    readonly createdAt: Prisma.FieldRef<"PreferredPaymentSettings", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"PreferredPaymentSettings", 'DateTime'>;
}
export type PreferredPaymentSettingsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PreferredPaymentSettingsSelect<ExtArgs> | null;
    omit?: Prisma.PreferredPaymentSettingsOmit<ExtArgs> | null;
    include?: Prisma.PreferredPaymentSettingsInclude<ExtArgs> | null;
    where: Prisma.PreferredPaymentSettingsWhereUniqueInput;
};
export type PreferredPaymentSettingsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PreferredPaymentSettingsSelect<ExtArgs> | null;
    omit?: Prisma.PreferredPaymentSettingsOmit<ExtArgs> | null;
    include?: Prisma.PreferredPaymentSettingsInclude<ExtArgs> | null;
    where: Prisma.PreferredPaymentSettingsWhereUniqueInput;
};
export type PreferredPaymentSettingsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PreferredPaymentSettingsSelect<ExtArgs> | null;
    omit?: Prisma.PreferredPaymentSettingsOmit<ExtArgs> | null;
    include?: Prisma.PreferredPaymentSettingsInclude<ExtArgs> | null;
    where?: Prisma.PreferredPaymentSettingsWhereInput;
    orderBy?: Prisma.PreferredPaymentSettingsOrderByWithRelationInput | Prisma.PreferredPaymentSettingsOrderByWithRelationInput[];
    cursor?: Prisma.PreferredPaymentSettingsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PreferredPaymentSettingsScalarFieldEnum | Prisma.PreferredPaymentSettingsScalarFieldEnum[];
};
export type PreferredPaymentSettingsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PreferredPaymentSettingsSelect<ExtArgs> | null;
    omit?: Prisma.PreferredPaymentSettingsOmit<ExtArgs> | null;
    include?: Prisma.PreferredPaymentSettingsInclude<ExtArgs> | null;
    where?: Prisma.PreferredPaymentSettingsWhereInput;
    orderBy?: Prisma.PreferredPaymentSettingsOrderByWithRelationInput | Prisma.PreferredPaymentSettingsOrderByWithRelationInput[];
    cursor?: Prisma.PreferredPaymentSettingsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PreferredPaymentSettingsScalarFieldEnum | Prisma.PreferredPaymentSettingsScalarFieldEnum[];
};
export type PreferredPaymentSettingsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PreferredPaymentSettingsSelect<ExtArgs> | null;
    omit?: Prisma.PreferredPaymentSettingsOmit<ExtArgs> | null;
    include?: Prisma.PreferredPaymentSettingsInclude<ExtArgs> | null;
    where?: Prisma.PreferredPaymentSettingsWhereInput;
    orderBy?: Prisma.PreferredPaymentSettingsOrderByWithRelationInput | Prisma.PreferredPaymentSettingsOrderByWithRelationInput[];
    cursor?: Prisma.PreferredPaymentSettingsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PreferredPaymentSettingsScalarFieldEnum | Prisma.PreferredPaymentSettingsScalarFieldEnum[];
};
export type PreferredPaymentSettingsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PreferredPaymentSettingsSelect<ExtArgs> | null;
    omit?: Prisma.PreferredPaymentSettingsOmit<ExtArgs> | null;
    include?: Prisma.PreferredPaymentSettingsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PreferredPaymentSettingsCreateInput, Prisma.PreferredPaymentSettingsUncheckedCreateInput>;
};
export type PreferredPaymentSettingsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PreferredPaymentSettingsCreateManyInput | Prisma.PreferredPaymentSettingsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PreferredPaymentSettingsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PreferredPaymentSettingsSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PreferredPaymentSettingsOmit<ExtArgs> | null;
    data: Prisma.PreferredPaymentSettingsCreateManyInput | Prisma.PreferredPaymentSettingsCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.PreferredPaymentSettingsIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type PreferredPaymentSettingsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PreferredPaymentSettingsSelect<ExtArgs> | null;
    omit?: Prisma.PreferredPaymentSettingsOmit<ExtArgs> | null;
    include?: Prisma.PreferredPaymentSettingsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PreferredPaymentSettingsUpdateInput, Prisma.PreferredPaymentSettingsUncheckedUpdateInput>;
    where: Prisma.PreferredPaymentSettingsWhereUniqueInput;
};
export type PreferredPaymentSettingsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PreferredPaymentSettingsUpdateManyMutationInput, Prisma.PreferredPaymentSettingsUncheckedUpdateManyInput>;
    where?: Prisma.PreferredPaymentSettingsWhereInput;
    limit?: number;
};
export type PreferredPaymentSettingsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PreferredPaymentSettingsSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PreferredPaymentSettingsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PreferredPaymentSettingsUpdateManyMutationInput, Prisma.PreferredPaymentSettingsUncheckedUpdateManyInput>;
    where?: Prisma.PreferredPaymentSettingsWhereInput;
    limit?: number;
    include?: Prisma.PreferredPaymentSettingsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type PreferredPaymentSettingsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PreferredPaymentSettingsSelect<ExtArgs> | null;
    omit?: Prisma.PreferredPaymentSettingsOmit<ExtArgs> | null;
    include?: Prisma.PreferredPaymentSettingsInclude<ExtArgs> | null;
    where: Prisma.PreferredPaymentSettingsWhereUniqueInput;
    create: Prisma.XOR<Prisma.PreferredPaymentSettingsCreateInput, Prisma.PreferredPaymentSettingsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PreferredPaymentSettingsUpdateInput, Prisma.PreferredPaymentSettingsUncheckedUpdateInput>;
};
export type PreferredPaymentSettingsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PreferredPaymentSettingsSelect<ExtArgs> | null;
    omit?: Prisma.PreferredPaymentSettingsOmit<ExtArgs> | null;
    include?: Prisma.PreferredPaymentSettingsInclude<ExtArgs> | null;
    where: Prisma.PreferredPaymentSettingsWhereUniqueInput;
};
export type PreferredPaymentSettingsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PreferredPaymentSettingsWhereInput;
    limit?: number;
};
export type PreferredPaymentSettings$paymentMethodsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type PreferredPaymentSettingsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PreferredPaymentSettingsSelect<ExtArgs> | null;
    omit?: Prisma.PreferredPaymentSettingsOmit<ExtArgs> | null;
    include?: Prisma.PreferredPaymentSettingsInclude<ExtArgs> | null;
};
