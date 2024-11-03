import bcrypt from 'bcrypt'

const saltRounds = 10;

export async function secureHash(password: string): Promise<string> {
    let hashedPassword = await bcrypt.hash(password, saltRounds)
    return hashedPassword
}

export async function compareSecureHash(password: string, hashedPassword: string): Promise<boolean> {
    let isMatch = await bcrypt.compare(password, hashedPassword)
    return isMatch
}
