import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type MenuItemModel = runtime.Types.Result.DefaultSelection<Prisma.$MenuItemPayload>;
export type AggregateMenuItem = {
    _count: MenuItemCountAggregateOutputType | null;
    _avg: MenuItemAvgAggregateOutputType | null;
    _sum: MenuItemSumAggregateOutputType | null;
    _min: MenuItemMinAggregateOutputType | null;
    _max: MenuItemMaxAggregateOutputType | null;
};
export type MenuItemAvgAggregateOutputType = {
    price: number | null;
    stockQuantity: number | null;
};
export type MenuItemSumAggregateOutputType = {
    price: number | null;
    stockQuantity: number | null;
};
export type MenuItemMinAggregateOutputType = {
    menuItemId: string | null;
    menuCategoryId: string | null;
    menuItemName: string | null;
    menuItemDesc: string | null;
    menuItemImageUrl: string | null;
    price: number | null;
    stockQuantity: number | null;
    isActive: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type MenuItemMaxAggregateOutputType = {
    menuItemId: string | null;
    menuCategoryId: string | null;
    menuItemName: string | null;
    menuItemDesc: string | null;
    menuItemImageUrl: string | null;
    price: number | null;
    stockQuantity: number | null;
    isActive: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type MenuItemCountAggregateOutputType = {
    menuItemId: number;
    menuCategoryId: number;
    menuItemName: number;
    menuItemDesc: number;
    menuItemImageUrl: number;
    price: number;
    stockQuantity: number;
    isActive: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type MenuItemAvgAggregateInputType = {
    price?: true;
    stockQuantity?: true;
};
export type MenuItemSumAggregateInputType = {
    price?: true;
    stockQuantity?: true;
};
export type MenuItemMinAggregateInputType = {
    menuItemId?: true;
    menuCategoryId?: true;
    menuItemName?: true;
    menuItemDesc?: true;
    menuItemImageUrl?: true;
    price?: true;
    stockQuantity?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type MenuItemMaxAggregateInputType = {
    menuItemId?: true;
    menuCategoryId?: true;
    menuItemName?: true;
    menuItemDesc?: true;
    menuItemImageUrl?: true;
    price?: true;
    stockQuantity?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type MenuItemCountAggregateInputType = {
    menuItemId?: true;
    menuCategoryId?: true;
    menuItemName?: true;
    menuItemDesc?: true;
    menuItemImageUrl?: true;
    price?: true;
    stockQuantity?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type MenuItemAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MenuItemWhereInput;
    orderBy?: Prisma.MenuItemOrderByWithRelationInput | Prisma.MenuItemOrderByWithRelationInput[];
    cursor?: Prisma.MenuItemWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | MenuItemCountAggregateInputType;
    _avg?: MenuItemAvgAggregateInputType;
    _sum?: MenuItemSumAggregateInputType;
    _min?: MenuItemMinAggregateInputType;
    _max?: MenuItemMaxAggregateInputType;
};
export type GetMenuItemAggregateType<T extends MenuItemAggregateArgs> = {
    [P in keyof T & keyof AggregateMenuItem]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMenuItem[P]> : Prisma.GetScalarType<T[P], AggregateMenuItem[P]>;
};
export type MenuItemGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MenuItemWhereInput;
    orderBy?: Prisma.MenuItemOrderByWithAggregationInput | Prisma.MenuItemOrderByWithAggregationInput[];
    by: Prisma.MenuItemScalarFieldEnum[] | Prisma.MenuItemScalarFieldEnum;
    having?: Prisma.MenuItemScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MenuItemCountAggregateInputType | true;
    _avg?: MenuItemAvgAggregateInputType;
    _sum?: MenuItemSumAggregateInputType;
    _min?: MenuItemMinAggregateInputType;
    _max?: MenuItemMaxAggregateInputType;
};
export type MenuItemGroupByOutputType = {
    menuItemId: string;
    menuCategoryId: string;
    menuItemName: string;
    menuItemDesc: string;
    menuItemImageUrl: string;
    price: number;
    stockQuantity: number;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: MenuItemCountAggregateOutputType | null;
    _avg: MenuItemAvgAggregateOutputType | null;
    _sum: MenuItemSumAggregateOutputType | null;
    _min: MenuItemMinAggregateOutputType | null;
    _max: MenuItemMaxAggregateOutputType | null;
};
export type GetMenuItemGroupByPayload<T extends MenuItemGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MenuItemGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MenuItemGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MenuItemGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MenuItemGroupByOutputType[P]>;
}>>;
export type MenuItemWhereInput = {
    AND?: Prisma.MenuItemWhereInput | Prisma.MenuItemWhereInput[];
    OR?: Prisma.MenuItemWhereInput[];
    NOT?: Prisma.MenuItemWhereInput | Prisma.MenuItemWhereInput[];
    menuItemId?: Prisma.StringFilter<"MenuItem"> | string;
    menuCategoryId?: Prisma.StringFilter<"MenuItem"> | string;
    menuItemName?: Prisma.StringFilter<"MenuItem"> | string;
    menuItemDesc?: Prisma.StringFilter<"MenuItem"> | string;
    menuItemImageUrl?: Prisma.StringFilter<"MenuItem"> | string;
    price?: Prisma.IntFilter<"MenuItem"> | number;
    stockQuantity?: Prisma.IntFilter<"MenuItem"> | number;
    isActive?: Prisma.BoolFilter<"MenuItem"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"MenuItem"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"MenuItem"> | Date | string;
    menuCategory?: Prisma.XOR<Prisma.MenuCategoryScalarRelationFilter, Prisma.MenuCategoryWhereInput>;
    cartItems?: Prisma.CartItemListRelationFilter;
    orderItems?: Prisma.OrderItemListRelationFilter;
};
export type MenuItemOrderByWithRelationInput = {
    menuItemId?: Prisma.SortOrder;
    menuCategoryId?: Prisma.SortOrder;
    menuItemName?: Prisma.SortOrder;
    menuItemDesc?: Prisma.SortOrder;
    menuItemImageUrl?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    stockQuantity?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    menuCategory?: Prisma.MenuCategoryOrderByWithRelationInput;
    cartItems?: Prisma.CartItemOrderByRelationAggregateInput;
    orderItems?: Prisma.OrderItemOrderByRelationAggregateInput;
};
export type MenuItemWhereUniqueInput = Prisma.AtLeast<{
    menuItemId?: string;
    AND?: Prisma.MenuItemWhereInput | Prisma.MenuItemWhereInput[];
    OR?: Prisma.MenuItemWhereInput[];
    NOT?: Prisma.MenuItemWhereInput | Prisma.MenuItemWhereInput[];
    menuCategoryId?: Prisma.StringFilter<"MenuItem"> | string;
    menuItemName?: Prisma.StringFilter<"MenuItem"> | string;
    menuItemDesc?: Prisma.StringFilter<"MenuItem"> | string;
    menuItemImageUrl?: Prisma.StringFilter<"MenuItem"> | string;
    price?: Prisma.IntFilter<"MenuItem"> | number;
    stockQuantity?: Prisma.IntFilter<"MenuItem"> | number;
    isActive?: Prisma.BoolFilter<"MenuItem"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"MenuItem"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"MenuItem"> | Date | string;
    menuCategory?: Prisma.XOR<Prisma.MenuCategoryScalarRelationFilter, Prisma.MenuCategoryWhereInput>;
    cartItems?: Prisma.CartItemListRelationFilter;
    orderItems?: Prisma.OrderItemListRelationFilter;
}, "menuItemId">;
export type MenuItemOrderByWithAggregationInput = {
    menuItemId?: Prisma.SortOrder;
    menuCategoryId?: Prisma.SortOrder;
    menuItemName?: Prisma.SortOrder;
    menuItemDesc?: Prisma.SortOrder;
    menuItemImageUrl?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    stockQuantity?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.MenuItemCountOrderByAggregateInput;
    _avg?: Prisma.MenuItemAvgOrderByAggregateInput;
    _max?: Prisma.MenuItemMaxOrderByAggregateInput;
    _min?: Prisma.MenuItemMinOrderByAggregateInput;
    _sum?: Prisma.MenuItemSumOrderByAggregateInput;
};
export type MenuItemScalarWhereWithAggregatesInput = {
    AND?: Prisma.MenuItemScalarWhereWithAggregatesInput | Prisma.MenuItemScalarWhereWithAggregatesInput[];
    OR?: Prisma.MenuItemScalarWhereWithAggregatesInput[];
    NOT?: Prisma.MenuItemScalarWhereWithAggregatesInput | Prisma.MenuItemScalarWhereWithAggregatesInput[];
    menuItemId?: Prisma.StringWithAggregatesFilter<"MenuItem"> | string;
    menuCategoryId?: Prisma.StringWithAggregatesFilter<"MenuItem"> | string;
    menuItemName?: Prisma.StringWithAggregatesFilter<"MenuItem"> | string;
    menuItemDesc?: Prisma.StringWithAggregatesFilter<"MenuItem"> | string;
    menuItemImageUrl?: Prisma.StringWithAggregatesFilter<"MenuItem"> | string;
    price?: Prisma.IntWithAggregatesFilter<"MenuItem"> | number;
    stockQuantity?: Prisma.IntWithAggregatesFilter<"MenuItem"> | number;
    isActive?: Prisma.BoolWithAggregatesFilter<"MenuItem"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"MenuItem"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"MenuItem"> | Date | string;
};
export type MenuItemCreateInput = {
    menuItemId?: string;
    menuItemName: string;
    menuItemDesc: string;
    menuItemImageUrl: string;
    price: number;
    stockQuantity: number;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    menuCategory: Prisma.MenuCategoryCreateNestedOneWithoutMenuItemsInput;
    cartItems?: Prisma.CartItemCreateNestedManyWithoutMenuItemInput;
    orderItems?: Prisma.OrderItemCreateNestedManyWithoutMenuItemInput;
};
export type MenuItemUncheckedCreateInput = {
    menuItemId?: string;
    menuCategoryId: string;
    menuItemName: string;
    menuItemDesc: string;
    menuItemImageUrl: string;
    price: number;
    stockQuantity: number;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    cartItems?: Prisma.CartItemUncheckedCreateNestedManyWithoutMenuItemInput;
    orderItems?: Prisma.OrderItemUncheckedCreateNestedManyWithoutMenuItemInput;
};
export type MenuItemUpdateInput = {
    menuItemId?: Prisma.StringFieldUpdateOperationsInput | string;
    menuItemName?: Prisma.StringFieldUpdateOperationsInput | string;
    menuItemDesc?: Prisma.StringFieldUpdateOperationsInput | string;
    menuItemImageUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.IntFieldUpdateOperationsInput | number;
    stockQuantity?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    menuCategory?: Prisma.MenuCategoryUpdateOneRequiredWithoutMenuItemsNestedInput;
    cartItems?: Prisma.CartItemUpdateManyWithoutMenuItemNestedInput;
    orderItems?: Prisma.OrderItemUpdateManyWithoutMenuItemNestedInput;
};
export type MenuItemUncheckedUpdateInput = {
    menuItemId?: Prisma.StringFieldUpdateOperationsInput | string;
    menuCategoryId?: Prisma.StringFieldUpdateOperationsInput | string;
    menuItemName?: Prisma.StringFieldUpdateOperationsInput | string;
    menuItemDesc?: Prisma.StringFieldUpdateOperationsInput | string;
    menuItemImageUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.IntFieldUpdateOperationsInput | number;
    stockQuantity?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cartItems?: Prisma.CartItemUncheckedUpdateManyWithoutMenuItemNestedInput;
    orderItems?: Prisma.OrderItemUncheckedUpdateManyWithoutMenuItemNestedInput;
};
export type MenuItemCreateManyInput = {
    menuItemId?: string;
    menuCategoryId: string;
    menuItemName: string;
    menuItemDesc: string;
    menuItemImageUrl: string;
    price: number;
    stockQuantity: number;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MenuItemUpdateManyMutationInput = {
    menuItemId?: Prisma.StringFieldUpdateOperationsInput | string;
    menuItemName?: Prisma.StringFieldUpdateOperationsInput | string;
    menuItemDesc?: Prisma.StringFieldUpdateOperationsInput | string;
    menuItemImageUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.IntFieldUpdateOperationsInput | number;
    stockQuantity?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MenuItemUncheckedUpdateManyInput = {
    menuItemId?: Prisma.StringFieldUpdateOperationsInput | string;
    menuCategoryId?: Prisma.StringFieldUpdateOperationsInput | string;
    menuItemName?: Prisma.StringFieldUpdateOperationsInput | string;
    menuItemDesc?: Prisma.StringFieldUpdateOperationsInput | string;
    menuItemImageUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.IntFieldUpdateOperationsInput | number;
    stockQuantity?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MenuItemScalarRelationFilter = {
    is?: Prisma.MenuItemWhereInput;
    isNot?: Prisma.MenuItemWhereInput;
};
export type MenuItemListRelationFilter = {
    every?: Prisma.MenuItemWhereInput;
    some?: Prisma.MenuItemWhereInput;
    none?: Prisma.MenuItemWhereInput;
};
export type MenuItemOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type MenuItemCountOrderByAggregateInput = {
    menuItemId?: Prisma.SortOrder;
    menuCategoryId?: Prisma.SortOrder;
    menuItemName?: Prisma.SortOrder;
    menuItemDesc?: Prisma.SortOrder;
    menuItemImageUrl?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    stockQuantity?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type MenuItemAvgOrderByAggregateInput = {
    price?: Prisma.SortOrder;
    stockQuantity?: Prisma.SortOrder;
};
export type MenuItemMaxOrderByAggregateInput = {
    menuItemId?: Prisma.SortOrder;
    menuCategoryId?: Prisma.SortOrder;
    menuItemName?: Prisma.SortOrder;
    menuItemDesc?: Prisma.SortOrder;
    menuItemImageUrl?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    stockQuantity?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type MenuItemMinOrderByAggregateInput = {
    menuItemId?: Prisma.SortOrder;
    menuCategoryId?: Prisma.SortOrder;
    menuItemName?: Prisma.SortOrder;
    menuItemDesc?: Prisma.SortOrder;
    menuItemImageUrl?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    stockQuantity?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type MenuItemSumOrderByAggregateInput = {
    price?: Prisma.SortOrder;
    stockQuantity?: Prisma.SortOrder;
};
export type MenuItemCreateNestedOneWithoutCartItemsInput = {
    create?: Prisma.XOR<Prisma.MenuItemCreateWithoutCartItemsInput, Prisma.MenuItemUncheckedCreateWithoutCartItemsInput>;
    connectOrCreate?: Prisma.MenuItemCreateOrConnectWithoutCartItemsInput;
    connect?: Prisma.MenuItemWhereUniqueInput;
};
export type MenuItemUpdateOneRequiredWithoutCartItemsNestedInput = {
    create?: Prisma.XOR<Prisma.MenuItemCreateWithoutCartItemsInput, Prisma.MenuItemUncheckedCreateWithoutCartItemsInput>;
    connectOrCreate?: Prisma.MenuItemCreateOrConnectWithoutCartItemsInput;
    upsert?: Prisma.MenuItemUpsertWithoutCartItemsInput;
    connect?: Prisma.MenuItemWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.MenuItemUpdateToOneWithWhereWithoutCartItemsInput, Prisma.MenuItemUpdateWithoutCartItemsInput>, Prisma.MenuItemUncheckedUpdateWithoutCartItemsInput>;
};
export type MenuItemCreateNestedManyWithoutMenuCategoryInput = {
    create?: Prisma.XOR<Prisma.MenuItemCreateWithoutMenuCategoryInput, Prisma.MenuItemUncheckedCreateWithoutMenuCategoryInput> | Prisma.MenuItemCreateWithoutMenuCategoryInput[] | Prisma.MenuItemUncheckedCreateWithoutMenuCategoryInput[];
    connectOrCreate?: Prisma.MenuItemCreateOrConnectWithoutMenuCategoryInput | Prisma.MenuItemCreateOrConnectWithoutMenuCategoryInput[];
    createMany?: Prisma.MenuItemCreateManyMenuCategoryInputEnvelope;
    connect?: Prisma.MenuItemWhereUniqueInput | Prisma.MenuItemWhereUniqueInput[];
};
export type MenuItemUncheckedCreateNestedManyWithoutMenuCategoryInput = {
    create?: Prisma.XOR<Prisma.MenuItemCreateWithoutMenuCategoryInput, Prisma.MenuItemUncheckedCreateWithoutMenuCategoryInput> | Prisma.MenuItemCreateWithoutMenuCategoryInput[] | Prisma.MenuItemUncheckedCreateWithoutMenuCategoryInput[];
    connectOrCreate?: Prisma.MenuItemCreateOrConnectWithoutMenuCategoryInput | Prisma.MenuItemCreateOrConnectWithoutMenuCategoryInput[];
    createMany?: Prisma.MenuItemCreateManyMenuCategoryInputEnvelope;
    connect?: Prisma.MenuItemWhereUniqueInput | Prisma.MenuItemWhereUniqueInput[];
};
export type MenuItemUpdateManyWithoutMenuCategoryNestedInput = {
    create?: Prisma.XOR<Prisma.MenuItemCreateWithoutMenuCategoryInput, Prisma.MenuItemUncheckedCreateWithoutMenuCategoryInput> | Prisma.MenuItemCreateWithoutMenuCategoryInput[] | Prisma.MenuItemUncheckedCreateWithoutMenuCategoryInput[];
    connectOrCreate?: Prisma.MenuItemCreateOrConnectWithoutMenuCategoryInput | Prisma.MenuItemCreateOrConnectWithoutMenuCategoryInput[];
    upsert?: Prisma.MenuItemUpsertWithWhereUniqueWithoutMenuCategoryInput | Prisma.MenuItemUpsertWithWhereUniqueWithoutMenuCategoryInput[];
    createMany?: Prisma.MenuItemCreateManyMenuCategoryInputEnvelope;
    set?: Prisma.MenuItemWhereUniqueInput | Prisma.MenuItemWhereUniqueInput[];
    disconnect?: Prisma.MenuItemWhereUniqueInput | Prisma.MenuItemWhereUniqueInput[];
    delete?: Prisma.MenuItemWhereUniqueInput | Prisma.MenuItemWhereUniqueInput[];
    connect?: Prisma.MenuItemWhereUniqueInput | Prisma.MenuItemWhereUniqueInput[];
    update?: Prisma.MenuItemUpdateWithWhereUniqueWithoutMenuCategoryInput | Prisma.MenuItemUpdateWithWhereUniqueWithoutMenuCategoryInput[];
    updateMany?: Prisma.MenuItemUpdateManyWithWhereWithoutMenuCategoryInput | Prisma.MenuItemUpdateManyWithWhereWithoutMenuCategoryInput[];
    deleteMany?: Prisma.MenuItemScalarWhereInput | Prisma.MenuItemScalarWhereInput[];
};
export type MenuItemUncheckedUpdateManyWithoutMenuCategoryNestedInput = {
    create?: Prisma.XOR<Prisma.MenuItemCreateWithoutMenuCategoryInput, Prisma.MenuItemUncheckedCreateWithoutMenuCategoryInput> | Prisma.MenuItemCreateWithoutMenuCategoryInput[] | Prisma.MenuItemUncheckedCreateWithoutMenuCategoryInput[];
    connectOrCreate?: Prisma.MenuItemCreateOrConnectWithoutMenuCategoryInput | Prisma.MenuItemCreateOrConnectWithoutMenuCategoryInput[];
    upsert?: Prisma.MenuItemUpsertWithWhereUniqueWithoutMenuCategoryInput | Prisma.MenuItemUpsertWithWhereUniqueWithoutMenuCategoryInput[];
    createMany?: Prisma.MenuItemCreateManyMenuCategoryInputEnvelope;
    set?: Prisma.MenuItemWhereUniqueInput | Prisma.MenuItemWhereUniqueInput[];
    disconnect?: Prisma.MenuItemWhereUniqueInput | Prisma.MenuItemWhereUniqueInput[];
    delete?: Prisma.MenuItemWhereUniqueInput | Prisma.MenuItemWhereUniqueInput[];
    connect?: Prisma.MenuItemWhereUniqueInput | Prisma.MenuItemWhereUniqueInput[];
    update?: Prisma.MenuItemUpdateWithWhereUniqueWithoutMenuCategoryInput | Prisma.MenuItemUpdateWithWhereUniqueWithoutMenuCategoryInput[];
    updateMany?: Prisma.MenuItemUpdateManyWithWhereWithoutMenuCategoryInput | Prisma.MenuItemUpdateManyWithWhereWithoutMenuCategoryInput[];
    deleteMany?: Prisma.MenuItemScalarWhereInput | Prisma.MenuItemScalarWhereInput[];
};
export type MenuItemCreateNestedOneWithoutOrderItemsInput = {
    create?: Prisma.XOR<Prisma.MenuItemCreateWithoutOrderItemsInput, Prisma.MenuItemUncheckedCreateWithoutOrderItemsInput>;
    connectOrCreate?: Prisma.MenuItemCreateOrConnectWithoutOrderItemsInput;
    connect?: Prisma.MenuItemWhereUniqueInput;
};
export type MenuItemUpdateOneRequiredWithoutOrderItemsNestedInput = {
    create?: Prisma.XOR<Prisma.MenuItemCreateWithoutOrderItemsInput, Prisma.MenuItemUncheckedCreateWithoutOrderItemsInput>;
    connectOrCreate?: Prisma.MenuItemCreateOrConnectWithoutOrderItemsInput;
    upsert?: Prisma.MenuItemUpsertWithoutOrderItemsInput;
    connect?: Prisma.MenuItemWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.MenuItemUpdateToOneWithWhereWithoutOrderItemsInput, Prisma.MenuItemUpdateWithoutOrderItemsInput>, Prisma.MenuItemUncheckedUpdateWithoutOrderItemsInput>;
};
export type MenuItemCreateWithoutCartItemsInput = {
    menuItemId?: string;
    menuItemName: string;
    menuItemDesc: string;
    menuItemImageUrl: string;
    price: number;
    stockQuantity: number;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    menuCategory: Prisma.MenuCategoryCreateNestedOneWithoutMenuItemsInput;
    orderItems?: Prisma.OrderItemCreateNestedManyWithoutMenuItemInput;
};
export type MenuItemUncheckedCreateWithoutCartItemsInput = {
    menuItemId?: string;
    menuCategoryId: string;
    menuItemName: string;
    menuItemDesc: string;
    menuItemImageUrl: string;
    price: number;
    stockQuantity: number;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    orderItems?: Prisma.OrderItemUncheckedCreateNestedManyWithoutMenuItemInput;
};
export type MenuItemCreateOrConnectWithoutCartItemsInput = {
    where: Prisma.MenuItemWhereUniqueInput;
    create: Prisma.XOR<Prisma.MenuItemCreateWithoutCartItemsInput, Prisma.MenuItemUncheckedCreateWithoutCartItemsInput>;
};
export type MenuItemUpsertWithoutCartItemsInput = {
    update: Prisma.XOR<Prisma.MenuItemUpdateWithoutCartItemsInput, Prisma.MenuItemUncheckedUpdateWithoutCartItemsInput>;
    create: Prisma.XOR<Prisma.MenuItemCreateWithoutCartItemsInput, Prisma.MenuItemUncheckedCreateWithoutCartItemsInput>;
    where?: Prisma.MenuItemWhereInput;
};
export type MenuItemUpdateToOneWithWhereWithoutCartItemsInput = {
    where?: Prisma.MenuItemWhereInput;
    data: Prisma.XOR<Prisma.MenuItemUpdateWithoutCartItemsInput, Prisma.MenuItemUncheckedUpdateWithoutCartItemsInput>;
};
export type MenuItemUpdateWithoutCartItemsInput = {
    menuItemId?: Prisma.StringFieldUpdateOperationsInput | string;
    menuItemName?: Prisma.StringFieldUpdateOperationsInput | string;
    menuItemDesc?: Prisma.StringFieldUpdateOperationsInput | string;
    menuItemImageUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.IntFieldUpdateOperationsInput | number;
    stockQuantity?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    menuCategory?: Prisma.MenuCategoryUpdateOneRequiredWithoutMenuItemsNestedInput;
    orderItems?: Prisma.OrderItemUpdateManyWithoutMenuItemNestedInput;
};
export type MenuItemUncheckedUpdateWithoutCartItemsInput = {
    menuItemId?: Prisma.StringFieldUpdateOperationsInput | string;
    menuCategoryId?: Prisma.StringFieldUpdateOperationsInput | string;
    menuItemName?: Prisma.StringFieldUpdateOperationsInput | string;
    menuItemDesc?: Prisma.StringFieldUpdateOperationsInput | string;
    menuItemImageUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.IntFieldUpdateOperationsInput | number;
    stockQuantity?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    orderItems?: Prisma.OrderItemUncheckedUpdateManyWithoutMenuItemNestedInput;
};
export type MenuItemCreateWithoutMenuCategoryInput = {
    menuItemId?: string;
    menuItemName: string;
    menuItemDesc: string;
    menuItemImageUrl: string;
    price: number;
    stockQuantity: number;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    cartItems?: Prisma.CartItemCreateNestedManyWithoutMenuItemInput;
    orderItems?: Prisma.OrderItemCreateNestedManyWithoutMenuItemInput;
};
export type MenuItemUncheckedCreateWithoutMenuCategoryInput = {
    menuItemId?: string;
    menuItemName: string;
    menuItemDesc: string;
    menuItemImageUrl: string;
    price: number;
    stockQuantity: number;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    cartItems?: Prisma.CartItemUncheckedCreateNestedManyWithoutMenuItemInput;
    orderItems?: Prisma.OrderItemUncheckedCreateNestedManyWithoutMenuItemInput;
};
export type MenuItemCreateOrConnectWithoutMenuCategoryInput = {
    where: Prisma.MenuItemWhereUniqueInput;
    create: Prisma.XOR<Prisma.MenuItemCreateWithoutMenuCategoryInput, Prisma.MenuItemUncheckedCreateWithoutMenuCategoryInput>;
};
export type MenuItemCreateManyMenuCategoryInputEnvelope = {
    data: Prisma.MenuItemCreateManyMenuCategoryInput | Prisma.MenuItemCreateManyMenuCategoryInput[];
    skipDuplicates?: boolean;
};
export type MenuItemUpsertWithWhereUniqueWithoutMenuCategoryInput = {
    where: Prisma.MenuItemWhereUniqueInput;
    update: Prisma.XOR<Prisma.MenuItemUpdateWithoutMenuCategoryInput, Prisma.MenuItemUncheckedUpdateWithoutMenuCategoryInput>;
    create: Prisma.XOR<Prisma.MenuItemCreateWithoutMenuCategoryInput, Prisma.MenuItemUncheckedCreateWithoutMenuCategoryInput>;
};
export type MenuItemUpdateWithWhereUniqueWithoutMenuCategoryInput = {
    where: Prisma.MenuItemWhereUniqueInput;
    data: Prisma.XOR<Prisma.MenuItemUpdateWithoutMenuCategoryInput, Prisma.MenuItemUncheckedUpdateWithoutMenuCategoryInput>;
};
export type MenuItemUpdateManyWithWhereWithoutMenuCategoryInput = {
    where: Prisma.MenuItemScalarWhereInput;
    data: Prisma.XOR<Prisma.MenuItemUpdateManyMutationInput, Prisma.MenuItemUncheckedUpdateManyWithoutMenuCategoryInput>;
};
export type MenuItemScalarWhereInput = {
    AND?: Prisma.MenuItemScalarWhereInput | Prisma.MenuItemScalarWhereInput[];
    OR?: Prisma.MenuItemScalarWhereInput[];
    NOT?: Prisma.MenuItemScalarWhereInput | Prisma.MenuItemScalarWhereInput[];
    menuItemId?: Prisma.StringFilter<"MenuItem"> | string;
    menuCategoryId?: Prisma.StringFilter<"MenuItem"> | string;
    menuItemName?: Prisma.StringFilter<"MenuItem"> | string;
    menuItemDesc?: Prisma.StringFilter<"MenuItem"> | string;
    menuItemImageUrl?: Prisma.StringFilter<"MenuItem"> | string;
    price?: Prisma.IntFilter<"MenuItem"> | number;
    stockQuantity?: Prisma.IntFilter<"MenuItem"> | number;
    isActive?: Prisma.BoolFilter<"MenuItem"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"MenuItem"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"MenuItem"> | Date | string;
};
export type MenuItemCreateWithoutOrderItemsInput = {
    menuItemId?: string;
    menuItemName: string;
    menuItemDesc: string;
    menuItemImageUrl: string;
    price: number;
    stockQuantity: number;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    menuCategory: Prisma.MenuCategoryCreateNestedOneWithoutMenuItemsInput;
    cartItems?: Prisma.CartItemCreateNestedManyWithoutMenuItemInput;
};
export type MenuItemUncheckedCreateWithoutOrderItemsInput = {
    menuItemId?: string;
    menuCategoryId: string;
    menuItemName: string;
    menuItemDesc: string;
    menuItemImageUrl: string;
    price: number;
    stockQuantity: number;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    cartItems?: Prisma.CartItemUncheckedCreateNestedManyWithoutMenuItemInput;
};
export type MenuItemCreateOrConnectWithoutOrderItemsInput = {
    where: Prisma.MenuItemWhereUniqueInput;
    create: Prisma.XOR<Prisma.MenuItemCreateWithoutOrderItemsInput, Prisma.MenuItemUncheckedCreateWithoutOrderItemsInput>;
};
export type MenuItemUpsertWithoutOrderItemsInput = {
    update: Prisma.XOR<Prisma.MenuItemUpdateWithoutOrderItemsInput, Prisma.MenuItemUncheckedUpdateWithoutOrderItemsInput>;
    create: Prisma.XOR<Prisma.MenuItemCreateWithoutOrderItemsInput, Prisma.MenuItemUncheckedCreateWithoutOrderItemsInput>;
    where?: Prisma.MenuItemWhereInput;
};
export type MenuItemUpdateToOneWithWhereWithoutOrderItemsInput = {
    where?: Prisma.MenuItemWhereInput;
    data: Prisma.XOR<Prisma.MenuItemUpdateWithoutOrderItemsInput, Prisma.MenuItemUncheckedUpdateWithoutOrderItemsInput>;
};
export type MenuItemUpdateWithoutOrderItemsInput = {
    menuItemId?: Prisma.StringFieldUpdateOperationsInput | string;
    menuItemName?: Prisma.StringFieldUpdateOperationsInput | string;
    menuItemDesc?: Prisma.StringFieldUpdateOperationsInput | string;
    menuItemImageUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.IntFieldUpdateOperationsInput | number;
    stockQuantity?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    menuCategory?: Prisma.MenuCategoryUpdateOneRequiredWithoutMenuItemsNestedInput;
    cartItems?: Prisma.CartItemUpdateManyWithoutMenuItemNestedInput;
};
export type MenuItemUncheckedUpdateWithoutOrderItemsInput = {
    menuItemId?: Prisma.StringFieldUpdateOperationsInput | string;
    menuCategoryId?: Prisma.StringFieldUpdateOperationsInput | string;
    menuItemName?: Prisma.StringFieldUpdateOperationsInput | string;
    menuItemDesc?: Prisma.StringFieldUpdateOperationsInput | string;
    menuItemImageUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.IntFieldUpdateOperationsInput | number;
    stockQuantity?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cartItems?: Prisma.CartItemUncheckedUpdateManyWithoutMenuItemNestedInput;
};
export type MenuItemCreateManyMenuCategoryInput = {
    menuItemId?: string;
    menuItemName: string;
    menuItemDesc: string;
    menuItemImageUrl: string;
    price: number;
    stockQuantity: number;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MenuItemUpdateWithoutMenuCategoryInput = {
    menuItemId?: Prisma.StringFieldUpdateOperationsInput | string;
    menuItemName?: Prisma.StringFieldUpdateOperationsInput | string;
    menuItemDesc?: Prisma.StringFieldUpdateOperationsInput | string;
    menuItemImageUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.IntFieldUpdateOperationsInput | number;
    stockQuantity?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cartItems?: Prisma.CartItemUpdateManyWithoutMenuItemNestedInput;
    orderItems?: Prisma.OrderItemUpdateManyWithoutMenuItemNestedInput;
};
export type MenuItemUncheckedUpdateWithoutMenuCategoryInput = {
    menuItemId?: Prisma.StringFieldUpdateOperationsInput | string;
    menuItemName?: Prisma.StringFieldUpdateOperationsInput | string;
    menuItemDesc?: Prisma.StringFieldUpdateOperationsInput | string;
    menuItemImageUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.IntFieldUpdateOperationsInput | number;
    stockQuantity?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cartItems?: Prisma.CartItemUncheckedUpdateManyWithoutMenuItemNestedInput;
    orderItems?: Prisma.OrderItemUncheckedUpdateManyWithoutMenuItemNestedInput;
};
export type MenuItemUncheckedUpdateManyWithoutMenuCategoryInput = {
    menuItemId?: Prisma.StringFieldUpdateOperationsInput | string;
    menuItemName?: Prisma.StringFieldUpdateOperationsInput | string;
    menuItemDesc?: Prisma.StringFieldUpdateOperationsInput | string;
    menuItemImageUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.IntFieldUpdateOperationsInput | number;
    stockQuantity?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MenuItemCountOutputType = {
    cartItems: number;
    orderItems: number;
};
export type MenuItemCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    cartItems?: boolean | MenuItemCountOutputTypeCountCartItemsArgs;
    orderItems?: boolean | MenuItemCountOutputTypeCountOrderItemsArgs;
};
export type MenuItemCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MenuItemCountOutputTypeSelect<ExtArgs> | null;
};
export type MenuItemCountOutputTypeCountCartItemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CartItemWhereInput;
};
export type MenuItemCountOutputTypeCountOrderItemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderItemWhereInput;
};
export type MenuItemSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    menuItemId?: boolean;
    menuCategoryId?: boolean;
    menuItemName?: boolean;
    menuItemDesc?: boolean;
    menuItemImageUrl?: boolean;
    price?: boolean;
    stockQuantity?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    menuCategory?: boolean | Prisma.MenuCategoryDefaultArgs<ExtArgs>;
    cartItems?: boolean | Prisma.MenuItem$cartItemsArgs<ExtArgs>;
    orderItems?: boolean | Prisma.MenuItem$orderItemsArgs<ExtArgs>;
    _count?: boolean | Prisma.MenuItemCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["menuItem"]>;
export type MenuItemSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    menuItemId?: boolean;
    menuCategoryId?: boolean;
    menuItemName?: boolean;
    menuItemDesc?: boolean;
    menuItemImageUrl?: boolean;
    price?: boolean;
    stockQuantity?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    menuCategory?: boolean | Prisma.MenuCategoryDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["menuItem"]>;
export type MenuItemSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    menuItemId?: boolean;
    menuCategoryId?: boolean;
    menuItemName?: boolean;
    menuItemDesc?: boolean;
    menuItemImageUrl?: boolean;
    price?: boolean;
    stockQuantity?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    menuCategory?: boolean | Prisma.MenuCategoryDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["menuItem"]>;
export type MenuItemSelectScalar = {
    menuItemId?: boolean;
    menuCategoryId?: boolean;
    menuItemName?: boolean;
    menuItemDesc?: boolean;
    menuItemImageUrl?: boolean;
    price?: boolean;
    stockQuantity?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type MenuItemOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"menuItemId" | "menuCategoryId" | "menuItemName" | "menuItemDesc" | "menuItemImageUrl" | "price" | "stockQuantity" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["menuItem"]>;
export type MenuItemInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    menuCategory?: boolean | Prisma.MenuCategoryDefaultArgs<ExtArgs>;
    cartItems?: boolean | Prisma.MenuItem$cartItemsArgs<ExtArgs>;
    orderItems?: boolean | Prisma.MenuItem$orderItemsArgs<ExtArgs>;
    _count?: boolean | Prisma.MenuItemCountOutputTypeDefaultArgs<ExtArgs>;
};
export type MenuItemIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    menuCategory?: boolean | Prisma.MenuCategoryDefaultArgs<ExtArgs>;
};
export type MenuItemIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    menuCategory?: boolean | Prisma.MenuCategoryDefaultArgs<ExtArgs>;
};
export type $MenuItemPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "MenuItem";
    objects: {
        menuCategory: Prisma.$MenuCategoryPayload<ExtArgs>;
        cartItems: Prisma.$CartItemPayload<ExtArgs>[];
        orderItems: Prisma.$OrderItemPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        menuItemId: string;
        menuCategoryId: string;
        menuItemName: string;
        menuItemDesc: string;
        menuItemImageUrl: string;
        price: number;
        stockQuantity: number;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["menuItem"]>;
    composites: {};
};
export type MenuItemGetPayload<S extends boolean | null | undefined | MenuItemDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$MenuItemPayload, S>;
export type MenuItemCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<MenuItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MenuItemCountAggregateInputType | true;
};
export interface MenuItemDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['MenuItem'];
        meta: {
            name: 'MenuItem';
        };
    };
    findUnique<T extends MenuItemFindUniqueArgs>(args: Prisma.SelectSubset<T, MenuItemFindUniqueArgs<ExtArgs>>): Prisma.Prisma__MenuItemClient<runtime.Types.Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends MenuItemFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, MenuItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__MenuItemClient<runtime.Types.Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends MenuItemFindFirstArgs>(args?: Prisma.SelectSubset<T, MenuItemFindFirstArgs<ExtArgs>>): Prisma.Prisma__MenuItemClient<runtime.Types.Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends MenuItemFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, MenuItemFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__MenuItemClient<runtime.Types.Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends MenuItemFindManyArgs>(args?: Prisma.SelectSubset<T, MenuItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends MenuItemCreateArgs>(args: Prisma.SelectSubset<T, MenuItemCreateArgs<ExtArgs>>): Prisma.Prisma__MenuItemClient<runtime.Types.Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends MenuItemCreateManyArgs>(args?: Prisma.SelectSubset<T, MenuItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends MenuItemCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, MenuItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends MenuItemDeleteArgs>(args: Prisma.SelectSubset<T, MenuItemDeleteArgs<ExtArgs>>): Prisma.Prisma__MenuItemClient<runtime.Types.Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends MenuItemUpdateArgs>(args: Prisma.SelectSubset<T, MenuItemUpdateArgs<ExtArgs>>): Prisma.Prisma__MenuItemClient<runtime.Types.Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends MenuItemDeleteManyArgs>(args?: Prisma.SelectSubset<T, MenuItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends MenuItemUpdateManyArgs>(args: Prisma.SelectSubset<T, MenuItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends MenuItemUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, MenuItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends MenuItemUpsertArgs>(args: Prisma.SelectSubset<T, MenuItemUpsertArgs<ExtArgs>>): Prisma.Prisma__MenuItemClient<runtime.Types.Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends MenuItemCountArgs>(args?: Prisma.Subset<T, MenuItemCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MenuItemCountAggregateOutputType> : number>;
    aggregate<T extends MenuItemAggregateArgs>(args: Prisma.Subset<T, MenuItemAggregateArgs>): Prisma.PrismaPromise<GetMenuItemAggregateType<T>>;
    groupBy<T extends MenuItemGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: MenuItemGroupByArgs['orderBy'];
    } : {
        orderBy?: MenuItemGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, MenuItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMenuItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: MenuItemFieldRefs;
}
export interface Prisma__MenuItemClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    menuCategory<T extends Prisma.MenuCategoryDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.MenuCategoryDefaultArgs<ExtArgs>>): Prisma.Prisma__MenuCategoryClient<runtime.Types.Result.GetResult<Prisma.$MenuCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    cartItems<T extends Prisma.MenuItem$cartItemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.MenuItem$cartItemsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    orderItems<T extends Prisma.MenuItem$orderItemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.MenuItem$orderItemsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface MenuItemFieldRefs {
    readonly menuItemId: Prisma.FieldRef<"MenuItem", 'String'>;
    readonly menuCategoryId: Prisma.FieldRef<"MenuItem", 'String'>;
    readonly menuItemName: Prisma.FieldRef<"MenuItem", 'String'>;
    readonly menuItemDesc: Prisma.FieldRef<"MenuItem", 'String'>;
    readonly menuItemImageUrl: Prisma.FieldRef<"MenuItem", 'String'>;
    readonly price: Prisma.FieldRef<"MenuItem", 'Int'>;
    readonly stockQuantity: Prisma.FieldRef<"MenuItem", 'Int'>;
    readonly isActive: Prisma.FieldRef<"MenuItem", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"MenuItem", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"MenuItem", 'DateTime'>;
}
export type MenuItemFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MenuItemSelect<ExtArgs> | null;
    omit?: Prisma.MenuItemOmit<ExtArgs> | null;
    include?: Prisma.MenuItemInclude<ExtArgs> | null;
    where: Prisma.MenuItemWhereUniqueInput;
};
export type MenuItemFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MenuItemSelect<ExtArgs> | null;
    omit?: Prisma.MenuItemOmit<ExtArgs> | null;
    include?: Prisma.MenuItemInclude<ExtArgs> | null;
    where: Prisma.MenuItemWhereUniqueInput;
};
export type MenuItemFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MenuItemSelect<ExtArgs> | null;
    omit?: Prisma.MenuItemOmit<ExtArgs> | null;
    include?: Prisma.MenuItemInclude<ExtArgs> | null;
    where?: Prisma.MenuItemWhereInput;
    orderBy?: Prisma.MenuItemOrderByWithRelationInput | Prisma.MenuItemOrderByWithRelationInput[];
    cursor?: Prisma.MenuItemWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MenuItemScalarFieldEnum | Prisma.MenuItemScalarFieldEnum[];
};
export type MenuItemFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MenuItemSelect<ExtArgs> | null;
    omit?: Prisma.MenuItemOmit<ExtArgs> | null;
    include?: Prisma.MenuItemInclude<ExtArgs> | null;
    where?: Prisma.MenuItemWhereInput;
    orderBy?: Prisma.MenuItemOrderByWithRelationInput | Prisma.MenuItemOrderByWithRelationInput[];
    cursor?: Prisma.MenuItemWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MenuItemScalarFieldEnum | Prisma.MenuItemScalarFieldEnum[];
};
export type MenuItemFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MenuItemSelect<ExtArgs> | null;
    omit?: Prisma.MenuItemOmit<ExtArgs> | null;
    include?: Prisma.MenuItemInclude<ExtArgs> | null;
    where?: Prisma.MenuItemWhereInput;
    orderBy?: Prisma.MenuItemOrderByWithRelationInput | Prisma.MenuItemOrderByWithRelationInput[];
    cursor?: Prisma.MenuItemWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MenuItemScalarFieldEnum | Prisma.MenuItemScalarFieldEnum[];
};
export type MenuItemCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MenuItemSelect<ExtArgs> | null;
    omit?: Prisma.MenuItemOmit<ExtArgs> | null;
    include?: Prisma.MenuItemInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MenuItemCreateInput, Prisma.MenuItemUncheckedCreateInput>;
};
export type MenuItemCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.MenuItemCreateManyInput | Prisma.MenuItemCreateManyInput[];
    skipDuplicates?: boolean;
};
export type MenuItemCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MenuItemSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MenuItemOmit<ExtArgs> | null;
    data: Prisma.MenuItemCreateManyInput | Prisma.MenuItemCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.MenuItemIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type MenuItemUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MenuItemSelect<ExtArgs> | null;
    omit?: Prisma.MenuItemOmit<ExtArgs> | null;
    include?: Prisma.MenuItemInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MenuItemUpdateInput, Prisma.MenuItemUncheckedUpdateInput>;
    where: Prisma.MenuItemWhereUniqueInput;
};
export type MenuItemUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.MenuItemUpdateManyMutationInput, Prisma.MenuItemUncheckedUpdateManyInput>;
    where?: Prisma.MenuItemWhereInput;
    limit?: number;
};
export type MenuItemUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MenuItemSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MenuItemOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MenuItemUpdateManyMutationInput, Prisma.MenuItemUncheckedUpdateManyInput>;
    where?: Prisma.MenuItemWhereInput;
    limit?: number;
    include?: Prisma.MenuItemIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type MenuItemUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MenuItemSelect<ExtArgs> | null;
    omit?: Prisma.MenuItemOmit<ExtArgs> | null;
    include?: Prisma.MenuItemInclude<ExtArgs> | null;
    where: Prisma.MenuItemWhereUniqueInput;
    create: Prisma.XOR<Prisma.MenuItemCreateInput, Prisma.MenuItemUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.MenuItemUpdateInput, Prisma.MenuItemUncheckedUpdateInput>;
};
export type MenuItemDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MenuItemSelect<ExtArgs> | null;
    omit?: Prisma.MenuItemOmit<ExtArgs> | null;
    include?: Prisma.MenuItemInclude<ExtArgs> | null;
    where: Prisma.MenuItemWhereUniqueInput;
};
export type MenuItemDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MenuItemWhereInput;
    limit?: number;
};
export type MenuItem$cartItemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CartItemSelect<ExtArgs> | null;
    omit?: Prisma.CartItemOmit<ExtArgs> | null;
    include?: Prisma.CartItemInclude<ExtArgs> | null;
    where?: Prisma.CartItemWhereInput;
    orderBy?: Prisma.CartItemOrderByWithRelationInput | Prisma.CartItemOrderByWithRelationInput[];
    cursor?: Prisma.CartItemWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CartItemScalarFieldEnum | Prisma.CartItemScalarFieldEnum[];
};
export type MenuItem$orderItemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type MenuItemDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MenuItemSelect<ExtArgs> | null;
    omit?: Prisma.MenuItemOmit<ExtArgs> | null;
    include?: Prisma.MenuItemInclude<ExtArgs> | null;
};
