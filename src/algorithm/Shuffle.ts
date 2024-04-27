/**
 * @description 洗牌算法
 * @param arr 待洗牌数组
 * @returns 洗牌后的数组
 */
export function shuffle(arr:Array<any>):Array<any> {
    let i = arr.length;
    while(i){
        let j = Math.floor(Math.random() * i);
        i--;
        [arr[i],arr[j]] = [arr[j],arr[i]]
    }
    return arr;
}