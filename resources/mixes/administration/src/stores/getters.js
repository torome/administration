/**
 * This file is part of Notadd.
 *
 * @author TwilRoad <269044570@qq.com>
 * @copyright (c) 2017, iBenchu.org
 * @datetime 2017-01-17 14:16
 */

export const message = state => state.message

export const progress = state => state.progress

export const setting = state => state.setting

export const token = state => state.token

export const accessToken = state => state.token.access_token

export const tokenExpiresIn = state => state.token.expires_in

export const refreshToken = state => state.token.refresh_token
