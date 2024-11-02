describe('Generic', () => {

    class GenericData<T> {
        value: T;

        constructor(value: T) {
            this.value = value;
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
})