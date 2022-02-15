export enum ContractType {
    AllowNavigation,
    SetSlide,
    SendUrl,
    ChangeBG,
    ChatMessage,
    HideLogo
}

export interface BaseMessage {
    type: ContractType;
}

export interface AllowNavigationMessage extends BaseMessage {
    allowNavigation:boolean;
}

export interface SetSlide extends BaseMessage {
    activeSlide:number;
}

export interface SendUrl extends BaseMessage {
    url:string;
}

export interface ChangeBG extends BaseMessage {
    bg:string;
}

export interface ChatMessage extends BaseMessage {
    message:string; 
}

export interface HideLogoMessage extends BaseMessage {
    hide:boolean; 
}