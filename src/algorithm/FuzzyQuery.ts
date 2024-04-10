/**模糊查询 */
export default class FuzzyQuery {
    /**模糊查询 */
    static fuzzyQuery(query: any, data: any): any[] {
        const result: string[] = [];
        for (let i = 0; i < data.length; i++) {
            if (data[i].indexOf(query) !== -1) {
                result.push(data[i]);
            }
        }
        return result;
    }
}