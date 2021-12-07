import { customAlphabet } from 'nanoid'

/**
 * @description 生成nanoid
 */
export const getUuid = customAlphabet('1234567890abcdef', 10)