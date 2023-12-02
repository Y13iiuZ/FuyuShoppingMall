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


//