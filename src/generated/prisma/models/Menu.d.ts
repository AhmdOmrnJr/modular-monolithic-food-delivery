import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type MenuModel = runtime.Types.Result.DefaultSelection<Prisma.$MenuPayload>;
export type AggregateMenu = {
    _count: MenuCountAggregateOutputType | null;
    _min: MenuMinAggregateOutputType | null;
    _max: MenuMaxAggregateOutputType | null;
};
export type MenuMinAggregateOutputType = {
    menuId: string | null;
    restaurantId: string | null;
    menuDesc: string | null;
    isActive: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type MenuMaxAggregateOutputType = {
    menuId: string | null;
    restaurantId: string | null;
    menuDesc: string | null;
    isActive: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type MenuCountAggregateOutputType = {
    menuId: number;
    restaurantId: number;
    menuDesc: number;
    isActive: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type MenuMinAggregateInputType = {
    menuId?: true;
    restaurantId?: true;
    menuDesc?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type MenuMaxAggregateInputType = {
    menuId?: true;
    restaurantId?: true;
    menuDesc?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type MenuCountAggregateInputType = {
    menuId?: true;
    restaurantId?: true;
    menuDesc?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type MenuAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MenuWhereInput;
    orderBy?: Prisma.MenuOrderByWithRelationInput | Prisma.MenuOrderByWithRelationInput[];
    cursor?: Prisma.MenuWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | MenuCountAggregateInputType;
    _min?: MenuMinAggregateInputType;
    _max?: MenuMaxAggregateInputType;
};
export type GetMenuAggregateType<T extends MenuAggregateArgs> = {
    [P in keyof T & keyof AggregateMenu]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMenu[P]> : Prisma.GetScalarType<T[P], AggregateMenu[P]>;
};
export type MenuGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MenuWhereInput;
    orderBy?: Prisma.MenuOrderByWithAggregationInput | Prisma.MenuOrderByWithAggregationInput[];
    by: Prisma.MenuScalarFieldEnum[] | Prisma.MenuScalarFieldEnum;
    having?: Prisma.MenuScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MenuCountAggregateInputType | true;
    _min?: MenuMinAggregateInputType;
    _max?: MenuMaxAggregateInputType;
};
export type MenuGroupByOutputType = {
    menuId: string;
    restaurantId: string;
    menuDesc: string;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: MenuCountAggregateOutputType | null;
    _min: MenuMinAggregateOutputType | null;
    _max: MenuMaxAggregateOutputType | null;
};
export type GetMenuGroupByPayload<T extends MenuGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MenuGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MenuGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MenuGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MenuGroupByOutputType[P]>;
}>>;
export type MenuWhereInput = {
    AND?: Prisma.MenuWhereInput | Prisma.MenuWhereInput[];
    OR?: Prisma.MenuWhereInput[];
    NOT?: Prisma.MenuWhereInput | Prisma.MenuWhereInput[];
    menuId?: Prisma.StringFilter<"Menu"> | string;
    restaurantId?: Prisma.StringFilter<"Menu"> | string;
    menuDesc?: Prisma.StringFilter<"Menu"> | string;
    isActive?: Prisma.BoolFilter<"Menu"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Menu"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Menu"> | Date | string;
    restaurant?: Prisma.XOR<Prisma.RestaurantScalarRelationFilter, Prisma.RestaurantWhereInput>;
    menuCategories?: Prisma.MenuCategoryListRelationFilter;
};
export type MenuOrderByWithRelationInput = {
    menuId?: Prisma.SortOrder;
    restaurantId?: Prisma.SortOrder;
    menuDesc?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    restaurant?: Prisma.RestaurantOrderByWithRelationInput;
    menuCategories?: Prisma.MenuCategoryOrderByRelationAggregateInput;
};
export type MenuWhereUniqueInput = Prisma.AtLeast<{
    menuId?: string;
    restaurantId?: string;
    AND?: Prisma.MenuWhereInput | Prisma.MenuWhereInput[];
    OR?: Prisma.MenuWhereInput[];
    NOT?: Prisma.MenuWhereInput | Prisma.MenuWhereInput[];
    menuDesc?: Prisma.StringFilter<"Menu"> | string;
    isActive?: Prisma.BoolFilter<"Menu"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Menu"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Menu"> | Date | string;
    restaurant?: Prisma.XOR<Prisma.RestaurantScalarRelationFilter, Prisma.RestaurantWhereInput>;
    menuCategories?: Prisma.MenuCategoryListRelationFilter;
}, "menuId" | "restaurantId">;
export type MenuOrderByWithAggregationInput = {
    menuId?: Prisma.SortOrder;
    restaurantId?: Prisma.SortOrder;
    menuDesc?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.MenuCountOrderByAggregateInput;
    _max?: Prisma.MenuMaxOrderByAggregateInput;
    _min?: Prisma.MenuMinOrderByAggregateInput;
};
export type MenuScalarWhereWithAggregatesInput = {
    AND?: Prisma.MenuScalarWhereWithAggregatesInput | Prisma.MenuScalarWhereWithAggregatesInput[];
    OR?: Prisma.MenuScalarWhereWithAggregatesInput[];
    NOT?: Prisma.MenuScalarWhereWithAggregatesInput | Prisma.MenuScalarWhereWithAggregatesInput[];
    menuId?: Prisma.StringWithAggregatesFilter<"Menu"> | string;
    restaurantId?: Prisma.StringWithAggregatesFilter<"Menu"> | string;
    menuDesc?: Prisma.StringWithAggregatesFilter<"Menu"> | string;
    isActive?: Prisma.BoolWithAggregatesFilter<"Menu"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Menu"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Menu"> | Date | string;
};
export type MenuCreateInput = {
    menuId?: string;
    menuDesc: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    restaurant: Prisma.RestaurantCreateNestedOneWithoutMenuInput;
    menuCategories?: Prisma.MenuCategoryCreateNestedManyWithoutMenuInput;
};
export type MenuUncheckedCreateInput = {
    menuId?: string;
    restaurantId: string;
    menuDesc: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    menuCategories?: Prisma.MenuCategoryUncheckedCreateNestedManyWithoutMenuInput;
};
export type MenuUpdateInput = {
    menuId?: Prisma.StringFieldUpdateOperationsInput | string;
    menuDesc?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    restaurant?: Prisma.RestaurantUpdateOneRequiredWithoutMenuNestedInput;
    menuCategories?: Prisma.MenuCategoryUpdateManyWithoutMenuNestedInput;
};
export type MenuUncheckedUpdateInput = {
    menuId?: Prisma.StringFieldUpdateOperationsInput | string;
    restaurantId?: Prisma.StringFieldUpdateOperationsInput | string;
    menuDesc?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    menuCategories?: Prisma.MenuCategoryUncheckedUpdateManyWithoutMenuNestedInput;
};
export type MenuCreateManyInput = {
    menuId?: string;
    restaurantId: string;
    menuDesc: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MenuUpdateManyMutationInput = {
    menuId?: Prisma.StringFieldUpdateOperationsInput | string;
    menuDesc?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MenuUncheckedUpdateManyInput = {
    menuId?: Prisma.StringFieldUpdateOperationsInput | string;
    restaurantId?: Prisma.StringFieldUpdateOperationsInput | string;
    menuDesc?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MenuNullableScalarRelationFilter = {
    is?: Prisma.MenuWhereInput | null;
    isNot?: Prisma.MenuWhereInput | null;
};
export type MenuCountOrderByAggregateInput = {
    menuId?: Prisma.SortOrder;
    restaurantId?: Prisma.SortOrder;
    menuDesc?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type MenuMaxOrderByAggregateInput = {
    menuId?: Prisma.SortOrder;
    restaurantId?: Prisma.SortOrder;
    menuDesc?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type MenuMinOrderByAggregateInput = {
    menuId?: Prisma.SortOrder;
    restaurantId?: Prisma.SortOrder;
    menuDesc?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type MenuScalarRelationFilter = {
    is?: Prisma.MenuWhereInput;
    isNot?: Prisma.MenuWhereInput;
};
export type MenuCreateNestedOneWithoutRestaurantInput = {
    create?: Prisma.XOR<Prisma.MenuCreateWithoutRestaurantInput, Prisma.MenuUncheckedCreateWithoutRestaurantInput>;
    connectOrCreate?: Prisma.MenuCreateOrConnectWithoutRestaurantInput;
    connect?: Prisma.MenuWhereUniqueInput;
};
export type MenuUncheckedCreateNestedOneWithoutRestaurantInput = {
    create?: Prisma.XOR<Prisma.MenuCreateWithoutRestaurantInput, Prisma.MenuUncheckedCreateWithoutRestaurantInput>;
    connectOrCreate?: Prisma.MenuCreateOrConnectWithoutRestaurantInput;
    connect?: Prisma.MenuWhereUniqueInput;
};
export type MenuUpdateOneWithoutRestaurantNestedInput = {
    create?: Prisma.XOR<Prisma.MenuCreateWithoutRestaurantInput, Prisma.MenuUncheckedCreateWithoutRestaurantInput>;
    connectOrCreate?: Prisma.MenuCreateOrConnectWithoutRestaurantInput;
    upsert?: Prisma.MenuUpsertWithoutRestaurantInput;
    disconnect?: Prisma.MenuWhereInput | boolean;
    delete?: Prisma.MenuWhereInput | boolean;
    connect?: Prisma.MenuWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.MenuUpdateToOneWithWhereWithoutRestaurantInput, Prisma.MenuUpdateWithoutRestaurantInput>, Prisma.MenuUncheckedUpdateWithoutRestaurantInput>;
};
export type MenuUncheckedUpdateOneWithoutRestaurantNestedInput = {
    create?: Prisma.XOR<Prisma.MenuCreateWithoutRestaurantInput, Prisma.MenuUncheckedCreateWithoutRestaurantInput>;
    connectOrCreate?: Prisma.MenuCreateOrConnectWithoutRestaurantInput;
    upsert?: Prisma.MenuUpsertWithoutRestaurantInput;
    disconnect?: Prisma.MenuWhereInput | boolean;
    delete?: Prisma.MenuWhereInput | boolean;
    connect?: Prisma.MenuWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.MenuUpdateToOneWithWhereWithoutRestaurantInput, Prisma.MenuUpdateWithoutRestaurantInput>, Prisma.MenuUncheckedUpdateWithoutRestaurantInput>;
};
export type MenuCreateNestedOneWithoutMenuCategoriesInput = {
    create?: Prisma.XOR<Prisma.MenuCreateWithoutMenuCategoriesInput, Prisma.MenuUncheckedCreateWithoutMenuCategoriesInput>;
    connectOrCreate?: Prisma.MenuCreateOrConnectWithoutMenuCategoriesInput;
    connect?: Prisma.MenuWhereUniqueInput;
};
export type MenuUpdateOneRequiredWithoutMenuCategoriesNestedInput = {
    create?: Prisma.XOR<Prisma.MenuCreateWithoutMenuCategoriesInput, Prisma.MenuUncheckedCreateWithoutMenuCategoriesInput>;
    connectOrCreate?: Prisma.MenuCreateOrConnectWithoutMenuCategoriesInput;
    upsert?: Prisma.MenuUpsertWithoutMenuCategoriesInput;
    connect?: Prisma.MenuWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.MenuUpdateToOneWithWhereWithoutMenuCategoriesInput, Prisma.MenuUpdateWithoutMenuCategoriesInput>, Prisma.MenuUncheckedUpdateWithoutMenuCategoriesInput>;
};
export type MenuCreateWithoutRestaurantInput = {
    menuId?: string;
    menuDesc: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    menuCategories?: Prisma.MenuCategoryCreateNestedManyWithoutMenuInput;
};
export type MenuUncheckedCreateWithoutRestaurantInput = {
    menuId?: string;
    menuDesc: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    menuCategories?: Prisma.MenuCategoryUncheckedCreateNestedManyWithoutMenuInput;
};
export type MenuCreateOrConnectWithoutRestaurantInput = {
    where: Prisma.MenuWhereUniqueInput;
    create: Prisma.XOR<Prisma.MenuCreateWithoutRestaurantInput, Prisma.MenuUncheckedCreateWithoutRestaurantInput>;
};
export type MenuUpsertWithoutRestaurantInput = {
    update: Prisma.XOR<Prisma.MenuUpdateWithoutRestaurantInput, Prisma.MenuUncheckedUpdateWithoutRestaurantInput>;
    create: Prisma.XOR<Prisma.MenuCreateWithoutRestaurantInput, Prisma.MenuUncheckedCreateWithoutRestaurantInput>;
    where?: Prisma.MenuWhereInput;
};
export type MenuUpdateToOneWithWhereWithoutRestaurantInput = {
    where?: Prisma.MenuWhereInput;
    data: Prisma.XOR<Prisma.MenuUpdateWithoutRestaurantInput, Prisma.MenuUncheckedUpdateWithoutRestaurantInput>;
};
export type MenuUpdateWithoutRestaurantInput = {
    menuId?: Prisma.StringFieldUpdateOperationsInput | string;
    menuDesc?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    menuCategories?: Prisma.MenuCategoryUpdateManyWithoutMenuNestedInput;
};
export type MenuUncheckedUpdateWithoutRestaurantInput = {
    menuId?: Prisma.StringFieldUpdateOperationsInput | string;
    menuDesc?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    menuCategories?: Prisma.MenuCategoryUncheckedUpdateManyWithoutMenuNestedInput;
};
export type MenuCreateWithoutMenuCategoriesInput = {
    menuId?: string;
    menuDesc: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    restaurant: Prisma.RestaurantCreateNestedOneWithoutMenuInput;
};
export type MenuUncheckedCreateWithoutMenuCategoriesInput = {
    menuId?: string;
    restaurantId: string;
    menuDesc: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MenuCreateOrConnectWithoutMenuCategoriesInput = {
    where: Prisma.MenuWhereUniqueInput;
    create: Prisma.XOR<Prisma.MenuCreateWithoutMenuCategoriesInput, Prisma.MenuUncheckedCreateWithoutMenuCategoriesInput>;
};
export type MenuUpsertWithoutMenuCategoriesInput = {
    update: Prisma.XOR<Prisma.MenuUpdateWithoutMenuCategoriesInput, Prisma.MenuUncheckedUpdateWithoutMenuCategoriesInput>;
    create: Prisma.XOR<Prisma.MenuCreateWithoutMenuCategoriesInput, Prisma.MenuUncheckedCreateWithoutMenuCategoriesInput>;
    where?: Prisma.MenuWhereInput;
};
export type MenuUpdateToOneWithWhereWithoutMenuCategoriesInput = {
    where?: Prisma.MenuWhereInput;
    data: Prisma.XOR<Prisma.MenuUpdateWithoutMenuCategoriesInput, Prisma.MenuUncheckedUpdateWithoutMenuCategoriesInput>;
};
export type MenuUpdateWithoutMenuCategoriesInput = {
    menuId?: Prisma.StringFieldUpdateOperationsInput | string;
    menuDesc?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    restaurant?: Prisma.RestaurantUpdateOneRequiredWithoutMenuNestedInput;
};
export type MenuUncheckedUpdateWithoutMenuCategoriesInput = {
    menuId?: Prisma.StringFieldUpdateOperationsInput | string;
    restaurantId?: Prisma.StringFieldUpdateOperationsInput | string;
    menuDesc?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MenuCountOutputType = {
    menuCategories: number;
};
export type MenuCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    menuCategories?: boolean | MenuCountOutputTypeCountMenuCategoriesArgs;
};
export type MenuCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MenuCountOutputTypeSelect<ExtArgs> | null;
};
export type MenuCountOutputTypeCountMenuCategoriesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MenuCategoryWhereInput;
};
export type MenuSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    menuId?: boolean;
    restaurantId?: boolean;
    menuDesc?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    restaurant?: boolean | Prisma.RestaurantDefaultArgs<ExtArgs>;
    menuCategories?: boolean | Prisma.Menu$menuCategoriesArgs<ExtArgs>;
    _count?: boolean | Prisma.MenuCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["menu"]>;
export type MenuSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    menuId?: boolean;
    restaurantId?: boolean;
    menuDesc?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    restaurant?: boolean | Prisma.RestaurantDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["menu"]>;
export type MenuSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    menuId?: boolean;
    restaurantId?: boolean;
    menuDesc?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    restaurant?: boolean | Prisma.RestaurantDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["menu"]>;
export type MenuSelectScalar = {
    menuId?: boolean;
    restaurantId?: boolean;
    menuDesc?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type MenuOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"menuId" | "restaurantId" | "menuDesc" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["menu"]>;
export type MenuInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    restaurant?: boolean | Prisma.RestaurantDefaultArgs<ExtArgs>;
    menuCategories?: boolean | Prisma.Menu$menuCategoriesArgs<ExtArgs>;
    _count?: boolean | Prisma.MenuCountOutputTypeDefaultArgs<ExtArgs>;
};
export type MenuIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    restaurant?: boolean | Prisma.RestaurantDefaultArgs<ExtArgs>;
};
export type MenuIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    restaurant?: boolean | Prisma.RestaurantDefaultArgs<ExtArgs>;
};
export type $MenuPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Menu";
    objects: {
        restaurant: Prisma.$RestaurantPayload<ExtArgs>;
        menuCategories: Prisma.$MenuCategoryPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        menuId: string;
        restaurantId: string;
        menuDesc: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["menu"]>;
    composites: {};
};
export type MenuGetPayload<S extends boolean | null | undefined | MenuDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$MenuPayload, S>;
export type MenuCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<MenuFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MenuCountAggregateInputType | true;
};
export interface MenuDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Menu'];
        meta: {
            name: 'Menu';
        };
    };
    findUnique<T extends MenuFindUniqueArgs>(args: Prisma.SelectSubset<T, MenuFindUniqueArgs<ExtArgs>>): Prisma.Prisma__MenuClient<runtime.Types.Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends MenuFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, MenuFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__MenuClient<runtime.Types.Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends MenuFindFirstArgs>(args?: Prisma.SelectSubset<T, MenuFindFirstArgs<ExtArgs>>): Prisma.Prisma__MenuClient<runtime.Types.Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends MenuFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, MenuFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__MenuClient<runtime.Types.Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends MenuFindManyArgs>(args?: Prisma.SelectSubset<T, MenuFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends MenuCreateArgs>(args: Prisma.SelectSubset<T, MenuCreateArgs<ExtArgs>>): Prisma.Prisma__MenuClient<runtime.Types.Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends MenuCreateManyArgs>(args?: Prisma.SelectSubset<T, MenuCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends MenuCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, MenuCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends MenuDeleteArgs>(args: Prisma.SelectSubset<T, MenuDeleteArgs<ExtArgs>>): Prisma.Prisma__MenuClient<runtime.Types.Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends MenuUpdateArgs>(args: Prisma.SelectSubset<T, MenuUpdateArgs<ExtArgs>>): Prisma.Prisma__MenuClient<runtime.Types.Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends MenuDeleteManyArgs>(args?: Prisma.SelectSubset<T, MenuDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends MenuUpdateManyArgs>(args: Prisma.SelectSubset<T, MenuUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends MenuUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, MenuUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends MenuUpsertArgs>(args: Prisma.SelectSubset<T, MenuUpsertArgs<ExtArgs>>): Prisma.Prisma__MenuClient<runtime.Types.Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends MenuCountArgs>(args?: Prisma.Subset<T, MenuCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MenuCountAggregateOutputType> : number>;
    aggregate<T extends MenuAggregateArgs>(args: Prisma.Subset<T, MenuAggregateArgs>): Prisma.PrismaPromise<GetMenuAggregateType<T>>;
    groupBy<T extends MenuGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: MenuGroupByArgs['orderBy'];
    } : {
        orderBy?: MenuGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, MenuGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMenuGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: MenuFieldRefs;
}
export interface Prisma__MenuClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    restaurant<T extends Prisma.RestaurantDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.RestaurantDefaultArgs<ExtArgs>>): Prisma.Prisma__RestaurantClient<runtime.Types.Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    menuCategories<T extends Prisma.Menu$menuCategoriesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Menu$menuCategoriesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MenuCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface MenuFieldRefs {
    readonly menuId: Prisma.FieldRef<"Menu", 'String'>;
    readonly restaurantId: Prisma.FieldRef<"Menu", 'String'>;
    readonly menuDesc: Prisma.FieldRef<"Menu", 'String'>;
    readonly isActive: Prisma.FieldRef<"Menu", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"Menu", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Menu", 'DateTime'>;
}
export type MenuFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MenuSelect<ExtArgs> | null;
    omit?: Prisma.MenuOmit<ExtArgs> | null;
    include?: Prisma.MenuInclude<ExtArgs> | null;
    where: Prisma.MenuWhereUniqueInput;
};
export type MenuFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MenuSelect<ExtArgs> | null;
    omit?: Prisma.MenuOmit<ExtArgs> | null;
    include?: Prisma.MenuInclude<ExtArgs> | null;
    where: Prisma.MenuWhereUniqueInput;
};
export type MenuFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MenuSelect<ExtArgs> | null;
    omit?: Prisma.MenuOmit<ExtArgs> | null;
    include?: Prisma.MenuInclude<ExtArgs> | null;
    where?: Prisma.MenuWhereInput;
    orderBy?: Prisma.MenuOrderByWithRelationInput | Prisma.MenuOrderByWithRelationInput[];
    cursor?: Prisma.MenuWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MenuScalarFieldEnum | Prisma.MenuScalarFieldEnum[];
};
export type MenuFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MenuSelect<ExtArgs> | null;
    omit?: Prisma.MenuOmit<ExtArgs> | null;
    include?: Prisma.MenuInclude<ExtArgs> | null;
    where?: Prisma.MenuWhereInput;
    orderBy?: Prisma.MenuOrderByWithRelationInput | Prisma.MenuOrderByWithRelationInput[];
    cursor?: Prisma.MenuWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MenuScalarFieldEnum | Prisma.MenuScalarFieldEnum[];
};
export type MenuFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MenuSelect<ExtArgs> | null;
    omit?: Prisma.MenuOmit<ExtArgs> | null;
    include?: Prisma.MenuInclude<ExtArgs> | null;
    where?: Prisma.MenuWhereInput;
    orderBy?: Prisma.MenuOrderByWithRelationInput | Prisma.MenuOrderByWithRelationInput[];
    cursor?: Prisma.MenuWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MenuScalarFieldEnum | Prisma.MenuScalarFieldEnum[];
};
export type MenuCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MenuSelect<ExtArgs> | null;
    omit?: Prisma.MenuOmit<ExtArgs> | null;
    include?: Prisma.MenuInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MenuCreateInput, Prisma.MenuUncheckedCreateInput>;
};
export type MenuCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.MenuCreateManyInput | Prisma.MenuCreateManyInput[];
    skipDuplicates?: boolean;
};
export type MenuCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MenuSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MenuOmit<ExtArgs> | null;
    data: Prisma.MenuCreateManyInput | Prisma.MenuCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.MenuIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type MenuUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MenuSelect<ExtArgs> | null;
    omit?: Prisma.MenuOmit<ExtArgs> | null;
    include?: Prisma.MenuInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MenuUpdateInput, Prisma.MenuUncheckedUpdateInput>;
    where: Prisma.MenuWhereUniqueInput;
};
export type MenuUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.MenuUpdateManyMutationInput, Prisma.MenuUncheckedUpdateManyInput>;
    where?: Prisma.MenuWhereInput;
    limit?: number;
};
export type MenuUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MenuSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MenuOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MenuUpdateManyMutationInput, Prisma.MenuUncheckedUpdateManyInput>;
    where?: Prisma.MenuWhereInput;
    limit?: number;
    include?: Prisma.MenuIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type MenuUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MenuSelect<ExtArgs> | null;
    omit?: Prisma.MenuOmit<ExtArgs> | null;
    include?: Prisma.MenuInclude<ExtArgs> | null;
    where: Prisma.MenuWhereUniqueInput;
    create: Prisma.XOR<Prisma.MenuCreateInput, Prisma.MenuUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.MenuUpdateInput, Prisma.MenuUncheckedUpdateInput>;
};
export type MenuDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MenuSelect<ExtArgs> | null;
    omit?: Prisma.MenuOmit<ExtArgs> | null;
    include?: Prisma.MenuInclude<ExtArgs> | null;
    where: Prisma.MenuWhereUniqueInput;
};
export type MenuDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MenuWhereInput;
    limit?: number;
};
export type Menu$menuCategoriesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type MenuDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MenuSelect<ExtArgs> | null;
    omit?: Prisma.MenuOmit<ExtArgs> | null;
    include?: Prisma.MenuInclude<ExtArgs> | null;
};
