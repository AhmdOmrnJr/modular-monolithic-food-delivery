import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type MenuCategoryModel = runtime.Types.Result.DefaultSelection<Prisma.$MenuCategoryPayload>;
export type AggregateMenuCategory = {
    _count: MenuCategoryCountAggregateOutputType | null;
    _min: MenuCategoryMinAggregateOutputType | null;
    _max: MenuCategoryMaxAggregateOutputType | null;
};
export type MenuCategoryMinAggregateOutputType = {
    menuCategoryId: string | null;
    menuId: string | null;
    menuCategoryName: string | null;
    menuCategoryImageUrl: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type MenuCategoryMaxAggregateOutputType = {
    menuCategoryId: string | null;
    menuId: string | null;
    menuCategoryName: string | null;
    menuCategoryImageUrl: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type MenuCategoryCountAggregateOutputType = {
    menuCategoryId: number;
    menuId: number;
    menuCategoryName: number;
    menuCategoryImageUrl: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type MenuCategoryMinAggregateInputType = {
    menuCategoryId?: true;
    menuId?: true;
    menuCategoryName?: true;
    menuCategoryImageUrl?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type MenuCategoryMaxAggregateInputType = {
    menuCategoryId?: true;
    menuId?: true;
    menuCategoryName?: true;
    menuCategoryImageUrl?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type MenuCategoryCountAggregateInputType = {
    menuCategoryId?: true;
    menuId?: true;
    menuCategoryName?: true;
    menuCategoryImageUrl?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type MenuCategoryAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MenuCategoryWhereInput;
    orderBy?: Prisma.MenuCategoryOrderByWithRelationInput | Prisma.MenuCategoryOrderByWithRelationInput[];
    cursor?: Prisma.MenuCategoryWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | MenuCategoryCountAggregateInputType;
    _min?: MenuCategoryMinAggregateInputType;
    _max?: MenuCategoryMaxAggregateInputType;
};
export type GetMenuCategoryAggregateType<T extends MenuCategoryAggregateArgs> = {
    [P in keyof T & keyof AggregateMenuCategory]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMenuCategory[P]> : Prisma.GetScalarType<T[P], AggregateMenuCategory[P]>;
};
export type MenuCategoryGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MenuCategoryWhereInput;
    orderBy?: Prisma.MenuCategoryOrderByWithAggregationInput | Prisma.MenuCategoryOrderByWithAggregationInput[];
    by: Prisma.MenuCategoryScalarFieldEnum[] | Prisma.MenuCategoryScalarFieldEnum;
    having?: Prisma.MenuCategoryScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MenuCategoryCountAggregateInputType | true;
    _min?: MenuCategoryMinAggregateInputType;
    _max?: MenuCategoryMaxAggregateInputType;
};
export type MenuCategoryGroupByOutputType = {
    menuCategoryId: string;
    menuId: string;
    menuCategoryName: string;
    menuCategoryImageUrl: string;
    createdAt: Date;
    updatedAt: Date;
    _count: MenuCategoryCountAggregateOutputType | null;
    _min: MenuCategoryMinAggregateOutputType | null;
    _max: MenuCategoryMaxAggregateOutputType | null;
};
export type GetMenuCategoryGroupByPayload<T extends MenuCategoryGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MenuCategoryGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MenuCategoryGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MenuCategoryGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MenuCategoryGroupByOutputType[P]>;
}>>;
export type MenuCategoryWhereInput = {
    AND?: Prisma.MenuCategoryWhereInput | Prisma.MenuCategoryWhereInput[];
    OR?: Prisma.MenuCategoryWhereInput[];
    NOT?: Prisma.MenuCategoryWhereInput | Prisma.MenuCategoryWhereInput[];
    menuCategoryId?: Prisma.StringFilter<"MenuCategory"> | string;
    menuId?: Prisma.StringFilter<"MenuCategory"> | string;
    menuCategoryName?: Prisma.StringFilter<"MenuCategory"> | string;
    menuCategoryImageUrl?: Prisma.StringFilter<"MenuCategory"> | string;
    createdAt?: Prisma.DateTimeFilter<"MenuCategory"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"MenuCategory"> | Date | string;
    menu?: Prisma.XOR<Prisma.MenuScalarRelationFilter, Prisma.MenuWhereInput>;
    menuItems?: Prisma.MenuItemListRelationFilter;
};
export type MenuCategoryOrderByWithRelationInput = {
    menuCategoryId?: Prisma.SortOrder;
    menuId?: Prisma.SortOrder;
    menuCategoryName?: Prisma.SortOrder;
    menuCategoryImageUrl?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    menu?: Prisma.MenuOrderByWithRelationInput;
    menuItems?: Prisma.MenuItemOrderByRelationAggregateInput;
};
export type MenuCategoryWhereUniqueInput = Prisma.AtLeast<{
    menuCategoryId?: string;
    AND?: Prisma.MenuCategoryWhereInput | Prisma.MenuCategoryWhereInput[];
    OR?: Prisma.MenuCategoryWhereInput[];
    NOT?: Prisma.MenuCategoryWhereInput | Prisma.MenuCategoryWhereInput[];
    menuId?: Prisma.StringFilter<"MenuCategory"> | string;
    menuCategoryName?: Prisma.StringFilter<"MenuCategory"> | string;
    menuCategoryImageUrl?: Prisma.StringFilter<"MenuCategory"> | string;
    createdAt?: Prisma.DateTimeFilter<"MenuCategory"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"MenuCategory"> | Date | string;
    menu?: Prisma.XOR<Prisma.MenuScalarRelationFilter, Prisma.MenuWhereInput>;
    menuItems?: Prisma.MenuItemListRelationFilter;
}, "menuCategoryId">;
export type MenuCategoryOrderByWithAggregationInput = {
    menuCategoryId?: Prisma.SortOrder;
    menuId?: Prisma.SortOrder;
    menuCategoryName?: Prisma.SortOrder;
    menuCategoryImageUrl?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.MenuCategoryCountOrderByAggregateInput;
    _max?: Prisma.MenuCategoryMaxOrderByAggregateInput;
    _min?: Prisma.MenuCategoryMinOrderByAggregateInput;
};
export type MenuCategoryScalarWhereWithAggregatesInput = {
    AND?: Prisma.MenuCategoryScalarWhereWithAggregatesInput | Prisma.MenuCategoryScalarWhereWithAggregatesInput[];
    OR?: Prisma.MenuCategoryScalarWhereWithAggregatesInput[];
    NOT?: Prisma.MenuCategoryScalarWhereWithAggregatesInput | Prisma.MenuCategoryScalarWhereWithAggregatesInput[];
    menuCategoryId?: Prisma.StringWithAggregatesFilter<"MenuCategory"> | string;
    menuId?: Prisma.StringWithAggregatesFilter<"MenuCategory"> | string;
    menuCategoryName?: Prisma.StringWithAggregatesFilter<"MenuCategory"> | string;
    menuCategoryImageUrl?: Prisma.StringWithAggregatesFilter<"MenuCategory"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"MenuCategory"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"MenuCategory"> | Date | string;
};
export type MenuCategoryCreateInput = {
    menuCategoryId?: string;
    menuCategoryName: string;
    menuCategoryImageUrl: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    menu: Prisma.MenuCreateNestedOneWithoutMenuCategoriesInput;
    menuItems?: Prisma.MenuItemCreateNestedManyWithoutMenuCategoryInput;
};
export type MenuCategoryUncheckedCreateInput = {
    menuCategoryId?: string;
    menuId: string;
    menuCategoryName: string;
    menuCategoryImageUrl: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    menuItems?: Prisma.MenuItemUncheckedCreateNestedManyWithoutMenuCategoryInput;
};
export type MenuCategoryUpdateInput = {
    menuCategoryId?: Prisma.StringFieldUpdateOperationsInput | string;
    menuCategoryName?: Prisma.StringFieldUpdateOperationsInput | string;
    menuCategoryImageUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    menu?: Prisma.MenuUpdateOneRequiredWithoutMenuCategoriesNestedInput;
    menuItems?: Prisma.MenuItemUpdateManyWithoutMenuCategoryNestedInput;
};
export type MenuCategoryUncheckedUpdateInput = {
    menuCategoryId?: Prisma.StringFieldUpdateOperationsInput | string;
    menuId?: Prisma.StringFieldUpdateOperationsInput | string;
    menuCategoryName?: Prisma.StringFieldUpdateOperationsInput | string;
    menuCategoryImageUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    menuItems?: Prisma.MenuItemUncheckedUpdateManyWithoutMenuCategoryNestedInput;
};
export type MenuCategoryCreateManyInput = {
    menuCategoryId?: string;
    menuId: string;
    menuCategoryName: string;
    menuCategoryImageUrl: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MenuCategoryUpdateManyMutationInput = {
    menuCategoryId?: Prisma.StringFieldUpdateOperationsInput | string;
    menuCategoryName?: Prisma.StringFieldUpdateOperationsInput | string;
    menuCategoryImageUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MenuCategoryUncheckedUpdateManyInput = {
    menuCategoryId?: Prisma.StringFieldUpdateOperationsInput | string;
    menuId?: Prisma.StringFieldUpdateOperationsInput | string;
    menuCategoryName?: Prisma.StringFieldUpdateOperationsInput | string;
    menuCategoryImageUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MenuCategoryListRelationFilter = {
    every?: Prisma.MenuCategoryWhereInput;
    some?: Prisma.MenuCategoryWhereInput;
    none?: Prisma.MenuCategoryWhereInput;
};
export type MenuCategoryOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type MenuCategoryCountOrderByAggregateInput = {
    menuCategoryId?: Prisma.SortOrder;
    menuId?: Prisma.SortOrder;
    menuCategoryName?: Prisma.SortOrder;
    menuCategoryImageUrl?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type MenuCategoryMaxOrderByAggregateInput = {
    menuCategoryId?: Prisma.SortOrder;
    menuId?: Prisma.SortOrder;
    menuCategoryName?: Prisma.SortOrder;
    menuCategoryImageUrl?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type MenuCategoryMinOrderByAggregateInput = {
    menuCategoryId?: Prisma.SortOrder;
    menuId?: Prisma.SortOrder;
    menuCategoryName?: Prisma.SortOrder;
    menuCategoryImageUrl?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type MenuCategoryScalarRelationFilter = {
    is?: Prisma.MenuCategoryWhereInput;
    isNot?: Prisma.MenuCategoryWhereInput;
};
export type MenuCategoryCreateNestedManyWithoutMenuInput = {
    create?: Prisma.XOR<Prisma.MenuCategoryCreateWithoutMenuInput, Prisma.MenuCategoryUncheckedCreateWithoutMenuInput> | Prisma.MenuCategoryCreateWithoutMenuInput[] | Prisma.MenuCategoryUncheckedCreateWithoutMenuInput[];
    connectOrCreate?: Prisma.MenuCategoryCreateOrConnectWithoutMenuInput | Prisma.MenuCategoryCreateOrConnectWithoutMenuInput[];
    createMany?: Prisma.MenuCategoryCreateManyMenuInputEnvelope;
    connect?: Prisma.MenuCategoryWhereUniqueInput | Prisma.MenuCategoryWhereUniqueInput[];
};
export type MenuCategoryUncheckedCreateNestedManyWithoutMenuInput = {
    create?: Prisma.XOR<Prisma.MenuCategoryCreateWithoutMenuInput, Prisma.MenuCategoryUncheckedCreateWithoutMenuInput> | Prisma.MenuCategoryCreateWithoutMenuInput[] | Prisma.MenuCategoryUncheckedCreateWithoutMenuInput[];
    connectOrCreate?: Prisma.MenuCategoryCreateOrConnectWithoutMenuInput | Prisma.MenuCategoryCreateOrConnectWithoutMenuInput[];
    createMany?: Prisma.MenuCategoryCreateManyMenuInputEnvelope;
    connect?: Prisma.MenuCategoryWhereUniqueInput | Prisma.MenuCategoryWhereUniqueInput[];
};
export type MenuCategoryUpdateManyWithoutMenuNestedInput = {
    create?: Prisma.XOR<Prisma.MenuCategoryCreateWithoutMenuInput, Prisma.MenuCategoryUncheckedCreateWithoutMenuInput> | Prisma.MenuCategoryCreateWithoutMenuInput[] | Prisma.MenuCategoryUncheckedCreateWithoutMenuInput[];
    connectOrCreate?: Prisma.MenuCategoryCreateOrConnectWithoutMenuInput | Prisma.MenuCategoryCreateOrConnectWithoutMenuInput[];
    upsert?: Prisma.MenuCategoryUpsertWithWhereUniqueWithoutMenuInput | Prisma.MenuCategoryUpsertWithWhereUniqueWithoutMenuInput[];
    createMany?: Prisma.MenuCategoryCreateManyMenuInputEnvelope;
    set?: Prisma.MenuCategoryWhereUniqueInput | Prisma.MenuCategoryWhereUniqueInput[];
    disconnect?: Prisma.MenuCategoryWhereUniqueInput | Prisma.MenuCategoryWhereUniqueInput[];
    delete?: Prisma.MenuCategoryWhereUniqueInput | Prisma.MenuCategoryWhereUniqueInput[];
    connect?: Prisma.MenuCategoryWhereUniqueInput | Prisma.MenuCategoryWhereUniqueInput[];
    update?: Prisma.MenuCategoryUpdateWithWhereUniqueWithoutMenuInput | Prisma.MenuCategoryUpdateWithWhereUniqueWithoutMenuInput[];
    updateMany?: Prisma.MenuCategoryUpdateManyWithWhereWithoutMenuInput | Prisma.MenuCategoryUpdateManyWithWhereWithoutMenuInput[];
    deleteMany?: Prisma.MenuCategoryScalarWhereInput | Prisma.MenuCategoryScalarWhereInput[];
};
export type MenuCategoryUncheckedUpdateManyWithoutMenuNestedInput = {
    create?: Prisma.XOR<Prisma.MenuCategoryCreateWithoutMenuInput, Prisma.MenuCategoryUncheckedCreateWithoutMenuInput> | Prisma.MenuCategoryCreateWithoutMenuInput[] | Prisma.MenuCategoryUncheckedCreateWithoutMenuInput[];
    connectOrCreate?: Prisma.MenuCategoryCreateOrConnectWithoutMenuInput | Prisma.MenuCategoryCreateOrConnectWithoutMenuInput[];
    upsert?: Prisma.MenuCategoryUpsertWithWhereUniqueWithoutMenuInput | Prisma.MenuCategoryUpsertWithWhereUniqueWithoutMenuInput[];
    createMany?: Prisma.MenuCategoryCreateManyMenuInputEnvelope;
    set?: Prisma.MenuCategoryWhereUniqueInput | Prisma.MenuCategoryWhereUniqueInput[];
    disconnect?: Prisma.MenuCategoryWhereUniqueInput | Prisma.MenuCategoryWhereUniqueInput[];
    delete?: Prisma.MenuCategoryWhereUniqueInput | Prisma.MenuCategoryWhereUniqueInput[];
    connect?: Prisma.MenuCategoryWhereUniqueInput | Prisma.MenuCategoryWhereUniqueInput[];
    update?: Prisma.MenuCategoryUpdateWithWhereUniqueWithoutMenuInput | Prisma.MenuCategoryUpdateWithWhereUniqueWithoutMenuInput[];
    updateMany?: Prisma.MenuCategoryUpdateManyWithWhereWithoutMenuInput | Prisma.MenuCategoryUpdateManyWithWhereWithoutMenuInput[];
    deleteMany?: Prisma.MenuCategoryScalarWhereInput | Prisma.MenuCategoryScalarWhereInput[];
};
export type MenuCategoryCreateNestedOneWithoutMenuItemsInput = {
    create?: Prisma.XOR<Prisma.MenuCategoryCreateWithoutMenuItemsInput, Prisma.MenuCategoryUncheckedCreateWithoutMenuItemsInput>;
    connectOrCreate?: Prisma.MenuCategoryCreateOrConnectWithoutMenuItemsInput;
    connect?: Prisma.MenuCategoryWhereUniqueInput;
};
export type MenuCategoryUpdateOneRequiredWithoutMenuItemsNestedInput = {
    create?: Prisma.XOR<Prisma.MenuCategoryCreateWithoutMenuItemsInput, Prisma.MenuCategoryUncheckedCreateWithoutMenuItemsInput>;
    connectOrCreate?: Prisma.MenuCategoryCreateOrConnectWithoutMenuItemsInput;
    upsert?: Prisma.MenuCategoryUpsertWithoutMenuItemsInput;
    connect?: Prisma.MenuCategoryWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.MenuCategoryUpdateToOneWithWhereWithoutMenuItemsInput, Prisma.MenuCategoryUpdateWithoutMenuItemsInput>, Prisma.MenuCategoryUncheckedUpdateWithoutMenuItemsInput>;
};
export type MenuCategoryCreateWithoutMenuInput = {
    menuCategoryId?: string;
    menuCategoryName: string;
    menuCategoryImageUrl: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    menuItems?: Prisma.MenuItemCreateNestedManyWithoutMenuCategoryInput;
};
export type MenuCategoryUncheckedCreateWithoutMenuInput = {
    menuCategoryId?: string;
    menuCategoryName: string;
    menuCategoryImageUrl: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    menuItems?: Prisma.MenuItemUncheckedCreateNestedManyWithoutMenuCategoryInput;
};
export type MenuCategoryCreateOrConnectWithoutMenuInput = {
    where: Prisma.MenuCategoryWhereUniqueInput;
    create: Prisma.XOR<Prisma.MenuCategoryCreateWithoutMenuInput, Prisma.MenuCategoryUncheckedCreateWithoutMenuInput>;
};
export type MenuCategoryCreateManyMenuInputEnvelope = {
    data: Prisma.MenuCategoryCreateManyMenuInput | Prisma.MenuCategoryCreateManyMenuInput[];
    skipDuplicates?: boolean;
};
export type MenuCategoryUpsertWithWhereUniqueWithoutMenuInput = {
    where: Prisma.MenuCategoryWhereUniqueInput;
    update: Prisma.XOR<Prisma.MenuCategoryUpdateWithoutMenuInput, Prisma.MenuCategoryUncheckedUpdateWithoutMenuInput>;
    create: Prisma.XOR<Prisma.MenuCategoryCreateWithoutMenuInput, Prisma.MenuCategoryUncheckedCreateWithoutMenuInput>;
};
export type MenuCategoryUpdateWithWhereUniqueWithoutMenuInput = {
    where: Prisma.MenuCategoryWhereUniqueInput;
    data: Prisma.XOR<Prisma.MenuCategoryUpdateWithoutMenuInput, Prisma.MenuCategoryUncheckedUpdateWithoutMenuInput>;
};
export type MenuCategoryUpdateManyWithWhereWithoutMenuInput = {
    where: Prisma.MenuCategoryScalarWhereInput;
    data: Prisma.XOR<Prisma.MenuCategoryUpdateManyMutationInput, Prisma.MenuCategoryUncheckedUpdateManyWithoutMenuInput>;
};
export type MenuCategoryScalarWhereInput = {
    AND?: Prisma.MenuCategoryScalarWhereInput | Prisma.MenuCategoryScalarWhereInput[];
    OR?: Prisma.MenuCategoryScalarWhereInput[];
    NOT?: Prisma.MenuCategoryScalarWhereInput | Prisma.MenuCategoryScalarWhereInput[];
    menuCategoryId?: Prisma.StringFilter<"MenuCategory"> | string;
    menuId?: Prisma.StringFilter<"MenuCategory"> | string;
    menuCategoryName?: Prisma.StringFilter<"MenuCategory"> | string;
    menuCategoryImageUrl?: Prisma.StringFilter<"MenuCategory"> | string;
    createdAt?: Prisma.DateTimeFilter<"MenuCategory"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"MenuCategory"> | Date | string;
};
export type MenuCategoryCreateWithoutMenuItemsInput = {
    menuCategoryId?: string;
    menuCategoryName: string;
    menuCategoryImageUrl: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    menu: Prisma.MenuCreateNestedOneWithoutMenuCategoriesInput;
};
export type MenuCategoryUncheckedCreateWithoutMenuItemsInput = {
    menuCategoryId?: string;
    menuId: string;
    menuCategoryName: string;
    menuCategoryImageUrl: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MenuCategoryCreateOrConnectWithoutMenuItemsInput = {
    where: Prisma.MenuCategoryWhereUniqueInput;
    create: Prisma.XOR<Prisma.MenuCategoryCreateWithoutMenuItemsInput, Prisma.MenuCategoryUncheckedCreateWithoutMenuItemsInput>;
};
export type MenuCategoryUpsertWithoutMenuItemsInput = {
    update: Prisma.XOR<Prisma.MenuCategoryUpdateWithoutMenuItemsInput, Prisma.MenuCategoryUncheckedUpdateWithoutMenuItemsInput>;
    create: Prisma.XOR<Prisma.MenuCategoryCreateWithoutMenuItemsInput, Prisma.MenuCategoryUncheckedCreateWithoutMenuItemsInput>;
    where?: Prisma.MenuCategoryWhereInput;
};
export type MenuCategoryUpdateToOneWithWhereWithoutMenuItemsInput = {
    where?: Prisma.MenuCategoryWhereInput;
    data: Prisma.XOR<Prisma.MenuCategoryUpdateWithoutMenuItemsInput, Prisma.MenuCategoryUncheckedUpdateWithoutMenuItemsInput>;
};
export type MenuCategoryUpdateWithoutMenuItemsInput = {
    menuCategoryId?: Prisma.StringFieldUpdateOperationsInput | string;
    menuCategoryName?: Prisma.StringFieldUpdateOperationsInput | string;
    menuCategoryImageUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    menu?: Prisma.MenuUpdateOneRequiredWithoutMenuCategoriesNestedInput;
};
export type MenuCategoryUncheckedUpdateWithoutMenuItemsInput = {
    menuCategoryId?: Prisma.StringFieldUpdateOperationsInput | string;
    menuId?: Prisma.StringFieldUpdateOperationsInput | string;
    menuCategoryName?: Prisma.StringFieldUpdateOperationsInput | string;
    menuCategoryImageUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MenuCategoryCreateManyMenuInput = {
    menuCategoryId?: string;
    menuCategoryName: string;
    menuCategoryImageUrl: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MenuCategoryUpdateWithoutMenuInput = {
    menuCategoryId?: Prisma.StringFieldUpdateOperationsInput | string;
    menuCategoryName?: Prisma.StringFieldUpdateOperationsInput | string;
    menuCategoryImageUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    menuItems?: Prisma.MenuItemUpdateManyWithoutMenuCategoryNestedInput;
};
export type MenuCategoryUncheckedUpdateWithoutMenuInput = {
    menuCategoryId?: Prisma.StringFieldUpdateOperationsInput | string;
    menuCategoryName?: Prisma.StringFieldUpdateOperationsInput | string;
    menuCategoryImageUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    menuItems?: Prisma.MenuItemUncheckedUpdateManyWithoutMenuCategoryNestedInput;
};
export type MenuCategoryUncheckedUpdateManyWithoutMenuInput = {
    menuCategoryId?: Prisma.StringFieldUpdateOperationsInput | string;
    menuCategoryName?: Prisma.StringFieldUpdateOperationsInput | string;
    menuCategoryImageUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MenuCategoryCountOutputType = {
    menuItems: number;
};
export type MenuCategoryCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    menuItems?: boolean | MenuCategoryCountOutputTypeCountMenuItemsArgs;
};
export type MenuCategoryCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MenuCategoryCountOutputTypeSelect<ExtArgs> | null;
};
export type MenuCategoryCountOutputTypeCountMenuItemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MenuItemWhereInput;
};
export type MenuCategorySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    menuCategoryId?: boolean;
    menuId?: boolean;
    menuCategoryName?: boolean;
    menuCategoryImageUrl?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    menu?: boolean | Prisma.MenuDefaultArgs<ExtArgs>;
    menuItems?: boolean | Prisma.MenuCategory$menuItemsArgs<ExtArgs>;
    _count?: boolean | Prisma.MenuCategoryCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["menuCategory"]>;
export type MenuCategorySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    menuCategoryId?: boolean;
    menuId?: boolean;
    menuCategoryName?: boolean;
    menuCategoryImageUrl?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    menu?: boolean | Prisma.MenuDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["menuCategory"]>;
export type MenuCategorySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    menuCategoryId?: boolean;
    menuId?: boolean;
    menuCategoryName?: boolean;
    menuCategoryImageUrl?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    menu?: boolean | Prisma.MenuDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["menuCategory"]>;
export type MenuCategorySelectScalar = {
    menuCategoryId?: boolean;
    menuId?: boolean;
    menuCategoryName?: boolean;
    menuCategoryImageUrl?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type MenuCategoryOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"menuCategoryId" | "menuId" | "menuCategoryName" | "menuCategoryImageUrl" | "createdAt" | "updatedAt", ExtArgs["result"]["menuCategory"]>;
export type MenuCategoryInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    menu?: boolean | Prisma.MenuDefaultArgs<ExtArgs>;
    menuItems?: boolean | Prisma.MenuCategory$menuItemsArgs<ExtArgs>;
    _count?: boolean | Prisma.MenuCategoryCountOutputTypeDefaultArgs<ExtArgs>;
};
export type MenuCategoryIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    menu?: boolean | Prisma.MenuDefaultArgs<ExtArgs>;
};
export type MenuCategoryIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    menu?: boolean | Prisma.MenuDefaultArgs<ExtArgs>;
};
export type $MenuCategoryPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "MenuCategory";
    objects: {
        menu: Prisma.$MenuPayload<ExtArgs>;
        menuItems: Prisma.$MenuItemPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        menuCategoryId: string;
        menuId: string;
        menuCategoryName: string;
        menuCategoryImageUrl: string;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["menuCategory"]>;
    composites: {};
};
export type MenuCategoryGetPayload<S extends boolean | null | undefined | MenuCategoryDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$MenuCategoryPayload, S>;
export type MenuCategoryCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<MenuCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MenuCategoryCountAggregateInputType | true;
};
export interface MenuCategoryDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['MenuCategory'];
        meta: {
            name: 'MenuCategory';
        };
    };
    findUnique<T extends MenuCategoryFindUniqueArgs>(args: Prisma.SelectSubset<T, MenuCategoryFindUniqueArgs<ExtArgs>>): Prisma.Prisma__MenuCategoryClient<runtime.Types.Result.GetResult<Prisma.$MenuCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends MenuCategoryFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, MenuCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__MenuCategoryClient<runtime.Types.Result.GetResult<Prisma.$MenuCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends MenuCategoryFindFirstArgs>(args?: Prisma.SelectSubset<T, MenuCategoryFindFirstArgs<ExtArgs>>): Prisma.Prisma__MenuCategoryClient<runtime.Types.Result.GetResult<Prisma.$MenuCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends MenuCategoryFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, MenuCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__MenuCategoryClient<runtime.Types.Result.GetResult<Prisma.$MenuCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends MenuCategoryFindManyArgs>(args?: Prisma.SelectSubset<T, MenuCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MenuCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends MenuCategoryCreateArgs>(args: Prisma.SelectSubset<T, MenuCategoryCreateArgs<ExtArgs>>): Prisma.Prisma__MenuCategoryClient<runtime.Types.Result.GetResult<Prisma.$MenuCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends MenuCategoryCreateManyArgs>(args?: Prisma.SelectSubset<T, MenuCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends MenuCategoryCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, MenuCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MenuCategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends MenuCategoryDeleteArgs>(args: Prisma.SelectSubset<T, MenuCategoryDeleteArgs<ExtArgs>>): Prisma.Prisma__MenuCategoryClient<runtime.Types.Result.GetResult<Prisma.$MenuCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends MenuCategoryUpdateArgs>(args: Prisma.SelectSubset<T, MenuCategoryUpdateArgs<ExtArgs>>): Prisma.Prisma__MenuCategoryClient<runtime.Types.Result.GetResult<Prisma.$MenuCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends MenuCategoryDeleteManyArgs>(args?: Prisma.SelectSubset<T, MenuCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends MenuCategoryUpdateManyArgs>(args: Prisma.SelectSubset<T, MenuCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends MenuCategoryUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, MenuCategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MenuCategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends MenuCategoryUpsertArgs>(args: Prisma.SelectSubset<T, MenuCategoryUpsertArgs<ExtArgs>>): Prisma.Prisma__MenuCategoryClient<runtime.Types.Result.GetResult<Prisma.$MenuCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends MenuCategoryCountArgs>(args?: Prisma.Subset<T, MenuCategoryCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MenuCategoryCountAggregateOutputType> : number>;
    aggregate<T extends MenuCategoryAggregateArgs>(args: Prisma.Subset<T, MenuCategoryAggregateArgs>): Prisma.PrismaPromise<GetMenuCategoryAggregateType<T>>;
    groupBy<T extends MenuCategoryGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: MenuCategoryGroupByArgs['orderBy'];
    } : {
        orderBy?: MenuCategoryGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, MenuCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMenuCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: MenuCategoryFieldRefs;
}
export interface Prisma__MenuCategoryClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    menu<T extends Prisma.MenuDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.MenuDefaultArgs<ExtArgs>>): Prisma.Prisma__MenuClient<runtime.Types.Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    menuItems<T extends Prisma.MenuCategory$menuItemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.MenuCategory$menuItemsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface MenuCategoryFieldRefs {
    readonly menuCategoryId: Prisma.FieldRef<"MenuCategory", 'String'>;
    readonly menuId: Prisma.FieldRef<"MenuCategory", 'String'>;
    readonly menuCategoryName: Prisma.FieldRef<"MenuCategory", 'String'>;
    readonly menuCategoryImageUrl: Prisma.FieldRef<"MenuCategory", 'String'>;
    readonly createdAt: Prisma.FieldRef<"MenuCategory", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"MenuCategory", 'DateTime'>;
}
export type MenuCategoryFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MenuCategorySelect<ExtArgs> | null;
    omit?: Prisma.MenuCategoryOmit<ExtArgs> | null;
    include?: Prisma.MenuCategoryInclude<ExtArgs> | null;
    where: Prisma.MenuCategoryWhereUniqueInput;
};
export type MenuCategoryFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MenuCategorySelect<ExtArgs> | null;
    omit?: Prisma.MenuCategoryOmit<ExtArgs> | null;
    include?: Prisma.MenuCategoryInclude<ExtArgs> | null;
    where: Prisma.MenuCategoryWhereUniqueInput;
};
export type MenuCategoryFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MenuCategorySelect<ExtArgs> | null;
    omit?: Prisma.MenuCategoryOmit<ExtArgs> | null;
    include?: Prisma.MenuCategoryInclude<ExtArgs> | null;
    where?: Prisma.MenuCategoryWhereInput;
    orderBy?: Prisma.MenuCategoryOrderByWithRelationInput | Prisma.MenuCategoryOrderByWithRelationInput[];
    cursor?: Prisma.MenuCategoryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MenuCategoryScalarFieldEnum | Prisma.MenuCategoryScalarFieldEnum[];
};
export type MenuCategoryFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MenuCategorySelect<ExtArgs> | null;
    omit?: Prisma.MenuCategoryOmit<ExtArgs> | null;
    include?: Prisma.MenuCategoryInclude<ExtArgs> | null;
    where?: Prisma.MenuCategoryWhereInput;
    orderBy?: Prisma.MenuCategoryOrderByWithRelationInput | Prisma.MenuCategoryOrderByWithRelationInput[];
    cursor?: Prisma.MenuCategoryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MenuCategoryScalarFieldEnum | Prisma.MenuCategoryScalarFieldEnum[];
};
export type MenuCategoryFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MenuCategorySelect<ExtArgs> | null;
    omit?: Prisma.MenuCategoryOmit<ExtArgs> | null;
    include?: Prisma.MenuCategoryInclude<ExtArgs> | null;
    where?: Prisma.MenuCategoryWhereInput;
    orderBy?: Prisma.MenuCategoryOrderByWithRelationInput | Prisma.MenuCategoryOrderByWithRelationInput[];
    cursor?: Prisma.MenuCategoryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MenuCategoryScalarFieldEnum | Prisma.MenuCategoryScalarFieldEnum[];
};
export type MenuCategoryCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MenuCategorySelect<ExtArgs> | null;
    omit?: Prisma.MenuCategoryOmit<ExtArgs> | null;
    include?: Prisma.MenuCategoryInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MenuCategoryCreateInput, Prisma.MenuCategoryUncheckedCreateInput>;
};
export type MenuCategoryCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.MenuCategoryCreateManyInput | Prisma.MenuCategoryCreateManyInput[];
    skipDuplicates?: boolean;
};
export type MenuCategoryCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MenuCategorySelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MenuCategoryOmit<ExtArgs> | null;
    data: Prisma.MenuCategoryCreateManyInput | Prisma.MenuCategoryCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.MenuCategoryIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type MenuCategoryUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MenuCategorySelect<ExtArgs> | null;
    omit?: Prisma.MenuCategoryOmit<ExtArgs> | null;
    include?: Prisma.MenuCategoryInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MenuCategoryUpdateInput, Prisma.MenuCategoryUncheckedUpdateInput>;
    where: Prisma.MenuCategoryWhereUniqueInput;
};
export type MenuCategoryUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.MenuCategoryUpdateManyMutationInput, Prisma.MenuCategoryUncheckedUpdateManyInput>;
    where?: Prisma.MenuCategoryWhereInput;
    limit?: number;
};
export type MenuCategoryUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MenuCategorySelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MenuCategoryOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MenuCategoryUpdateManyMutationInput, Prisma.MenuCategoryUncheckedUpdateManyInput>;
    where?: Prisma.MenuCategoryWhereInput;
    limit?: number;
    include?: Prisma.MenuCategoryIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type MenuCategoryUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MenuCategorySelect<ExtArgs> | null;
    omit?: Prisma.MenuCategoryOmit<ExtArgs> | null;
    include?: Prisma.MenuCategoryInclude<ExtArgs> | null;
    where: Prisma.MenuCategoryWhereUniqueInput;
    create: Prisma.XOR<Prisma.MenuCategoryCreateInput, Prisma.MenuCategoryUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.MenuCategoryUpdateInput, Prisma.MenuCategoryUncheckedUpdateInput>;
};
export type MenuCategoryDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MenuCategorySelect<ExtArgs> | null;
    omit?: Prisma.MenuCategoryOmit<ExtArgs> | null;
    include?: Prisma.MenuCategoryInclude<ExtArgs> | null;
    where: Prisma.MenuCategoryWhereUniqueInput;
};
export type MenuCategoryDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MenuCategoryWhereInput;
    limit?: number;
};
export type MenuCategory$menuItemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type MenuCategoryDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MenuCategorySelect<ExtArgs> | null;
    omit?: Prisma.MenuCategoryOmit<ExtArgs> | null;
    include?: Prisma.MenuCategoryInclude<ExtArgs> | null;
};
