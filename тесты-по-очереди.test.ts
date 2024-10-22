// Блоки describe запускаются по очереди за счет асинхронных beforeAll в начале каждого блока

describe("First group", () => {
  beforeAll(async () => {
    // Выполнится перед началом всех тестов в этом блоке
    await new Promise<void>((resolve) =>
      setTimeout(() => {
        console.log("waiting promise 1")
        resolve()
      }, 1000)
    )
  })

  it("test in first group", () => {
    console.log("test in first group")
    expect(true).toBe(true)
  })
})

describe("Second group", () => {
  beforeAll(async () => {
    // Выполнится перед началом всех тестов во втором блоке,
    // после того как завершится "First group"
    await new Promise<void>((resolve) =>
      setTimeout(() => {
        console.log("waiting promise 2")
        resolve()
      }, 1000)
    )
  })

  it("test in second group", () => {
    console.log("test in second group")
    expect(true).toBe(true)
  })
})
