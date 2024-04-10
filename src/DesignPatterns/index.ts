//单例模式
export class SingletOn {
    private static instance: SingletOn
    private constructor(public name:string) { }
    public static getInstance() {
        if (!this.instance) {
            this.instance = new SingletOn('ztx')
        }
        return this.instance
    }
}