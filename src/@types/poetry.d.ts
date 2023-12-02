interface Sc {
  name: string;
  age: number;
}

interface Poetry {
  [value: string]: string;
}

type PoetryInfo = {
  info: string;
};

declare module "myType" {
  type Play = {
    name: string;
  };
}

declare module "funcType" {
  type T = {
    name: string;
    age: number;
    address: string;
  };
  type subType<K extends keyof T> = (args: Pick<T, K>) => void;
}

//下划线字符串转驼峰
type Underscore<T extends string> = T extends `${infer L}_${infer R}` ? `${L}${Underscore<Capitalize<R>>}` : T;

//字符串全部首字母大写
type Fstr<T extends string> = T extends `${infer L}${infer R}` ? `${Uppercase<L>}${R}` : T;

//字符串全部首字母小写
type Lstr<T extends string> = T extends `${infer L}${infer R}` ? `${Lowercase<L>}${R}` : T;

