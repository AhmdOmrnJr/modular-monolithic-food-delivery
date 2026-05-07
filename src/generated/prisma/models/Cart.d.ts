import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type CartModel = runtime.Types.Result.DefaultSelection<Prisma.$CartPayload>;
export type AggregateCart = {
    _count: CartCountAggregateOutputType | null;
    _min: CartMinAggregateOutputType | null;
    _max: CartMaxAggregateOutputType | null;
};
export type CartMinAggregateOutputType = {
    cartId: string | null;
    customerId: string | null;
    isLocked: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type CartMaxAggregateOutputType = {
    cartId: string | null;
    customerId: string | null;
    isLocked: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type CartCountAggregateOutputType = {
    cartId: number;
    customerId: number;
    isLocked: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type CartMinAggregateInputType = {
    cartId?: true;
    customerId?: true;
    isLocked?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type CartMaxAggregateInputType = {
    cartId?: true;
    customerId?: true;
    isLocked?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type CartCountAggregateInputType = {
    cartId?: true;
    customerId?: true;
    isLocked?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type CartAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CartWhereInput;
    orderBy?: Prisma.CartOrderByWithRelationInput | Prisma.CartOrderByWithRelationInput[];
    cursor?: Prisma.CartWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CartCountAggregateInputType;
    _min?: CartMinAggregateInputType;
    _max?: CartMaxAggregateInputType;
};
export type GetCartAggregateType<T extends CartAggregateArgs> = {
    [P in keyof T & keyof AggregateCart]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCart[P]> : Prisma.GetScalarType<T[P], AggregateCart[P]>;
};
export type CartGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CartWhereInput;
    orderBy?: Prisma.CartOrderByWithAggregationInput | Prisma.CartOrderByWithAggregationInput[];
    by: Prisma.CartScalarFieldEnum[] | Prisma.CartScalarFieldEnum;
    having?: Prisma.CartScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CartCountAggregateInputType | true;
    _min?: CartMinAggregateInputType;
    _max?: CartMaxAggregateInputType;
};
export type CartGroupByOutputType = {
    cartId: string;
    customerId: string;
    isLocked: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: CartCountAggregateOutputType | null;
    _min: CartMinAggregateOutputType | null;
    _max: CartMaxAggregateOutputType | null;
};
export type GetCartGroupByPayload<T extends CartGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CartGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CartGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CartGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CartGroupByOutputType[P]>;
}>>;
export type CartWhereInput = {
    AND?: Prisma.CartWhereInput | Prisma.CartWhereInput[];
    OR?: Prisma.CartWhereInput[];
    NOT?: Prisma.CartWhereInput | Prisma.CartWhereInput[];
    cartId?: Prisma.StringFilter<"Cart"> | string;
    customerId?: Prisma.StringFilter<"Cart"> | string;
    isLocked?: Prisma.BoolFilter<"Cart"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Cart"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Cart"> | Date | string;
    customer?: Prisma.XOR<Prisma.CustomerScalarRelationFilter, Prisma.CustomerWhereInput>;
    cartItems?: Prisma.CartItemListRelationFilter;
};
export type CartOrderByWithRelationInput = {
    cartId?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    isLocked?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    customer?: Prisma.CustomerOrderByWithRelationInput;
    cartItems?: Prisma.CartItemOrderByRelationAggregateInput;
};
export type CartWhereUniqueInput = Prisma.AtLeast<{
    cartId?: string;
    customerId?: string;
    AND?: Prisma.CartWhereInput | Prisma.CartWhereInput[];
    OR?: Prisma.CartWhereInput[];
    NOT?: Prisma.CartWhereInput | Prisma.CartWhereInput[];
    isLocked?: Prisma.BoolFilter<"Cart"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Cart"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Cart"> | Date | string;
    customer?: Prisma.XOR<Prisma.CustomerScalarRelationFilter, Prisma.CustomerWhereInput>;
    cartItems?: Prisma.CartItemListRelationFilter;
}, "cartId" | "customerId">;
export type CartOrderByWithAggregationInput = {
    cartId?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    isLocked?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.CartCountOrderByAggregateInput;
    _max?: Prisma.CartMaxOrderByAggregateInput;
    _min?: Prisma.CartMinOrderByAggregateInput;
};
export type CartScalarWhereWithAggregatesInput = {
    AND?: Prisma.CartScalarWhereWithAggregatesInput | Prisma.CartScalarWhereWithAggregatesInput[];
    OR?: Prisma.CartScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CartScalarWhereWithAggregatesInput | Prisma.CartScalarWhereWithAggregatesInput[];
    cartId?: Prisma.StringWithAggregatesFilter<"Cart"> | string;
    customerId?: Prisma.StringWithAggregatesFilter<"Cart"> | string;
    isLocked?: Prisma.BoolWithAggregatesFilter<"Cart"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Cart"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Cart"> | Date | string;
};
export type CartCreateInput = {
    cartId?: string;
    isLocked?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    customer: Prisma.CustomerCreateNestedOneWithoutCartInput;
    cartItems?: Prisma.CartItemCreateNestedManyWithoutCartInput;
};
export type CartUncheckedCreateInput = {
    cartId?: string;
    customerId: string;
    isLocked?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    cartItems?: Prisma.CartItemUncheckedCreateNestedManyWithoutCartInput;
};
export type CartUpdateInput = {
    cartId?: Prisma.StringFieldUpdateOperationsInput | string;
    isLocked?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: Prisma.CustomerUpdateOneRequiredWithoutCartNestedInput;
    cartItems?: Prisma.CartItemUpdateManyWithoutCartNestedInput;
};
export type CartUncheckedUpdateInput = {
    cartId?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    isLocked?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cartItems?: Prisma.CartItemUncheckedUpdateManyWithoutCartNestedInput;
};
export type CartCreateManyInput = {
    cartId?: string;
    customerId: string;
    isLocked?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CartUpdateManyMutationInput = {
    cartId?: Prisma.StringFieldUpdateOperationsInput | string;
    isLocked?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CartUncheckedUpdateManyInput = {
    cartId?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    isLocked?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CartNullableScalarRelationFilter = {
    is?: Prisma.CartWhereInput | null;
    isNot?: Prisma.CartWhereInput | null;
};
export type CartCountOrderByAggregateInput = {
    cartId?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    isLocked?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CartMaxOrderByAggregateInput = {
    cartId?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    isLocked?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CartMinOrderByAggregateInput = {
    cartId?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    isLocked?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CartScalarRelationFilter = {
    is?: Prisma.CartWhereInput;
    isNot?: Prisma.CartWhereInput;
};
export type CartCreateNestedOneWithoutCustomerInput = {
    create?: Prisma.XOR<Prisma.CartCreateWithoutCustomerInput, Prisma.CartUncheckedCreateWithoutCustomerInput>;
    connectOrCreate?: Prisma.CartCreateOrConnectWithoutCustomerInput;
    connect?: Prisma.CartWhereUniqueInput;
};
export type CartUncheckedCreateNestedOneWithoutCustomerInput = {
    create?: Prisma.XOR<Prisma.CartCreateWithoutCustomerInput, Prisma.CartUncheckedCreateWithoutCustomerInput>;
    connectOrCreate?: Prisma.CartCreateOrConnectWithoutCustomerInput;
    connect?: Prisma.CartWhereUniqueInput;
};
export type CartUpdateOneWithoutCustomerNestedInput = {
    create?: Prisma.XOR<Prisma.CartCreateWithoutCustomerInput, Prisma.CartUncheckedCreateWithoutCustomerInput>;
    connectOrCreate?: Prisma.CartCreateOrConnectWithoutCustomerInput;
    upsert?: Prisma.CartUpsertWithoutCustomerInput;
    disconnect?: Prisma.CartWhereInput | boolean;
    delete?: Prisma.CartWhereInput | boolean;
    connect?: Prisma.CartWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CartUpdateToOneWithWhereWithoutCustomerInput, Prisma.CartUpdateWithoutCustomerInput>, Prisma.CartUncheckedUpdateWithoutCustomerInput>;
};
export type CartUncheckedUpdateOneWithoutCustomerNestedInput = {
    create?: Prisma.XOR<Prisma.CartCreateWithoutCustomerInput, Prisma.CartUncheckedCreateWithoutCustomerInput>;
    connectOrCreate?: Prisma.CartCreateOrConnectWithoutCustomerInput;
    upsert?: Prisma.CartUpsertWithoutCustomerInput;
    disconnect?: Prisma.CartWhereInput | boolean;
    delete?: Prisma.CartWhereInput | boolean;
    connect?: Prisma.CartWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CartUpdateToOneWithWhereWithoutCustomerInput, Prisma.CartUpdateWithoutCustomerInput>, Prisma.CartUncheckedUpdateWithoutCustomerInput>;
};
export type CartCreateNestedOneWithoutCartItemsInput = {
    create?: Prisma.XOR<Prisma.CartCreateWithoutCartItemsInput, Prisma.CartUncheckedCreateWithoutCartItemsInput>;
    connectOrCreate?: Prisma.CartCreateOrConnectWithoutCartItemsInput;
    connect?: Prisma.CartWhereUniqueInput;
};
export type CartUpdateOneRequiredWithoutCartItemsNestedInput = {
    create?: Prisma.XOR<Prisma.CartCreateWithoutCartItemsInput, Prisma.CartUncheckedCreateWithoutCartItemsInput>;
    connectOrCreate?: Prisma.CartCreateOrConnectWithoutCartItemsInput;
    upsert?: Prisma.CartUpsertWithoutCartItemsInput;
    connect?: Prisma.CartWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CartUpdateToOneWithWhereWithoutCartItemsInput, Prisma.CartUpdateWithoutCartItemsInput>, Prisma.CartUncheckedUpdateWithoutCartItemsInput>;
};
export type CartCreateWithoutCustomerInput = {
    cartId?: string;
    isLocked?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    cartItems?: Prisma.CartItemCreateNestedManyWithoutCartInput;
};
export type CartUncheckedCreateWithoutCustomerInput = {
    cartId?: string;
    isLocked?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    cartItems?: Prisma.CartItemUncheckedCreateNestedManyWithoutCartInput;
};
export type CartCreateOrConnectWithoutCustomerInput = {
    where: Prisma.CartWhereUniqueInput;
    create: Prisma.XOR<Prisma.CartCreateWithoutCustomerInput, Prisma.CartUncheckedCreateWithoutCustomerInput>;
};
export type CartUpsertWithoutCustomerInput = {
    update: Prisma.XOR<Prisma.CartUpdateWithoutCustomerInput, Prisma.CartUncheckedUpdateWithoutCustomerInput>;
    create: Prisma.XOR<Prisma.CartCreateWithoutCustomerInput, Prisma.CartUncheckedCreateWithoutCustomerInput>;
    where?: Prisma.CartWhereInput;
};
export type CartUpdateToOneWithWhereWithoutCustomerInput = {
    where?: Prisma.CartWhereInput;
    data: Prisma.XOR<Prisma.CartUpdateWithoutCustomerInput, Prisma.CartUncheckedUpdateWithoutCustomerInput>;
};
export type CartUpdateWithoutCustomerInput = {
    cartId?: Prisma.StringFieldUpdateOperationsInput | string;
    isLocked?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cartItems?: Prisma.CartItemUpdateManyWithoutCartNestedInput;
};
export type CartUncheckedUpdateWithoutCustomerInput = {
    cartId?: Prisma.StringFieldUpdateOperationsInput | string;
    isLocked?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cartItems?: Prisma.CartItemUncheckedUpdateManyWithoutCartNestedInput;
};
export type CartCreateWithoutCartItemsInput = {
    cartId?: string;
    isLocked?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    customer: Prisma.CustomerCreateNestedOneWithoutCartInput;
};
export type CartUncheckedCreateWithoutCartItemsInput = {
    cartId?: string;
    customerId: string;
    isLocked?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CartCreateOrConnectWithoutCartItemsInput = {
    where: Prisma.CartWhereUniqueInput;
    create: Prisma.XOR<Prisma.CartCreateWithoutCartItemsInput, Prisma.CartUncheckedCreateWithoutCartItemsInput>;
};
export type CartUpsertWithoutCartItemsInput = {
    update: Prisma.XOR<Prisma.CartUpdateWithoutCartItemsInput, Prisma.CartUncheckedUpdateWithoutCartItemsInput>;
    create: Prisma.XOR<Prisma.CartCreateWithoutCartItemsInput, Prisma.CartUncheckedCreateWithoutCartItemsInput>;
    where?: Prisma.CartWhereInput;
};
export type CartUpdateToOneWithWhereWithoutCartItemsInput = {
    where?: Prisma.CartWhereInput;
    data: Prisma.XOR<Prisma.CartUpdateWithoutCartItemsInput, Prisma.CartUncheckedUpdateWithoutCartItemsInput>;
};
export type CartUpdateWithoutCartItemsInput = {
    cartId?: Prisma.StringFieldUpdateOperationsInput | string;
    isLocked?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: Prisma.CustomerUpdateOneRequiredWithoutCartNestedInput;
};
export type CartUncheckedUpdateWithoutCartItemsInput = {
    cartId?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    isLocked?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CartCountOutputType = {
    cartItems: number;
};
export type CartCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    cartItems?: boolean | CartCountOutputTypeCountCartItemsArgs;
};
export type CartCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CartCountOutputTypeSelect<ExtArgs> | null;
};
export type CartCountOutputTypeCountCartItemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CartItemWhereInput;
};
export type CartSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    cartId?: boolean;
    customerId?: boolean;
    isLocked?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    cartItems?: boolean | Prisma.Cart$cartItemsArgs<ExtArgs>;
    _count?: boolean | Prisma.CartCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["cart"]>;
export type CartSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    cartId?: boolean;
    customerId?: boolean;
    isLocked?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["cart"]>;
export type CartSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    cartId?: boolean;
    customerId?: boolean;
    isLocked?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["cart"]>;
export type CartSelectScalar = {
    cartId?: boolean;
    customerId?: boolean;
    isLocked?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type CartOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"cartId" | "customerId" | "isLocked" | "createdAt" | "updatedAt", ExtArgs["result"]["cart"]>;
export type CartInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    cartItems?: boolean | Prisma.Cart$cartItemsArgs<ExtArgs>;
    _count?: boolean | Prisma.CartCountOutputTypeDefaultArgs<ExtArgs>;
};
export type CartIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
};
export type CartIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
};
export type $CartPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Cart";
    objects: {
        customer: Prisma.$CustomerPayload<ExtArgs>;
        cartItems: Prisma.$CartItemPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        cartId: string;
        customerId: string;
        isLocked: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["cart"]>;
    composites: {};
};
export type CartGetPayload<S extends boolean | null | undefined | CartDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CartPayload, S>;
export type CartCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CartFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CartCountAggregateInputType | true;
};
export interface CartDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Cart'];
        meta: {
            name: 'Cart';
        };
    };
    findUnique<T extends CartFindUniqueArgs>(args: Prisma.SelectSubset<T, CartFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CartClient<runtime.Types.Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends CartFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CartFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CartClient<runtime.Types.Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends CartFindFirstArgs>(args?: Prisma.SelectSubset<T, CartFindFirstArgs<ExtArgs>>): Prisma.Prisma__CartClient<runtime.Types.Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends CartFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CartFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CartClient<runtime.Types.Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends CartFindManyArgs>(args?: Prisma.SelectSubset<T, CartFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends CartCreateArgs>(args: Prisma.SelectSubset<T, CartCreateArgs<ExtArgs>>): Prisma.Prisma__CartClient<runtime.Types.Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends CartCreateManyArgs>(args?: Prisma.SelectSubset<T, CartCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends CartCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CartCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends CartDeleteArgs>(args: Prisma.SelectSubset<T, CartDeleteArgs<ExtArgs>>): Prisma.Prisma__CartClient<runtime.Types.Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends CartUpdateArgs>(args: Prisma.SelectSubset<T, CartUpdateArgs<ExtArgs>>): Prisma.Prisma__CartClient<runtime.Types.Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends CartDeleteManyArgs>(args?: Prisma.SelectSubset<T, CartDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends CartUpdateManyArgs>(args: Prisma.SelectSubset<T, CartUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends CartUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CartUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends CartUpsertArgs>(args: Prisma.SelectSubset<T, CartUpsertArgs<ExtArgs>>): Prisma.Prisma__CartClient<runtime.Types.Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends CartCountArgs>(args?: Prisma.Subset<T, CartCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CartCountAggregateOutputType> : number>;
    aggregate<T extends CartAggregateArgs>(args: Prisma.Subset<T, CartAggregateArgs>): Prisma.PrismaPromise<GetCartAggregateType<T>>;
    groupBy<T extends CartGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CartGroupByArgs['orderBy'];
    } : {
        orderBy?: CartGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CartGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCartGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: CartFieldRefs;
}
export interface Prisma__CartClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    customer<T extends Prisma.CustomerDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CustomerDefaultArgs<ExtArgs>>): Prisma.Prisma__CustomerClient<runtime.Types.Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    cartItems<T extends Prisma.Cart$cartItemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Cart$cartItemsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface CartFieldRefs {
    readonly cartId: Prisma.FieldRef<"Cart", 'String'>;
    readonly customerId: Prisma.FieldRef<"Cart", 'String'>;
    readonly isLocked: Prisma.FieldRef<"Cart", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"Cart", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Cart", 'DateTime'>;
}
export type CartFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CartSelect<ExtArgs> | null;
    omit?: Prisma.CartOmit<ExtArgs> | null;
    include?: Prisma.CartInclude<ExtArgs> | null;
    where: Prisma.CartWhereUniqueInput;
};
export type CartFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CartSelect<ExtArgs> | null;
    omit?: Prisma.CartOmit<ExtArgs> | null;
    include?: Prisma.CartInclude<ExtArgs> | null;
    where: Prisma.CartWhereUniqueInput;
};
export type CartFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CartSelect<ExtArgs> | null;
    omit?: Prisma.CartOmit<ExtArgs> | null;
    include?: Prisma.CartInclude<ExtArgs> | null;
    where?: Prisma.CartWhereInput;
    orderBy?: Prisma.CartOrderByWithRelationInput | Prisma.CartOrderByWithRelationInput[];
    cursor?: Prisma.CartWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CartScalarFieldEnum | Prisma.CartScalarFieldEnum[];
};
export type CartFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CartSelect<ExtArgs> | null;
    omit?: Prisma.CartOmit<ExtArgs> | null;
    include?: Prisma.CartInclude<ExtArgs> | null;
    where?: Prisma.CartWhereInput;
    orderBy?: Prisma.CartOrderByWithRelationInput | Prisma.CartOrderByWithRelationInput[];
    cursor?: Prisma.CartWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CartScalarFieldEnum | Prisma.CartScalarFieldEnum[];
};
export type CartFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CartSelect<ExtArgs> | null;
    omit?: Prisma.CartOmit<ExtArgs> | null;
    include?: Prisma.CartInclude<ExtArgs> | null;
    where?: Prisma.CartWhereInput;
    orderBy?: Prisma.CartOrderByWithRelationInput | Prisma.CartOrderByWithRelationInput[];
    cursor?: Prisma.CartWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CartScalarFieldEnum | Prisma.CartScalarFieldEnum[];
};
export type CartCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CartSelect<ExtArgs> | null;
    omit?: Prisma.CartOmit<ExtArgs> | null;
    include?: Prisma.CartInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CartCreateInput, Prisma.CartUncheckedCreateInput>;
};
export type CartCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.CartCreateManyInput | Prisma.CartCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CartCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CartSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CartOmit<ExtArgs> | null;
    data: Prisma.CartCreateManyInput | Prisma.CartCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.CartIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type CartUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CartSelect<ExtArgs> | null;
    omit?: Prisma.CartOmit<ExtArgs> | null;
    include?: Prisma.CartInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CartUpdateInput, Prisma.CartUncheckedUpdateInput>;
    where: Prisma.CartWhereUniqueInput;
};
export type CartUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.CartUpdateManyMutationInput, Prisma.CartUncheckedUpdateManyInput>;
    where?: Prisma.CartWhereInput;
    limit?: number;
};
export type CartUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CartSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CartOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CartUpdateManyMutationInput, Prisma.CartUncheckedUpdateManyInput>;
    where?: Prisma.CartWhereInput;
    limit?: number;
    include?: Prisma.CartIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type CartUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CartSelect<ExtArgs> | null;
    omit?: Prisma.CartOmit<ExtArgs> | null;
    include?: Prisma.CartInclude<ExtArgs> | null;
    where: Prisma.CartWhereUniqueInput;
    create: Prisma.XOR<Prisma.CartCreateInput, Prisma.CartUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.CartUpdateInput, Prisma.CartUncheckedUpdateInput>;
};
export type CartDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CartSelect<ExtArgs> | null;
    omit?: Prisma.CartOmit<ExtArgs> | null;
    include?: Prisma.CartInclude<ExtArgs> | null;
    where: Prisma.CartWhereUniqueInput;
};
export type CartDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CartWhereInput;
    limit?: number;
};
export type Cart$cartItemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type CartDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CartSelect<ExtArgs> | null;
    omit?: Prisma.CartOmit<ExtArgs> | null;
    include?: Prisma.CartInclude<ExtArgs> | null;
};
