import React from 'react';

export type donationModalType = {
    isModalOpen: boolean,
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>,
    locations:{
        id: string,
        name:string
    }[],

    themes:{
        id: string,
        name:string
    }[],

    donationItems:any,
    dispatch: React.Dispatch<React.SetStateAction<any>>,
}


export type StateType = {
    donationItems:string[]
    locations:string[]
    statuses:string[]
    themes:string[]
}

export type CreateDonationPayloadType = {
    name:string
    location:string
    theme:string
    price:{
        currencyCode:string
        amount:number
    }
}

export type statusesType = {
    text: string,
    value: string
}[]


export const GET_ALL_DONATION_ITEMS = 'GET_ALL_DONATION_ITEMS'
export const GET_ALL_LOCATIONS = 'GET_ALL_LOCATIONS'
export const GET_ALL_STATUSES = 'GET_ALL_STATUSES'
export const GET_ALL_THEMES = 'GET_ALL_THEMES'
export const RESET_DONATIONS = 'RESET_DONATIONS'
export const ADD_NEW_DONATION_IN_TABLE = 'ADD_NEW_DONATION_IN_TABLE'