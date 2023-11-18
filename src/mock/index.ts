import * as Mock from 'mockjs';
const data = Mock.mock({
  'list|30': [{  //30个
    'id|+1': 1,
    name: '@name',
    price: '@float(1, 100, 0, 2)',
    category: '@pick(["MobileDevices", "Clothing", "Fruits", "HouseholdAppliances"])',
    "stars|1-5": "★",
    "likeNumber|1-999": 100,  //100:number只是用来确定类型
    "dislikeNumber|1-50": 100,  //100:number只是用来确定类型
  }],
  'randomList|20-50': [{  //20<=X<=50
    'id|+1': 1,
    name: '@name',
    price: '@float(1, 100, 0, 2)',
    category: '@pick(["MobileDevices", "Clothing", "Fruits", "HouseholdAppliances"])',
    "stars|1-5": "★"
  }],
});

export default data