import { customAlphabet } from 'nanoid'

/**
 * @description 生成uuid
 */
export const getuuid = customAlphabet('1234567890abcdef', 10)