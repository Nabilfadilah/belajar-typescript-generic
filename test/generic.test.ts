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
})