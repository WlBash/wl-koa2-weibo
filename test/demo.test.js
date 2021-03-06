function sum(a, b) {
    return a + b
}

test('test 1', () => {
    const num = sum(10, 20)
    expect(num).toBe(30)
})