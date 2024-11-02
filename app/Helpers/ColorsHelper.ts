export function checkColorIsHex(color: string): boolean {
    const hexRegex = /^#([0-9A-Fa-f]{3}){1,2}$/
    return hexRegex.test(color)
}

export function validateColor(color: string): string | null {
    return checkColorIsHex(color) ? color : null;
}