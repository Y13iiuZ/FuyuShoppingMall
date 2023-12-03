export type Chainable<T = {}> = {
  option<K extends string, V>(
    key: K,
    value: V
  ): Chainable<{ [Key in keyof T | K]: Key extends keyof T ? T[Key] : V }>;
  get(): T;
};

//通用的部分只读属性
export type PartialReadonly<T, K extends keyof T = keyof T> = {
  readonly [P in K]: T[P];
} & { [P in Exclude<keyof T, K>]: T[P] };

//递归嵌套属性--obj
export type RecursivePartial<T> = {
  [P in keyof T]?: T[P] extends object ? RecursivePartial<T[P]> : T[P];
};

//深度递归键
export type DeepKeyOf<T> = T extends Record<string, any>
  ? {
      [P in keyof T]: P extends string
        ? P | `${P & string}.${DeepKeyOf<T[P]>}`
        : never;
    }[keyof T]
  : never;

//数字累加
export const NumSum = (...args: number[]) => args.reduce((a, b) => a + b, 0);

//类型编程实现数字累加N:number,T:type,R:result,I:index
type NumCnt<
  N extends number,
  T = any,
  R extends any[] = []
> = R["length"] extends N ? R : NumCnt<N, T, [...R, T]>;
type NumAdd<A extends number, B extends number> = [
  ...NumCnt<A>,
  ...NumCnt<B>
]["length"];
export type NumSumTwo<
  N extends number,
  I extends any[] = [],
  R extends any[] = []
> = I["length"] extends N
  ? NumAdd<R["length"], N>
  : NumSumTwo<N, [...I, 0], [...R, ...I]>;

//ts的斐波那契数列P:pre,C:current,I:index
export type fibonacci<
  T extends number,
  P extends any[] = [],
  C extends any[] = [0],
  I extends any[] = [0]
> = T extends 0
  ? 0
  : I["length"] extends T
  ? C["length"]
  : fibonacci<T, C, [...P, ...C], [...I, 0]>;

//二进制转十进制
export const binToDec = (bin: string) => parseInt(bin, 2);

export type FromBinary<
  B extends (0 | 1)[],
  I extends any[] = [],
  V extends any[] = [0],
  R extends any[] = []
> = I["length"] extends B["length"]
  ? R["length"]
  : FromBinary<
      B,
      [...I, 0],
      [...V, ...V],
      B[I["length"]] extends 0 ? R : [...R, ...V]
    >;

//联合类型转化为元组
export type Permutation<T, K = T> = [T] extends [never]
  ? []
  : K extends K
  ? [K, ...Permutation<Exclude<T, K>>]
  : never;

// 元组类型在一定条件下，是可以赋值给数组类型
//元组转化为联合
export type TupleToUnion<T> = T extends Array<infer P> ? P : never;
type TTuple = [string, number];
type Res = TTuple[number]; //[number] 表示使用数字类型作为索引，即获取元组中的第几个元素的类型
type ToUnion = TupleToUnion<TTuple>; // string | number

type T10 = ReturnType<() => string>;

//封装最近在力扣刷到的一道题GOGOGO
interface Module {
  count: number;
  message: string;
  asyncMethod<T, U>(input: Promise<T>): Promise<Action<U>>;
  syncMethod<T, U>(action: Action<T>): Action<U>;
}
interface Action<T> {
  payload?: T;
  type: string;
}
//经过 Connect 函数之后，返回值类型为
type Result = {
  asyncMethod<T, U>(input: T): Action<U>;
  syncMethod<T, U>(action: T): Action<U>;
};
type FuncName<T> = {
  [P in keyof T]: T[P] extends Function ? P : never;
}[keyof T];

type ConnectOrigin = (module: Module) => { [T in FuncName<Module>]: Module[T] };
/*
 * type Connect = (module: Module) => {
 *   asyncMethod: <T, U>(input: Promise<T>) => Promise<Action<U>>;
 *   syncMethod: <T, U>(action: Action<T>) => Action<U>;
 * }
 */

/**
 * @description:开始编写
 * @param: infer、extends
 */
type ExtractConnect<P> = {
  [k in FuncName<P>]: P[k] extends (input: Promise<infer T>) => Promise<infer U>
    ? (input: T) => U
    : P[k] extends (action: Action<infer T>) => Action<infer U>
    ? (action: T) => Action<U>
    : never;
};

type Connect = (module: Module) => ExtractConnect<Module>;