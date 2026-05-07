import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type RatingModel = runtime.Types.Result.DefaultSelection<Prisma.$RatingPayload>;
export type AggregateRating = {
    _count: RatingCountAggregateOutputType | null;
    _min: RatingMinAggregateOutputType | null;
    _max: RatingMaxAggregateOutputType | null;
};
export type RatingMinAggregateOutputType = {
    ratingId: string | null;
    customerId: string | null;
    restaurantId: string | null;
    ratingScore: $Enums.RatingScore | null;
    review: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type RatingMaxAggregateOutputType = {
    ratingId: string | null;
    customerId: string | null;
    restaurantId: string | null;
    ratingScore: $Enums.RatingScore | null;
    review: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type RatingCountAggregateOutputType = {
    ratingId: number;
    customerId: number;
    restaurantId: number;
    ratingScore: number;
    review: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type RatingMinAggregateInputType = {
    ratingId?: true;
    customerId?: true;
    restaurantId?: true;
    ratingScore?: true;
    review?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type RatingMaxAggregateInputType = {
    ratingId?: true;
    customerId?: true;
    restaurantId?: true;
    ratingScore?: true;
    review?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type RatingCountAggregateInputType = {
    ratingId?: true;
    customerId?: true;
    restaurantId?: true;
    ratingScore?: true;
    review?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type RatingAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RatingWhereInput;
    orderBy?: Prisma.RatingOrderByWithRelationInput | Prisma.RatingOrderByWithRelationInput[];
    cursor?: Prisma.RatingWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | RatingCountAggregateInputType;
    _min?: RatingMinAggregateInputType;
    _max?: RatingMaxAggregateInputType;
};
export type GetRatingAggregateType<T extends RatingAggregateArgs> = {
    [P in keyof T & keyof AggregateRating]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateRating[P]> : Prisma.GetScalarType<T[P], AggregateRating[P]>;
};
export type RatingGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RatingWhereInput;
    orderBy?: Prisma.RatingOrderByWithAggregationInput | Prisma.RatingOrderByWithAggregationInput[];
    by: Prisma.RatingScalarFieldEnum[] | Prisma.RatingScalarFieldEnum;
    having?: Prisma.RatingScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RatingCountAggregateInputType | true;
    _min?: RatingMinAggregateInputType;
    _max?: RatingMaxAggregateInputType;
};
export type RatingGroupByOutputType = {
    ratingId: string;
    customerId: string;
    restaurantId: string;
    ratingScore: $Enums.RatingScore;
    review: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: RatingCountAggregateOutputType | null;
    _min: RatingMinAggregateOutputType | null;
    _max: RatingMaxAggregateOutputType | null;
};
export type GetRatingGroupByPayload<T extends RatingGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<RatingGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof RatingGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], RatingGroupByOutputType[P]> : Prisma.GetScalarType<T[P], RatingGroupByOutputType[P]>;
}>>;
export type RatingWhereInput = {
    AND?: Prisma.RatingWhereInput | Prisma.RatingWhereInput[];
    OR?: Prisma.RatingWhereInput[];
    NOT?: Prisma.RatingWhereInput | Prisma.RatingWhereInput[];
    ratingId?: Prisma.StringFilter<"Rating"> | string;
    customerId?: Prisma.StringFilter<"Rating"> | string;
    restaurantId?: Prisma.StringFilter<"Rating"> | string;
    ratingScore?: Prisma.EnumRatingScoreFilter<"Rating"> | $Enums.RatingScore;
    review?: Prisma.StringNullableFilter<"Rating"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Rating"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Rating"> | Date | string;
    customer?: Prisma.XOR<Prisma.CustomerScalarRelationFilter, Prisma.CustomerWhereInput>;
    restaurant?: Prisma.XOR<Prisma.RestaurantScalarRelationFilter, Prisma.RestaurantWhereInput>;
};
export type RatingOrderByWithRelationInput = {
    ratingId?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    restaurantId?: Prisma.SortOrder;
    ratingScore?: Prisma.SortOrder;
    review?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    customer?: Prisma.CustomerOrderByWithRelationInput;
    restaurant?: Prisma.RestaurantOrderByWithRelationInput;
};
export type RatingWhereUniqueInput = Prisma.AtLeast<{
    ratingId?: string;
    AND?: Prisma.RatingWhereInput | Prisma.RatingWhereInput[];
    OR?: Prisma.RatingWhereInput[];
    NOT?: Prisma.RatingWhereInput | Prisma.RatingWhereInput[];
    customerId?: Prisma.StringFilter<"Rating"> | string;
    restaurantId?: Prisma.StringFilter<"Rating"> | string;
    ratingScore?: Prisma.EnumRatingScoreFilter<"Rating"> | $Enums.RatingScore;
    review?: Prisma.StringNullableFilter<"Rating"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Rating"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Rating"> | Date | string;
    customer?: Prisma.XOR<Prisma.CustomerScalarRelationFilter, Prisma.CustomerWhereInput>;
    restaurant?: Prisma.XOR<Prisma.RestaurantScalarRelationFilter, Prisma.RestaurantWhereInput>;
}, "ratingId">;
export type RatingOrderByWithAggregationInput = {
    ratingId?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    restaurantId?: Prisma.SortOrder;
    ratingScore?: Prisma.SortOrder;
    review?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.RatingCountOrderByAggregateInput;
    _max?: Prisma.RatingMaxOrderByAggregateInput;
    _min?: Prisma.RatingMinOrderByAggregateInput;
};
export type RatingScalarWhereWithAggregatesInput = {
    AND?: Prisma.RatingScalarWhereWithAggregatesInput | Prisma.RatingScalarWhereWithAggregatesInput[];
    OR?: Prisma.RatingScalarWhereWithAggregatesInput[];
    NOT?: Prisma.RatingScalarWhereWithAggregatesInput | Prisma.RatingScalarWhereWithAggregatesInput[];
    ratingId?: Prisma.StringWithAggregatesFilter<"Rating"> | string;
    customerId?: Prisma.StringWithAggregatesFilter<"Rating"> | string;
    restaurantId?: Prisma.StringWithAggregatesFilter<"Rating"> | string;
    ratingScore?: Prisma.EnumRatingScoreWithAggregatesFilter<"Rating"> | $Enums.RatingScore;
    review?: Prisma.StringNullableWithAggregatesFilter<"Rating"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Rating"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Rating"> | Date | string;
};
export type RatingCreateInput = {
    ratingId?: string;
    ratingScore: $Enums.RatingScore;
    review?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    customer: Prisma.CustomerCreateNestedOneWithoutRatingInput;
    restaurant: Prisma.RestaurantCreateNestedOneWithoutRatingInput;
};
export type RatingUncheckedCreateInput = {
    ratingId?: string;
    customerId: string;
    restaurantId: string;
    ratingScore: $Enums.RatingScore;
    review?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type RatingUpdateInput = {
    ratingId?: Prisma.StringFieldUpdateOperationsInput | string;
    ratingScore?: Prisma.EnumRatingScoreFieldUpdateOperationsInput | $Enums.RatingScore;
    review?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: Prisma.CustomerUpdateOneRequiredWithoutRatingNestedInput;
    restaurant?: Prisma.RestaurantUpdateOneRequiredWithoutRatingNestedInput;
};
export type RatingUncheckedUpdateInput = {
    ratingId?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    restaurantId?: Prisma.StringFieldUpdateOperationsInput | string;
    ratingScore?: Prisma.EnumRatingScoreFieldUpdateOperationsInput | $Enums.RatingScore;
    review?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RatingCreateManyInput = {
    ratingId?: string;
    customerId: string;
    restaurantId: string;
    ratingScore: $Enums.RatingScore;
    review?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type RatingUpdateManyMutationInput = {
    ratingId?: Prisma.StringFieldUpdateOperationsInput | string;
    ratingScore?: Prisma.EnumRatingScoreFieldUpdateOperationsInput | $Enums.RatingScore;
    review?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RatingUncheckedUpdateManyInput = {
    ratingId?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    restaurantId?: Prisma.StringFieldUpdateOperationsInput | string;
    ratingScore?: Prisma.EnumRatingScoreFieldUpdateOperationsInput | $Enums.RatingScore;
    review?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RatingListRelationFilter = {
    every?: Prisma.RatingWhereInput;
    some?: Prisma.RatingWhereInput;
    none?: Prisma.RatingWhereInput;
};
export type RatingOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type RatingCountOrderByAggregateInput = {
    ratingId?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    restaurantId?: Prisma.SortOrder;
    ratingScore?: Prisma.SortOrder;
    review?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type RatingMaxOrderByAggregateInput = {
    ratingId?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    restaurantId?: Prisma.SortOrder;
    ratingScore?: Prisma.SortOrder;
    review?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type RatingMinOrderByAggregateInput = {
    ratingId?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    restaurantId?: Prisma.SortOrder;
    ratingScore?: Prisma.SortOrder;
    review?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type RatingCreateNestedManyWithoutCustomerInput = {
    create?: Prisma.XOR<Prisma.RatingCreateWithoutCustomerInput, Prisma.RatingUncheckedCreateWithoutCustomerInput> | Prisma.RatingCreateWithoutCustomerInput[] | Prisma.RatingUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.RatingCreateOrConnectWithoutCustomerInput | Prisma.RatingCreateOrConnectWithoutCustomerInput[];
    createMany?: Prisma.RatingCreateManyCustomerInputEnvelope;
    connect?: Prisma.RatingWhereUniqueInput | Prisma.RatingWhereUniqueInput[];
};
export type RatingUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: Prisma.XOR<Prisma.RatingCreateWithoutCustomerInput, Prisma.RatingUncheckedCreateWithoutCustomerInput> | Prisma.RatingCreateWithoutCustomerInput[] | Prisma.RatingUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.RatingCreateOrConnectWithoutCustomerInput | Prisma.RatingCreateOrConnectWithoutCustomerInput[];
    createMany?: Prisma.RatingCreateManyCustomerInputEnvelope;
    connect?: Prisma.RatingWhereUniqueInput | Prisma.RatingWhereUniqueInput[];
};
export type RatingUpdateManyWithoutCustomerNestedInput = {
    create?: Prisma.XOR<Prisma.RatingCreateWithoutCustomerInput, Prisma.RatingUncheckedCreateWithoutCustomerInput> | Prisma.RatingCreateWithoutCustomerInput[] | Prisma.RatingUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.RatingCreateOrConnectWithoutCustomerInput | Prisma.RatingCreateOrConnectWithoutCustomerInput[];
    upsert?: Prisma.RatingUpsertWithWhereUniqueWithoutCustomerInput | Prisma.RatingUpsertWithWhereUniqueWithoutCustomerInput[];
    createMany?: Prisma.RatingCreateManyCustomerInputEnvelope;
    set?: Prisma.RatingWhereUniqueInput | Prisma.RatingWhereUniqueInput[];
    disconnect?: Prisma.RatingWhereUniqueInput | Prisma.RatingWhereUniqueInput[];
    delete?: Prisma.RatingWhereUniqueInput | Prisma.RatingWhereUniqueInput[];
    connect?: Prisma.RatingWhereUniqueInput | Prisma.RatingWhereUniqueInput[];
    update?: Prisma.RatingUpdateWithWhereUniqueWithoutCustomerInput | Prisma.RatingUpdateWithWhereUniqueWithoutCustomerInput[];
    updateMany?: Prisma.RatingUpdateManyWithWhereWithoutCustomerInput | Prisma.RatingUpdateManyWithWhereWithoutCustomerInput[];
    deleteMany?: Prisma.RatingScalarWhereInput | Prisma.RatingScalarWhereInput[];
};
export type RatingUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: Prisma.XOR<Prisma.RatingCreateWithoutCustomerInput, Prisma.RatingUncheckedCreateWithoutCustomerInput> | Prisma.RatingCreateWithoutCustomerInput[] | Prisma.RatingUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.RatingCreateOrConnectWithoutCustomerInput | Prisma.RatingCreateOrConnectWithoutCustomerInput[];
    upsert?: Prisma.RatingUpsertWithWhereUniqueWithoutCustomerInput | Prisma.RatingUpsertWithWhereUniqueWithoutCustomerInput[];
    createMany?: Prisma.RatingCreateManyCustomerInputEnvelope;
    set?: Prisma.RatingWhereUniqueInput | Prisma.RatingWhereUniqueInput[];
    disconnect?: Prisma.RatingWhereUniqueInput | Prisma.RatingWhereUniqueInput[];
    delete?: Prisma.RatingWhereUniqueInput | Prisma.RatingWhereUniqueInput[];
    connect?: Prisma.RatingWhereUniqueInput | Prisma.RatingWhereUniqueInput[];
    update?: Prisma.RatingUpdateWithWhereUniqueWithoutCustomerInput | Prisma.RatingUpdateWithWhereUniqueWithoutCustomerInput[];
    updateMany?: Prisma.RatingUpdateManyWithWhereWithoutCustomerInput | Prisma.RatingUpdateManyWithWhereWithoutCustomerInput[];
    deleteMany?: Prisma.RatingScalarWhereInput | Prisma.RatingScalarWhereInput[];
};
export type RatingCreateNestedManyWithoutRestaurantInput = {
    create?: Prisma.XOR<Prisma.RatingCreateWithoutRestaurantInput, Prisma.RatingUncheckedCreateWithoutRestaurantInput> | Prisma.RatingCreateWithoutRestaurantInput[] | Prisma.RatingUncheckedCreateWithoutRestaurantInput[];
    connectOrCreate?: Prisma.RatingCreateOrConnectWithoutRestaurantInput | Prisma.RatingCreateOrConnectWithoutRestaurantInput[];
    createMany?: Prisma.RatingCreateManyRestaurantInputEnvelope;
    connect?: Prisma.RatingWhereUniqueInput | Prisma.RatingWhereUniqueInput[];
};
export type RatingUncheckedCreateNestedManyWithoutRestaurantInput = {
    create?: Prisma.XOR<Prisma.RatingCreateWithoutRestaurantInput, Prisma.RatingUncheckedCreateWithoutRestaurantInput> | Prisma.RatingCreateWithoutRestaurantInput[] | Prisma.RatingUncheckedCreateWithoutRestaurantInput[];
    connectOrCreate?: Prisma.RatingCreateOrConnectWithoutRestaurantInput | Prisma.RatingCreateOrConnectWithoutRestaurantInput[];
    createMany?: Prisma.RatingCreateManyRestaurantInputEnvelope;
    connect?: Prisma.RatingWhereUniqueInput | Prisma.RatingWhereUniqueInput[];
};
export type RatingUpdateManyWithoutRestaurantNestedInput = {
    create?: Prisma.XOR<Prisma.RatingCreateWithoutRestaurantInput, Prisma.RatingUncheckedCreateWithoutRestaurantInput> | Prisma.RatingCreateWithoutRestaurantInput[] | Prisma.RatingUncheckedCreateWithoutRestaurantInput[];
    connectOrCreate?: Prisma.RatingCreateOrConnectWithoutRestaurantInput | Prisma.RatingCreateOrConnectWithoutRestaurantInput[];
    upsert?: Prisma.RatingUpsertWithWhereUniqueWithoutRestaurantInput | Prisma.RatingUpsertWithWhereUniqueWithoutRestaurantInput[];
    createMany?: Prisma.RatingCreateManyRestaurantInputEnvelope;
    set?: Prisma.RatingWhereUniqueInput | Prisma.RatingWhereUniqueInput[];
    disconnect?: Prisma.RatingWhereUniqueInput | Prisma.RatingWhereUniqueInput[];
    delete?: Prisma.RatingWhereUniqueInput | Prisma.RatingWhereUniqueInput[];
    connect?: Prisma.RatingWhereUniqueInput | Prisma.RatingWhereUniqueInput[];
    update?: Prisma.RatingUpdateWithWhereUniqueWithoutRestaurantInput | Prisma.RatingUpdateWithWhereUniqueWithoutRestaurantInput[];
    updateMany?: Prisma.RatingUpdateManyWithWhereWithoutRestaurantInput | Prisma.RatingUpdateManyWithWhereWithoutRestaurantInput[];
    deleteMany?: Prisma.RatingScalarWhereInput | Prisma.RatingScalarWhereInput[];
};
export type RatingUncheckedUpdateManyWithoutRestaurantNestedInput = {
    create?: Prisma.XOR<Prisma.RatingCreateWithoutRestaurantInput, Prisma.RatingUncheckedCreateWithoutRestaurantInput> | Prisma.RatingCreateWithoutRestaurantInput[] | Prisma.RatingUncheckedCreateWithoutRestaurantInput[];
    connectOrCreate?: Prisma.RatingCreateOrConnectWithoutRestaurantInput | Prisma.RatingCreateOrConnectWithoutRestaurantInput[];
    upsert?: Prisma.RatingUpsertWithWhereUniqueWithoutRestaurantInput | Prisma.RatingUpsertWithWhereUniqueWithoutRestaurantInput[];
    createMany?: Prisma.RatingCreateManyRestaurantInputEnvelope;
    set?: Prisma.RatingWhereUniqueInput | Prisma.RatingWhereUniqueInput[];
    disconnect?: Prisma.RatingWhereUniqueInput | Prisma.RatingWhereUniqueInput[];
    delete?: Prisma.RatingWhereUniqueInput | Prisma.RatingWhereUniqueInput[];
    connect?: Prisma.RatingWhereUniqueInput | Prisma.RatingWhereUniqueInput[];
    update?: Prisma.RatingUpdateWithWhereUniqueWithoutRestaurantInput | Prisma.RatingUpdateWithWhereUniqueWithoutRestaurantInput[];
    updateMany?: Prisma.RatingUpdateManyWithWhereWithoutRestaurantInput | Prisma.RatingUpdateManyWithWhereWithoutRestaurantInput[];
    deleteMany?: Prisma.RatingScalarWhereInput | Prisma.RatingScalarWhereInput[];
};
export type EnumRatingScoreFieldUpdateOperationsInput = {
    set?: $Enums.RatingScore;
};
export type RatingCreateWithoutCustomerInput = {
    ratingId?: string;
    ratingScore: $Enums.RatingScore;
    review?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    restaurant: Prisma.RestaurantCreateNestedOneWithoutRatingInput;
};
export type RatingUncheckedCreateWithoutCustomerInput = {
    ratingId?: string;
    restaurantId: string;
    ratingScore: $Enums.RatingScore;
    review?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type RatingCreateOrConnectWithoutCustomerInput = {
    where: Prisma.RatingWhereUniqueInput;
    create: Prisma.XOR<Prisma.RatingCreateWithoutCustomerInput, Prisma.RatingUncheckedCreateWithoutCustomerInput>;
};
export type RatingCreateManyCustomerInputEnvelope = {
    data: Prisma.RatingCreateManyCustomerInput | Prisma.RatingCreateManyCustomerInput[];
    skipDuplicates?: boolean;
};
export type RatingUpsertWithWhereUniqueWithoutCustomerInput = {
    where: Prisma.RatingWhereUniqueInput;
    update: Prisma.XOR<Prisma.RatingUpdateWithoutCustomerInput, Prisma.RatingUncheckedUpdateWithoutCustomerInput>;
    create: Prisma.XOR<Prisma.RatingCreateWithoutCustomerInput, Prisma.RatingUncheckedCreateWithoutCustomerInput>;
};
export type RatingUpdateWithWhereUniqueWithoutCustomerInput = {
    where: Prisma.RatingWhereUniqueInput;
    data: Prisma.XOR<Prisma.RatingUpdateWithoutCustomerInput, Prisma.RatingUncheckedUpdateWithoutCustomerInput>;
};
export type RatingUpdateManyWithWhereWithoutCustomerInput = {
    where: Prisma.RatingScalarWhereInput;
    data: Prisma.XOR<Prisma.RatingUpdateManyMutationInput, Prisma.RatingUncheckedUpdateManyWithoutCustomerInput>;
};
export type RatingScalarWhereInput = {
    AND?: Prisma.RatingScalarWhereInput | Prisma.RatingScalarWhereInput[];
    OR?: Prisma.RatingScalarWhereInput[];
    NOT?: Prisma.RatingScalarWhereInput | Prisma.RatingScalarWhereInput[];
    ratingId?: Prisma.StringFilter<"Rating"> | string;
    customerId?: Prisma.StringFilter<"Rating"> | string;
    restaurantId?: Prisma.StringFilter<"Rating"> | string;
    ratingScore?: Prisma.EnumRatingScoreFilter<"Rating"> | $Enums.RatingScore;
    review?: Prisma.StringNullableFilter<"Rating"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Rating"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Rating"> | Date | string;
};
export type RatingCreateWithoutRestaurantInput = {
    ratingId?: string;
    ratingScore: $Enums.RatingScore;
    review?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    customer: Prisma.CustomerCreateNestedOneWithoutRatingInput;
};
export type RatingUncheckedCreateWithoutRestaurantInput = {
    ratingId?: string;
    customerId: string;
    ratingScore: $Enums.RatingScore;
    review?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type RatingCreateOrConnectWithoutRestaurantInput = {
    where: Prisma.RatingWhereUniqueInput;
    create: Prisma.XOR<Prisma.RatingCreateWithoutRestaurantInput, Prisma.RatingUncheckedCreateWithoutRestaurantInput>;
};
export type RatingCreateManyRestaurantInputEnvelope = {
    data: Prisma.RatingCreateManyRestaurantInput | Prisma.RatingCreateManyRestaurantInput[];
    skipDuplicates?: boolean;
};
export type RatingUpsertWithWhereUniqueWithoutRestaurantInput = {
    where: Prisma.RatingWhereUniqueInput;
    update: Prisma.XOR<Prisma.RatingUpdateWithoutRestaurantInput, Prisma.RatingUncheckedUpdateWithoutRestaurantInput>;
    create: Prisma.XOR<Prisma.RatingCreateWithoutRestaurantInput, Prisma.RatingUncheckedCreateWithoutRestaurantInput>;
};
export type RatingUpdateWithWhereUniqueWithoutRestaurantInput = {
    where: Prisma.RatingWhereUniqueInput;
    data: Prisma.XOR<Prisma.RatingUpdateWithoutRestaurantInput, Prisma.RatingUncheckedUpdateWithoutRestaurantInput>;
};
export type RatingUpdateManyWithWhereWithoutRestaurantInput = {
    where: Prisma.RatingScalarWhereInput;
    data: Prisma.XOR<Prisma.RatingUpdateManyMutationInput, Prisma.RatingUncheckedUpdateManyWithoutRestaurantInput>;
};
export type RatingCreateManyCustomerInput = {
    ratingId?: string;
    restaurantId: string;
    ratingScore: $Enums.RatingScore;
    review?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type RatingUpdateWithoutCustomerInput = {
    ratingId?: Prisma.StringFieldUpdateOperationsInput | string;
    ratingScore?: Prisma.EnumRatingScoreFieldUpdateOperationsInput | $Enums.RatingScore;
    review?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    restaurant?: Prisma.RestaurantUpdateOneRequiredWithoutRatingNestedInput;
};
export type RatingUncheckedUpdateWithoutCustomerInput = {
    ratingId?: Prisma.StringFieldUpdateOperationsInput | string;
    restaurantId?: Prisma.StringFieldUpdateOperationsInput | string;
    ratingScore?: Prisma.EnumRatingScoreFieldUpdateOperationsInput | $Enums.RatingScore;
    review?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RatingUncheckedUpdateManyWithoutCustomerInput = {
    ratingId?: Prisma.StringFieldUpdateOperationsInput | string;
    restaurantId?: Prisma.StringFieldUpdateOperationsInput | string;
    ratingScore?: Prisma.EnumRatingScoreFieldUpdateOperationsInput | $Enums.RatingScore;
    review?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RatingCreateManyRestaurantInput = {
    ratingId?: string;
    customerId: string;
    ratingScore: $Enums.RatingScore;
    review?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type RatingUpdateWithoutRestaurantInput = {
    ratingId?: Prisma.StringFieldUpdateOperationsInput | string;
    ratingScore?: Prisma.EnumRatingScoreFieldUpdateOperationsInput | $Enums.RatingScore;
    review?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: Prisma.CustomerUpdateOneRequiredWithoutRatingNestedInput;
};
export type RatingUncheckedUpdateWithoutRestaurantInput = {
    ratingId?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    ratingScore?: Prisma.EnumRatingScoreFieldUpdateOperationsInput | $Enums.RatingScore;
    review?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RatingUncheckedUpdateManyWithoutRestaurantInput = {
    ratingId?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    ratingScore?: Prisma.EnumRatingScoreFieldUpdateOperationsInput | $Enums.RatingScore;
    review?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RatingSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    ratingId?: boolean;
    customerId?: boolean;
    restaurantId?: boolean;
    ratingScore?: boolean;
    review?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    restaurant?: boolean | Prisma.RestaurantDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["rating"]>;
export type RatingSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    ratingId?: boolean;
    customerId?: boolean;
    restaurantId?: boolean;
    ratingScore?: boolean;
    review?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    restaurant?: boolean | Prisma.RestaurantDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["rating"]>;
export type RatingSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    ratingId?: boolean;
    customerId?: boolean;
    restaurantId?: boolean;
    ratingScore?: boolean;
    review?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    restaurant?: boolean | Prisma.RestaurantDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["rating"]>;
export type RatingSelectScalar = {
    ratingId?: boolean;
    customerId?: boolean;
    restaurantId?: boolean;
    ratingScore?: boolean;
    review?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type RatingOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"ratingId" | "customerId" | "restaurantId" | "ratingScore" | "review" | "createdAt" | "updatedAt", ExtArgs["result"]["rating"]>;
export type RatingInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    restaurant?: boolean | Prisma.RestaurantDefaultArgs<ExtArgs>;
};
export type RatingIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    restaurant?: boolean | Prisma.RestaurantDefaultArgs<ExtArgs>;
};
export type RatingIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    restaurant?: boolean | Prisma.RestaurantDefaultArgs<ExtArgs>;
};
export type $RatingPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Rating";
    objects: {
        customer: Prisma.$CustomerPayload<ExtArgs>;
        restaurant: Prisma.$RestaurantPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        ratingId: string;
        customerId: string;
        restaurantId: string;
        ratingScore: $Enums.RatingScore;
        review: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["rating"]>;
    composites: {};
};
export type RatingGetPayload<S extends boolean | null | undefined | RatingDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$RatingPayload, S>;
export type RatingCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<RatingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: RatingCountAggregateInputType | true;
};
export interface RatingDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Rating'];
        meta: {
            name: 'Rating';
        };
    };
    findUnique<T extends RatingFindUniqueArgs>(args: Prisma.SelectSubset<T, RatingFindUniqueArgs<ExtArgs>>): Prisma.Prisma__RatingClient<runtime.Types.Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends RatingFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, RatingFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__RatingClient<runtime.Types.Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends RatingFindFirstArgs>(args?: Prisma.SelectSubset<T, RatingFindFirstArgs<ExtArgs>>): Prisma.Prisma__RatingClient<runtime.Types.Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends RatingFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, RatingFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__RatingClient<runtime.Types.Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends RatingFindManyArgs>(args?: Prisma.SelectSubset<T, RatingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends RatingCreateArgs>(args: Prisma.SelectSubset<T, RatingCreateArgs<ExtArgs>>): Prisma.Prisma__RatingClient<runtime.Types.Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends RatingCreateManyArgs>(args?: Prisma.SelectSubset<T, RatingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends RatingCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, RatingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends RatingDeleteArgs>(args: Prisma.SelectSubset<T, RatingDeleteArgs<ExtArgs>>): Prisma.Prisma__RatingClient<runtime.Types.Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends RatingUpdateArgs>(args: Prisma.SelectSubset<T, RatingUpdateArgs<ExtArgs>>): Prisma.Prisma__RatingClient<runtime.Types.Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends RatingDeleteManyArgs>(args?: Prisma.SelectSubset<T, RatingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends RatingUpdateManyArgs>(args: Prisma.SelectSubset<T, RatingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends RatingUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, RatingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends RatingUpsertArgs>(args: Prisma.SelectSubset<T, RatingUpsertArgs<ExtArgs>>): Prisma.Prisma__RatingClient<runtime.Types.Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends RatingCountArgs>(args?: Prisma.Subset<T, RatingCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], RatingCountAggregateOutputType> : number>;
    aggregate<T extends RatingAggregateArgs>(args: Prisma.Subset<T, RatingAggregateArgs>): Prisma.PrismaPromise<GetRatingAggregateType<T>>;
    groupBy<T extends RatingGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: RatingGroupByArgs['orderBy'];
    } : {
        orderBy?: RatingGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, RatingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRatingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: RatingFieldRefs;
}
export interface Prisma__RatingClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    customer<T extends Prisma.CustomerDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CustomerDefaultArgs<ExtArgs>>): Prisma.Prisma__CustomerClient<runtime.Types.Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    restaurant<T extends Prisma.RestaurantDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.RestaurantDefaultArgs<ExtArgs>>): Prisma.Prisma__RestaurantClient<runtime.Types.Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface RatingFieldRefs {
    readonly ratingId: Prisma.FieldRef<"Rating", 'String'>;
    readonly customerId: Prisma.FieldRef<"Rating", 'String'>;
    readonly restaurantId: Prisma.FieldRef<"Rating", 'String'>;
    readonly ratingScore: Prisma.FieldRef<"Rating", 'RatingScore'>;
    readonly review: Prisma.FieldRef<"Rating", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Rating", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Rating", 'DateTime'>;
}
export type RatingFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RatingSelect<ExtArgs> | null;
    omit?: Prisma.RatingOmit<ExtArgs> | null;
    include?: Prisma.RatingInclude<ExtArgs> | null;
    where: Prisma.RatingWhereUniqueInput;
};
export type RatingFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RatingSelect<ExtArgs> | null;
    omit?: Prisma.RatingOmit<ExtArgs> | null;
    include?: Prisma.RatingInclude<ExtArgs> | null;
    where: Prisma.RatingWhereUniqueInput;
};
export type RatingFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type RatingFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type RatingFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type RatingCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RatingSelect<ExtArgs> | null;
    omit?: Prisma.RatingOmit<ExtArgs> | null;
    include?: Prisma.RatingInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RatingCreateInput, Prisma.RatingUncheckedCreateInput>;
};
export type RatingCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.RatingCreateManyInput | Prisma.RatingCreateManyInput[];
    skipDuplicates?: boolean;
};
export type RatingCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RatingSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RatingOmit<ExtArgs> | null;
    data: Prisma.RatingCreateManyInput | Prisma.RatingCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.RatingIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type RatingUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RatingSelect<ExtArgs> | null;
    omit?: Prisma.RatingOmit<ExtArgs> | null;
    include?: Prisma.RatingInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RatingUpdateInput, Prisma.RatingUncheckedUpdateInput>;
    where: Prisma.RatingWhereUniqueInput;
};
export type RatingUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.RatingUpdateManyMutationInput, Prisma.RatingUncheckedUpdateManyInput>;
    where?: Prisma.RatingWhereInput;
    limit?: number;
};
export type RatingUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RatingSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RatingOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RatingUpdateManyMutationInput, Prisma.RatingUncheckedUpdateManyInput>;
    where?: Prisma.RatingWhereInput;
    limit?: number;
    include?: Prisma.RatingIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type RatingUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RatingSelect<ExtArgs> | null;
    omit?: Prisma.RatingOmit<ExtArgs> | null;
    include?: Prisma.RatingInclude<ExtArgs> | null;
    where: Prisma.RatingWhereUniqueInput;
    create: Prisma.XOR<Prisma.RatingCreateInput, Prisma.RatingUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.RatingUpdateInput, Prisma.RatingUncheckedUpdateInput>;
};
export type RatingDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RatingSelect<ExtArgs> | null;
    omit?: Prisma.RatingOmit<ExtArgs> | null;
    include?: Prisma.RatingInclude<ExtArgs> | null;
    where: Prisma.RatingWhereUniqueInput;
};
export type RatingDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RatingWhereInput;
    limit?: number;
};
export type RatingDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RatingSelect<ExtArgs> | null;
    omit?: Prisma.RatingOmit<ExtArgs> | null;
    include?: Prisma.RatingInclude<ExtArgs> | null;
};
