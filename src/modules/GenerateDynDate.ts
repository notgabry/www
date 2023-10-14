const Generate = (date: Date) => {
    const g = new Date(Date.now() - date.getTime())
    return Math.abs(g.getUTCFullYear() - 1970)
}

export default Generate
