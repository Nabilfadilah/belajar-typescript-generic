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

    // Generic Constraint - video 73
    interface Employee {
        id: string;
        name: string;
    }

    interface Manager extends Employee {
        totalEmployee: number;
    }

    interface VP extends Manager {
        totalManager: number;
    }

    class EmployeeData<T extends Employee> {
        constructor(public employee: T) {

        }
    }

    it('should support constraint', async () => {
        const data1 = new EmployeeData<Employee>({
            id: "100",
            name: "Subhan"
        })
        const data2 = new EmployeeData<Manager>({
            id: "100",
            name: "Subhan",
            totalEmployee: 100,
        })
        const data3 = new EmployeeData<VP>({
            id: "100",
            name: "Subhan",
            totalEmployee: 100,
            totalManager: 10
        })
    })

    // Generic Collection - video 74\
    it('should support array', async () => {

        const array = new Array<string>()
        array.push("Eldo")
        array.push("Sumardi")

        expect(array[0].toUpperCase()).toBe('ELDO')
        expect(array[1].toUpperCase()).toBe('SUMARDI')
    }) 

    it('should support set', () => {
        const set = new Set<string>()
        set.add('Eldo')
        set.add('Sumardo')
        set.add('Tisno')

        expect(set.size).toBe(3)
        expect(set.has('Eldo')).toBe(true)
        expect(set.has('Sumardo')).toBe(true)
    })

    it('should support set', async () => {
        const set = new Set<string>()
        set.add("Eldo")
        set.add("Sukijem")
        set.add("Surajdi")

        expect(set.size).toBe(3)
        expect(set.has("Eldo")).toBe(true)
        expect(set.has("Surajdi")).toBe(true)
    })

    // map
    it('should support map', () => {
        const map = new Map<string, number>()
        map.set('Eldo', 1)
        map.set('Kurnia', 2)

        expect(map.get('Eldo')).toBe(1)
        expect(map.get('Kurnia')).toBe(2)
    })  

    // generic promise - video 75
    async function fetchData(value: string): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            setTimeout(() => {
                if (value === "Eldo") {
                    resolve("Hello NGABB " + value)
                } else {
                    reject('Not Found')
                }
            }, 1000)
        })
    }

    it('should support promise', async () => {
        const result = await fetchData('Eldo')
        expect(result.toUpperCase()).toBe('HELLO NGABB ELDO')

        try {
            await fetchData('Dalton')
        } catch (e) {
            expect(e).toBe('Not Found')
        }
    })
})