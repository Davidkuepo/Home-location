/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AccountDTO } from '../models/AccountDTO';
import type { AccountRegistrationDTO } from '../models/AccountRegistrationDTO';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AccountService {
    /**
     * Register a new Account
     * Register a new Account
     * @returns string successful operation
     * @throws ApiError
     */
    public static registerAccount({
        requestBody,
    }: {
        /**
         * data needed to create the new account
         */
        requestBody: AccountRegistrationDTO,
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/account',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                409: `MARKET_PLACE-3001`,
            },
        });
    }
    /**
     * Get Account by username
     * fetch account by the username of the owner
     * @returns AccountDTO successful operation
     * @throws ApiError
     */
    public static getAccountByUsername({
        username,
    }: {
        /**
         * the
         */
        username: any,
    }): CancelablePromise<AccountDTO> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/account/{username}',
            path: {
                'username': username,
            },
        });
    }
}
