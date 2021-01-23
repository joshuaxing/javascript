
interface ISubEvent {
  callbacks: Object,
  $emit: (name: string, arg: Object) => void
  $on: (name:string, fn:Function) => void
  $off: (name:string) => void
}

interface IArg {
  name: string
}

class SubEvent implements ISubEvent {
    callbacks: Object;
    constructor () {
      this.callbacks = {}
    }
    $off (name: string): void {
      this.callbacks[name] = null  
    }
    $emit<T>(name: string, arg: T): void {
        const cbs: Function[] = this.callbacks[name]
        if (cbs) {
            cbs.forEach((c:Function) => {
              c.call(this, arg)
            });
        }
    }
    $on(name:string, fn:Function): void {
        const fnList: Function[] = this.callbacks[name] || [];
        fnList.push(fn)
        this.callbacks[name] = fnList;
    }
}


const subevent = new SubEvent();

subevent.$on('event', function(arg: IArg) {
  console.log('接受消息-'+ arg.name)
})

subevent.$emit<Object>('event', {
  name: '消息1'
})

subevent.$off('event')
subevent.$emit<Object>('event', {
  name: '消息2'
})

