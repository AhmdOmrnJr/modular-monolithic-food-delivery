import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type RestaurantModel = runtime.Types.Result.DefaultSelection<Prisma.$RestaurantPayload>;
export type AggregateRestaurant = {
    _count: RestaurantCountAggregateOutputType | null;
    _avg: RestaurantAvgAggregateOutputType | null;
    _sum: RestaurantSumAggregateOutputType | null;
    _min: RestaurantMinAggregateOutputType | null;
    _max: RestaurantMaxAggregateOutputType | null;
};
export type RestaurantAvgAggregateOutputType = {
    averageRating: number | null;
    ratingCount: number | null;
};
export type RestaurantSumAggregateOutputType = {
    averageRating: number | null;
    ratingCount: number | null;
};
export type RestaurantMinAggregateOutputType = {
    restaurantId: string | null;
    managerId: string | null;
    restaurantName: string | null;
    restaurantBio: string | null;
    restaurantLogo: string | null;
    isAvailable: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    averageRating: number | null;
    ratingCount: number | null;
};
export type RestaurantMaxAggregateOutputType = {
    restaurantId: string | null;
    managerId: string | null;
    restaurantName: string | null;
    restaurantBio: string | null;
    restaurantLogo: string | null;
    isAvailable: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    averageRating: number | null;
    ratingCount: number | null;
};
export type RestaurantCountAggregateOutputType = {
    restaurantId: number;
    managerId: number;
    restaurantName: number;
    restaurantBio: number;
    restaurantLogo: number;
    isAvailable: number;
    createdAt: number;
    updatedAt: number;
    averageRating: number;
    ratingCount: number;
    addresses: number;
    _all: number;
};
export type RestaurantAvgAggregateInputType = {
    averageRating?: true;
    ratingCount?: true;
};
export type RestaurantSumAggregateInputType = {
    averageRating?: true;
    ratingCount?: true;
};
export type RestaurantMinAggregateInputType = {
    restaurantId?: true;
    managerId?: true;
    restaurantName?: true;
    restaurantBio?: true;
    restaurantLogo?: true;
    isAvailable?: true;
    createdAt?: true;
    updatedAt?: true;
    averageRating?: true;
    ratingCount?: true;
};
export type RestaurantMaxAggregateInputType = {
    restaurantId?: true;
    managerId?: true;
    restaurantName?: true;
    restaurantBio?: true;
    restaurantLogo?: true;
    isAvailable?: true;
    createdAt?: true;
    updatedAt?: true;
    averageRating?: true;
    ratingCount?: true;
};
export type RestaurantCountAggregateInputType = {
    restaurantId?: true;
    managerId?: true;
    restaurantName?: true;
    restaurantBio?: true;
    restaurantLogo?: true;
    isAvailable?: true;
    createdAt?: true;
    updatedAt?: true;
    averageRating?: true;
    ratingCount?: true;
    addresses?: true;
    _all?: true;
};
export type RestaurantAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RestaurantWhereInput;
    orderBy?: Prisma.RestaurantOrderByWithRelationInput | Prisma.RestaurantOrderByWithRelationInput[];
    cursor?: Prisma.RestaurantWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | RestaurantCountAggregateInputType;
    _avg?: RestaurantAvgAggregateInputType;
    _sum?: RestaurantSumAggregateInputType;
    _min?: RestaurantMinAggregateInputType;
    _max?: RestaurantMaxAggregateInputType;
};
export type GetRestaurantAggregateType<T extends RestaurantAggregateArgs> = {
    [P in keyof T & keyof AggregateRestaurant]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateRestaurant[P]> : Prisma.GetScalarType<T[P], AggregateRestaurant[P]>;
};
export type RestaurantGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RestaurantWhereInput;
    orderBy?: Prisma.RestaurantOrderByWithAggregationInput | Prisma.RestaurantOrderByWithAggregationInput[];
    by: Prisma.RestaurantScalarFieldEnum[] | Prisma.RestaurantScalarFieldEnum;
    having?: Prisma.RestaurantScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RestaurantCountAggregateInputType | true;
    _avg?: RestaurantAvgAggregateInputType;
    _sum?: RestaurantSumAggregateInputType;
    _min?: RestaurantMinAggregateInputType;
    _max?: RestaurantMaxAggregateInputType;
};
export type RestaurantGroupByOutputType = {
    restaurantId: string;
    managerId: string;
    restaurantName: string;
    restaurantBio: string;
    restaurantLogo: string | null;
    isAvailable: boolean;
    createdAt: Date;
    updatedAt: Date;
    averageRating: number;
    ratingCount: number;
    addresses: runtime.JsonValue | null;
    _count: RestaurantCountAggregateOutputType | null;
    _avg: RestaurantAvgAggregateOutputType | null;
    _sum: RestaurantSumAggregateOutputType | null;
    _min: RestaurantMinAggregateOutputType | null;
    _max: RestaurantMaxAggregateOutputType | null;
};
export type GetRestaurantGroupByPayload<T extends RestaurantGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<RestaurantGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof RestaurantGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], RestaurantGroupByOutputType[P]> : Prisma.GetScalarType<T[P], RestaurantGroupByOutputType[P]>;
}>>;
export type RestaurantWhereInput = {
    AND?: Prisma.RestaurantWhereInput | Prisma.RestaurantWhereInput[];
    OR?: Prisma.RestaurantWhereInput[];
    NOT?: Prisma.RestaurantWhereInput | Prisma.RestaurantWhereInput[];
    restaurantId?: Prisma.StringFilter<"Restaurant"> | string;
    managerId?: Prisma.StringFilter<"Restaurant"> | string;
    restaurantName?: Prisma.StringFilter<"Restaurant"> | string;
    restaurantBio?: Prisma.StringFilter<"Restaurant"> | string;
    restaurantLogo?: Prisma.StringNullableFilter<"Restaurant"> | string | null;
    isAvailable?: Prisma.BoolFilter<"Restaurant"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Restaurant"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Restaurant"> | Date | string;
    averageRating?: Prisma.FloatFilter<"Restaurant"> | number;
    ratingCount?: Prisma.IntFilter<"Restaurant"> | number;
    addresses?: Prisma.JsonNullableFilter<"Restaurant">;
    manager?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    menu?: Prisma.XOR<Prisma.MenuNullableScalarRelationFilter, Prisma.MenuWhereInput> | null;
    rating?: Prisma.RatingListRelationFilter;
    orders?: Prisma.OrderListRelationFilter;
};
export type RestaurantOrderByWithRelationInput = {
    restaurantId?: Prisma.SortOrder;
    managerId?: Prisma.SortOrder;
    restaurantName?: Prisma.SortOrder;
    restaurantBio?: Prisma.SortOrder;
    restaurantLogo?: Prisma.SortOrderInput | Prisma.SortOrder;
    isAvailable?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    averageRating?: Prisma.SortOrder;
    ratingCount?: Prisma.SortOrder;
    addresses?: Prisma.SortOrderInput | Prisma.SortOrder;
    manager?: Prisma.UserOrderByWithRelationInput;
    menu?: Prisma.MenuOrderByWithRelationInput;
    rating?: Prisma.RatingOrderByRelationAggregateInput;
    orders?: Prisma.OrderOrderByRelationAggregateInput;
};
export type RestaurantWhereUniqueInput = Prisma.AtLeast<{
    restaurantId?: string;
    managerId?: string;
    restaurantName?: string;
    AND?: Prisma.RestaurantWhereInput | Prisma.RestaurantWhereInput[];
    OR?: Prisma.RestaurantWhereInput[];
    NOT?: Prisma.RestaurantWhereInput | Prisma.RestaurantWhereInput[];
    restaurantBio?: Prisma.StringFilter<"Restaurant"> | string;
    restaurantLogo?: Prisma.StringNullableFilter<"Restaurant"> | string | null;
    isAvailable?: Prisma.BoolFilter<"Restaurant"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Restaurant"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Restaurant"> | Date | string;
    averageRating?: Prisma.FloatFilter<"Restaurant"> | number;
    ratingCount?: Prisma.IntFilter<"Restaurant"> | number;
    addresses?: Prisma.JsonNullableFilter<"Restaurant">;
    manager?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    menu?: Prisma.XOR<Prisma.MenuNullableScalarRelationFilter, Prisma.MenuWhereInput> | null;
    rating?: Prisma.RatingListRelationFilter;
    orders?: Prisma.OrderListRelationFilter;
}, "restaurantId" | "managerId" | "restaurantName">;
export type RestaurantOrderByWithAggregationInput = {
    restaurantId?: Prisma.SortOrder;
    managerId?: Prisma.SortOrder;
    restaurantName?: Prisma.SortOrder;
    restaurantBio?: Prisma.SortOrder;
    restaurantLogo?: Prisma.SortOrderInput | Prisma.SortOrder;
    isAvailable?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    averageRating?: Prisma.SortOrder;
    ratingCount?: Prisma.SortOrder;
    addresses?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.RestaurantCountOrderByAggregateInput;
    _avg?: Prisma.RestaurantAvgOrderByAggregateInput;
    _max?: Prisma.RestaurantMaxOrderByAggregateInput;
    _min?: Prisma.RestaurantMinOrderByAggregateInput;
    _sum?: Prisma.RestaurantSumOrderByAggregateInput;
};
export type RestaurantScalarWhereWithAggregatesInput = {
    AND?: Prisma.RestaurantScalarWhereWithAggregatesInput | Prisma.RestaurantScalarWhereWithAggregatesInput[];
    OR?: Prisma.RestaurantScalarWhereWithAggregatesInput[];
    NOT?: Prisma.RestaurantScalarWhereWithAggregatesInput | Prisma.RestaurantScalarWhereWithAggregatesInput[];
    restaurantId?: Prisma.StringWithAggregatesFilter<"Restaurant"> | string;
    managerId?: Prisma.StringWithAggregatesFilter<"Restaurant"> | string;
    restaurantName?: Prisma.StringWithAggregatesFilter<"Restaurant"> | string;
    restaurantBio?: Prisma.StringWithAggregatesFilter<"Restaurant"> | string;
    restaurantLogo?: Prisma.StringNullableWithAggregatesFilter<"Restaurant"> | string | null;
    isAvailable?: Prisma.BoolWithAggregatesFilter<"Restaurant"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Restaurant"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Restaurant"> | Date | string;
    averageRating?: Prisma.FloatWithAggregatesFilter<"Restaurant"> | number;
    ratingCount?: Prisma.IntWithAggregatesFilter<"Restaurant"> | number;
    addresses?: Prisma.JsonNullableWithAggregatesFilter<"Restaurant">;
};
export type RestaurantCreateInput = {
    restaurantId?: string;
    restaurantName: string;
    restaurantBio: string;
    restaurantLogo?: string | null;
    isAvailable?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    averageRating?: number;
    ratingCount?: number;
    addresses?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    manager: Prisma.UserCreateNestedOneWithoutRestaurantInput;
    menu?: Prisma.MenuCreateNestedOneWithoutRestaurantInput;
    rating?: Prisma.RatingCreateNestedManyWithoutRestaurantInput;
    orders?: Prisma.OrderCreateNestedManyWithoutRestaurantInput;
};
export type RestaurantUncheckedCreateInput = {
    restaurantId?: string;
    managerId: string;
    restaurantName: string;
    restaurantBio: string;
    restaurantLogo?: string | null;
    isAvailable?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    averageRating?: number;
    ratingCount?: number;
    addresses?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    menu?: Prisma.MenuUncheckedCreateNestedOneWithoutRestaurantInput;
    rating?: Prisma.RatingUncheckedCreateNestedManyWithoutRestaurantInput;
    orders?: Prisma.OrderUncheckedCreateNestedManyWithoutRestaurantInput;
};
export type RestaurantUpdateInput = {
    restaurantId?: Prisma.StringFieldUpdateOperationsInput | string;
    restaurantName?: Prisma.StringFieldUpdateOperationsInput | string;
    restaurantBio?: Prisma.StringFieldUpdateOperationsInput | string;
    restaurantLogo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isAvailable?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    averageRating?: Prisma.FloatFieldUpdateOperationsInput | number;
    ratingCount?: Prisma.IntFieldUpdateOperationsInput | number;
    addresses?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    manager?: Prisma.UserUpdateOneRequiredWithoutRestaurantNestedInput;
    menu?: Prisma.MenuUpdateOneWithoutRestaurantNestedInput;
    rating?: Prisma.RatingUpdateManyWithoutRestaurantNestedInput;
    orders?: Prisma.OrderUpdateManyWithoutRestaurantNestedInput;
};
export type RestaurantUncheckedUpdateInput = {
    restaurantId?: Prisma.StringFieldUpdateOperationsInput | string;
    managerId?: Prisma.StringFieldUpdateOperationsInput | string;
    restaurantName?: Prisma.StringFieldUpdateOperationsInput | string;
    restaurantBio?: Prisma.StringFieldUpdateOperationsInput | string;
    restaurantLogo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isAvailable?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    averageRating?: Prisma.FloatFieldUpdateOperationsInput | number;
    ratingCount?: Prisma.IntFieldUpdateOperationsInput | number;
    addresses?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    menu?: Prisma.MenuUncheckedUpdateOneWithoutRestaurantNestedInput;
    rating?: Prisma.RatingUncheckedUpdateManyWithoutRestaurantNestedInput;
    orders?: Prisma.OrderUncheckedUpdateManyWithoutRestaurantNestedInput;
};
export type RestaurantCreateManyInput = {
    restaurantId?: string;
    managerId: string;
    restaurantName: string;
    restaurantBio: string;
    restaurantLogo?: string | null;
    isAvailable?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    averageRating?: number;
    ratingCount?: number;
    addresses?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
};
export type RestaurantUpdateManyMutationInput = {
    restaurantId?: Prisma.StringFieldUpdateOperationsInput | string;
    restaurantName?: Prisma.StringFieldUpdateOperationsInput | string;
    restaurantBio?: Prisma.StringFieldUpdateOperationsInput | string;
    restaurantLogo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isAvailable?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    averageRating?: Prisma.FloatFieldUpdateOperationsInput | number;
    ratingCount?: Prisma.IntFieldUpdateOperationsInput | number;
    addresses?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
};
export type RestaurantUncheckedUpdateManyInput = {
    restaurantId?: Prisma.StringFieldUpdateOperationsInput | string;
    managerId?: Prisma.StringFieldUpdateOperationsInput | string;
    restaurantName?: Prisma.StringFieldUpdateOperationsInput | string;
    restaurantBio?: Prisma.StringFieldUpdateOperationsInput | string;
    restaurantLogo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isAvailable?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    averageRating?: Prisma.FloatFieldUpdateOperationsInput | number;
    ratingCount?: Prisma.IntFieldUpdateOperationsInput | number;
    addresses?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
};
export type RestaurantNullableScalarRelationFilter = {
    is?: Prisma.RestaurantWhereInput | null;
    isNot?: Prisma.RestaurantWhereInput | null;
};
export type RestaurantCountOrderByAggregateInput = {
    restaurantId?: Prisma.SortOrder;
    managerId?: Prisma.SortOrder;
    restaurantName?: Prisma.SortOrder;
    restaurantBio?: Prisma.SortOrder;
    restaurantLogo?: Prisma.SortOrder;
    isAvailable?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    averageRating?: Prisma.SortOrder;
    ratingCount?: Prisma.SortOrder;
    addresses?: Prisma.SortOrder;
};
export type RestaurantAvgOrderByAggregateInput = {
    averageRating?: Prisma.SortOrder;
    ratingCount?: Prisma.SortOrder;
};
export type RestaurantMaxOrderByAggregateInput = {
    restaurantId?: Prisma.SortOrder;
    managerId?: Prisma.SortOrder;
    restaurantName?: Prisma.SortOrder;
    restaurantBio?: Prisma.SortOrder;
    restaurantLogo?: Prisma.SortOrder;
    isAvailable?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    averageRating?: Prisma.SortOrder;
    ratingCount?: Prisma.SortOrder;
};
export type RestaurantMinOrderByAggregateInput = {
    restaurantId?: Prisma.SortOrder;
    managerId?: Prisma.SortOrder;
    restaurantName?: Prisma.SortOrder;
    restaurantBio?: Prisma.SortOrder;
    restaurantLogo?: Prisma.SortOrder;
    isAvailable?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    averageRating?: Prisma.SortOrder;
    ratingCount?: Prisma.SortOrder;
};
export type RestaurantSumOrderByAggregateInput = {
    averageRating?: Prisma.SortOrder;
    ratingCount?: Prisma.SortOrder;
};
export type RestaurantScalarRelationFilter = {
    is?: Prisma.RestaurantWhereInput;
    isNot?: Prisma.RestaurantWhereInput;
};
export type RestaurantCreateNestedOneWithoutManagerInput = {
    create?: Prisma.XOR<Prisma.RestaurantCreateWithoutManagerInput, Prisma.RestaurantUncheckedCreateWithoutManagerInput>;
    connectOrCreate?: Prisma.RestaurantCreateOrConnectWithoutManagerInput;
    connect?: Prisma.RestaurantWhereUniqueInput;
};
export type RestaurantUncheckedCreateNestedOneWithoutManagerInput = {
    create?: Prisma.XOR<Prisma.RestaurantCreateWithoutManagerInput, Prisma.RestaurantUncheckedCreateWithoutManagerInput>;
    connectOrCreate?: Prisma.RestaurantCreateOrConnectWithoutManagerInput;
    connect?: Prisma.RestaurantWhereUniqueInput;
};
export type RestaurantUpdateOneWithoutManagerNestedInput = {
    create?: Prisma.XOR<Prisma.RestaurantCreateWithoutManagerInput, Prisma.RestaurantUncheckedCreateWithoutManagerInput>;
    connectOrCreate?: Prisma.RestaurantCreateOrConnectWithoutManagerInput;
    upsert?: Prisma.RestaurantUpsertWithoutManagerInput;
    disconnect?: Prisma.RestaurantWhereInput | boolean;
    delete?: Prisma.RestaurantWhereInput | boolean;
    connect?: Prisma.RestaurantWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.RestaurantUpdateToOneWithWhereWithoutManagerInput, Prisma.RestaurantUpdateWithoutManagerInput>, Prisma.RestaurantUncheckedUpdateWithoutManagerInput>;
};
export type RestaurantUncheckedUpdateOneWithoutManagerNestedInput = {
    create?: Prisma.XOR<Prisma.RestaurantCreateWithoutManagerInput, Prisma.RestaurantUncheckedCreateWithoutManagerInput>;
    connectOrCreate?: Prisma.RestaurantCreateOrConnectWithoutManagerInput;
    upsert?: Prisma.RestaurantUpsertWithoutManagerInput;
    disconnect?: Prisma.RestaurantWhereInput | boolean;
    delete?: Prisma.RestaurantWhereInput | boolean;
    connect?: Prisma.RestaurantWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.RestaurantUpdateToOneWithWhereWithoutManagerInput, Prisma.RestaurantUpdateWithoutManagerInput>, Prisma.RestaurantUncheckedUpdateWithoutManagerInput>;
};
export type FloatFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type RestaurantCreateNestedOneWithoutMenuInput = {
    create?: Prisma.XOR<Prisma.RestaurantCreateWithoutMenuInput, Prisma.RestaurantUncheckedCreateWithoutMenuInput>;
    connectOrCreate?: Prisma.RestaurantCreateOrConnectWithoutMenuInput;
    connect?: Prisma.RestaurantWhereUniqueInput;
};
export type RestaurantUpdateOneRequiredWithoutMenuNestedInput = {
    create?: Prisma.XOR<Prisma.RestaurantCreateWithoutMenuInput, Prisma.RestaurantUncheckedCreateWithoutMenuInput>;
    connectOrCreate?: Prisma.RestaurantCreateOrConnectWithoutMenuInput;
    upsert?: Prisma.RestaurantUpsertWithoutMenuInput;
    connect?: Prisma.RestaurantWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.RestaurantUpdateToOneWithWhereWithoutMenuInput, Prisma.RestaurantUpdateWithoutMenuInput>, Prisma.RestaurantUncheckedUpdateWithoutMenuInput>;
};
export type RestaurantCreateNestedOneWithoutOrdersInput = {
    create?: Prisma.XOR<Prisma.RestaurantCreateWithoutOrdersInput, Prisma.RestaurantUncheckedCreateWithoutOrdersInput>;
    connectOrCreate?: Prisma.RestaurantCreateOrConnectWithoutOrdersInput;
    connect?: Prisma.RestaurantWhereUniqueInput;
};
export type RestaurantUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: Prisma.XOR<Prisma.RestaurantCreateWithoutOrdersInput, Prisma.RestaurantUncheckedCreateWithoutOrdersInput>;
    connectOrCreate?: Prisma.RestaurantCreateOrConnectWithoutOrdersInput;
    upsert?: Prisma.RestaurantUpsertWithoutOrdersInput;
    connect?: Prisma.RestaurantWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.RestaurantUpdateToOneWithWhereWithoutOrdersInput, Prisma.RestaurantUpdateWithoutOrdersInput>, Prisma.RestaurantUncheckedUpdateWithoutOrdersInput>;
};
export type RestaurantCreateNestedOneWithoutRatingInput = {
    create?: Prisma.XOR<Prisma.RestaurantCreateWithoutRatingInput, Prisma.RestaurantUncheckedCreateWithoutRatingInput>;
    connectOrCreate?: Prisma.RestaurantCreateOrConnectWithoutRatingInput;
    connect?: Prisma.RestaurantWhereUniqueInput;
};
export type RestaurantUpdateOneRequiredWithoutRatingNestedInput = {
    create?: Prisma.XOR<Prisma.RestaurantCreateWithoutRatingInput, Prisma.RestaurantUncheckedCreateWithoutRatingInput>;
    connectOrCreate?: Prisma.RestaurantCreateOrConnectWithoutRatingInput;
    upsert?: Prisma.RestaurantUpsertWithoutRatingInput;
    connect?: Prisma.RestaurantWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.RestaurantUpdateToOneWithWhereWithoutRatingInput, Prisma.RestaurantUpdateWithoutRatingInput>, Prisma.RestaurantUncheckedUpdateWithoutRatingInput>;
};
export type RestaurantCreateWithoutManagerInput = {
    restaurantId?: string;
    restaurantName: string;
    restaurantBio: string;
    restaurantLogo?: string | null;
    isAvailable?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    averageRating?: number;
    ratingCount?: number;
    addresses?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    menu?: Prisma.MenuCreateNestedOneWithoutRestaurantInput;
    rating?: Prisma.RatingCreateNestedManyWithoutRestaurantInput;
    orders?: Prisma.OrderCreateNestedManyWithoutRestaurantInput;
};
export type RestaurantUncheckedCreateWithoutManagerInput = {
    restaurantId?: string;
    restaurantName: string;
    restaurantBio: string;
    restaurantLogo?: string | null;
    isAvailable?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    averageRating?: number;
    ratingCount?: number;
    addresses?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    menu?: Prisma.MenuUncheckedCreateNestedOneWithoutRestaurantInput;
    rating?: Prisma.RatingUncheckedCreateNestedManyWithoutRestaurantInput;
    orders?: Prisma.OrderUncheckedCreateNestedManyWithoutRestaurantInput;
};
export type RestaurantCreateOrConnectWithoutManagerInput = {
    where: Prisma.RestaurantWhereUniqueInput;
    create: Prisma.XOR<Prisma.RestaurantCreateWithoutManagerInput, Prisma.RestaurantUncheckedCreateWithoutManagerInput>;
};
export type RestaurantUpsertWithoutManagerInput = {
    update: Prisma.XOR<Prisma.RestaurantUpdateWithoutManagerInput, Prisma.RestaurantUncheckedUpdateWithoutManagerInput>;
    create: Prisma.XOR<Prisma.RestaurantCreateWithoutManagerInput, Prisma.RestaurantUncheckedCreateWithoutManagerInput>;
    where?: Prisma.RestaurantWhereInput;
};
export type RestaurantUpdateToOneWithWhereWithoutManagerInput = {
    where?: Prisma.RestaurantWhereInput;
    data: Prisma.XOR<Prisma.RestaurantUpdateWithoutManagerInput, Prisma.RestaurantUncheckedUpdateWithoutManagerInput>;
};
export type RestaurantUpdateWithoutManagerInput = {
    restaurantId?: Prisma.StringFieldUpdateOperationsInput | string;
    restaurantName?: Prisma.StringFieldUpdateOperationsInput | string;
    restaurantBio?: Prisma.StringFieldUpdateOperationsInput | string;
    restaurantLogo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isAvailable?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    averageRating?: Prisma.FloatFieldUpdateOperationsInput | number;
    ratingCount?: Prisma.IntFieldUpdateOperationsInput | number;
    addresses?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    menu?: Prisma.MenuUpdateOneWithoutRestaurantNestedInput;
    rating?: Prisma.RatingUpdateManyWithoutRestaurantNestedInput;
    orders?: Prisma.OrderUpdateManyWithoutRestaurantNestedInput;
};
export type RestaurantUncheckedUpdateWithoutManagerInput = {
    restaurantId?: Prisma.StringFieldUpdateOperationsInput | string;
    restaurantName?: Prisma.StringFieldUpdateOperationsInput | string;
    restaurantBio?: Prisma.StringFieldUpdateOperationsInput | string;
    restaurantLogo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isAvailable?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    averageRating?: Prisma.FloatFieldUpdateOperationsInput | number;
    ratingCount?: Prisma.IntFieldUpdateOperationsInput | number;
    addresses?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    menu?: Prisma.MenuUncheckedUpdateOneWithoutRestaurantNestedInput;
    rating?: Prisma.RatingUncheckedUpdateManyWithoutRestaurantNestedInput;
    orders?: Prisma.OrderUncheckedUpdateManyWithoutRestaurantNestedInput;
};
export type RestaurantCreateWithoutMenuInput = {
    restaurantId?: string;
    restaurantName: string;
    restaurantBio: string;
    restaurantLogo?: string | null;
    isAvailable?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    averageRating?: number;
    ratingCount?: number;
    addresses?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    manager: Prisma.UserCreateNestedOneWithoutRestaurantInput;
    rating?: Prisma.RatingCreateNestedManyWithoutRestaurantInput;
    orders?: Prisma.OrderCreateNestedManyWithoutRestaurantInput;
};
export type RestaurantUncheckedCreateWithoutMenuInput = {
    restaurantId?: string;
    managerId: string;
    restaurantName: string;
    restaurantBio: string;
    restaurantLogo?: string | null;
    isAvailable?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    averageRating?: number;
    ratingCount?: number;
    addresses?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    rating?: Prisma.RatingUncheckedCreateNestedManyWithoutRestaurantInput;
    orders?: Prisma.OrderUncheckedCreateNestedManyWithoutRestaurantInput;
};
export type RestaurantCreateOrConnectWithoutMenuInput = {
    where: Prisma.RestaurantWhereUniqueInput;
    create: Prisma.XOR<Prisma.RestaurantCreateWithoutMenuInput, Prisma.RestaurantUncheckedCreateWithoutMenuInput>;
};
export type RestaurantUpsertWithoutMenuInput = {
    update: Prisma.XOR<Prisma.RestaurantUpdateWithoutMenuInput, Prisma.RestaurantUncheckedUpdateWithoutMenuInput>;
    create: Prisma.XOR<Prisma.RestaurantCreateWithoutMenuInput, Prisma.RestaurantUncheckedCreateWithoutMenuInput>;
    where?: Prisma.RestaurantWhereInput;
};
export type RestaurantUpdateToOneWithWhereWithoutMenuInput = {
    where?: Prisma.RestaurantWhereInput;
    data: Prisma.XOR<Prisma.RestaurantUpdateWithoutMenuInput, Prisma.RestaurantUncheckedUpdateWithoutMenuInput>;
};
export type RestaurantUpdateWithoutMenuInput = {
    restaurantId?: Prisma.StringFieldUpdateOperationsInput | string;
    restaurantName?: Prisma.StringFieldUpdateOperationsInput | string;
    restaurantBio?: Prisma.StringFieldUpdateOperationsInput | string;
    restaurantLogo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isAvailable?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    averageRating?: Prisma.FloatFieldUpdateOperationsInput | number;
    ratingCount?: Prisma.IntFieldUpdateOperationsInput | number;
    addresses?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    manager?: Prisma.UserUpdateOneRequiredWithoutRestaurantNestedInput;
    rating?: Prisma.RatingUpdateManyWithoutRestaurantNestedInput;
    orders?: Prisma.OrderUpdateManyWithoutRestaurantNestedInput;
};
export type RestaurantUncheckedUpdateWithoutMenuInput = {
    restaurantId?: Prisma.StringFieldUpdateOperationsInput | string;
    managerId?: Prisma.StringFieldUpdateOperationsInput | string;
    restaurantName?: Prisma.StringFieldUpdateOperationsInput | string;
    restaurantBio?: Prisma.StringFieldUpdateOperationsInput | string;
    restaurantLogo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isAvailable?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    averageRating?: Prisma.FloatFieldUpdateOperationsInput | number;
    ratingCount?: Prisma.IntFieldUpdateOperationsInput | number;
    addresses?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    rating?: Prisma.RatingUncheckedUpdateManyWithoutRestaurantNestedInput;
    orders?: Prisma.OrderUncheckedUpdateManyWithoutRestaurantNestedInput;
};
export type RestaurantCreateWithoutOrdersInput = {
    restaurantId?: string;
    restaurantName: string;
    restaurantBio: string;
    restaurantLogo?: string | null;
    isAvailable?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    averageRating?: number;
    ratingCount?: number;
    addresses?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    manager: Prisma.UserCreateNestedOneWithoutRestaurantInput;
    menu?: Prisma.MenuCreateNestedOneWithoutRestaurantInput;
    rating?: Prisma.RatingCreateNestedManyWithoutRestaurantInput;
};
export type RestaurantUncheckedCreateWithoutOrdersInput = {
    restaurantId?: string;
    managerId: string;
    restaurantName: string;
    restaurantBio: string;
    restaurantLogo?: string | null;
    isAvailable?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    averageRating?: number;
    ratingCount?: number;
    addresses?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    menu?: Prisma.MenuUncheckedCreateNestedOneWithoutRestaurantInput;
    rating?: Prisma.RatingUncheckedCreateNestedManyWithoutRestaurantInput;
};
export type RestaurantCreateOrConnectWithoutOrdersInput = {
    where: Prisma.RestaurantWhereUniqueInput;
    create: Prisma.XOR<Prisma.RestaurantCreateWithoutOrdersInput, Prisma.RestaurantUncheckedCreateWithoutOrdersInput>;
};
export type RestaurantUpsertWithoutOrdersInput = {
    update: Prisma.XOR<Prisma.RestaurantUpdateWithoutOrdersInput, Prisma.RestaurantUncheckedUpdateWithoutOrdersInput>;
    create: Prisma.XOR<Prisma.RestaurantCreateWithoutOrdersInput, Prisma.RestaurantUncheckedCreateWithoutOrdersInput>;
    where?: Prisma.RestaurantWhereInput;
};
export type RestaurantUpdateToOneWithWhereWithoutOrdersInput = {
    where?: Prisma.RestaurantWhereInput;
    data: Prisma.XOR<Prisma.RestaurantUpdateWithoutOrdersInput, Prisma.RestaurantUncheckedUpdateWithoutOrdersInput>;
};
export type RestaurantUpdateWithoutOrdersInput = {
    restaurantId?: Prisma.StringFieldUpdateOperationsInput | string;
    restaurantName?: Prisma.StringFieldUpdateOperationsInput | string;
    restaurantBio?: Prisma.StringFieldUpdateOperationsInput | string;
    restaurantLogo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isAvailable?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    averageRating?: Prisma.FloatFieldUpdateOperationsInput | number;
    ratingCount?: Prisma.IntFieldUpdateOperationsInput | number;
    addresses?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    manager?: Prisma.UserUpdateOneRequiredWithoutRestaurantNestedInput;
    menu?: Prisma.MenuUpdateOneWithoutRestaurantNestedInput;
    rating?: Prisma.RatingUpdateManyWithoutRestaurantNestedInput;
};
export type RestaurantUncheckedUpdateWithoutOrdersInput = {
    restaurantId?: Prisma.StringFieldUpdateOperationsInput | string;
    managerId?: Prisma.StringFieldUpdateOperationsInput | string;
    restaurantName?: Prisma.StringFieldUpdateOperationsInput | string;
    restaurantBio?: Prisma.StringFieldUpdateOperationsInput | string;
    restaurantLogo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isAvailable?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    averageRating?: Prisma.FloatFieldUpdateOperationsInput | number;
    ratingCount?: Prisma.IntFieldUpdateOperationsInput | number;
    addresses?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    menu?: Prisma.MenuUncheckedUpdateOneWithoutRestaurantNestedInput;
    rating?: Prisma.RatingUncheckedUpdateManyWithoutRestaurantNestedInput;
};
export type RestaurantCreateWithoutRatingInput = {
    restaurantId?: string;
    restaurantName: string;
    restaurantBio: string;
    restaurantLogo?: string | null;
    isAvailable?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    averageRating?: number;
    ratingCount?: number;
    addresses?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    manager: Prisma.UserCreateNestedOneWithoutRestaurantInput;
    menu?: Prisma.MenuCreateNestedOneWithoutRestaurantInput;
    orders?: Prisma.OrderCreateNestedManyWithoutRestaurantInput;
};
export type RestaurantUncheckedCreateWithoutRatingInput = {
    restaurantId?: string;
    managerId: string;
    restaurantName: string;
    restaurantBio: string;
    restaurantLogo?: string | null;
    isAvailable?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    averageRating?: number;
    ratingCount?: number;
    addresses?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    menu?: Prisma.MenuUncheckedCreateNestedOneWithoutRestaurantInput;
    orders?: Prisma.OrderUncheckedCreateNestedManyWithoutRestaurantInput;
};
export type RestaurantCreateOrConnectWithoutRatingInput = {
    where: Prisma.RestaurantWhereUniqueInput;
    create: Prisma.XOR<Prisma.RestaurantCreateWithoutRatingInput, Prisma.RestaurantUncheckedCreateWithoutRatingInput>;
};
export type RestaurantUpsertWithoutRatingInput = {
    update: Prisma.XOR<Prisma.RestaurantUpdateWithoutRatingInput, Prisma.RestaurantUncheckedUpdateWithoutRatingInput>;
    create: Prisma.XOR<Prisma.RestaurantCreateWithoutRatingInput, Prisma.RestaurantUncheckedCreateWithoutRatingInput>;
    where?: Prisma.RestaurantWhereInput;
};
export type RestaurantUpdateToOneWithWhereWithoutRatingInput = {
    where?: Prisma.RestaurantWhereInput;
    data: Prisma.XOR<Prisma.RestaurantUpdateWithoutRatingInput, Prisma.RestaurantUncheckedUpdateWithoutRatingInput>;
};
export type RestaurantUpdateWithoutRatingInput = {
    restaurantId?: Prisma.StringFieldUpdateOperationsInput | string;
    restaurantName?: Prisma.StringFieldUpdateOperationsInput | string;
    restaurantBio?: Prisma.StringFieldUpdateOperationsInput | string;
    restaurantLogo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isAvailable?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    averageRating?: Prisma.FloatFieldUpdateOperationsInput | number;
    ratingCount?: Prisma.IntFieldUpdateOperationsInput | number;
    addresses?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    manager?: Prisma.UserUpdateOneRequiredWithoutRestaurantNestedInput;
    menu?: Prisma.MenuUpdateOneWithoutRestaurantNestedInput;
    orders?: Prisma.OrderUpdateManyWithoutRestaurantNestedInput;
};
export type RestaurantUncheckedUpdateWithoutRatingInput = {
    restaurantId?: Prisma.StringFieldUpdateOperationsInput | string;
    managerId?: Prisma.StringFieldUpdateOperationsInput | string;
    restaurantName?: Prisma.StringFieldUpdateOperationsInput | string;
    restaurantBio?: Prisma.StringFieldUpdateOperationsInput | string;
    restaurantLogo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isAvailable?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    averageRating?: Prisma.FloatFieldUpdateOperationsInput | number;
    ratingCount?: Prisma.IntFieldUpdateOperationsInput | number;
    addresses?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    menu?: Prisma.MenuUncheckedUpdateOneWithoutRestaurantNestedInput;
    orders?: Prisma.OrderUncheckedUpdateManyWithoutRestaurantNestedInput;
};
export type RestaurantCountOutputType = {
    rating: number;
    orders: number;
};
export type RestaurantCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rating?: boolean | RestaurantCountOutputTypeCountRatingArgs;
    orders?: boolean | RestaurantCountOutputTypeCountOrdersArgs;
};
export type RestaurantCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RestaurantCountOutputTypeSelect<ExtArgs> | null;
};
export type RestaurantCountOutputTypeCountRatingArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RatingWhereInput;
};
export type RestaurantCountOutputTypeCountOrdersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderWhereInput;
};
export type RestaurantSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    restaurantId?: boolean;
    managerId?: boolean;
    restaurantName?: boolean;
    restaurantBio?: boolean;
    restaurantLogo?: boolean;
    isAvailable?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    averageRating?: boolean;
    ratingCount?: boolean;
    addresses?: boolean;
    manager?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    menu?: boolean | Prisma.Restaurant$menuArgs<ExtArgs>;
    rating?: boolean | Prisma.Restaurant$ratingArgs<ExtArgs>;
    orders?: boolean | Prisma.Restaurant$ordersArgs<ExtArgs>;
    _count?: boolean | Prisma.RestaurantCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["restaurant"]>;
export type RestaurantSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    restaurantId?: boolean;
    managerId?: boolean;
    restaurantName?: boolean;
    restaurantBio?: boolean;
    restaurantLogo?: boolean;
    isAvailable?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    averageRating?: boolean;
    ratingCount?: boolean;
    addresses?: boolean;
    manager?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["restaurant"]>;
export type RestaurantSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    restaurantId?: boolean;
    managerId?: boolean;
    restaurantName?: boolean;
    restaurantBio?: boolean;
    restaurantLogo?: boolean;
    isAvailable?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    averageRating?: boolean;
    ratingCount?: boolean;
    addresses?: boolean;
    manager?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["restaurant"]>;
export type RestaurantSelectScalar = {
    restaurantId?: boolean;
    managerId?: boolean;
    restaurantName?: boolean;
    restaurantBio?: boolean;
    restaurantLogo?: boolean;
    isAvailable?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    averageRating?: boolean;
    ratingCount?: boolean;
    addresses?: boolean;
};
export type RestaurantOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"restaurantId" | "managerId" | "restaurantName" | "restaurantBio" | "restaurantLogo" | "isAvailable" | "createdAt" | "updatedAt" | "averageRating" | "ratingCount" | "addresses", ExtArgs["result"]["restaurant"]>;
export type RestaurantInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    manager?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    menu?: boolean | Prisma.Restaurant$menuArgs<ExtArgs>;
    rating?: boolean | Prisma.Restaurant$ratingArgs<ExtArgs>;
    orders?: boolean | Prisma.Restaurant$ordersArgs<ExtArgs>;
    _count?: boolean | Prisma.RestaurantCountOutputTypeDefaultArgs<ExtArgs>;
};
export type RestaurantIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    manager?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type RestaurantIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    manager?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $RestaurantPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Restaurant";
    objects: {
        manager: Prisma.$UserPayload<ExtArgs>;
        menu: Prisma.$MenuPayload<ExtArgs> | null;
        rating: Prisma.$RatingPayload<ExtArgs>[];
        orders: Prisma.$OrderPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        restaurantId: string;
        managerId: string;
        restaurantName: string;
        restaurantBio: string;
        restaurantLogo: string | null;
        isAvailable: boolean;
        createdAt: Date;
        updatedAt: Date;
        averageRating: number;
        ratingCount: number;
        addresses: runtime.JsonValue | null;
    }, ExtArgs["result"]["restaurant"]>;
    composites: {};
};
export type RestaurantGetPayload<S extends boolean | null | undefined | RestaurantDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$RestaurantPayload, S>;
export type RestaurantCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<RestaurantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: RestaurantCountAggregateInputType | true;
};
export interface RestaurantDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Restaurant'];
        meta: {
            name: 'Restaurant';
        };
    };
    findUnique<T extends RestaurantFindUniqueArgs>(args: Prisma.SelectSubset<T, RestaurantFindUniqueArgs<ExtArgs>>): Prisma.Prisma__RestaurantClient<runtime.Types.Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends RestaurantFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, RestaurantFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__RestaurantClient<runtime.Types.Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends RestaurantFindFirstArgs>(args?: Prisma.SelectSubset<T, RestaurantFindFirstArgs<ExtArgs>>): Prisma.Prisma__RestaurantClient<runtime.Types.Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends RestaurantFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, RestaurantFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__RestaurantClient<runtime.Types.Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends RestaurantFindManyArgs>(args?: Prisma.SelectSubset<T, RestaurantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends RestaurantCreateArgs>(args: Prisma.SelectSubset<T, RestaurantCreateArgs<ExtArgs>>): Prisma.Prisma__RestaurantClient<runtime.Types.Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends RestaurantCreateManyArgs>(args?: Prisma.SelectSubset<T, RestaurantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends RestaurantCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, RestaurantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends RestaurantDeleteArgs>(args: Prisma.SelectSubset<T, RestaurantDeleteArgs<ExtArgs>>): Prisma.Prisma__RestaurantClient<runtime.Types.Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends RestaurantUpdateArgs>(args: Prisma.SelectSubset<T, RestaurantUpdateArgs<ExtArgs>>): Prisma.Prisma__RestaurantClient<runtime.Types.Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends RestaurantDeleteManyArgs>(args?: Prisma.SelectSubset<T, RestaurantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends RestaurantUpdateManyArgs>(args: Prisma.SelectSubset<T, RestaurantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends RestaurantUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, RestaurantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends RestaurantUpsertArgs>(args: Prisma.SelectSubset<T, RestaurantUpsertArgs<ExtArgs>>): Prisma.Prisma__RestaurantClient<runtime.Types.Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends RestaurantCountArgs>(args?: Prisma.Subset<T, RestaurantCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], RestaurantCountAggregateOutputType> : number>;
    aggregate<T extends RestaurantAggregateArgs>(args: Prisma.Subset<T, RestaurantAggregateArgs>): Prisma.PrismaPromise<GetRestaurantAggregateType<T>>;
    groupBy<T extends RestaurantGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: RestaurantGroupByArgs['orderBy'];
    } : {
        orderBy?: RestaurantGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, RestaurantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRestaurantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: RestaurantFieldRefs;
}
export interface Prisma__RestaurantClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    manager<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    menu<T extends Prisma.Restaurant$menuArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Restaurant$menuArgs<ExtArgs>>): Prisma.Prisma__MenuClient<runtime.Types.Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    rating<T extends Prisma.Restaurant$ratingArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Restaurant$ratingArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    orders<T extends Prisma.Restaurant$ordersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Restaurant$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface RestaurantFieldRefs {
    readonly restaurantId: Prisma.FieldRef<"Restaurant", 'String'>;
    readonly managerId: Prisma.FieldRef<"Restaurant", 'String'>;
    readonly restaurantName: Prisma.FieldRef<"Restaurant", 'String'>;
    readonly restaurantBio: Prisma.FieldRef<"Restaurant", 'String'>;
    readonly restaurantLogo: Prisma.FieldRef<"Restaurant", 'String'>;
    readonly isAvailable: Prisma.FieldRef<"Restaurant", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"Restaurant", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Restaurant", 'DateTime'>;
    readonly averageRating: Prisma.FieldRef<"Restaurant", 'Float'>;
    readonly ratingCount: Prisma.FieldRef<"Restaurant", 'Int'>;
    readonly addresses: Prisma.FieldRef<"Restaurant", 'Json'>;
}
export type RestaurantFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RestaurantSelect<ExtArgs> | null;
    omit?: Prisma.RestaurantOmit<ExtArgs> | null;
    include?: Prisma.RestaurantInclude<ExtArgs> | null;
    where: Prisma.RestaurantWhereUniqueInput;
};
export type RestaurantFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RestaurantSelect<ExtArgs> | null;
    omit?: Prisma.RestaurantOmit<ExtArgs> | null;
    include?: Prisma.RestaurantInclude<ExtArgs> | null;
    where: Prisma.RestaurantWhereUniqueInput;
};
export type RestaurantFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RestaurantSelect<ExtArgs> | null;
    omit?: Prisma.RestaurantOmit<ExtArgs> | null;
    include?: Prisma.RestaurantInclude<ExtArgs> | null;
    where?: Prisma.RestaurantWhereInput;
    orderBy?: Prisma.RestaurantOrderByWithRelationInput | Prisma.RestaurantOrderByWithRelationInput[];
    cursor?: Prisma.RestaurantWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RestaurantScalarFieldEnum | Prisma.RestaurantScalarFieldEnum[];
};
export type RestaurantFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RestaurantSelect<ExtArgs> | null;
    omit?: Prisma.RestaurantOmit<ExtArgs> | null;
    include?: Prisma.RestaurantInclude<ExtArgs> | null;
    where?: Prisma.RestaurantWhereInput;
    orderBy?: Prisma.RestaurantOrderByWithRelationInput | Prisma.RestaurantOrderByWithRelationInput[];
    cursor?: Prisma.RestaurantWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RestaurantScalarFieldEnum | Prisma.RestaurantScalarFieldEnum[];
};
export type RestaurantFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RestaurantSelect<ExtArgs> | null;
    omit?: Prisma.RestaurantOmit<ExtArgs> | null;
    include?: Prisma.RestaurantInclude<ExtArgs> | null;
    where?: Prisma.RestaurantWhereInput;
    orderBy?: Prisma.RestaurantOrderByWithRelationInput | Prisma.RestaurantOrderByWithRelationInput[];
    cursor?: Prisma.RestaurantWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RestaurantScalarFieldEnum | Prisma.RestaurantScalarFieldEnum[];
};
export type RestaurantCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RestaurantSelect<ExtArgs> | null;
    omit?: Prisma.RestaurantOmit<ExtArgs> | null;
    include?: Prisma.RestaurantInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RestaurantCreateInput, Prisma.RestaurantUncheckedCreateInput>;
};
export type RestaurantCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.RestaurantCreateManyInput | Prisma.RestaurantCreateManyInput[];
    skipDuplicates?: boolean;
};
export type RestaurantCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RestaurantSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RestaurantOmit<ExtArgs> | null;
    data: Prisma.RestaurantCreateManyInput | Prisma.RestaurantCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.RestaurantIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type RestaurantUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RestaurantSelect<ExtArgs> | null;
    omit?: Prisma.RestaurantOmit<ExtArgs> | null;
    include?: Prisma.RestaurantInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RestaurantUpdateInput, Prisma.RestaurantUncheckedUpdateInput>;
    where: Prisma.RestaurantWhereUniqueInput;
};
export type RestaurantUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.RestaurantUpdateManyMutationInput, Prisma.RestaurantUncheckedUpdateManyInput>;
    where?: Prisma.RestaurantWhereInput;
    limit?: number;
};
export type RestaurantUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RestaurantSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RestaurantOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RestaurantUpdateManyMutationInput, Prisma.RestaurantUncheckedUpdateManyInput>;
    where?: Prisma.RestaurantWhereInput;
    limit?: number;
    include?: Prisma.RestaurantIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type RestaurantUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RestaurantSelect<ExtArgs> | null;
    omit?: Prisma.RestaurantOmit<ExtArgs> | null;
    include?: Prisma.RestaurantInclude<ExtArgs> | null;
    where: Prisma.RestaurantWhereUniqueInput;
    create: Prisma.XOR<Prisma.RestaurantCreateInput, Prisma.RestaurantUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.RestaurantUpdateInput, Prisma.RestaurantUncheckedUpdateInput>;
};
export type RestaurantDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RestaurantSelect<ExtArgs> | null;
    omit?: Prisma.RestaurantOmit<ExtArgs> | null;
    include?: Prisma.RestaurantInclude<ExtArgs> | null;
    where: Prisma.RestaurantWhereUniqueInput;
};
export type RestaurantDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RestaurantWhereInput;
    limit?: number;
};
export type Restaurant$menuArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MenuSelect<ExtArgs> | null;
    omit?: Prisma.MenuOmit<ExtArgs> | null;
    include?: Prisma.MenuInclude<ExtArgs> | null;
    where?: Prisma.MenuWhereInput;
};
export type Restaurant$ratingArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Restaurant$ordersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type RestaurantDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RestaurantSelect<ExtArgs> | null;
    omit?: Prisma.RestaurantOmit<ExtArgs> | null;
    include?: Prisma.RestaurantInclude<ExtArgs> | null;
};
