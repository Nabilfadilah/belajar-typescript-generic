describe('Generic', () => {

    class GenericData<T> {
        value: T;

        constructor(value: T) {
            this.value = value;
        }

        // functioin didalam class?, ini jawabanya
        get(): T {
            return this.value
        }

        set(value: T) {
            this.value = value
        }
    }

    it('should support multiple data type', async () => {

        const dataNumber = new GenericData<number>(123)
        // dataNumber.value = "Eldo" // error
        // dataNumber.value = true // error
        expect(dataNumber.value).toBe(123)

        const dataString = new GenericData<string>("Eldo")
        // dataString.value = 123 // error
        // dataString.value = true
        const upper = dataString.value.toUpperCase();
        expect(upper).toBe("ELDO")
    })

    // generic funcction - video 69
    function create<T> (value: T): T {
        return value;
    }

    it('should support function generic', () => {
        const result: string = create<string>("Ello")
        expect(result).toBe("Ello")

        const result2: number = create<number>(123)
        expect(result2).toBe(123)
    })

    // multiple generic type -video 70
    class Entry<K, V> {
        constructor(public key: K, public value: V) {
            
        }
    }

    class Triple<K, V, T> {
        constructor(public first: K, public seccond: V, public third: T) {
            
        }
    }

    it('should support multiple generic type', async () => {
        const entry = new Entry<number, string>(1, "Hello")
        expect(entry.key).toBe(1)
        expect(entry.value).toBe("Hello")

        const triple = new Triple<number, string, boolean>(1, "Hello", true)
        expect(triple.first).toBe(1)
        expect(triple.seccond).toBe("Hello")
        expect(triple.third).toBe(true)
    })

    // optional generic type - video 71
    it('should support optional generic type', () => {

        // jadi typescrip bisa mendeteksi, jadi tidak perlu explisit menentukan tipe datanya apa
        const entry = new Entry(1, "Hello")
        expect(entry.key).toBe(1)
        expect(entry.value).toBe("Hello")
    })

    // class Simplegeneric<T> {
    //     private value?: T;

    //     setValue(value: T) {
    //         this.value = value
    //     }

    //     getValue(): T | undefined {
    //         return this.value
    //     }
    // }

    // Generic parameter default - video 72
    // misal diisi string, <T = string> maka akan default string 
    class Simplegeneric<T = string> {
        private value?: T;

        setValue(value: T) {
            this.value = value
        }

        getValue(): T | undefined {
            return this.value
        }
    }

    it('should create simple generic', async () => {
        // tapi kalau di sini jadi number maka akan number
        const simple = new Simplegeneric<string>()
        simple.setValue("Eldo")

        expect(simple.getValue()!.toUpperCase()).toBe("ELDO")
    })
})