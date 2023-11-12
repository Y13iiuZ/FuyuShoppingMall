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
